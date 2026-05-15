import { ArrowUpRight, Github } from "lucide-react";
import { FadeIn, Section } from "./Section";

const projects = [
  {
    name: "RevUchat AI",
    tag: "SaaS · AI",
    description:
      "AI-powered customer feedback and review automation. Turns raw user voice into prioritized product signals.",
    stack: ["Next.js", "TypeScript", "Supabase", "OpenAI", "Tailwind"],
    live: "https://revuchat-ai.vercel.app/",
    repo: "https://github.com/atomnoid/RevUchat-Ai",
    accent: "from-[oklch(0.65_0.22_270)] to-[oklch(0.7_0.18_200)]",
  },
  {
    name: "QuicklifyTools",
    tag: "Tools · SEO",
    description:
      "All-in-one platform with hundreds of users relying on it daily. Multiple powerful tools in one place — fast, accessible, and built to rank.",
    stack: ["Next.js", "TypeScript", "Tailwind", "Edge"],
    live: "https://quicklifytools.com/",
    repo: "https://github.com/atomnoid/quicklifytools",
    accent: "from-[oklch(0.7_0.18_200)] to-[oklch(0.75_0.18_320)]",
  },
  {
    name: "Insights View",
    tag: "Analytics · AI",
    description:
      "AI-powered insights and analytics platform for data-driven decision making.",
    stack: ["React", "TypeScript", "Charts", "Supabase"],
    live: "https://github.com/atomnoid/InsightsView-AI",
    repo: "https://github.com/atomnoid/InsightsView-AI",
    accent: "from-[oklch(0.75_0.18_320)] to-[oklch(0.65_0.22_270)]",
  },
];

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Selected work"
      title={<>Products I've built &amp; shipped.</>}
      description="A few of the things I've put into the world. Real problems, real users, real launches."
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {projects.map((p, i) => (
          <FadeIn key={p.name} delay={i * 0.07}>
            <article className="group h-full relative glass gradient-border rounded-2xl overflow-hidden flex flex-col hover:translate-y-[-2px] transition-transform">
              {/* Mockup */}
              <div className="relative aspect-[16/10] overflow-hidden border-b border-white/10">
                {p.name === "RevUchat AI" ? (
                  <img
                    src="/images/projects/revuchat-banner.png"
                    alt={p.name}
                    className="w-full h-full object-cover"
                  />
                ) : p.name === "QuicklifyTools" ? (
                  <img
                    src="/images/projects/quicklifytools-banner.png"
                    alt={p.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <>
                    <div className={`absolute inset-0 bg-gradient-to-br ${p.accent} opacity-70`} />
                    <div className="absolute inset-0 bg-grid opacity-30 mix-blend-overlay" />
                    <div className="absolute inset-x-6 bottom-6 top-12 rounded-xl glass-strong shadow-card p-3">
                      <div className="flex gap-1.5">
                        <span className="size-2 rounded-full bg-white/30" />
                        <span className="size-2 rounded-full bg-white/30" />
                        <span className="size-2 rounded-full bg-white/30" />
                      </div>
                      <div className="mt-3 h-2 w-2/3 rounded bg-white/20" />
                      <div className="mt-2 h-2 w-1/2 rounded bg-white/15" />
                      <div className="mt-4 grid grid-cols-3 gap-1.5">
                        <div className="h-10 rounded bg-white/10" />
                        <div className="h-10 rounded bg-white/15" />
                        <div className="h-10 rounded bg-white/10" />
                      </div>
                    </div>
                    <div className="absolute top-3 left-3 inline-flex items-center gap-1.5 rounded-md bg-black/30 backdrop-blur px-2 py-1 text-[10px] uppercase tracking-wider text-white/80">
                      {p.tag}
                    </div>
                  </>
                )}
              </div>

              <div className="p-5 flex-1 flex flex-col">
                <h3 className="font-semibold tracking-tight text-lg">{p.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed flex-1">
                  {p.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {p.stack.map((t) => (
                    <span
                      key={t}
                      className="rounded-md border border-white/10 bg-white/[0.03] px-2 py-0.5 text-[11px] text-foreground/80"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-5 flex items-center gap-2">
                  <a
                    href={p.live}
                    className="inline-flex items-center gap-1 rounded-lg bg-white text-background px-3 py-1.5 text-xs font-medium hover:bg-white/90 transition-colors"
                  >
                    Live <ArrowUpRight className="size-3.5" />
                  </a>
                  <a
                    href={p.repo}
                    className="inline-flex items-center gap-1 rounded-lg glass gradient-border px-3 py-1.5 text-xs font-medium hover:bg-white/[0.06] transition-colors"
                  >
                    <Github className="size-3.5" /> Code
                  </a>
                </div>
              </div>
            </article>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
