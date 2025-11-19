"use client";

import Image from "next/image";
import { MainNav } from "@/components/navigation/main-nav";
import { useLanguage, type Copy } from "@/components/providers/language-provider";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80";
const MAP_EMBED =
  "https://www.google.com/maps/embed?pb=!1m0!3m2!1sen!2sde!4v1732041600000!5m2!1sen!2sde";
const MAP_DESTINATION = "https://goo.gl/maps/V7q1kGk81mTuDHTh6";

export function HomeView() {
  const { copy } = useLanguage();

  return (
    <div className="min-h-screen bg-(--bg) text-(--text)">
      <MainNav />
      <main className="mx-auto flex max-w-6xl flex-col gap-24 px-6 py-16">
        <HeroSection hero={copy.hero} />
        <HighlightsSection highlights={copy.highlights} />
        <ServicesSection services={copy.services} />
        <TestimonialsSection testimonials={copy.testimonials} />
        <GallerySection gallery={copy.gallery} />
        <MapSection map={copy.map} />
      </main>
    </div>
  );
}

function HeroSection({ hero }: { hero: Copy["hero"] }) {
  return (
    <section className="rounded-[32px] border border-(--border) bg-gradient-to-br from-slate-950/90 via-slate-900/70 to-sky-900/40 p-1 shadow-[0_20px_80px_rgba(0,0,0,0.45)]">
      <div className="rounded-[30px] border border-(--border) bg-(--bg-dark) px-8 py-10">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-7">
            <span className="inline-flex items-center gap-2 rounded-full border border-(--primary) px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-(--primary)">
              {hero.badge}
            </span>
            <div className="space-y-4">
              <h1 className="text-4xl font-black tracking-tight text-(--text-light) sm:text-5xl">
                {hero.title}
              </h1>
              <p className="text-lg text-(--text)">{hero.subtitle}</p>
              <p className="text-sm text-(--text)">
                {hero.description}
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href="#map"
                className="rounded-full bg-(--primary) px-6 py-3 text-sm font-semibold uppercase tracking-wide text-(--bg-dark) transition hover:brightness-110"
              >
                {hero.ctaPrimary}
              </a>
              <a
                href="#gallery"
                className="rounded-full border border-(--primary) px-6 py-3 text-sm font-semibold uppercase tracking-wide text-(--primary) transition hover:border-(--text-light) hover:text-(--text-light)"
              >
                {hero.ctaSecondary}
              </a>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {hero.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-(--border) bg-(--bg) px-5 py-4"
                >
                  <p className="text-3xl font-black text-(--text-light)">
                    {stat.value}
                  </p>
                  <p className="text-xs uppercase tracking-[0.3em] text-(--text)">
                    {stat.label}
                  </p>
                  <p className="text-xs text-(--text) opacity-80">{stat.detail}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-4">
            <div className="relative h-80 w-full overflow-hidden rounded-[28px] border border-(--border) bg-black">
              <Image
                src={HERO_IMAGE}
                alt="BMW in the RC-83 paint lab"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-center"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent" />
              <div className="absolute bottom-4 left-4 rounded-2xl border border-(--border) bg-(--bg) px-4 py-2 text-xs font-semibold uppercase tracking-[0.4em] text-(--text)">
                BMW M DNA
              </div>
            </div>
            <div className="rounded-2xl border border-(--border) bg-(--bg-light) p-5 text-sm text-(--text)">
              <p>
                Hand-selected pigments, PPG computer matching, and airflow monitored
                booths keep every BMW panel arrow straight. Your paint report and
                quality photos arrive after each session.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function HighlightsSection({
  highlights,
}: {
  highlights: Copy["highlights"];
}) {
  return (
    <section className="space-y-8" id="highlights">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.5em] text-(--secondary)">
            BMW DNA
          </p>
          <h2 className="mt-2 text-3xl font-bold text-(--text-light)">
            {highlights.title}
          </h2>
        </div>
        <p className="max-w-xl text-sm text-(--text)">{highlights.description}</p>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {highlights.items.map((item) => (
          <article
            key={item.title}
            className="group rounded-3xl border border-(--border) bg-(--bg-light) p-6 transition hover:border-(--primary)"
          >
            <div className="flex items-center gap-3">
              <span className="text-sm font-black uppercase tracking-[0.4em] text-(--primary)">
                {"///M"}
              </span>
              <h3 className="text-xl font-semibold text-(--text-light)">
                {item.title}
              </h3>
            </div>
            <p className="mt-3 text-sm text-(--text)">{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function ServicesSection({ services }: { services: Copy["services"] }) {
  return (
    <section className="space-y-8" id="services">
      <div className="space-y-3">
        <p className="text-xs font-bold uppercase tracking-[0.5em] text-(--secondary)">
          Services
        </p>
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <h2 className="text-3xl font-bold text-(--text-light)">{services.title}</h2>
          <p className="max-w-xl text-sm text-(--text)">{services.description}</p>
        </div>
      </div>
      <div className="grid gap-5 md:grid-cols-3">
        {services.sections.map((service) => (
          <article
            key={service.title}
            className="flex h-full flex-col rounded-3xl border border-(--border) bg-(--bg-dark) p-6"
          >
            <h3 className="text-xl font-semibold text-(--text-light)">
              {service.title}
            </h3>
            <p className="mt-3 flex-1 text-sm text-(--text)">{service.description}</p>
            <ul className="mt-4 space-y-2 text-sm text-(--text)">
              {service.features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-2 text-(--text)"
                >
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-(--primary)" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

function TestimonialsSection({
  testimonials,
}: {
  testimonials: Copy["testimonials"];
}) {
  return (
    <section className="space-y-8" id="testimonials">
      <div className="space-y-3">
        <p className="text-xs font-bold uppercase tracking-[0.5em] text-(--secondary)">
          Voices
        </p>
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-3xl font-bold text-(--text-light)">
              {testimonials.title}
            </h2>
            <p className="text-sm text-(--text)">{testimonials.description}</p>
          </div>
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {testimonials.items.map((item) => (
          <figure
            key={item.author}
            className="flex h-full flex-col rounded-3xl border border-(--border) bg-gradient-to-b from-slate-900/80 to-(--bg-dark) p-6"
          >
            <p className="text-sm italic text-(--text)">
              &quot;{item.quote}&quot;
            </p>
            <div className="mt-6">
              <figcaption className="text-base font-semibold text-(--text-light)">
                {item.author}
              </figcaption>
              <p className="text-xs uppercase tracking-[0.4em] text-(--text)">
                {item.car}
              </p>
            </div>
          </figure>
        ))}
      </div>
    </section>
  );
}

function GallerySection({ gallery }: { gallery: Copy["gallery"] }) {
  return (
    <section className="space-y-6" id="gallery">
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.5em] text-(--secondary)">
            Gallery
          </p>
          <h2 className="text-3xl font-bold text-(--text-light)">{gallery.title}</h2>
        </div>
        <p className="max-w-xl text-sm text-(--text)">{gallery.description}</p>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {gallery.images.map((image, index) => (
          <figure
            key={image.src}
            className={`relative overflow-hidden rounded-3xl border border-(--border) ${
              index === 0 ? "md:col-span-2 md:row-span-2" : ""
            }`}
          >
            <Image
              src={`${image.src}?auto=format&fit=crop&w=900&q=80`}
              alt={image.alt}
              width={image.width}
              height={image.height}
              className="h-full w-full object-cover"
              priority={index === 0}
            />
            <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent p-4 text-xs uppercase tracking-[0.4em] text-(--text-light)">
              BMW finish lab
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

function MapSection({ map }: { map: Copy["map"] }) {
  return (
    <section
      id="map"
      className="rounded-[32px] border border-(--border) bg-(--bg-dark) p-8 shadow-[0_10px_40px_rgba(0,0,0,0.4)]"
    >
      <div className="grid gap-8 lg:grid-cols-2">
        <div className="space-y-4">
          <p className="text-xs font-bold uppercase tracking-[0.5em] text-(--secondary)">
            Studio
          </p>
          <h2 className="text-3xl font-bold text-(--text-light)">{map.title}</h2>
          <p className="text-sm text-(--text)">{map.description}</p>
          <p className="text-xs uppercase tracking-[0.4em] text-(--text)">
            {map.note}
          </p>
          <a
            href={MAP_DESTINATION}
            target="_blank"
            rel="noreferrer"
            className="inline-flex max-w-max items-center gap-2 rounded-full border border-(--primary) px-5 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-(--primary) transition hover:border-(--text-light) hover:text-(--text-light)"
          >
            <span>{map.cta}</span>
            <svg
              className="h-4 w-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path d="M7 17 17 7" />
              <path d="m8 7h9v9" />
            </svg>
          </a>
        </div>
        <div className="overflow-hidden rounded-3xl border border-(--border)">
          <iframe
            title="RC-83 Garage map preview"
            src={MAP_EMBED}
            loading="lazy"
            className="h-[320px] w-full"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}

