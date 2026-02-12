"use client"

import { useState } from "react"
import { X, CalendarDays, Users, ArrowRight, Check } from "lucide-react"

interface ReservationFormProps {
  destination: {
    title: string
    subtitle: string
    duration: string
  }
  onClose: () => void
}

export function ReservationForm({ destination, onClose }: ReservationFormProps) {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    travelers: "1",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-background/80 backdrop-blur-sm"
        onClick={onClose}
        onKeyDown={(e) => e.key === "Escape" && onClose()}
        role="button"
        tabIndex={0}
        aria-label="Fermer"
      />

      <div className="relative w-full max-w-md animate-fade-in-up overflow-hidden rounded-xl border border-border bg-card shadow-2xl">
        <div className="flex items-center justify-between border-b border-border px-6 py-4">
          <div>
            <h3 className="font-serif text-lg text-foreground">
              {destination.title}
            </h3>
            <p className="text-[11px] tracking-[0.2em] uppercase text-primary">
              {destination.subtitle} &middot; {destination.duration}
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="flex h-8 w-8 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-foreground/20 hover:text-foreground"
            aria-label="Fermer"
          >
            <X className="h-3.5 w-3.5" />
          </button>
        </div>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-6">
            <div>
              <label
                htmlFor="res-name"
                className="mb-1.5 block text-[11px] font-medium tracking-widest uppercase text-muted-foreground"
              >
                Nom complet
              </label>
              <input
                id="res-name"
                type="text"
                required
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-primary/40 focus:outline-none"
                placeholder="Jean Dupont"
              />
            </div>

            <div>
              <label
                htmlFor="res-email"
                className="mb-1.5 block text-[11px] font-medium tracking-widest uppercase text-muted-foreground"
              >
                Adresse e-mail
              </label>
              <input
                id="res-email"
                type="email"
                required
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-primary/40 focus:outline-none"
                placeholder="jean@example.com"
              />
            </div>

            <div className="flex gap-3">
              <div className="flex-1">
                <label
                  htmlFor="res-date"
                  className="mb-1.5 block text-[11px] font-medium tracking-widest uppercase text-muted-foreground"
                >
                  <CalendarDays className="mr-1 inline h-3 w-3" />
                  Date de depart
                </label>
                <input
                  id="res-date"
                  type="date"
                  required
                  value={formData.date}
                  onChange={(e) =>
                    setFormData({ ...formData, date: e.target.value })
                  }
                  className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground focus:border-primary/40 focus:outline-none"
                />
              </div>
              <div className="w-28">
                <label
                  htmlFor="res-travelers"
                  className="mb-1.5 block text-[11px] font-medium tracking-widest uppercase text-muted-foreground"
                >
                  <Users className="mr-1 inline h-3 w-3" />
                  Voyageurs
                </label>
                <select
                  id="res-travelers"
                  value={formData.travelers}
                  onChange={(e) =>
                    setFormData({ ...formData, travelers: e.target.value })
                  }
                  className="w-full appearance-none rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground focus:border-primary/40 focus:outline-none"
                >
                  {[1, 2, 3, 4, 5, 6].map((n) => (
                    <option key={n} value={n}>
                      {n}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label
                htmlFor="res-message"
                className="mb-1.5 block text-[11px] font-medium tracking-widest uppercase text-muted-foreground"
              >
                Message (optionnel)
              </label>
              <textarea
                id="res-message"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                rows={3}
                className="w-full resize-none rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-primary/40 focus:outline-none"
                placeholder="Des preferences particulieres ?"
              />
            </div>

            <button
              type="submit"
              className="mt-1 flex items-center justify-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-all duration-300 hover:opacity-90"
            >
              Confirmer la reservation
              <ArrowRight className="h-3.5 w-3.5" />
            </button>
          </form>
        ) : (
          <div className="flex flex-col items-center gap-4 p-8 text-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
              <Check className="h-6 w-6" />
            </div>
            <div>
              <h4 className="font-serif text-lg text-foreground">
                Reservation confirmee
              </h4>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Merci {formData.name.split(" ")[0]}. Vous recevrez les details
                de votre voyage vers{" "}
                <span className="text-primary">{destination.title}</span> par
                e-mail.
              </p>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="mt-2 inline-flex items-center justify-center rounded-lg border border-border px-5 py-2.5 text-sm text-muted-foreground transition-all duration-300 hover:border-foreground/20 hover:text-foreground"
            >
              Fermer
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
