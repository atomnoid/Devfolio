import { ArrowUpRight, Github, Linkedin, Mail, Twitter } from "lucide-react";
import { FadeIn, Section } from "./Section";

export function Contact() {
  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title={<>Let's build something worth shipping.</>}
      description="Open to roles, freelance, collabs, and interesting product conversations."
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        <FadeIn>
          <a
            href="mailto:aayushsinhaworkwme@gmail.com"
            className="group h-full glass gradient-border rounded-2xl p-6 flex items-center gap-4 hover:bg-white/[0.04] transition-colors"
          >
            <div className="grid place-items-center size-10 rounded-lg bg-white/[0.04] gradient-border shrink-0">
              <Mail className="size-5 text-[oklch(0.78_0.14_270)]" />
            </div>
            <div className="flex-1">
              <div className="text-xs text-muted-foreground">Email</div>
              <div className="text-sm font-medium">aayushsinhaworkwme@gmail.com</div>
            </div>
            <ArrowUpRight className="size-4 opacity-60 group-hover:opacity-100 transition shrink-0" />
          </a>
        </FadeIn>

        <FadeIn delay={0.05}>
          <a
            href="https://github.com/atomnoid"
            className="group h-full glass gradient-border rounded-2xl p-6 flex items-center gap-4 hover:bg-white/[0.04] transition-colors"
          >
            <div className="grid place-items-center size-10 rounded-lg bg-white/[0.04] gradient-border shrink-0">
              <Github className="size-5 text-[oklch(0.78_0.14_270)]" />
            </div>
            <div className="flex-1">
              <div className="text-xs text-muted-foreground">GitHub</div>
              <div className="text-sm font-medium">@atomnoid</div>
            </div>
            <ArrowUpRight className="size-4 opacity-60 group-hover:opacity-100 transition shrink-0" />
          </a>
        </FadeIn>

        <FadeIn delay={0.075}>
          <a
            href="https://x.com/atomnoidd"
            className="group h-full glass gradient-border rounded-2xl p-6 flex items-center gap-4 hover:bg-white/[0.04] transition-colors"
          >
            <div className="grid place-items-center size-10 rounded-lg bg-white/[0.04] gradient-border shrink-0">
              <Twitter className="size-5 text-[oklch(0.78_0.14_270)]" />
            </div>
            <div className="flex-1">
              <div className="text-xs text-muted-foreground">X</div>
              <div className="text-sm font-medium">@atomnoidd</div>
            </div>
            <ArrowUpRight className="size-4 opacity-60 group-hover:opacity-100 transition shrink-0" />
          </a>
        </FadeIn>

        <FadeIn delay={0.1}>
          <a
            href="https://linkedin.com"
            className="group h-full glass gradient-border rounded-2xl p-6 flex items-center gap-4 hover:bg-white/[0.04] transition-colors"
          >
            <div className="grid place-items-center size-10 rounded-lg bg-white/[0.04] gradient-border shrink-0">
              <Linkedin className="size-5 text-[oklch(0.78_0.14_270)]" />
            </div>
            <div className="flex-1">
              <div className="text-xs text-muted-foreground">LinkedIn</div>
              <div className="text-sm font-medium">/in/yourhandle</div>
            </div>
            <ArrowUpRight className="size-4 opacity-60 group-hover:opacity-100 transition shrink-0" />
          </a>
        </FadeIn>
      </div>
    </Section>
  );
}
