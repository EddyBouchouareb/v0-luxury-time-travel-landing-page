"use client"

import { ChevronDown } from "lucide-react"

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="h-full w-full object-cover"
          poster="/images/paris-1889.jpg"
        >
          <source
            src="https://cdn.coverr.co/videos/coverr-night-sky-time-lapse-1573/1080p.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-background/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-transparent to-background/60" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        <div className="animate-fade-in-up">
          <p className="mb-6 text-xs tracking-[0.35em] uppercase text-gold md:text-sm">
            Est. 2087 &mdash; Licensed Temporal Operator
          </p>
        </div>

        <h1 className="animate-fade-in-up-delay-1 font-serif text-4xl font-light leading-tight tracking-tight text-foreground sm:text-5xl md:text-7xl lg:text-8xl text-balance">
          Travel Beyond
          <span className="block mt-2">
            <span className="text-gold italic">Time</span> Itself
          </span>
        </h1>

        <div className="animate-fade-in-up-delay-2 mx-auto mt-8 max-w-2xl">
          <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
            Curated journeys to history{"'"}s most extraordinary moments.
            Walk the streets of Renaissance Florence, witness the birth of the
            Eiffel Tower, or stand in awe before creatures that ruled the Earth.
          </p>
        </div>

        <div className="animate-fade-in-up-delay-3 mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href="#destinations"
            className="group inline-flex items-center gap-3 rounded-full bg-gold px-8 py-4 text-sm font-semibold tracking-wider uppercase text-background transition-all duration-300 hover:shadow-[0_0_40px_rgba(201,168,76,0.35)] hover:scale-105"
          >
            Explore Destinations
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              &rarr;
            </span>
          </a>
          <a
            href="#about"
            className="inline-flex items-center gap-2 rounded-full border border-border px-8 py-4 text-sm tracking-wider uppercase text-muted-foreground transition-all duration-300 hover:border-gold/50 hover:text-gold"
          >
            Learn More
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2">
        <a
          href="#destinations"
          className="flex flex-col items-center gap-2 text-muted-foreground transition-colors duration-300 hover:text-gold"
          aria-label="Scroll to destinations"
        >
          <span className="text-[10px] tracking-[0.3em] uppercase">Scroll</span>
          <ChevronDown className="h-4 w-4 animate-bounce" />
        </a>
      </div>
    </section>
  )
}
