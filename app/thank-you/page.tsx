import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle, ArrowLeft } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function ThankYouPage() {
  return (
    <main className="min-h-screen grid-pattern noise-bg">
      <Navbar />

      <section className="py-32">
        <div className="container mx-auto px-4 flex flex-col items-center text-center">
          <div className="w-20 h-20 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mb-6">
            <CheckCircle className="h-10 w-10 text-green-600 dark:text-green-400" />
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-4">Thank You!</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mb-8">
            Your message has been sent successfully. I'll get back to you as soon as possible.
          </p>

          <Link href="/">
            <Button className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Homepage
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
