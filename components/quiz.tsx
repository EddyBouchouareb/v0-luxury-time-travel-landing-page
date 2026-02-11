"use client"

import { useState, useRef, useEffect } from "react"
import { Compass, ArrowRight, RotateCcw, Sparkles } from "lucide-react"

interface Question {
  question: string
  options: { label: string; value: "paris" | "florence" | "cretaceous" }[]
}

const questions: Question[] = [
  {
    question: "What draws you most when you travel?",
    options: [
      { label: "Culture & Innovation", value: "paris" },
      { label: "Adventure & Discovery", value: "cretaceous" },
      { label: "Art & Elegance", value: "florence" },
    ],
  },
  {
    question: "Which era fascinates you the most?",
    options: [
      { label: "Modern History", value: "paris" },
      { label: "Ancient Times", value: "cretaceous" },
      { label: "The Renaissance", value: "florence" },
    ],
  },
  {
    question: "What kind of environment do you prefer?",
    options: [
      { label: "Urban & Cosmopolitan", value: "paris" },
      { label: "Wild Nature", value: "cretaceous" },
      { label: "Art-Filled Streets", value: "florence" },
    ],
  },
  {
    question: "What would you love to witness firsthand?",
    options: [
      { label: "Iconic Monuments Being Built", value: "paris" },
      { label: "Prehistoric Wildlife", value: "cretaceous" },
      { label: "Masterpieces Being Created", value: "florence" },
    ],
  },
]

const destinations = {
  paris: {
    name: "Paris 1889",
    tagline: "The City of Light at its most dazzling.",
    description:
      "Witness the unveiling of the Eiffel Tower during the World's Fair. Stroll along the Seine as history unfolds around you, surrounded by the grandeur of Belle Epoque elegance.",
  },
  florence: {
    name: "Florence 1504",
    tagline: "Where genius shaped the world.",
    description:
      "Walk the streets alongside Michelangelo and da Vinci. Watch the unveiling of David, dine in Medici palaces, and experience the creative explosion that defined Western civilization.",
  },
  cretaceous: {
    name: "Cretaceous Period",
    tagline: "65 million years before everything.",
    description:
      "Stand where no human has ever stood. Witness colossal creatures roam vast primordial landscapes in the ultimate adventure for the truly bold traveler.",
  },
}

export function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<
    ("paris" | "florence" | "cretaceous")[]
  >([])
  const [result, setResult] = useState<
    "paris" | "florence" | "cretaceous" | null
  >(null)
  const [showResult, setShowResult] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.15 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const handleAnswer = (value: "paris" | "florence" | "cretaceous") => {
    const newAnswers = [...answers, value]
    setAnswers(newAnswers)

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1)
    } else {
      const counts = { paris: 0, florence: 0, cretaceous: 0 }
      for (const a of newAnswers) {
        counts[a]++
      }
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

  const progress = result
    ? 100
    : (currentQuestion / questions.length) * 100

  return (
    <section
      ref={sectionRef}
      id="quiz"
      className="relative py-24 md:py-32"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/30 to-background" />

      <div
        className={`relative mx-auto max-w-3xl px-6 transition-all duration-700 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        <div className="mb-12 text-center md:mb-16">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full border border-gold/30 bg-gold/10">
            <Compass className="h-6 w-6 text-gold" />
          </div>
          <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Find Your Destination
          </h2>
          <p className="mt-3 text-muted-foreground">
            Answer four questions to discover your ideal temporal journey.
          </p>
        </div>

        <div className="overflow-hidden rounded-2xl border border-border bg-card">
          {/* Progress bar */}
          <div className="h-1 w-full bg-secondary">
            <div
              className="h-full bg-gold transition-all duration-500 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>

          <div className="p-8 md:p-10">
            {!result ? (
              <div key={currentQuestion}>
                <div className="mb-2 text-xs font-medium uppercase tracking-widest text-gold">
                  {"Question "}
                  {currentQuestion + 1}
                  {" of "}
                  {questions.length}
                </div>
                <h3 className="mb-8 font-serif text-xl font-semibold text-foreground md:text-2xl">
                  {questions[currentQuestion].question}
                </h3>
                <div className="flex flex-col gap-3">
                  {questions[currentQuestion].options.map((option) => (
                    <button
                      key={option.label}
                      type="button"
                      onClick={() => handleAnswer(option.value)}
                      className="group flex items-center justify-between rounded-xl border border-border bg-secondary/50 px-6 py-4 text-left text-foreground transition-all duration-300 hover:border-gold/50 hover:bg-gold/5 hover:shadow-[0_0_20px_rgba(201,168,76,0.08)]"
                    >
                      <span className="text-sm font-medium md:text-base">
                        {option.label}
                      </span>
                      <ArrowRight className="h-4 w-4 text-muted-foreground transition-all duration-300 group-hover:translate-x-1 group-hover:text-gold" />
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              <div
                className={`transition-all duration-500 ${
                  showResult
                    ? "translate-y-0 opacity-100"
                    : "translate-y-4 opacity-0"
                }`}
              >
                <div className="mb-6 flex items-center gap-2">
                  <Sparkles className="h-5 w-5 text-gold" />
                  <span className="text-xs font-medium uppercase tracking-widest text-gold">
                    Your Perfect Journey
                  </span>
                </div>
                <h3 className="mb-2 font-serif text-2xl font-bold text-foreground md:text-3xl">
                  {destinations[result].name}
                </h3>
                <p className="mb-4 font-serif text-lg italic text-gold/80">
                  {destinations[result].tagline}
                </p>
                <p className="mb-8 leading-relaxed text-muted-foreground">
                  {destinations[result].description}
                </p>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <button
                    type="button"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-gold px-6 py-3 text-sm font-semibold text-background transition-all duration-300 hover:shadow-[0_0_30px_rgba(201,168,76,0.3)]"
                  >
                    Reserve This Journey
                    <ArrowRight className="h-4 w-4" />
                  </button>
                  <button
                    type="button"
                    onClick={handleReset}
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-border px-6 py-3 text-sm font-medium text-muted-foreground transition-all duration-300 hover:border-gold/40 hover:text-foreground"
                  >
                    <RotateCcw className="h-4 w-4" />
                    Take Quiz Again
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
