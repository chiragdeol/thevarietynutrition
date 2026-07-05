import { useRef, useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight, CheckCircle2 } from "lucide-react";

type GoogleReview = {
  id: number;
  name: string;
  avatarLetter: string;
  rating: number;
  time: string;
  text: string;
};

const REVIEWS: GoogleReview[] = [
  {
    id: 1,
    name: "Chirag Deol",
    avatarLetter: "C",
    rating: 5,
    time: "2 days ago",
    text: "Best quality dry fruits in Jind! The premium almonds and walnuts are of high AAA grade. Traditional packing and very fresh. Highly recommended."
  },
  {
    id: 2,
    name: "Pawan Pehalwan",
    avatarLetter: "P",
    rating: 5,
    time: "1 week ago",
    text: "Traditional badam ragda ingredients are superb. Cleanliness and quality is top notch. The packaging is very premium and easy to store."
  },
  {
    id: 3,
    name: "Amit Sharma",
    avatarLetter: "A",
    rating: 5,
    time: "2 weeks ago",
    text: "Great customer service and fast delivery to Delhi. The seeds and nuts are fresh, crunchy and clean. Will order regularly!"
  },
  {
    id: 4,
    name: "Ritu Yadav",
    avatarLetter: "R",
    rating: 5,
    time: "3 weeks ago",
    text: "I ordered Premium Phool Makhana and Chia Seeds. The quality is exceptional and the packaging design same as shown. Great healthy options."
  },
  {
    id: 5,
    name: "Vikram Singh",
    avatarLetter: "V",
    rating: 5,
    time: "1 month ago",
    text: "Pure Ayurvedic herbs and seeds. Found exactly what I was looking for. Highly satisfied with the prompt delivery."
  }
];

export function GoogleReviews() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canLeft, setCanLeft] = useState(false);
  const [canRight, setCanRight] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  const dragStart = useRef({ x: 0, scrollLeft: 0 });

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
    return () => {
      el.removeEventListener("scroll", update);
      ro.disconnect();
    };
  }, []);

  const scrollBy = (dir: "left" | "right") => {
    scrollRef.current?.scrollBy({ left: dir === "left" ? -320 : 320, behavior: "smooth" });
  };

  const onMouseDown = (e: React.MouseEvent) => {
    const el = scrollRef.current;
    if (!el) return;
    setIsDragging(true);
    dragStart.current = { x: e.clientX, scrollLeft: el.scrollLeft };
    el.style.cursor = "grabbing";
    el.style.scrollSnapType = "none";
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const el = scrollRef.current;
    if (!el) return;
    el.scrollLeft = dragStart.current.scrollLeft + (dragStart.current.x - e.clientX);
  };

  const onMouseUp = () => {
    setIsDragging(false);
    const el = scrollRef.current;
    if (!el) return;
    el.style.cursor = "grab";
    el.style.scrollSnapType = "x mandatory";
  };

  return (
    <section className="bg-secondary/15 py-16 border-y border-border/40 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                />
              </svg>
              <span className="text-sm font-semibold tracking-wide text-foreground uppercase">Google Reviews</span>
            </div>
            <h2 className="font-serif text-3xl text-primary md:text-4xl">What our customers say</h2>
          </div>

          <div className="flex items-center gap-4">
            <div className="bg-card border border-border px-4 py-2.5 rounded-xl flex items-center gap-3 shadow-sm">
              <span className="font-bold text-lg text-primary">4.9</span>
              <div className="flex flex-col">
                <div className="flex text-amber-500">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-current" />
                  ))}
                </div>
                <span className="text-[10px] text-muted-foreground font-medium">Based on 500+ reviews</span>
              </div>
            </div>

            <a
              href="https://g.page/r/your-google-business-profile-link/review"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-primary-foreground font-semibold text-xs px-5 py-3 rounded-full hover:bg-primary/95 transition-all shadow-md"
            >
              Write a Review
            </a>
          </div>
        </div>

        {/* Carousel Slider */}
        <div className="relative group">
          {canLeft && (
            <button
              onClick={() => scrollBy("left")}
              className="absolute left-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/90 p-2 shadow-lg ring-1 ring-border/60 hover:bg-white transition hidden md:block"
              aria-label="Scroll left"
            >
              <ChevronLeft className="h-5 w-5 text-primary" />
            </button>
          )}

          <div
            ref={scrollRef}
            onMouseDown={onMouseDown}
            onMouseMove={onMouseMove}
            onMouseUp={onMouseUp}
            onMouseLeave={onMouseUp}
            className="flex gap-6 overflow-x-auto pb-6 pt-2 cursor-grab active:cursor-grabbing scroll-smooth snap-x snap-mandatory scrollbar-hide"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {REVIEWS.map((rev) => (
              <div
                key={rev.id}
                className="snap-start snap-always shrink-0 w-[300px] sm:w-[350px] bg-card border border-border/80 rounded-2xl p-5 shadow-sm hover:shadow-md hover:border-accent/40 transition-all flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center font-bold text-accent text-sm">
                        {rev.avatarLetter}
                      </div>
                      <div>
                        <div className="font-semibold text-sm text-foreground flex items-center gap-1.5">
                          {rev.name}
                          <CheckCircle2 className="h-3.5 w-3.5 fill-emerald-500 text-white" />
                        </div>
                        <div className="text-[10px] text-muted-foreground">{rev.time}</div>
                      </div>
                    </div>

                    <div className="flex text-amber-400">
                      {Array.from({ length: rev.rating }).map((_, i) => (
                        <Star key={i} className="h-3 w-3 fill-current" />
                      ))}
                    </div>
                  </div>

                  <p className="text-xs text-muted-foreground leading-relaxed italic">
                    "{rev.text}"
                  </p>
                </div>

                <div className="border-t border-border/60 mt-4 pt-3 flex items-center justify-between">
                  <span className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold flex items-center gap-1">
                    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24">
                      <path
                        fill="#4285F4"
                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      />
                      <path
                        fill="#34A853"
                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      />
                      <path
                        fill="#FBBC05"
                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                      />
                      <path
                        fill="#EA4335"
                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                      />
                    </svg>
                    Verified Reviewer
                  </span>
                  <span className="text-[10px] text-emerald-600 font-semibold bg-emerald-50 px-2 py-0.5 rounded-full">
                    5/5 Rating
                  </span>
                </div>
              </div>
            ))}
          </div>

          {canRight && (
            <button
              onClick={() => scrollBy("right")}
              className="absolute right-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/90 p-2 shadow-lg ring-1 ring-border/60 hover:bg-white transition hidden md:block"
              aria-label="Scroll right"
            >
              <ChevronRight className="h-5 w-5 text-primary" />
            </button>
          )}
        </div>

      </div>
    </section>
  );
}
