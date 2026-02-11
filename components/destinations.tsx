"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { Calendar, MapPin, Clock } from "lucide-react"

const destinations = [
  {
    title: "Paris, 1889",
    subtitle: "La Belle Epoque",
    description:
      "Witness the unveiling of the Eiffel Tower at the Exposition Universelle. Sip champagne with Gustave Eiffel himself atop his magnificent creation.",
    image: "/images/paris-1889.jpg",
    era: "19th Century",
    duration: "3 Days",
    location: "France",
    price: "From $48,000",
  },
  {
    title: "Florence, 1504",
    subtitle: "The Renaissance",
    description:
      "Stand before Michelangelo as he unveils David to the world. Walk the workshops of da Vinci and dine in the courts of the Medici.",
    image: "/images/florence-1504.jpg",
    era: "16th Century",
    duration: "5 Days",
    location: "Italy",
    price: "From $72,000",
  },
  {
    title: "Cretaceous, -65M",
    subtitle: "Age of Giants",
    description:
      "Experience Earth before humanity. Observe the magnificent creatures that ruled our planet from the safety of our temporal observation dome.",
    image: "/images/cretaceous.jpg",
    era: "Mesozoic Era",
    duration: "2 Days",
    location: "Pangaea",
    price: "From $125,000",
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
      className={`group relative overflow-hidden rounded-2xl border border-border bg-card transition-all duration-700 hover:border-gold/40 hover:shadow-[0_0_60px_rgba(201,168,76,0.08)] ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={destination.image || "/placeholder.svg"}
          alt={`${destination.title} - ${destination.subtitle}`}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />

        <div className="absolute left-4 top-4 flex items-center gap-2">
          <span className="rounded-full border border-gold/40 bg-background/80 px-3 py-1 text-[10px] font-medium tracking-widest uppercase text-gold backdrop-blur-sm">
            {destination.era}
          </span>
        </div>

        <div className="absolute bottom-4 right-4 text-right">
          <span className="text-xs tracking-wider text-gold/80">{destination.price}</span>
        </div>
      </div>

      <div className="relative p-6">
        <h3 className="font-serif text-2xl text-foreground">{destination.title}</h3>
        <p className="mt-1 text-xs tracking-widest uppercase text-gold">
          {destination.subtitle}
        </p>
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
          {destination.description}
        </p>

        <div className="mt-6 flex items-center gap-4 border-t border-border pt-5 text-xs text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <MapPin className="h-3.5 w-3.5 text-gold/60" />
            {destination.location}
          </span>
          <span className="flex items-center gap-1.5">
            <Clock className="h-3.5 w-3.5 text-gold/60" />
            {destination.duration}
          </span>
          <span className="flex items-center gap-1.5">
            <Calendar className="h-3.5 w-3.5 text-gold/60" />
            {destination.era}
          </span>
        </div>

        <a
          href="#"
          className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl border border-gold/30 bg-gold/5 py-3 text-sm font-medium tracking-wider uppercase text-gold transition-all duration-300 hover:bg-gold hover:text-background"
        >
          Reserve Journey
          <span className="transition-transform duration-300 group-hover:translate-x-1">
            &rarr;
          </span>
        </a>
      </div>
    </div>
  )
}

export function Destinations() {
  return (
    <section id="destinations" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs tracking-[0.35em] uppercase text-gold">
            Curated Experiences
          </p>
          <h2 className="mt-4 font-serif text-3xl text-foreground md:text-5xl text-balance">
            Signature Destinations
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Each journey is meticulously crafted by our team of temporal historians
            and luxury concierges to ensure an unparalleled experience.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {destinations.map((destination, i) => (
            <DestinationCard key={destination.title} destination={destination} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
