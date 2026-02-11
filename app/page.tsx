import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Destinations } from "@/components/destinations"
import { About } from "@/components/about"
import { Experience } from "@/components/experience"
import { Quiz } from "@/components/quiz"
import { Chatbot } from "@/components/chatbot"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Destinations />
        <About />
        <Quiz />
        <Experience />
      </main>
      <Footer />
      <Chatbot />
    </>
  )
}
