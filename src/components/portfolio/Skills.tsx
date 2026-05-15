import { Code2, Cpu, Megaphone, GraduationCap } from "lucide-react";
import { FadeIn, Section } from "./Section";

const groups = [
  {
    icon: Code2,
    title: "Languages & Frameworks",
    items: [
      "TypeScript",
      "JavaScript",
      "Node.js",
      "React",
      "Next.js",
      "Three.js",
      "Python",
      "Java",
      "C++",
      "C",
      "HTML",
      "CSS",
      "Tailwind CSS",
      "Supabase",
      "PostgreSQL",
      "MongoDB",
      "Git",
      "GitHub",
    ],
  },
  {
    icon: Cpu,
    title: "Engineering",
    items: [
      "Responsive Design",
      "API Integration",
      "RESTful APIs",
      "Postman",
      "Authentication",
      "UI/UX Thinking",
      "SaaS Architecture",
      "Vercel",
      "Netlify",
      "Deployment",
    ],
  },
  {
    icon: Megaphone,
    title: "Business & Growth",
    items: [
      "Product Development",
      "Google Ads",
      "Marketing",
      "Sales",
      "Growth Thinking",
      "Lead Generation",
      "Business Strategy",
    ],
  },
  {
    icon: GraduationCap,
    title: "Teaching & Comms",
    items: ["CS Teaching", "Mentorship", "Problem Solving", "Communication"],
  },
];

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Stack"
      title={<>Tools sharpened over years of shipping.</>}
      description="A working toolkit across engineering, product, and growth — picked because they get things done."
    >
      <div className="grid md:grid-cols-2 gap-4">
        {groups.map((g, i) => (
          <FadeIn key={g.title} delay={i * 0.05}>
            <div className="group relative h-full glass gradient-border rounded-2xl p-6 overflow-hidden">
              <div className="absolute -top-16 -right-16 size-40 rounded-full bg-[var(--gradient-accent)] opacity-0 group-hover:opacity-15 blur-3xl transition-opacity" />
              <div className="flex items-center gap-3">
                <div className="grid place-items-center size-10 rounded-xl bg-white/[0.04] gradient-border">
                  <g.icon className="size-5 text-[oklch(0.78_0.14_270)]" />
                </div>
                <h3 className="font-medium tracking-tight">{g.title}</h3>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {g.items.map((it) => (
                  <span
                    key={it}
                    className="rounded-lg border border-white/10 bg-white/[0.03] px-2.5 py-1 text-xs text-foreground/85 hover:bg-white/[0.07] hover:border-white/20 transition-colors"
                  >
                    {it}
                  </span>
                ))}
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
