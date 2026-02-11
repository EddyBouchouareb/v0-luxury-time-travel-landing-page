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
          className="h-full w-full object-cover opacity-30 dark:opacity-20"
          poster="/images/paris-1889.jpg"
        >
          <source
            src="https://cdn.coverr.co/videos/coverr-night-sky-time-lapse-1573/1080p.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-background/60 dark:bg-background/50" />
      </div>

      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
        <p className="animate-fade-in-up mb-8 text-[11px] tracking-[0.4em] uppercase text-muted-foreground">
          Agence de voyage temporel
        </p>

        <h1 className="animate-fade-in-up-delay-1 font-serif text-4xl font-normal leading-[1.1] tracking-tight text-foreground sm:text-5xl md:text-7xl text-balance">
          Voyagez au-dela
          <br />
          du <span className="italic text-primary">temps</span>
        </h1>

        <p className="animate-fade-in-up-delay-2 mx-auto mt-8 max-w-lg text-base leading-relaxed text-muted-foreground">
          Des voyages exclusifs vers les moments les plus extraordinaires
          de l{"'"}histoire. Vivez le passe, en personne.
        </p>

        <div className="animate-fade-in-up-delay-2 mt-12">
          <a
            href="#destinations"
            className="inline-flex items-center gap-2 rounded-full border border-foreground/15 px-8 py-3.5 text-[12px] font-medium tracking-widest uppercase text-foreground transition-all duration-300 hover:border-primary hover:text-primary"
          >
            Decouvrir nos destinations
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 z-10 -translate-x-1/2">
        <a
          href="#destinations"
          className="text-muted-foreground/40 transition-colors duration-300 hover:text-muted-foreground"
          aria-label="Defiler vers les destinations"
        >
          <ArrowDown className="h-5 w-5 animate-bounce" />
        </a>
      </div>
    </section>
  )
}
