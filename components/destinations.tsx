"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

const destinations = [
  {
    title: "Paris, 1889",
    subtitle: "La Belle Epoque",
    description:
      "Assistez au devoilement de la Tour Eiffel lors de l'Exposition Universelle.",
    image: "/images/paris-1889.jpg",
    duration: "3 jours",
  },
  {
    title: "Florence, 1504",
    subtitle: "La Renaissance",
    description:
      "Tenez-vous devant Michel-Ange au moment ou il revele David au monde.",
    image: "/images/florence-1504.jpg",
    duration: "5 jours",
  },
  {
    title: "Cretace, -65M",
    subtitle: "L'ere des Geants",
    description:
      "Observez les creatures colossales qui regnaient sur notre planete.",
    image: "/images/cretaceous.jpg",
    duration: "2 jours",
  },
]

function DestinationCard({
  destination,
  index,
}: {
  destination: (typeof destinations)[0]
  index: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`group transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="relative aspect-[4/5] overflow-hidden rounded-lg">
        <Image
          src={destination.image || "/placeholder.svg"}
          alt={`${destination.title} - ${destination.subtitle}`}
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <div className="absolute inset-0 bg-foreground/5 transition-all duration-500 group-hover:bg-foreground/0" />

        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-5">
          <span className="text-[10px] tracking-[0.3em] uppercase text-white/70">
            {destination.duration}
          </span>
        </div>
      </div>

      <div className="mt-4">
        <h3 className="font-serif text-lg text-foreground">{destination.title}</h3>
        <p className="mt-0.5 text-[11px] tracking-[0.2em] uppercase text-primary">
          {destination.subtitle}
        </p>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          {destination.description}
        </p>
        <a
          href="#quiz"
          className="mt-3 inline-flex items-center gap-1.5 text-[12px] tracking-wider uppercase text-foreground/70 transition-colors duration-300 hover:text-primary"
        >
          Reserver
          <ArrowRight className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-0.5" />
        </a>
      </div>
    </div>
  )
}

export function Destinations() {
  return (
    <section id="destinations" className="py-24 lg:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-16">
          <p className="text-[11px] tracking-[0.4em] uppercase text-muted-foreground">
            Nos destinations
          </p>
          <h2 className="mt-3 font-serif text-2xl text-foreground md:text-3xl text-balance">
            Trois epoques, trois mondes
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3 md:gap-6">
          {destinations.map((d, i) => (
            <DestinationCard key={d.title} destination={d} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
