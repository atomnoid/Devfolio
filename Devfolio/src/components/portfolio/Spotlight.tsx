import { useEffect, useRef } from "react";

/** Subtle mouse-follow spotlight + grid backdrop for hero. */
export function Spotlight({ className = "" }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      el.style.setProperty("--mx", `${e.clientX - rect.left}px`);
      el.style.setProperty("--my", `${e.clientY - rect.top}px`);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <div
      ref={ref}
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      aria-hidden
    >
      <div className="absolute inset-0 bg-hero" />
      <div className="absolute inset-0 bg-grid opacity-60" />
      <div
        className="absolute inset-0 transition-opacity"
        style={{
          background:
            "radial-gradient(360px circle at var(--mx, 50%) var(--my, 30%), oklch(0.65 0.22 270 / 0.18), transparent 60%)",
        }}
      />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent" />
    </div>
  );
}
