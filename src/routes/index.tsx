import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/nav";
import { CustomCursor } from "@/components/custom-cursor";
import { useRevealOnScroll } from "@/hooks/use-reveal";
import { useCountUp } from "@/hooks/use-count-up";

export const Route = createFileRoute("/")({
  component: Index,
});

const collections = [
  {
    name: "Rings",
    blurb: "From classic solitaires to statement pieces",
    seed: "rings",
  },
  {
    name: "Necklaces",
    blurb: "Crafted to complement every neckline",
    seed: "necklaces",
  },
  {
    name: "Bracelets",
    blurb: "5,000 years of tradition, reimagined",
    seed: "bracelets",
  },
  {
    name: "Earrings",
    blurb: "For everyday elegance and grand occasions",
    seed: "earrings",
  },
  {
    name: "Bridal Sets",
    blurb: "The largest bridal collection in the UK",
    seed: "bridal",
  },
  {
    name: "Gifts",
    blurb: "The perfect expression of love",
    seed: "gifts",
  },
];

const trustItems = [
  "50 Years Heritage",
  "Dubai & Pakistan Legacy",
  "IGI Certified Diamonds",
  "Bespoke Design",
  "Luxury Watch Specialists",
];

const testimonials = [
  {
    quote:
      "Absolutely amazing experience. The quality of the jewellery is outstanding, and the designs are truly unique. The owner was incredibly humble and helpful — no pressure, just passion.",
    who: "Verified Customer · Google Reviews",
  },
  {
    quote:
      "My fourth purchase from Durrani's and it has got better each time. The unique designs and quality of the jewellery as well as the customer service are second to none.",
    who: "Verified Customer · Google Reviews",
  },
  {
    quote:
      "The team went above and beyond. Big thanks to the owner and to Nusaibah — their professionalism and friendly attitude made all the difference.",
    who: "Verified Customer · Google Reviews",
  },
];

