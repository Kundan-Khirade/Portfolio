"use client"
import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Send } from "lucide-react"

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Handle form submission state for button UI
  const handleSubmit = () => {
    setIsSubmitting(true)
    // Form will naturally submit to formsubmit.co
    // This is just to update the button state
  }

  return (
    <form
      action="https://formsubmit.co/kkhirade25@gmail.com"
      method="POST"
      onSubmit={handleSubmit}
      className="space-y-4 w-full"
    >
      {/* Redirect after submission */}
      <input type="hidden" name="_next" value="https://your-website.com/thank-you" />

      {/* Disable captcha */}
      <input type="hidden" name="_captcha" value="false" />

      {/* Template subject */}
      <input type="hidden" name="_subject" value="New Contact Form Submission - Portfolio" />

      {/* Honeypot field to prevent spam */}
      <input type="text" name="_honey" style={{ display: "none" }} />

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name" className="text-sm font-medium">
            Name
          </Label>
          <Input id="name" name="name" placeholder="Your name" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email" className="text-sm font-medium">
            Email
          </Label>
          <Input id="email" name="email" type="email" placeholder="Your email" required />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="subject" className="text-sm font-medium">
          Subject
        </Label>
        <Input id="subject" name="subject" placeholder="Subject of your message" required />
      </div>

      <div className="space-y-2">
        <Label htmlFor="message" className="text-sm font-medium">
          Message
        </Label>
        <Textarea id="message" name="message" placeholder="Your message" className="min-h-[150px]" required />
      </div>

      <Button type="submit" className="w-full group" disabled={isSubmitting}>
        {isSubmitting ? "Sending..." : "Send Message"}
        <Send className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
      </Button>
    </form>
  )
}
