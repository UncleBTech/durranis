import { useEffect, useState } from "react";

const links = [
  { href: "#collections", label: "Collections" },
  { href: "#about", label: "About" },
  { href: "#watches", label: "Watches" },
  { href: "#bridal", label: "Bridal" },
  { href: "#testimonials", label: "Reviews" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-gold bg-background/95 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        <a href="#top" className="flex flex-col leading-none">
          <span className="font-display text-3xl font-medium tracking-wide text-shimmer">
            Durrani&rsquo;s
          </span>
          <span className="mt-0.5 text-[10px] uppercase tracking-[0.35em] text-gold">
            Gold &amp; Diamonds
          </span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="nav-link text-sm font-light">
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden border border-gold-strong px-5 py-2 text-xs uppercase tracking-[0.25em] text-gold-light transition-colors hover:bg-gold hover:text-primary-foreground lg:inline-block"
        >
          Visit Us
        </a>

        <button
          type="button"
          aria-label="Open menu"
          aria-expanded={open}
          onClick={() => setOpen(true)}
          className="lg:hidden"
        >
          <span className="block h-px w-8 bg-gold" />
          <span className="mt-1.5 block h-px w-8 bg-gold" />
          <span className="mt-1.5 block h-px w-5 bg-gold" />
        </button>
      </div>

      {open && (
        <div className="fixed inset-0 z-50 flex flex-col bg-background/98 px-6 py-8 lg:hidden">
          <div className="flex items-center justify-between">
            <span className="font-display text-2xl text-gold">Durrani&rsquo;s</span>
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
              className="text-gold"
            >
              <span className="text-3xl leading-none">×</span>
            </button>
          </div>
          <nav className="mt-12 flex flex-col gap-7">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="font-display text-4xl text-foreground hover:text-gold"
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
