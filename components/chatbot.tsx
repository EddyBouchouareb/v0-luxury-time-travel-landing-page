"use client"

import { useState, useRef, useEffect } from "react"
import { MessageCircle, X, Send, Loader2 } from "lucide-react"

interface Message {
  id: number
  text: string
  sender: "bot" | "user"
}

export function Chatbot() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 0,
      text: "Bienvenue chez Chronos Voyages. Comment puis-je vous accompagner dans votre voyage temporel ?",
      sender: "bot",
    },
  ])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [messages, isLoading])

  const handleSend = async () => {
    if (!input.trim() || isLoading) return

    const userMessage: Message = {
      id: Date.now(),
      text: input.trim(),
      sender: "user",
    }
    setMessages((prev) => [...prev, userMessage])
    const userText = input.trim()
    setInput("")
    setIsLoading(true)

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userText }),
      })

      const data = await res.json()

      if (!res.ok) {
        throw new Error(data.error || "Erreur")
      }

      setMessages((prev) => [
        ...prev,
        { id: Date.now() + 1, text: data.message, sender: "bot" },
      ])
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          text: "Veuillez nous excuser, nos systemes de communication temporels rencontrent une perturbation. Reessayez dans un instant.",
          sender: "bot",
        },
      ])
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {open && (
        <div className="absolute bottom-16 right-0 w-[320px] sm:w-[360px] overflow-hidden rounded-xl border border-border bg-background shadow-2xl shadow-foreground/5 animate-fade-in-up">
          <div className="flex items-center justify-between border-b border-border px-5 py-4">
            <div>
              <p className="text-sm font-medium text-foreground">
                Chronos
              </p>
              <p className="text-[10px] tracking-wider text-primary">
                En ligne
              </p>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="text-muted-foreground transition-colors hover:text-foreground"
              aria-label="Fermer le chat"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          <div
            ref={scrollRef}
            className="flex flex-col gap-3 p-4 h-[300px] overflow-y-auto"
          >
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`max-w-[82%] rounded-xl px-4 py-2.5 text-[13px] leading-relaxed ${
                  msg.sender === "bot"
                    ? "self-start bg-card text-foreground"
                    : "self-end bg-primary text-primary-foreground"
                }`}
              >
                {msg.text}
              </div>
            ))}
            {isLoading && (
              <div className="self-start flex items-center gap-2 rounded-xl bg-card px-4 py-3">
                <Loader2 className="h-3.5 w-3.5 animate-spin text-primary" />
                <span className="text-[11px] text-muted-foreground">
                  Redaction en cours...
                </span>
              </div>
            )}
          </div>

          <div className="border-t border-border p-3">
            <form
              onSubmit={(e) => {
                e.preventDefault()
                handleSend()
              }}
              className="flex items-center gap-2"
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Posez votre question..."
                disabled={isLoading}
                className="flex-1 rounded-lg border border-border bg-card px-4 py-2.5 text-[13px] text-foreground placeholder:text-muted-foreground focus:border-primary/40 focus:outline-none disabled:opacity-50"
              />
              <button
                type="submit"
                disabled={isLoading || !input.trim()}
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground transition-opacity duration-200 disabled:opacity-40"
                aria-label="Envoyer"
              >
                {isLoading ? (
                  <Loader2 className="h-3.5 w-3.5 animate-spin" />
                ) : (
                  <Send className="h-3.5 w-3.5" />
                )}
              </button>
            </form>
          </div>
        </div>
      )}

      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex h-12 w-12 items-center justify-center rounded-full border border-border bg-background text-primary shadow-lg transition-all duration-300 hover:border-primary/40 animate-pulse-glow"
        aria-label={open ? "Fermer le chat" : "Ouvrir le chat"}
      >
        {open ? (
          <X className="h-4 w-4" />
        ) : (
          <MessageCircle className="h-4 w-4" />
        )}
      </button>
    </div>
  )
}
