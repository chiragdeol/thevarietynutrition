import { useEffect, useRef, useState } from "react";
import { Star, Volume2, VolumeX, Play, ChevronLeft, ChevronRight, BadgeCheck } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

type VideoReview = {
  id: string;
  video_url: string;
  name: string;
  city: string | null;
  role: string | null;
  caption: string | null;
  accent: string | null;
};

function ReviewCard({ review }: { review: VideoReview }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          v.play().then(() => setPlaying(true)).catch(() => setPlaying(false));
        } else {
          v.pause();
          setPlaying(false);
        }
      },
      { threshold: 0.5 }
    );
    io.observe(v);
    return () => io.disconnect();
  }, []);

  const toggle = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) { v.play(); setPlaying(true); }
    else { v.pause(); setPlaying(false); }
  };

  return (
    <figure className="group relative aspect-[9/16] w-[260px] sm:w-[300px] shrink-0 overflow-hidden rounded-3xl bg-black shadow-2xl ring-1 ring-border/40">
      <video ref={videoRef} src={review.video_url} loop muted={muted} playsInline preload="metadata"
        className="h-full w-full object-cover" onClick={toggle} />
      <button onClick={() => setMuted((m) => !m)}
        className="absolute right-3 top-3 rounded-full bg-black/60 p-2 text-white backdrop-blur hover:bg-black/80"
        aria-label={muted ? "Unmute" : "Mute"}>
        {muted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
      </button>
      <span className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-full bg-emerald-500/95 px-2 py-1 text-[10px] font-semibold text-white shadow">
        <BadgeCheck className="h-3 w-3" /> Verified
      </span>
      {!playing && (
        <button onClick={toggle} className="absolute inset-0 flex items-center justify-center bg-black/20" aria-label="Play video">
          <span className="rounded-full bg-white/90 p-4 shadow-xl">
            <Play className="h-6 w-6 fill-primary text-primary" />
          </span>
        </button>
      )}
      <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-4 pt-16 text-white">
        <div className="flex items-center gap-2">
          <div className={`grid h-9 w-9 place-items-center rounded-full bg-gradient-to-br ${review.accent ?? "from-amber-400 to-orange-500"} text-xs font-bold text-white shadow`}>
            {review.name.split(" ").map((n) => n[0]).slice(0, 2).join("")}
          </div>
          <div className="min-w-0">
            <div className="truncate text-sm font-semibold">{review.name}</div>
            <div className="truncate text-[11px] text-white/70">{review.role ?? "Customer"}{review.city ? ` · ${review.city}` : ""}</div>
          </div>
          <div className="ml-auto flex text-amber-400">
            {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-3 w-3" fill="currentColor" />)}
          </div>
        </div>
        {review.caption && <p className="mt-2 line-clamp-2 text-xs text-white/85">{review.caption}</p>}
      </figcaption>
    </figure>
  );
}

export function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canLeft, setCanLeft] = useState(false);
  const [canRight, setCanRight] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  const dragStart = useRef({ x: 0, scrollLeft: 0 });

  const { data: reviews } = useQuery({
    queryKey: ["testimonials"],
    queryFn: async () => {
      const { data } = await (supabase as any)
        .from("testimonials")
        .select("id,video_url,name,city,role,caption,accent")
        .eq("active", true)
        .order("sort_order");
      return (data ?? []) as VideoReview[];
    },
  });

  const update = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanLeft(el.scrollLeft > 1);
    setCanRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 1);
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    update();
    el.addEventListener("scroll", update, { passive: true });
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => { el.removeEventListener("scroll", update); ro.disconnect(); };
  }, [reviews]);

  const scrollBy = (dir: "left" | "right") =>
    scrollRef.current?.scrollBy({ left: dir === "left" ? -280 : 280, behavior: "smooth" });

  const onMouseDown = (e: React.MouseEvent) => {
    const el = scrollRef.current; if (!el) return;
    setIsDragging(true);
    dragStart.current = { x: e.clientX, scrollLeft: el.scrollLeft };
    el.style.cursor = "grabbing";
  };
  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const el = scrollRef.current; if (!el) return;
    el.scrollLeft = dragStart.current.scrollLeft + (dragStart.current.x - e.clientX);
  };
  const onMouseUp = () => {
    setIsDragging(false);
    if (scrollRef.current) scrollRef.current.style.cursor = "grab";
  };

  if (!reviews || reviews.length === 0) return null;

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background via-secondary/30 to-background py-20">
      <div className="pointer-events-none absolute -top-20 -left-20 h-72 w-72 rounded-full bg-accent/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 -right-20 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-4">
        <div className="mb-10 text-center">
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            <span className="h-px w-8 bg-accent" /> Video Reviews <span className="h-px w-8 bg-accent" />
          </span>
          <h2 className="mt-3 text-3xl text-primary md:text-5xl">Real customers, real stories</h2>
          <div className="mt-4 flex items-center justify-center gap-2 text-sm">
            <div className="flex text-amber-500">
              {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-5 w-5" fill="currentColor" />)}
            </div>
            <span className="font-semibold text-primary">4.9</span>
            <span className="text-muted-foreground">· 2,400+ reviews</span>
          </div>
        </div>
        <div className="relative group">
          {canLeft && (
            <button onClick={() => scrollBy("left")}
              className="absolute left-2 top-1/2 z-10 hidden -translate-y-1/2 rounded-full bg-white/90 p-2 shadow-lg ring-1 ring-border/60 hover:bg-white md:block"
              aria-label="Scroll left">
              <ChevronLeft className="h-5 w-5 text-primary" />
            </button>
          )}
          <div ref={scrollRef} onMouseDown={onMouseDown} onMouseMove={onMouseMove} onMouseUp={onMouseUp} onMouseLeave={onMouseUp}
            className="scrollbar-hide flex cursor-grab snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth pb-4 pt-2 active:cursor-grabbing"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
            {reviews.map((r) => (
              <div key={r.id} className="snap-start snap-always">
                <ReviewCard review={r} />
              </div>
            ))}
          </div>
          {canRight && (
            <button onClick={() => scrollBy("right")}
              className="absolute right-2 top-1/2 z-10 hidden -translate-y-1/2 rounded-full bg-white/90 p-2 shadow-lg ring-1 ring-border/60 hover:bg-white md:block"
              aria-label="Scroll right">
              <ChevronRight className="h-5 w-5 text-primary" />
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
