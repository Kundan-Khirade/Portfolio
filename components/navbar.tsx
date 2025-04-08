"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import { Menu, X } from "lucide-react"
import { scrollToElement } from "@/utils/scroll-utils"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-md py-3 shadow-md" : "py-5"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold gradient-text">
          Kundan
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {["about", "experience", "projects", "skills", "contact"].map((section) => (
            <button
              key={section}
              onClick={() => scrollToElement(section)}
              className="text-sm font-medium hover:text-primary transition-colors capitalize"
            >
              {section}
            </button>
          ))}
          <Button variant="default" size="sm" className="ml-4">
            Resume
          </Button>
          <ModeToggle />
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex items-center md:hidden">
          <ModeToggle />
          <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)} className="ml-2">
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md shadow-lg p-4">
          <nav className="flex flex-col space-y-4">
            {["about", "experience", "projects", "skills", "contact"].map((section) => (
              <button
                key={section}
                onClick={() => {
                  scrollToElement(section)
                  setIsMenuOpen(false)
                }}
                className="text-sm font-medium hover:text-primary transition-colors p-2 text-left capitalize"
              >
                {section}
              </button>
            ))}
            <Button variant="default" size="sm" className="w-full">
              Resume
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
