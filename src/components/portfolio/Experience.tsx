import { Briefcase, GraduationCap } from "lucide-react";
import { FadeIn, Section } from "./Section";

const items = [
  {
    icon: Briefcase,
    role: "Founder",
    org: "WebPiece — Website Agency",
    period: "2025 — 2026",
    bullets: [
      "Founded and ran a profitable website agency for 1 year.",
      "Delivered websites and digital solutions across niches.",
      "Owned development, client comms, pricing, and operations end-to-end.",
    ],
  },
  {
    icon: GraduationCap,
    role: "Computer Science Instructor",
    org: "Coaching Institute",
    period: "2022 — Present",
    bullets: [
      "~5 years teaching programming and computer fundamentals.",
      "Mentored students from first-line-of-code to building real projects.",
      "Sharpened the ability to make complex concepts simple and useful.",
    ],
  },
];

export function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Experience"
      title={<>A path through code, classrooms &amp; clients.</>}
      description="Building, teaching, and selling — the three muscles every product person needs."
    >
      <div className="relative">
        <div
          className="absolute left-4 md:left-1/2 top-2 bottom-2 w-px"
          style={{
            background:
              "linear-gradient(180deg, transparent, oklch(1 0 0 / 0.18), oklch(0.65 0.22 270 / 0.6), oklch(1 0 0 / 0.18), transparent)",
          }}
        />
        <ul className="space-y-10">
          {items.map((it, i) => {
            const left = i % 2 === 0;
            return (
              <li key={it.role} className="relative">
                <div
                  className={`md:grid md:grid-cols-2 md:gap-12 ${left ? "" : "md:[direction:rtl]"}`}
                >
                  <FadeIn>
                    <div className="md:[direction:ltr] relative pl-12 md:pl-0 md:pr-8">
                      {/* dot */}
                      <span className="absolute left-0 md:left-auto md:right-[-7px] top-2 grid place-items-center size-3.5 rounded-full bg-background gradient-border">
                        <span className="size-1.5 rounded-full bg-[var(--gradient-accent)]" />
                      </span>
                      <div className="glass gradient-border rounded-2xl p-6 hover:bg-white/[0.04] transition-colors">
                        <div className="flex items-center gap-3">
                          <div className="grid place-items-center size-9 rounded-lg bg-white/[0.04] gradient-border">
                            <it.icon className="size-4 text-[oklch(0.78_0.14_270)]" />
                          </div>
                          <div>
                            <h3 className="font-medium tracking-tight">{it.role}</h3>
                            <p className="text-sm text-muted-foreground">{it.org}</p>
                          </div>
                          <span className="ml-auto text-xs text-muted-foreground">{it.period}</span>
                        </div>
                        <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                          {it.bullets.map((b) => (
                            <li key={b} className="flex gap-2">
                              <span className="mt-1.5 size-1 rounded-full bg-foreground/40 shrink-0" />
                              <span className="leading-relaxed">{b}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </FadeIn>
                  <div className="hidden md:block" />
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </Section>
  );
}
