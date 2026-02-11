"use client"

import { useEffect, useRef, useState } from "react"
import { Shield, Compass, Sparkles, Users } from "lucide-react"

const features = [
  {
    icon: Shield,
    title: "Temporal Safety Guaranteed",
    description:
      "Our patented Chrono-Shield technology ensures complete isolation from the timeline. Observe history without altering it.",
  },
  {
    icon: Compass,
    title: "Expert Temporal Guides",
    description:
      "Every journey is led by PhD-level historians trained in temporal navigation and cultural immersion protocols.",
  },
  {
    icon: Sparkles,
    title: "Luxury Beyond Time",
    description:
      "From private temporal suites to era-authentic fine dining, every detail is crafted for the discerning traveler.",
  },
  {
    icon: Users,
    title: "Exclusive Access",
    description:
      "Limited to 12 travelers per journey. Experience history with the intimacy and privacy you deserve.",
  },
]

export function About() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" className="relative py-24 lg:py-32" ref={sectionRef}>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-gold/[0.02] blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          <div
            className={`transition-all duration-700 ${
              visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
            }`}
          >
            <p className="text-xs tracking-[0.35em] uppercase text-gold">
              About Chronos Voyages
            </p>
            <h2 className="mt-4 font-serif text-3xl text-foreground md:text-5xl text-balance">
              Redefining the Boundaries of Travel
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              Founded in 2087 by a consortium of quantum physicists and luxury
              hospitality visionaries, Chronos Voyages pioneered the concept of
              experiential time travel. We don{"'"}t just send you to the past
              &mdash; we immerse you in it.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Our proprietary temporal displacement technology, combined with
              decades of historical research, creates journeys that are as safe
              as they are extraordinary. Every moment is curated, every detail
              authenticated.
            </p>

            <div className="mt-10 flex items-center gap-12">
              <div>
                <p className="font-serif text-4xl text-gold">847</p>
                <p className="mt-1 text-xs tracking-wider uppercase text-muted-foreground">
                  Journeys Completed
                </p>
              </div>
              <div className="h-12 w-px bg-border" />
              <div>
                <p className="font-serif text-4xl text-gold">100%</p>
                <p className="mt-1 text-xs tracking-wider uppercase text-muted-foreground">
                  Safety Record
                </p>
              </div>
              <div className="hidden h-12 w-px bg-border sm:block" />
              <div className="hidden sm:block">
                <p className="font-serif text-4xl text-gold">2087</p>
                <p className="mt-1 text-xs tracking-wider uppercase text-muted-foreground">
                  Established
                </p>
              </div>
            </div>
          </div>

          <div
            className={`grid gap-6 sm:grid-cols-2 transition-all duration-700 delay-200 ${
              visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
            }`}
          >
            {features.map((feature, i) => {
              const Icon = feature.icon
              return (
                <div
                  key={feature.title}
                  className="group rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:border-gold/30 hover:shadow-[0_0_40px_rgba(201,168,76,0.05)]"
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-gold/20 bg-gold/5 transition-colors duration-300 group-hover:bg-gold/10">
                    <Icon className="h-5 w-5 text-gold" />
                  </div>
                  <h3 className="mt-4 text-sm font-semibold tracking-wide text-foreground">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