function Index() {
  const ref = useRevealOnScroll();

  return (
    <div ref={ref} id="top" className="relative">
      <CustomCursor />
      <Nav />
      <Hero />
      <TrustBar />
      <Collections />
      <Watches />
      <About />
      <Bridal />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

/* -------------------------------- HERO -------------------------------- */

function Hero() {
  return (
    <section className="relative grain-overlay flex min-h-screen items-center justify-center overflow-hidden gradient-radial-spotlight px-6">
      {/* Rotating geometric ornament */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 animate-slow-rotate"
        style={{ opacity: 0.08 }}
      >
        <svg width="780" height="780" viewBox="0 0 780 780" fill="none">
          <polygon
            points="390,40 660,160 740,440 580,690 200,690 40,440 120,160"
            stroke="rgb(var(--gold-rgb))"
            strokeWidth="1"
            fill="none"
          />
          <polygon
            points="390,140 580,220 640,420 510,610 270,610 140,420 200,220"
            stroke="rgb(var(--gold-rgb))"
            strokeWidth="1"
            fill="none"
          />
          <circle cx="390" cy="390" r="160" stroke="rgb(var(--gold-rgb))" strokeWidth="1" fill="none" />
        </svg>
      </div>

      <div className="relative z-10 mx-auto max-w-5xl text-center">
        <p
          className="animate-fade-in text-xs uppercase tracking-[0.4em] text-gold"
          style={{ animationDelay: "0.2s" }}
        >
          Bradford&rsquo;s Finest Jewellery &amp; Luxury Watch Showroom
        </p>

        <h1 className="mt-8 font-display text-[52px] font-light leading-[1.05] text-foreground sm:text-7xl lg:text-[96px]">
          <span className="block animate-fade-up" style={{ animationDelay: "0.4s" }}>
            Where Heritage
          </span>
          <span
            className="block animate-fade-up italic text-shimmer"
            style={{ animationDelay: "0.7s" }}
          >
            Meets Diamonds.
          </span>
        </h1>

        <p
          className="mx-auto mt-8 max-w-xl animate-fade-up text-base font-light leading-relaxed text-muted-foreground"
          style={{ animationDelay: "1.2s" }}
        >
          50 years of artisan craftsmanship. From Dubai to Bradford,
          every piece is exclusively yours.
        </p>

        <div
          className="mt-12 flex animate-fade-up flex-col items-center justify-center gap-4 sm:flex-row"
          style={{ animationDelay: "1.6s" }}
        >
          <a
            href="#collections"
            className="group inline-flex items-center justify-center gradient-gold px-8 py-4 text-xs uppercase tracking-[0.3em] text-primary-foreground transition-all hover:glow-gold-strong"
          >
            Explore Collections
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center border border-gold-strong px-8 py-4 text-xs uppercase tracking-[0.3em] text-gold-light transition-colors hover:bg-gold hover:text-primary-foreground"
          >
            Book an Appointment
          </a>
        </div>

        <div className="mt-20 flex items-center justify-center gap-3 opacity-80">
          <span className="h-px w-20 bg-gradient-to-r from-transparent to-gold" />
          <span className="text-gold">✦</span>
          <span className="h-px w-10 bg-gold/60" />
          <span className="text-gold">✦</span>
          <span className="h-px w-10 bg-gold/60" />
          <span className="text-gold">✦</span>
          <span className="h-px w-20 bg-gradient-to-l from-transparent to-gold" />
        </div>

        <div className="mt-10 flex justify-center">
          <span className="animate-pulse-down text-gold" aria-hidden>
            <svg width="20" height="28" viewBox="0 0 20 28" fill="none">
              <path
                d="M10 2v22M3 17l7 7 7-7"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- TRUST BAR ------------------------------ */

function TrustBar() {
  return (
    <div className="border-y border-gold bg-surface">
      <div className="mx-auto flex max-w-7xl items-center gap-8 overflow-x-auto px-6 py-5 lg:justify-center lg:gap-0">
        {trustItems.map((item, i) => (
          <div
            key={item}
            className={`flex shrink-0 items-center gap-3 px-4 lg:px-8 ${
              i > 0 ? "lg:border-l lg:border-gold/30" : ""
            }`}
          >
            <span className="text-gold">✦</span>
            <span className="whitespace-nowrap text-[11px] uppercase tracking-[0.25em] text-gold-light">
              {item}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ---------------------------- COLLECTIONS ----------------------------- */

function Collections() {
  return (
    <section id="collections" className="relative px-6 py-28 lg:py-36">
      <div className="mx-auto max-w-7xl">
        <div className="reveal text-center">
          <p className="text-[11px] uppercase tracking-[0.4em] text-gold">
            Handcrafted · Exclusive · Timeless
          </p>
          <h2 className="mt-5 font-display text-5xl font-light text-foreground lg:text-7xl">
            Our Collections
          </h2>
          <div className="divider-diamond mt-6 mx-auto max-w-md">
            <span className="text-gold">◆</span>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {collections.map((c, i) => (
            <a
              key={c.name}
              href="#contact"
              className="reveal group relative aspect-[3/4] overflow-hidden border border-gold bg-card transition-all duration-500 hover:scale-[1.03] hover:glow-gold-strong"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <img
                src={`https://picsum.photos/seed/${c.seed}-durrani/600/800`}
                alt={`${c.name} — Durrani's collection`}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover opacity-40 transition-opacity duration-500 group-hover:opacity-55"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/20" />
              <div className="absolute inset-x-0 bottom-0 p-8 text-center">
                <h3 className="font-display text-3xl text-foreground">{c.name}</h3>
                <p className="mt-2 text-sm font-light text-muted-foreground">
                  {c.blurb}
                </p>
                <span className="mt-5 inline-block text-[11px] uppercase tracking-[0.3em] text-gold opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  Explore →
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ WATCHES ------------------------------- */

function Watches() {
  const brands = [
    "Rolex",
    "Cartier",
    "Audemars Piguet",
    "Patek Philippe",
    "Hublot",
    "Richard Mille",
  ];

  return (
    <section id="watches" className="relative geometric-grid border-y border-gold/40 bg-surface px-6 py-28 lg:py-36">
      <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
        <div className="reveal">
          <p className="text-[11px] uppercase tracking-[0.4em] text-gold">
            Luxury Timepieces
          </p>
          <h2 className="mt-5 font-display text-4xl font-light leading-[1.1] text-foreground lg:text-6xl">
            The World&rsquo;s Most
            <br />
            <span className="italic text-shimmer">Coveted Watches</span>
          </h2>
          <p className="mt-6 max-w-md text-base font-light leading-relaxed text-muted-foreground">
            We carry an exceptional selection of the world&rsquo;s most
            prestigious watch brands, sourced and authenticated to the
            highest standard.
          </p>
          <div className="mt-8 flex flex-col font-display text-2xl italic text-gold-light lg:text-3xl">
            <span>{brands.slice(0, 3).join(", ")},</span>
            <span>{brands.slice(3).join(", ")}.</span>
          </div>
          <a
            href="#contact"
            className="mt-10 inline-flex items-center border border-gold-strong px-7 py-3 text-xs uppercase tracking-[0.3em] text-gold-light transition-colors hover:bg-gold hover:text-primary-foreground"
          >
            Enquire About Watches →
          </a>
        </div>

        <div className="reveal flex justify-center">
          <div className="relative aspect-square w-full max-w-md border border-gold bg-card p-10">
            <svg viewBox="0 0 400 400" className="h-full w-full">
              <circle cx="200" cy="200" r="180" stroke="rgb(var(--gold-rgb))" strokeWidth="1" fill="none" opacity="0.4" />
              <circle cx="200" cy="200" r="160" stroke="rgb(var(--gold-rgb))" strokeWidth="0.5" fill="none" opacity="0.5" />
              <circle cx="200" cy="200" r="120" stroke="rgb(var(--gold-rgb))" strokeWidth="1" fill="none" />
              <circle cx="200" cy="200" r="80" stroke="rgb(var(--gold-rgb))" strokeWidth="0.5" fill="none" opacity="0.6" />
              {Array.from({ length: 12 }).map((_, i) => {
                const angle = (i * 30 * Math.PI) / 180;
                const x1 = 200 + Math.cos(angle) * 150;
                const y1 = 200 + Math.sin(angle) * 150;
                const x2 = 200 + Math.cos(angle) * 170;
                const y2 = 200 + Math.sin(angle) * 170;
                return (
                  <line
                    key={i}
                    x1={x1}
                    y1={y1}
                    x2={x2}
                    y2={y2}
                    stroke="rgb(var(--gold-rgb))"
                    strokeWidth="1.5"
                  />
                );
              })}
              <line x1="200" y1="200" x2="200" y2="105" stroke="rgb(var(--gold-light-rgb))" strokeWidth="2" strokeLinecap="round" />
              <line x1="200" y1="200" x2="265" y2="200" stroke="rgb(var(--gold-light-rgb))" strokeWidth="1.5" strokeLinecap="round" />
              <circle cx="200" cy="200" r="5" fill="rgb(var(--gold-light-rgb))" />
            </svg>
            <span className="absolute bottom-6 left-0 right-0 text-center text-[10px] uppercase tracking-[0.4em] text-gold">
              Authenticated · Authorised · Curated
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------- ABOUT -------------------------------- */

function StatCounter({ target, suffix, label }: { target: number; suffix: string; label: string }) {
  const { ref, value } = useCountUp(target);
  const display = suffix === "★" ? value.toFixed(1) : Math.round(value).toString();
  return (
    <div className="text-center">
      <span ref={ref} className="font-display text-5xl font-light text-shimmer lg:text-6xl">
        {display}
        {suffix}
      </span>
      <p className="mt-2 text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
        {label}
      </p>
    </div>
  );
}

function About() {
  return (
    <section id="about" className="relative px-6 py-28 lg:py-36">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[120px_1fr]">
        <div className="hidden lg:flex lg:flex-col lg:items-center">
          <div className="h-32 w-px bg-gradient-to-b from-transparent to-gold" />
          <span
            className="my-6 text-[11px] uppercase tracking-[0.5em] text-gold"
            style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
          >
            Heritage
          </span>
          <div className="h-32 w-px bg-gradient-to-t from-transparent to-gold" />
        </div>

        <div className="reveal">
          <p className="text-[11px] uppercase tracking-[0.4em] text-gold">
            The Durrani&rsquo;s Story
          </p>
          <h2 className="mt-5 font-display text-4xl font-light leading-tight text-foreground lg:text-6xl">
            Fifty Years of <span className="italic">Craftsmanship</span>
          </h2>
          <div className="mt-8 space-y-5 text-base font-light leading-[1.85] text-muted-foreground lg:text-lg">
            <p>
              Durrani&rsquo;s was born in 1971 when Khawar Durrani&rsquo;s
              father opened the first store in Dubai. The family&rsquo;s
              passion for fine jewellery, nurtured across Dubai and Pakistan
              for half a century, has now arrived in Bradford.
            </p>
            <p>
              Our purpose-built showroom on Leeds Road is unlike anywhere else
              in the North. Step inside and you&rsquo;ll forget which city
              you&rsquo;re in — intricate wall hangings, crystal chandeliers,
              and display cases filled with pieces inspired by Indian,
              Pakistani, Italian and Turkish design traditions.
            </p>
            <p>
              Every piece at Durrani&rsquo;s is exclusive to our store. Every
              diamond is IGI-certified. Every design is a conversation between
              ancient tradition and modern elegance.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-3 gap-6 border-y border-gold py-10">
            <StatCounter target={50} suffix="+" label="Years of Heritage" />
            <StatCounter target={500} suffix="+" label="Exclusive Pieces" />
            <StatCounter target={4.3} suffix="★" label="Google Rating" />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------- BRIDAL ------------------------------- */

function Bridal() {
  const features = [
    "Bespoke artisan design service",
    "Inspired by Indian, Pakistani & Turkish traditions",
    "Custom sizing and tailoring",
    "Private bridal consultations available",
  ];
  return (
    <section id="bridal" className="relative overflow-hidden bg-card px-6 py-28 lg:py-40">
      <div className="absolute inset-x-0 top-0 h-40 gradient-gold-wash" />
      <span
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 select-none whitespace-nowrap font-display text-[180px] font-light text-foreground/[0.03] lg:text-[280px]"
      >
        BESPOKE
      </span>

      <div className="relative mx-auto max-w-4xl text-center">
        <div className="reveal">
          <span className="inline-block border border-gold-strong px-4 py-1.5 text-[10px] uppercase tracking-[0.4em] text-gold">
            Exclusively Yours
          </span>
          <h2 className="mt-8 font-display text-4xl font-light leading-tight text-foreground lg:text-6xl">
            Bridal Jewellery Fit for
            <br />
            <span className="italic text-shimmer">Your Most Important Day</span>
          </h2>
          <p className="mx-auto mt-8 max-w-2xl text-base font-light leading-relaxed text-muted-foreground lg:text-lg">
            We hold the largest and most unique bridal collection in the UK.
            Whether you&rsquo;re seeking traditional Asian bridal sets, modern
            fusion designs, or a fully bespoke creation tailored to your
            vision — our master designers will craft something exclusively
            yours.
          </p>
        </div>

        <ul className="reveal mx-auto mt-12 grid max-w-2xl gap-4 text-left sm:grid-cols-2">
          {features.map((f) => (
            <li key={f} className="flex items-start gap-3 border-l border-gold pl-4 py-2">
              <span className="mt-0.5 text-gold">✦</span>
              <span className="text-sm font-light text-foreground/90">{f}</span>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="reveal mt-12 inline-flex items-center gradient-gold px-8 py-4 text-xs uppercase tracking-[0.3em] text-primary-foreground transition-all hover:glow-gold-strong"
        >
          Book a Bridal Consultation
        </a>
      </div>
    </section>
  );
}

/* --------------------------- TESTIMONIALS ---------------------------- */

function Testimonials() {
  return (
    <section id="testimonials" className="px-6 py-28 lg:py-36">
      <div className="mx-auto max-w-7xl">
        <div className="reveal text-center">
          <div className="text-2xl tracking-[0.5em] text-gold">★★★★★</div>
          <h2 className="mt-6 font-display text-4xl font-light text-foreground lg:text-6xl">
            What Our <span className="italic">Clients Say</span>
          </h2>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <figure
              key={i}
              className="reveal group flex h-full flex-col justify-between border border-gold bg-card p-8 transition-all duration-500 hover:border-gold-strong hover:glow-gold"
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <span className="font-display text-5xl leading-none text-gold/60">&ldquo;</span>
              <blockquote className="mt-2 font-display text-xl italic leading-relaxed text-foreground/90 lg:text-[20px]">
                {t.quote}
              </blockquote>
              <figcaption className="mt-8 text-[11px] uppercase tracking-[0.3em] text-gold">
                — {t.who}
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="reveal mt-12 flex justify-center">
          <div className="inline-flex items-center gap-3 border border-gold-strong px-6 py-3 text-xs uppercase tracking-[0.25em] text-gold-light">
            <span>★</span>
            <span>4.3 / 5</span>
            <span className="text-gold/40">·</span>
            <span>Google Reviews</span>
            <span className="text-gold/40">·</span>
            <span>76+ Verified</span>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ CONTACT ------------------------------ */

function Contact() {
  const mapSrc =
    "https://www.google.com/maps?q=839+Leeds+Road,+Bradford,+BD3+8BU&output=embed";

  return (
    <section id="contact" className="border-t border-gold bg-surface px-6 py-28 lg:py-36">
      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-2">
        <div className="reveal">
          <p className="text-[11px] uppercase tracking-[0.4em] text-gold">
            Visit Our Showroom
          </p>
          <h2 className="mt-5 font-display text-4xl font-light leading-tight text-foreground lg:text-6xl">
            Come and <span className="italic">See Us</span>
          </h2>

          <ul className="mt-10 space-y-5 text-base font-light text-foreground/90">
            <li className="flex items-start gap-4">
              <span className="mt-1 text-gold" aria-hidden>📍</span>
              <span>839 Leeds Road, Bradford, BD3 8BU</span>
            </li>
            <li className="flex items-start gap-4">
              <span className="mt-1 text-gold" aria-hidden>📞</span>
              <a href="tel:01274009169" className="hover:text-gold-light">
                01274 009169
              </a>
            </li>
            <li className="flex items-start gap-4">
              <span className="mt-1 text-gold" aria-hidden>✉</span>
              <a href="mailto:info@durranis.co.uk" className="hover:text-gold-light">
                info@durranis.co.uk
              </a>
            </li>
          </ul>

          <div className="mt-10 border-t border-gold pt-8">
            <p className="text-[11px] uppercase tracking-[0.3em] text-gold">Opening Hours</p>
            <table className="mt-4 w-full max-w-sm text-sm font-light">
              <tbody className="text-foreground/85">
                <tr className="border-b border-gold/20">
                  <td className="py-2 pr-4">Monday – Thursday</td>
                  <td className="py-2 text-right text-gold-light">12:00 – 19:00</td>
                </tr>
                <tr className="border-b border-gold/20">
                  <td className="py-2 pr-4">Friday</td>
                  <td className="py-2 text-right text-muted-foreground">Closed</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4">Saturday – Sunday</td>
                  <td className="py-2 text-right text-gold-light">12:00 – 19:00</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="https://www.instagram.com/durranisgoldanddiamonds"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-gold-strong text-gold transition-colors hover:bg-gold hover:text-primary-foreground"
            >
              IG
            </a>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-gold-strong text-gold transition-colors hover:bg-gold hover:text-primary-foreground"
            >
              fb
            </a>
            <a
              href="https://wa.me/441274009169"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 border border-gold-strong px-5 py-2.5 text-xs uppercase tracking-[0.25em] text-gold-light transition-colors hover:bg-gold hover:text-primary-foreground"
            >
              Message us on WhatsApp
            </a>
          </div>
        </div>

        <div className="reveal">
          <div className="relative aspect-[4/5] w-full overflow-hidden border border-gold bg-card lg:aspect-auto lg:h-full">
            <iframe
              title="Durrani's Gold & Diamonds — 839 Leeds Road, Bradford"
              src={mapSrc}
              className="absolute inset-0 h-full w-full"
              style={{ filter: "invert(92%) hue-rotate(180deg) contrast(0.95) saturate(0.7)" }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-[rgba(var(--gold-rgb),0.25)]" />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ FOOTER ------------------------------- */

function Footer() {
  return (
    <footer className="relative bg-background px-6 pt-20 pb-10">
      <div className="divider-diamond mx-auto mb-16 max-w-5xl">
        <span className="text-gold">◆</span>
      </div>

      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-4">
        <div className="lg:col-span-1">
          <p className="font-display text-3xl text-shimmer">Durrani&rsquo;s</p>
          <p className="mt-1 text-[10px] uppercase tracking-[0.35em] text-gold">
            Gold &amp; Diamonds
          </p>
          <p className="mt-6 max-w-xs text-sm font-light leading-relaxed text-muted-foreground">
            Bradford&rsquo;s premier jewellery showroom. Heritage,
            craftsmanship and the world&rsquo;s most coveted watches.
          </p>
        </div>

        <div>
          <h3 className="text-[11px] uppercase tracking-[0.3em] text-gold">Collections</h3>
          <ul className="mt-5 space-y-3 text-sm font-light text-foreground/80">
            <li><a href="#collections" className="hover:text-gold-light">Rings</a></li>
            <li><a href="#collections" className="hover:text-gold-light">Necklaces</a></li>
            <li><a href="#collections" className="hover:text-gold-light">Bridal Sets</a></li>
            <li><a href="#watches" className="hover:text-gold-light">Watches</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-[11px] uppercase tracking-[0.3em] text-gold">Company</h3>
          <ul className="mt-5 space-y-3 text-sm font-light text-foreground/80">
            <li><a href="#about" className="hover:text-gold-light">Our Story</a></li>
            <li><a href="#bridal" className="hover:text-gold-light">Bespoke</a></li>
            <li><a href="#testimonials" className="hover:text-gold-light">Reviews</a></li>
            <li><a href="#contact" className="hover:text-gold-light">Visit Us</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-[11px] uppercase tracking-[0.3em] text-gold">Connect</h3>
          <ul className="mt-5 space-y-3 text-sm font-light text-foreground/80">
            <li><a href="tel:01274009169" className="hover:text-gold-light">01274 009169</a></li>
            <li><a href="mailto:info@durranis.co.uk" className="hover:text-gold-light">info@durranis.co.uk</a></li>
            <li>
              <a
                href="https://www.instagram.com/durranisgoldanddiamonds"
                target="_blank"
                rel="noreferrer"
                className="hover:text-gold-light"
              >
                @durranisgoldanddiamonds
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-16 max-w-7xl border-t border-gold pt-8 text-center">
        <div
          aria-hidden
          className="mx-auto mb-6 h-3 w-full max-w-2xl opacity-30"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, rgb(var(--gold-rgb)) 0 1px, transparent 1px 8px), repeating-linear-gradient(-45deg, rgb(var(--gold-rgb)) 0 1px, transparent 1px 8px)",
          }}
        />
        <p className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
          © 2025 Durrani&rsquo;s Gold &amp; Diamond Ltd · Company No. 12611023 · All rights reserved
        </p>
      </div>
    </footer>
  );
}
