"use client"

import { ArrowDown } from "lucide-react"

export function Hero() {
  return (
    <section className="relative flex min-h-svh items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="h-full w-full object-cover opacity-20 dark:opacity-15"
          poster="/images/paris-1889.jpg"
        >
          <source
            src="https://cdn.coverr.co/videos/coverr-night-sky-time-lapse-1573/1080p.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-background/70" />
      </div>

      <div className="relative z-10 mx-auto max-w-2xl px-6 text-center">
        <p className="animate-fade-in-up mb-6 text-[11px] tracking-[0.5em] uppercase text-muted-foreground">
          Agence de voyage temporel
        </p>

        <h1 className="animate-fade-in-up-delay-1 font-serif text-4xl font-normal leading-[1.1] tracking-tight text-foreground sm:text-5xl md:text-6xl text-balance">
          Voyagez au-dela
          <span className="block italic text-primary">du temps</span>
        </h1>

        <p className="animate-fade-in-up-delay-2 mx-auto mt-8 max-w-md text-[15px] leading-relaxed text-muted-foreground">
          Des voyages exclusifs vers les moments les plus extraordinaires
          de l{"'"}histoire.
        </p>

        <div className="animate-fade-in-up-delay-2 mt-10">
          <a
            href="#destinations"
            className="inline-flex items-center gap-2 rounded-full border border-foreground/15 px-7 py-3 text-[12px] font-medium tracking-widest uppercase text-foreground transition-all duration-300 hover:border-primary hover:text-primary"
          >
            Decouvrir
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 z-10 -translate-x-1/2">
        <a
          href="#destinations"
          className="text-muted-foreground/30 transition-colors duration-300 hover:text-muted-foreground"
          aria-label="Defiler vers le bas"
        >
          <ArrowDown className="h-5 w-5 animate-bounce" />
        </a>
      </div>
    </section>
  )
}
