import { Trophy, Building2, GraduationCap, Rocket } from "lucide-react";
import { FadeIn, Section } from "./Section";

const items = [
  { icon: Trophy, title: "National Olympiad", value: "AIR 355", body: "Top-tier rank in a competitive national olympiad." },
  { icon: Building2, title: "Profitable agency", value: "WebPiece", body: "Built and ran a website agency with real, paying clients." },
  { icon: GraduationCap, title: "Teaching", value: "~4 yrs", body: "Mentored students through programming and CS fundamentals." },
  { icon: Rocket, title: "SaaS journey", value: "shipping", body: "Building products in public — from idea to first users." },
];

export function Achievements() {
  return (
    <Section
      id="achievements"
      eyebrow="Milestones"
      title={<>Proof in receipts.</>}
      description="A handful of things that quietly shaped how I work."
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {items.map((it, i) => (
          <FadeIn key={it.title} delay={i * 0.05}>
            <div className="relative h-full glass gradient-border rounded-2xl p-6 hover:bg-white/[0.04] transition-colors">
              <it.icon className="size-5 text-[oklch(0.78_0.14_270)]" />
              <div className="mt-4 text-2xl font-semibold text-gradient">{it.value}</div>
              <div className="mt-1 text-sm text-foreground/85">{it.title}</div>
              <p className="mt-2 text-xs text-muted-foreground leading-relaxed">{it.body}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
