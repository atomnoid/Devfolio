import { useState } from "react";
import { ArrowUpRight, Github, Linkedin, Mail, Send } from "lucide-react";
import { FadeIn, Section } from "./Section";

export function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title={<>Let's build something worth shipping.</>}
      description="Open to roles, freelance, collabs, and interesting product conversations."
    >
      <div className="grid lg:grid-cols-5 gap-5">
        <FadeIn className="lg:col-span-2">
          <div className="h-full glass gradient-border rounded-2xl p-6 flex flex-col">
            <div className="space-y-4">
              <a
                href="mailto:hello@example.com"
                className="group flex items-center gap-3 rounded-xl bg-white/[0.03] border border-white/10 p-4 hover:bg-white/[0.06] transition-colors"
              >
                <Mail className="size-4 text-[oklch(0.78_0.14_270)]" />
                <div>
                  <div className="text-xs text-muted-foreground">Email</div>
                  <div className="text-sm">hello@example.com</div>
                </div>
                <ArrowUpRight className="ml-auto size-4 opacity-60 group-hover:opacity-100 transition" />
              </a>
              <a
                href="https://github.com"
                className="group flex items-center gap-3 rounded-xl bg-white/[0.03] border border-white/10 p-4 hover:bg-white/[0.06] transition-colors"
              >
                <Github className="size-4 text-[oklch(0.78_0.14_270)]" />
                <div>
                  <div className="text-xs text-muted-foreground">GitHub</div>
                  <div className="text-sm">@yourhandle</div>
                </div>
                <ArrowUpRight className="ml-auto size-4 opacity-60 group-hover:opacity-100 transition" />
              </a>
              <a
                href="https://linkedin.com"
                className="group flex items-center gap-3 rounded-xl bg-white/[0.03] border border-white/10 p-4 hover:bg-white/[0.06] transition-colors"
              >
                <Linkedin className="size-4 text-[oklch(0.78_0.14_270)]" />
                <div>
                  <div className="text-xs text-muted-foreground">LinkedIn</div>
                  <div className="text-sm">/in/yourhandle</div>
                </div>
                <ArrowUpRight className="ml-auto size-4 opacity-60 group-hover:opacity-100 transition" />
              </a>
            </div>
            <div className="mt-auto pt-6">
              <div className="text-xs text-muted-foreground">
                Currently based remotely · Replies within 24h
              </div>
            </div>
          </div>
        </FadeIn>

        <FadeIn className="lg:col-span-3" delay={0.05}>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
              setTimeout(() => setSent(false), 3000);
            }}
            className="h-full glass gradient-border rounded-2xl p-6 flex flex-col gap-4"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <Field label="Name" name="name" placeholder="Your name" />
              <Field label="Email" name="email" type="email" placeholder="you@domain.com" />
            </div>
            <Field label="Subject" name="subject" placeholder="What's this about?" />
            <div>
              <label className="text-xs text-muted-foreground">Message</label>
              <textarea
                required
                rows={6}
                placeholder="Tell me a bit about what you're building..."
                className="mt-1.5 w-full rounded-xl bg-white/[0.03] border border-white/10 px-4 py-3 text-sm placeholder:text-muted-foreground/70 focus:outline-none focus:ring-2 focus:ring-[oklch(0.65_0.22_270/0.5)] transition"
              />
            </div>
            <button
              type="submit"
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-white text-background px-5 py-3 text-sm font-medium hover:bg-white/90 transition-colors shadow-glow self-start"
            >
              {sent ? "Sent — thanks!" : "Send message"}
              <Send className="size-4 transition-transform group-hover:translate-x-0.5" />
            </button>
          </form>
        </FadeIn>
      </div>
    </Section>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="text-xs text-muted-foreground">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required
        placeholder={placeholder}
        className="mt-1.5 w-full rounded-xl bg-white/[0.03] border border-white/10 px-4 py-3 text-sm placeholder:text-muted-foreground/70 focus:outline-none focus:ring-2 focus:ring-[oklch(0.65_0.22_270/0.5)] transition"
      />
    </div>
  );
}
