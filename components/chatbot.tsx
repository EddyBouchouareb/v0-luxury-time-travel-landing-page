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
      text: "Welcome to Chronos Voyages. How may I assist you with your temporal journey?",
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
        throw new Error(data.error || "Failed to get response")
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
          text: "I apologize for the inconvenience. Our temporal communication systems are experiencing a disruption. Please try again shortly.",
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
        <div className="absolute bottom-16 right-0 w-[340px] sm:w-[380px] overflow-hidden rounded-2xl border border-border bg-card shadow-2xl shadow-background/50 animate-fade-in-up">
          <div className="flex items-center justify-between border-b border-border bg-secondary/50 px-5 py-4">
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full border border-gold/30 bg-gold/10">
                <MessageCircle className="h-4 w-4 text-gold" />
              </div>
              <div>
                <p className="text-sm font-medium text-foreground">
                  Chronos Assistant
                </p>
                <p className="text-[10px] tracking-wider text-gold">Online</p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="rounded-full p-1.5 text-muted-foreground transition-colors hover:text-foreground"
              aria-label="Close chat"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          <div
            ref={scrollRef}
            className="flex flex-col gap-3 p-4 h-[320px] overflow-y-auto"
          >
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                  msg.sender === "bot"
                    ? "self-start bg-secondary text-foreground rounded-bl-md"
                    : "self-end bg-gold text-background rounded-br-md"
                }`}
              >
                {msg.text}
              </div>
            ))}
            {isLoading && (
              <div className="self-start flex items-center gap-2 rounded-2xl rounded-bl-md bg-secondary px-4 py-3">
                <Loader2 className="h-4 w-4 animate-spin text-gold" />
                <span className="text-xs text-muted-foreground">
                  Composing response...
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
                placeholder="Ask about your journey..."
                disabled={isLoading}
                className="flex-1 rounded-xl border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-gold/50 focus:outline-none focus:ring-1 focus:ring-gold/30 disabled:opacity-50"
              />
              <button
                type="submit"
                disabled={isLoading || !input.trim()}
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-gold text-background transition-all duration-200 hover:scale-105 hover:shadow-[0_0_20px_rgba(201,168,76,0.3)] disabled:opacity-50 disabled:hover:scale-100"
                aria-label="Send message"
              >
                {isLoading ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : (
                  <Send className="h-4 w-4" />
                )}
              </button>
            </form>
          </div>
        </div>
      )}

      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="group flex h-14 w-14 items-center justify-center rounded-full border border-gold/40 bg-card text-gold shadow-lg transition-all duration-300 hover:border-gold hover:shadow-[0_0_30px_rgba(201,168,76,0.2)] animate-pulse-glow"
        aria-label={open ? "Close chat" : "Open chat"}
      >
        {open ? (
          <X className="h-5 w-5" />
        ) : (
          <MessageCircle className="h-5 w-5" />
        )}
      </button>
    </div>
  )
}
