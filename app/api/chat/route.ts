import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const { message } = await request.json()

    if (!message || typeof message !== "string") {
      return NextResponse.json(
        { error: "Message is required" },
        { status: 400 }
      )
    }

    const apiKey = process.env.AI_API_KEY
    const apiBase = process.env.AI_API_BASE
    const model = process.env.AI_MODEL

    if (!apiKey || !apiBase || !model) {
      return NextResponse.json(
        { error: "AI service is not configured" },
        { status: 500 }
      )
    }

    const response = await fetch(`${apiBase}/chat/completions`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model,
        messages: [
          {
            role: "system",
            content:
              "You are the luxury assistant of Chronos Voyages, an exclusive time travel agency. Guide clients to choose between Paris 1889, Florence 1504 and the Cretaceous period (-65 million years). Tone: elegant, professional, immersive. Invent premium prices. Keep responses concise (2-3 sentences max).",
          },
          {
            role: "user",
            content: message,
          },
        ],
      }),
    })

    if (!response.ok) {
      const errorText = await response.text()
      console.error("OpenRouter API error:", response.status, errorText)
      return NextResponse.json(
        { error: "Failed to get AI response" },
        { status: 502 }
      )
    }

    const data = await response.json()
    const assistantMessage =
      data?.choices?.[0]?.message?.content ??
      "I apologize, I'm unable to respond at the moment. Please try again."

    return NextResponse.json({ message: assistantMessage })
  } catch (error) {
    console.error("Chat API error:", error)
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}
