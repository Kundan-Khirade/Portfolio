"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Download, Github, Linkedin, Twitter } from "lucide-react"
import Link from "next/link"
import { scrollToElement } from "@/utils/scroll-utils"

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="absolute inset-0 hero-gradient z-0"></div>

      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center z-10">
        <div
          className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Hi, I'm <span className="gradient-text">Kundan Khirade</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-muted-foreground">UI/UX Designer | Graphic Designer</h2>
          <p className="text-lg mb-8 max-w-lg">
          I specialize in transforming ideas into clean, functional designs that solve real problems. With 4+ years of collective experience, I’ve designed and launched mobile and web apps, and improved usability through thoughtful UX decisions.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="group" onClick={() => scrollToElement("projects")}>
              View My Work
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button size="lg" variant="outline" className="group">
              Download CV
              <Download className="ml-2 h-4 w-4 transition-transform group-hover:translate-y-1" />
            </Button>
          </div>

          <div className="flex items-center gap-4 mt-8">
            <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon" className="rounded-full hover:text-primary">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Button>
            </Link>
            <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon" className="rounded-full hover:text-primary">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </Link>
            <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon" className="rounded-full hover:text-primary">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Button>
            </Link>
          </div>
        </div>

        <div
          className={`relative transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="relative w-full aspect-square max-w-md mx-auto">
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 to-pink-500/20 rounded-full blur-3xl"></div>
            <div className="relative z-10 w-full h-full rounded-2xl overflow-hidden border border-purple-500/20 glow">
              <Image
                src="/kundan-image.png"
                alt="Kundan Khirade"
                fill
                className="object-cover object-center"
                priority
              />
            </div>

            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 bg-background/80 backdrop-blur-sm p-3 rounded-lg border border-border shadow-lg">
              <div className="text-xs font-medium">Experience</div>
              <div className="text-xl font-bold">8+ Years</div>
            </div>

            <div className="absolute -bottom-4 -left-4 bg-background/80 backdrop-blur-sm p-3 rounded-lg border border-border shadow-lg">
              <div className="text-xs font-medium">Projects</div>
              <div className="text-xl font-bold">50+</div>
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={() => scrollToElement("about")}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center cursor-pointer"
      >
        <div className="text-sm font-medium mb-2">Scroll Down</div>
        <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-primary rounded-full animate-bounce"></div>
        </div>
      </button>
    </section>
  )
}
