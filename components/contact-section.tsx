"use client"

import { useInView } from "react-intersection-observer"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { AtSign, MapPin, Phone } from "lucide-react"
import ContactForm from "@/components/contact-form"

export default function ContactSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="contact" className="py-20" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Contact
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div
            className={`md:col-span-1 transition-all duration-700 delay-100 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <div className="space-y-6">
              <Card className="card-hover">
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <AtSign className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Email</h3>
                    <p className="text-muted-foreground text-sm mb-2">Feel free to email me</p>
                    <a href="mailto:kundan@example.com" className="text-primary hover:underline">
                      kundan@example.com
                    </a>
                  </div>
                </CardContent>
              </Card>

              <Card className="card-hover">
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Phone</h3>
                    <p className="text-muted-foreground text-sm mb-2">Call me directly</p>
                    <a href="tel:+919876543210" className="text-primary hover:underline">
                      +91 98765 43210
                    </a>
                  </div>
                </CardContent>
              </Card>

              <Card className="card-hover">
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Location</h3>
                    <p className="text-muted-foreground text-sm mb-2">Based in</p>
                    <p>NIT Hamirpur, Himachal Pradesh, India</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div
            className={`md:col-span-2 transition-all duration-700 delay-300 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <Card>
              <CardContent className="p-6">
                <ContactForm />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
