"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

const destinations = [
  {
    title: "Paris, 1889",
    subtitle: "La Belle Epoque",
    description:
      "Assistez au devoilement de la Tour Eiffel lors de l'Exposition Universelle. Traversez le Paris de la fin du XIXe siecle dans toute sa splendeur.",
    image: "/images/paris-1889.jpg",
    detail: "3 jours",
  },
  {
    title: "Florence, 1504",
    subtitle: "La Renaissance",
    description:
      "Tenez-vous devant Michel-Ange au moment ou il revele David au monde. Parcourez les ateliers de Leonard de Vinci et les palais des Medicis.",
    image: "/images/florence-1504.jpg",
    detail: "5 jours",
  },
  {
    title: "Cretace, -65M",
    subtitle: "L'ere des Geants",
    description:
      "Decouvrez la Terre avant l'humanite. Observez les creatures colossales qui regnaient sur notre planete depuis notre dome d'observation temporel.",
    image: "/images/cretaceous.jpg",
    detail: "2 jours",
  },
]

function DestinationCard({
  destination,
  index,
}: {
  destination: (typeof destinations)[0]
  index: number
}) {
  const cardRef = useRef<HTMLDivElement>(null)
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
    if (cardRef.current) observer.observe(cardRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={cardRef}
      className={`group cursor-pointer transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      <div className="relative aspect-[3/4] overflow-hidden rounded-lg">
        <Image
          src={destination.image || "/placeholder.svg"}
          alt={`${destination.title} - ${destination.subtitle}`}
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <div className="absolute inset-0 bg-foreground/10 transition-all duration-500 group-hover:bg-foreground/0" />
      </div>

      <div className="mt-5">
        <div className="flex items-baseline justify-between">
          <h3 className="font-serif text-xl text-foreground">{destination.title}</h3>
          <span className="text-[11px] tracking-wider uppercase text-muted-foreground">
            {destination.detail}
          </span>
        </div>
        <p className="mt-1 text-[11px] tracking-[0.25em] uppercase text-primary">
          {destination.subtitle}
        </p>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          {destination.description}
        </p>
        <a
          href="#"
          className="mt-4 inline-flex items-center gap-2 text-[12px] tracking-widest uppercase text-foreground transition-colors duration-300 hover:text-primary"
        >
          Reserver
          <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
        </a>
      </div>
    </div>
  )
}

export function Destinations() {
  return (
    <section id="destinations" className="py-28 lg:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-20">
          <p className="text-[11px] tracking-[0.4em] uppercase text-muted-foreground">
            Nos destinations
          </p>
          <h2 className="mt-3 font-serif text-3xl text-foreground md:text-4xl text-balance">
            Trois epoques, trois mondes
          </h2>
        </div>

        <div className="grid gap-10 md:grid-cols-3 md:gap-8">
          {destinations.map((destination, i) => (
            <DestinationCard key={destination.title} destination={destination} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
