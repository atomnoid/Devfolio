import { Github, Linkedin, Mail } from "lucide-react";
import XIcon from "./XIcon";

export function Footer() {
  return (
    <footer className="relative border-t border-white/10 mt-10">
      <div className="mx-auto max-w-6xl px-4 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <span className="grid place-items-center size-7 rounded-md bg-[var(--gradient-accent)] text-white font-bold text-xs">
            D
          </span>
          <span>© {new Date().getFullYear()} — Built with care &amp; caffeine.</span>
        </div>
        <div className="flex items-center gap-1">
          {[
            { icon: Github, href: "https://github.com/atomnoid" },
            { icon: XIcon, href: "https://x.com/atomnoidd" },
            { icon: Linkedin, href: "https://linkedin.com" },
            { icon: Mail, href: "#contact" },
          ].map(({ icon: Icon, href }, i) => (
            <a
              key={i}
              href={href}
              className="grid place-items-center size-9 rounded-lg glass hover:bg-white/[0.08] transition-colors"
              aria-label="Social link"
            >
              <Icon className="size-4" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
