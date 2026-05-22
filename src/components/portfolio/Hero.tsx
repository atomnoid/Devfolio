import { motion } from "framer-motion";
import { ArrowUpRight, Download, Github, Linkedin, Mail, Sparkles } from "lucide-react";
import XIcon from "./XIcon";
import { Spotlight } from "./Spotlight";

const stats = [
  { value: "20+", label: "Projects Built" },
  { value: "5+", label: "Years Experience" },
  { value: "4", label: "Years Teaching" },
  { value: "1+", label: "Years in Business" },
];

export function Hero() {
  return (
    <section id="top" className="relative pt-36 pb-24 md:pt-44 md:pb-32">
      <Spotlight />

      <div className="relative mx-auto max-w-6xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full glass px-3.5 py-1.5 text-xs text-muted-foreground">
            <span className="relative flex size-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex size-1.5 rounded-full bg-emerald-400" />
            </span>
            Available for opportunities &middot; 2026
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.05 }}
          className="mt-6 text-center text-[clamp(2.5rem,7vw,5.25rem)] font-semibold leading-[1.02] tracking-tight"
        >
          <span className="text-gradient">Developer, Indie Hacker</span>
          <br />
          <span className="text-gradient">&amp; </span>
          <span className="text-gradient-accent">Product Builder.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mx-auto mt-6 max-w-2xl text-center text-base md:text-lg text-muted-foreground"
        >
          I build digital products at the intersection of engineering, design, and growth — shipping
          SaaS, AI tools, and websites with a founder's mindset.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="mt-9 flex flex-wrap items-center justify-center gap-3"
        >
          <a
            href="#projects"
            className="group relative inline-flex items-center gap-2 rounded-xl bg-white text-background px-5 py-3 text-sm font-medium shadow-glow hover:translate-y-[-1px] transition-transform"
          >
            View my work
            <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          <a
            href="https://docs.google.com/document/d/1m9Bk7aUwB1XD4kvG6ONroCFWXTOEasMPd2ne6UJrl7I/edit?usp=sharing"
            className="group inline-flex items-center gap-2 rounded-xl glass gradient-border px-5 py-3 text-sm font-medium hover:bg-white/[0.06] transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Download className="size-4" /> Resume
          </a>
          <div className="flex items-center gap-1 ml-1">
            {[
              { icon: Github, href: "https://github.com/atomnoid" },
              { icon: XIcon, href: "https://x.com/atomnoidd" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/asdev511/" },
              { icon: Mail, href: "#contact" },
            ].map(({ icon: Icon, href }, i) => (
              <a
                key={i}
                href={href}
                className="grid place-items-center size-10 rounded-xl glass hover:bg-white/[0.08] transition-colors"
                aria-label="Social link"
              >
                <Icon className="size-4" />
              </a>
            ))}
          </div>
        </motion.div>

        {/* Floating chip */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="hidden md:flex absolute right-8 top-44 animate-float"
        >
          <div className="glass gradient-border rounded-2xl px-3.5 py-2.5 text-xs flex items-center gap-2">
            <Sparkles className="size-3.5 text-[oklch(0.7_0.18_200)]" /> shipping in public
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="hidden md:flex absolute left-6 top-72 animate-float"
          style={{ animationDelay: "1.5s" }}
        >
          <div className="glass gradient-border rounded-2xl px-3.5 py-2.5 text-xs">
            $ npx <span className="text-gradient-accent">create-product</span>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-3"
        >
          {stats.map((s) => (
            <div
              key={s.label}
              className="glass gradient-border rounded-2xl p-5 hover:bg-white/[0.04] transition-colors"
            >
              <div className="text-3xl md:text-4xl font-semibold text-gradient">{s.value}</div>
              <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">
                {s.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
