import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#beyond", label: "Beyond" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("#about");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 12);
      const y = window.scrollY + 120;
      for (const l of links) {
        const el = document.querySelector(l.href);
        if (el instanceof HTMLElement) {
          if (el.offsetTop <= y && el.offsetTop + el.offsetHeight > y) {
            setActive(l.href);
          }
        }
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="mx-auto max-w-6xl px-4">
        <nav
          className={`flex items-center justify-between rounded-2xl px-4 py-2.5 transition-all ${
            scrolled ? "glass-strong shadow-card" : "glass"
          }`}
        >
          <a href="#top" className="flex items-center gap-2 group">
            <span className="relative grid place-items-center size-8 rounded-lg bg-[var(--gradient-accent)] text-white font-bold text-sm">
              D
              <span className="absolute inset-0 rounded-lg blur-md opacity-60 bg-[var(--gradient-accent)] -z-10" />
            </span>
            <span className="font-semibold tracking-tight">
              dev<span className="text-gradient-accent">.folio</span>
            </span>
          </a>

          <ul className="hidden md:flex items-center gap-1 text-sm">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className={`relative px-3 py-1.5 rounded-md transition-colors ${
                    active === l.href
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {active === l.href && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-md bg-white/5"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative">{l.label}</span>
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden md:flex items-center gap-2">
            <a
              href="#contact"
              className="group inline-flex items-center gap-1.5 rounded-lg bg-white text-background px-3.5 py-2 text-sm font-medium hover:bg-white/90 transition-colors"
            >
              Let's talk
              <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          <button
            onClick={() => setOpen((v) => !v)}
            className="md:hidden grid place-items-center size-9 rounded-lg glass"
            aria-label="Toggle menu"
          >
            {open ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </nav>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              className="md:hidden mt-2 glass-strong rounded-2xl p-3"
            >
              <ul className="flex flex-col">
                {links.map((l) => (
                  <li key={l.href}>
                    <a
                      onClick={() => setOpen(false)}
                      href={l.href}
                      className="block px-3 py-2 rounded-md text-sm text-muted-foreground hover:text-foreground hover:bg-white/5"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
                <li className="mt-2">
                  <a
                    onClick={() => setOpen(false)}
                    href="#contact"
                    className="block text-center rounded-lg bg-white text-background px-3.5 py-2 text-sm font-medium"
                  >
                    Let's talk
                  </a>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
