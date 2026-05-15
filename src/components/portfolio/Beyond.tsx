import { Brain, LineChart, Megaphone, Rocket, Sparkles, Users } from "lucide-react";
import { FadeIn, Section } from "./Section";

const cards = [
  {
    icon: Rocket,
    title: "Indie hacker",
    body: "Ship small, learn fast, repeat. Distribution is part of the product.",
  },
  {
    icon: LineChart,
    title: "Business thinking",
    body: "Margins, funnels, pricing — code is just a means to a business outcome.",
  },
  {
    icon: Megaphone,
    title: "Marketing fluent",
    body: "From Google Ads to landing pages, I can build and grow at the same time.",
  },
  {
    icon: Sparkles,
    title: "Product experiments",
    body: "I prototype constantly. Most ideas die early, the survivors get serious.",
  },
  {
    icon: Users,
    title: "Teaching mindset",
    body: "Years of teaching = clearer thinking, cleaner docs, calmer team comms.",
  },
  {
    icon: Brain,
    title: "Founder mentality",
    body: "Owner, not employee. I take responsibility for the outcome, not just the task.",
  },
];

export function Beyond() {
  return (
    <Section
      id="beyond"
      eyebrow="Beyond development"
      title={<>I'm not just a developer.</>}
      description="The most interesting products today are built by people who can code, sell, and ship. I'm building that profile on purpose."
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {cards.map((c, i) => (
          <FadeIn key={c.title} delay={i * 0.04}>
            <div className="group relative h-full glass gradient-border rounded-2xl p-6 overflow-hidden hover:bg-white/[0.04] transition-colors">
              <div
                className="absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl pointer-events-none"
                style={{
                  background:
                    "radial-gradient(220px circle at 50% 0%, oklch(0.65 0.22 270 / 0.18), transparent 60%)",
                }}
              />
              <div className="relative">
                <c.icon className="size-5 text-[oklch(0.78_0.14_270)]" />
                <h3 className="mt-4 font-medium tracking-tight">{c.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{c.body}</p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
