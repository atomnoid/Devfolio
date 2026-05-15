import { Award, BookOpen, Building2, Compass } from "lucide-react";
import { FadeIn, Section } from "./Section";

const points = [
  {
    icon: Compass,
    title: "Engineer + operator",
    body: "I think in systems and ship products end-to-end — from schema to landing page to first paying user.",
  },
  {
    icon: Building2,
    title: "Agency-tested",
    body: "Founded WebPiece, a profitable web agency — learning sales, scope, and shipping under deadlines.",
  },
  {
    icon: BookOpen,
    title: "Teacher at heart",
    body: "Nearly 4 years teaching CS taught me to break complex problems into clear, useful steps.",
  },
  {
    icon: Award,
    title: "AIR 355 — National Olympiad",
    body: "Early proof that disciplined practice beats raw talent. Same mindset I bring to every product.",
  },
];

export function About() {
  return (
    <Section
      id="about"
      eyebrow="About"
      title={<>Builder by craft, founder by mindset.</>}
      description={
        <>
          I'm a developer obsessed with SaaS, AI, automation, and the small decisions that turn an
          idea into a product people actually pay for. Self-taught, deeply curious, and always
          shipping.
        </>
      }
    >
      <div className="grid md:grid-cols-2 gap-4">
        {points.map((p, i) => (
          <FadeIn key={p.title} delay={i * 0.05}>
            <div className="group relative h-full glass gradient-border rounded-2xl p-6 hover:bg-white/[0.04] transition-colors">
              <div className="flex items-start gap-4">
                <div className="grid place-items-center size-10 rounded-xl bg-white/[0.04] gradient-border">
                  <p.icon className="size-5 text-[oklch(0.78_0.14_270)]" />
                </div>
                <div>
                  <h3 className="font-medium tracking-tight">{p.title}</h3>
                  <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{p.body}</p>
                </div>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
