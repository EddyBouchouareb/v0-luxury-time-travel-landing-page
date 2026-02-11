"use client"

import { useEffect, useRef, useState } from "react"

const steps = [
  {
    number: "01",
    title: "Consultation",
    description:
      "Meet with your personal temporal concierge to select your destination era, customize your itinerary, and prepare for the journey ahead.",
  },
  {
    number: "02",
    title: "Preparation",
    description:
      "Receive period-appropriate attire, cultural briefings, and language preparation. Our historians ensure you are fully equipped for immersion.",
  },
  {
    number: "03",
    title: "Temporal Transit",
    description:
      "Board your private Chronosphere for a seamless transition through time. The journey itself is an experience of breathtaking beauty.",
  },
  {
    number: "04",
    title: "Immersion",
    description:
      "Live history. Dine with legends, witness pivotal moments, and collect memories that transcend the boundaries of ordinary existence.",
  },
]

export function Experience() {
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
    <section
      id="experience"
      className="relative py-24 lg:py-32 border-t border-border"
      ref={sectionRef}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div
          className={`mx-auto max-w-2xl text-center transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <p className="text-xs tracking-[0.35em] uppercase text-gold">
            The Journey
          </p>
          <h2 className="mt-4 font-serif text-3xl text-foreground md:text-5xl text-balance">
            How Your Voyage Unfolds
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            From initial consultation to your return, every phase is orchestrated
            with precision and care.
          </p>
        </div>

        <div className="relative mt-20">
          <div className="absolute left-8 top-0 bottom-0 hidden w-px bg-gradient-to-b from-transparent via-gold/20 to-transparent md:left-1/2 md:block" />

          <div className="flex flex-col gap-16">
            {steps.map((step, i) => (
              <div
                key={step.number}
                className={`relative flex flex-col gap-6 md:flex-row md:items-center transition-all duration-700 ${
                  i % 2 !== 0 ? "md:flex-row-reverse" : ""
                } ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                style={{ transitionDelay: `${i * 200 + 200}ms` }}
              >
                <div className={`flex-1 ${i % 2 !== 0 ? "md:text-left" : "md:text-right"}`}>
                  <span className="font-serif text-5xl text-gold/20">{step.number}</span>
                  <h3 className="mt-2 font-serif text-2xl text-foreground">{step.title}</h3>
                  <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground inline-block">
                    {step.description}
                  </p>
                </div>

                <div className="relative z-10 hidden md:flex items-center justify-center">
                  <div className="flex h-4 w-4 items-center justify-center rounded-full border border-gold/50 bg-background">
                    <div className="h-1.5 w-1.5 rounded-full bg-gold" />
                  </div>
                </div>

                <div className="flex-1" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
