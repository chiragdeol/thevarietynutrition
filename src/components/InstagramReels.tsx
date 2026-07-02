import { useEffect, useRef, useState } from "react";
import { Instagram, Volume2, VolumeX, Play, ChevronLeft, ChevronRight } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { BRAND } from "@/lib/brand";

type Reel = { id: string; video_url: string; title: string; caption: string | null };

function ReelCard({ reel }: { reel: Reel }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) v.play().then(() => setPlaying(true)).catch(() => setPlaying(false));
        else { v.pause(); setPlaying(false); }
      },
      { threshold: 0.5 }
    );
    io.observe(v);
    return () => io.disconnect();
  }, []);

  return (
    <div className="group relative aspect-[9/16] w-[260px] sm:w-[300px] shrink-0 overflow-hidden rounded-3xl bg-black shadow-2xl ring-1 ring-border/40">
      <video ref={videoRef} src={reel.video_url} loop muted={muted} playsInline preload="metadata"
        className="h-full w-full object-cover"
        onClick={() => {
          const v = videoRef.current; if (!v) return;
          if (v.paused) { v.play(); setPlaying(true); }
          else { v.pause(); setPlaying(false); }
        }} />
      <button onClick={() => setMuted((m) => !m)}
        className="absolute right-3 top-3 rounded-full bg-black/60 p-2 text-white backdrop-blur hover:bg-black/80"
        aria-label={muted ? "Unmute" : "Mute"}>
        {muted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
      </button>
      {!playing && (
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/20">
          <div className="rounded-full bg-white/90 p-4 shadow-xl">
            <Play className="h-6 w-6 fill-primary text-primary" />
          </div>
        </div>
      )}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-4 pt-16 text-white">
        <div className="text-sm font-semibold">{reel.title}</div>
        {reel.caption && <p className="mt-1 line-clamp-2 text-xs text-white/80">{reel.caption}</p>}
      </div>
    </div>
  );
}

export function InstagramReels() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canLeft, setCanLeft] = useState(false);
  const [canRight, setCanRight] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  const dragStart = useRef({ x: 0, scrollLeft: 0 });

  const { data: reels } = useQuery({
    queryKey: ["reels"],
    queryFn: async () => {
      const { data } = await (supabase as any)
        .from("reels").select("id,video_url,title,caption")
        .eq("active", true).order("sort_order");
      return (data ?? []) as Reel[];
    },
  });

  const update = () => {
    const el = scrollRef.current; if (!el) return;
    setCanLeft(el.scrollLeft > 1);
    setCanRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 1);
  };

  useEffect(() => {
    const el = scrollRef.current; if (!el) return;
    update();
    el.addEventListener("scroll", update, { passive: true });
    const ro = new ResizeObserver(update); ro.observe(el);
    return () => { el.removeEventListener("scroll", update); ro.disconnect(); };
  }, [reels]);

  const scrollBy = (dir: "left" | "right") =>
    scrollRef.current?.scrollBy({ left: dir === "left" ? -280 : 280, behavior: "smooth" });

  const onMouseDown = (e: React.MouseEvent) => {
    const el = scrollRef.current; if (!el) return;
    setIsDragging(true);
    dragStart.current = { x: e.clientX, scrollLeft: el.scrollLeft };
    el.style.cursor = "grabbing"; el.style.scrollSnapType = "none";
  };
  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const el = scrollRef.current; if (!el) return;
    el.scrollLeft = dragStart.current.scrollLeft + (dragStart.current.x - e.clientX);
  };
  const onMouseUp = () => {
    setIsDragging(false);
    const el = scrollRef.current; if (!el) return;
    el.style.cursor = "grab"; el.style.scrollSnapType = "x mandatory";
  };

  if (!reels || reels.length === 0) return null;

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-secondary/30 via-background to-background py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">@{BRAND.instagram.handle}</span>
            <h2 className="mt-2 font-serif text-3xl text-primary md:text-5xl">Watch our reels</h2>
            <p className="mt-3 max-w-lg text-sm text-muted-foreground">
              Recipes, remedies and behind-the-scenes moments from our kitchen — straight from the pehalwan's table. Drag or swipe to explore.
            </p>
          </div>
          <a href={BRAND.instagram.url} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] px-6 py-3 text-sm font-semibold text-white shadow-lg hover:scale-105">
            <Instagram className="h-4 w-4" /> Follow on Instagram
          </a>
        </div>
        <div className="relative group">
          {canLeft && (
            <button onClick={() => scrollBy("left")}
              className="absolute left-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/90 p-2 shadow-lg ring-1 ring-border/60 hover:bg-white hidden md:block"
              aria-label="Scroll left">
              <ChevronLeft className="h-5 w-5 text-primary" />
            </button>
          )}
          <div ref={scrollRef} onMouseDown={onMouseDown} onMouseMove={onMouseMove} onMouseUp={onMouseUp} onMouseLeave={onMouseUp}
            className="flex gap-5 overflow-x-auto pb-4 pt-2 cursor-grab active:cursor-grabbing scroll-smooth snap-x snap-mandatory scrollbar-hide"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
            {reels.map((r) => (
              <div key={r.id} className="snap-start snap-always">
                <ReelCard reel={r} />
              </div>
            ))}
          </div>
          {canRight && (
            <button onClick={() => scrollBy("right")}
              className="absolute right-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/90 p-2 shadow-lg ring-1 ring-border/60 hover:bg-white hidden md:block"
              aria-label="Scroll right">
              <ChevronRight className="h-5 w-5 text-primary" />
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
