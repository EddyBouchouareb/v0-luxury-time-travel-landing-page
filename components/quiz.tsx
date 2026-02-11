"use client"

import { useState, useRef, useEffect } from "react"
import { Compass, ArrowRight, RotateCcw, Sparkles } from "lucide-react"

interface Question {
  question: string
  options: { label: string; value: "paris" | "florence" | "cretaceous" }[]
}

const questions: Question[] = [
  {
    question: "Qu'est-ce qui vous attire le plus en voyage ?",
    options: [
      { label: "La culture et l'innovation", value: "paris" },
      { label: "L'aventure et la decouverte", value: "cretaceous" },
      { label: "L'art et l'elegance", value: "florence" },
    ],
  },
  {
    question: "Quelle epoque vous fascine le plus ?",
    options: [
      { label: "L'histoire moderne", value: "paris" },
      { label: "Les temps anciens", value: "cretaceous" },
      { label: "La Renaissance", value: "florence" },
    ],
  },
  {
    question: "Quel environnement preferez-vous ?",
    options: [
      { label: "Urbain et cosmopolite", value: "paris" },
      { label: "La nature sauvage", value: "cretaceous" },
      { label: "Des rues pleines d'art", value: "florence" },
    ],
  },
  {
    question: "Que reveriez-vous de voir de vos propres yeux ?",
    options: [
      { label: "Des monuments iconiques en construction", value: "paris" },
      { label: "La faune prehistorique", value: "cretaceous" },
      { label: "Des chefs-d'oeuvre en creation", value: "florence" },
    ],
  },
]

const destinations = {
  paris: {
    name: "Paris 1889",
    tagline: "La Ville Lumiere a son apogee.",
    description:
      "Assistez au devoilement de la Tour Eiffel pendant l'Exposition Universelle. Flandez le long de la Seine tandis que l'histoire se deroule autour de vous.",
  },
  florence: {
    name: "Florence 1504",
    tagline: "La ou le genie a faconne le monde.",
    description:
      "Parcourez les rues aux cotes de Michel-Ange et de Vinci. Assistez au devoilement du David et dinez dans les palais des Medicis.",
  },
  cretaceous: {
    name: "Cretace -65M",
    tagline: "65 millions d'annees avant tout.",
    description:
      "Tenez-vous la ou aucun humain ne s'est jamais tenu. Observez des creatures colossales parcourir de vastes paysages primordiaux.",
  },
}

export function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<("paris" | "florence" | "cretaceous")[]>([])
  const [result, setResult] = useState<"paris" | "florence" | "cretaceous" | null>(null)
  const [showResult, setShowResult] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.15 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const handleAnswer = (value: "paris" | "florence" | "cretaceous") => {
    const newAnswers = [...answers, value]
    setAnswers(newAnswers)

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1)
    } else {
      const counts = { paris: 0, florence: 0, cretaceous: 0 }
      for (const a of newAnswers) counts[a]++
      const best = Object.entries(counts).sort(
        (a, b) => b[1] - a[1]
      )[0][0] as "paris" | "florence" | "cretaceous"
      setResult(best)
      setTimeout(() => setShowResult(true), 300)
    }
  }

  const handleReset = () => {
    setCurrentQuestion(0)
    setAnswers([])
    setResult(null)
    setShowResult(false)
  }

  const progress = result ? 100 : (currentQuestion / questions.length) * 100

  return (
    <section ref={sectionRef} id="quiz" className="py-24 md:py-32">
      <div
        className={`mx-auto max-w-xl px-6 transition-all duration-700 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}
      >
        <div className="mb-12 text-center">
          <div className="mx-auto mb-4 flex h-10 w-10 items-center justify-center rounded-full border border-primary/30 bg-primary/10">
            <Compass className="h-5 w-5 text-primary" />
          </div>
          <h2 className="font-serif text-2xl text-foreground md:text-3xl text-balance">
            Trouvez votre destination
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Quatre questions pour decouvrir votre voyage ideal.
          </p>
        </div>

        <div className="overflow-hidden rounded-xl border border-border bg-card">
          <div className="h-0.5 w-full bg-secondary">
            <div
              className="h-full bg-primary transition-all duration-500 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>

          <div className="p-6 md:p-8">
            {!result ? (
              <div key={currentQuestion}>
                <p className="mb-1 text-[11px] font-medium uppercase tracking-widest text-primary">
                  {"Question "}
                  {currentQuestion + 1}
                  {" sur "}
                  {questions.length}
                </p>
                <h3 className="mb-6 font-serif text-lg text-foreground md:text-xl">
                  {questions[currentQuestion].question}
                </h3>
                <div className="flex flex-col gap-2.5">
                  {questions[currentQuestion].options.map((option) => (
                    <button
                      key={option.label}
                      type="button"
                      onClick={() => handleAnswer(option.value)}
                      className="group flex items-center justify-between rounded-lg border border-border px-5 py-3.5 text-left text-foreground transition-all duration-300 hover:border-primary/40 hover:bg-primary/5"
                    >
                      <span className="text-sm">{option.label}</span>
                      <ArrowRight className="h-3.5 w-3.5 text-muted-foreground transition-all duration-300 group-hover:translate-x-0.5 group-hover:text-primary" />
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              <div
                className={`transition-all duration-500 ${
                  showResult ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                }`}
              >
                <div className="mb-4 flex items-center gap-2">
                  <Sparkles className="h-4 w-4 text-primary" />
                  <span className="text-[11px] font-medium uppercase tracking-widest text-primary">
                    Votre voyage ideal
                  </span>
                </div>
                <h3 className="mb-1 font-serif text-xl text-foreground md:text-2xl">
                  {destinations[result].name}
                </h3>
                <p className="mb-3 font-serif text-sm italic text-primary/80">
                  {destinations[result].tagline}
                </p>
                <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
                  {destinations[result].description}
                </p>
                <div className="flex flex-col gap-2.5 sm:flex-row">
                  <button
                    type="button"
                    className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-all duration-300 hover:opacity-90"
                  >
                    Reserver ce voyage
                    <ArrowRight className="h-3.5 w-3.5" />
                  </button>
                  <button
                    type="button"
                    onClick={handleReset}
                    className="inline-flex items-center justify-center gap-2 rounded-lg border border-border px-5 py-2.5 text-sm text-muted-foreground transition-all duration-300 hover:border-foreground/20 hover:text-foreground"
                  >
                    <RotateCcw className="h-3.5 w-3.5" />
                    Recommencer
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
