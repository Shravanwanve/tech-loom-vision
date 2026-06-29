import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div
        className={`mx-auto flex max-w-6xl items-center justify-between px-4 sm:px-6 ${
          scrolled
            ? "rounded-full border border-ink/10 bg-cream/85 px-5 py-2.5 backdrop-blur shadow-[0_10px_30px_-20px_rgba(0,0,0,0.25)]"
            : ""
        } transition-all`}
      >
        <a href="#home" className="flex items-center gap-2 font-display text-lg font-bold tracking-tight text-ink">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-ink text-lime font-display text-sm font-bold">
            SW
          </span>
          <span className="hidden sm:inline">Shravan.</span>
        </a>

        <nav className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-full px-3.5 py-1.5 text-sm font-medium text-ink/70 transition-colors hover:text-ink"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden items-center gap-1.5 rounded-full bg-lime px-4 py-2 text-sm font-semibold text-ink transition-transform hover:scale-105 md:inline-flex"
        >
          Let's Talk
        </a>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="grid h-10 w-10 place-items-center rounded-full border border-ink/15 bg-paper md:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="mx-auto mt-2 max-w-6xl px-4 md:hidden">
          <div className="animate-fade-in rounded-2xl border border-ink/10 bg-paper p-3 shadow-lg">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block rounded-xl px-4 py-3 text-sm font-medium text-ink hover:bg-secondary"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-1 block rounded-xl bg-lime px-4 py-3 text-center text-sm font-semibold text-ink"
            >
              Let's Talk
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
