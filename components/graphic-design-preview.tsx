"use client"

import { useInView } from "react-intersection-observer"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ExternalLink, ChevronRight, Eye, ArrowRight } from "lucide-react"
import { useRouter } from "next/navigation"
import { useState, useEffect, useRef } from "react"
import { motion, useMotionValue, useTransform, AnimatePresence } from "framer-motion"

// Featured graphic designs for the home page preview
const featuredDesigns = [
  {
    id: 1,
    title: "YouTube Thumbnail",
    category: "Poster Design",
    thumbnail: "Youtube Thumbnail 1.jpg",
  },
  {
    id: 2,
    title: "YouTube Thumbnail",
    category: "Poster Design",
    thumbnail: "Youtube Thumbnail 2.jpg",
  },
  {
    id: 3,
    title: "YouTube Thumbnail",
    category: "Poster Design",
    thumbnail: "Youtube Thumbnail 3.jpg",
  },
  {
    id: 4,
    title: "YouTube Thumbnail",
    category: "Poster Design",
    thumbnail: "/Youtube Thumbnail 4.jpg",
    featured: true,
  },
  {
    id: 5,
    title: "YouTube Thumbnail",
    category: "Poster Design",
    thumbnail: "/Youtube Thumbnail 5.jpg",
    featured: true,
  },
  {
    id: 6,
    title: "YouTube Thumbnail",
    category: "Poster Design",
    thumbnail: "/Youtube Thumbnail 6.jpg",
    featured: true,
  },
  {
    id: 7,
    title: "YouTube Thumbnail",
    category: "Poster Design",
    thumbnail: "/Youtube Thumbnail 7.jpg",
    featured: true,
  },
  {
    id: 8,
    title: "YouTube Thumbnail",
    category: "Poster Design",
    thumbnail: "/Youtube Thumbnail 8.jpg",
    featured: true,
  },
  {
    id: 9,
    title: "YouTube Thumbnail",
    category: "Poster Design",
    thumbnail: "/Youtube Thumbnail 9.jpg",
    featured: true,
  },
]

export default function GraphicDesignPreview() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const router = useRouter()
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [featuredIndex, setFeaturedIndex] = useState(0)
  const [isPreviewVisible, setIsPreviewVisible] = useState(false)
  const [previewImage, setPreviewImage] = useState("")
  const [previewTitle, setPreviewTitle] = useState("")
  const [previewCategory, setPreviewCategory] = useState("")
  const [isPreviewExpanded, setIsPreviewExpanded] = useState(false)
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 })
  const previewRef = useRef<HTMLDivElement>(null)

  // Motion values for interactive effects
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const rotateX = useTransform(mouseY, [-300, 300], [5, -5])
  const rotateY = useTransform(mouseX, [-300, 300], [-5, 5])

  // Track mouse position for parallax effects
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY })
      mouseX.set(e.clientX - window.innerWidth / 2)
      mouseY.set(e.clientY - window.innerHeight / 2)
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [mouseX, mouseY])

  // Auto-rotate featured design
  useEffect(() => {
    const interval = setInterval(() => {
      setFeaturedIndex((prev) => (prev === featuredDesigns.length - 1 ? 0 : prev + 1))
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const showPreview = (image: string, title: string, category: string) => {
    setPreviewImage(image)
    setPreviewTitle(title)
    setPreviewCategory(category)
    setIsPreviewVisible(true)
  }

  const hidePreview = () => {
    setIsPreviewVisible(false)
    setIsPreviewExpanded(false)
  }

  const togglePreviewExpand = () => {
    setIsPreviewExpanded(!isPreviewExpanded)
  }

  // Enhanced parallax effect for cursor
  // const getParallaxStyle = (index: number) => {
  //   if (hoveredIndex !== index) return {}

  //   const windowWidth = typeof window !== "undefined" ? window.innerWidth : 1000
  //   const windowHeight = typeof window !== "undefined" ? window.innerHeight : 800

  //   // Calculate distance from center (normalized to -1 to 1)
  //   const moveX = (cursorPosition.x - windowWidth / 2) / (windowWidth / 2)
  //   const moveY = (cursorPosition.y - windowHeight / 2) / (windowHeight / 2)

  //   // Apply more dramatic effect
  //   const tiltX = moveY * 10 // Tilt based on Y position (inverted for natural feel)
  //   const tiltY = moveX * -10 // Tilt based on X position (inverted for natural feel)
  //   const translateZ = 30 // Give depth to the element

  //   return {
  //     transform: `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) translateZ(${translateZ}px)`,
  //     transition: "transform 0.2s ease-out",
  //   }
  // }

  // Special effect for the 4th item (Social Media Campaign)
  const getFeaturedStyle = (index: number, design: any) => {
    if (design.id !== 4) return {}

    return {
      boxShadow:
        hoveredIndex === index
          ? "0 0 30px rgba(139, 92, 246, 0.7), 0 0 60px rgba(236, 72, 153, 0.3)"
          : "0 0 15px rgba(139, 92, 246, 0.3)",
      zIndex: hoveredIndex === index ? 20 : 1,
    }
  }

  return (
    <section id="graphics" className="py-20 relative overflow-hidden" ref={ref}>
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-muted/30 z-0"></div>
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern"></div>
      </div>
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Graphic Design
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Visual <span className="gradient-text">Creations</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A selection of my graphic design work across various mediums and styles.
          </p>
        </div>

        {/* Featured Design */}
        <div
          className={`mb-16 transition-all duration-1000 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <motion.div
            className="relative rounded-2xl overflow-hidden border border-purple-500/20 shadow-xl shadow-purple-500/5 aspect-[16/9] max-w-5xl mx-auto"
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.3 }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent z-10"></div>

            {/* Animated scan line effect */}
            <div
              className="absolute inset-0 opacity-30 z-20 pointer-events-none"
              style={{
                backgroundImage: "linear-gradient(to bottom, transparent 50%, rgba(139, 92, 246, 0.5) 50%)",
                backgroundSize: "100% 4px",
                animation: "scanline 3s linear infinite",
              }}
            ></div>

            {/* Featured image */}
            <div className="absolute inset-0 transition-transform duration-1000 ease-out transform hover:scale-105">
              <Image
                src={featuredDesigns[featuredIndex].thumbnail || "/placeholder.svg"}
                alt={featuredDesigns[featuredIndex].title}
                fill
                className="object-cover"
              />
            </div>

            {/* Content overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 z-20">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-end">
                <div>
                  <Badge className="mb-3 bg-white/10 backdrop-blur-sm text-white border-none">Featured Design</Badge>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 neon-text">
                    {featuredDesigns[featuredIndex].title}
                  </h3>
                  <p className="text-white/80 mb-4">{featuredDesigns[featuredIndex].category}</p>
                </div>
                <Button
                  className="group bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border-none mt-4 md:mt-0 btn-glow"
                  onClick={() => router.push("/graphics")}
                >
                  View Details
                  <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </div>

            {/* Progress indicators */}
            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
              {featuredDesigns.map((_, index) => (
                <button
                  key={index}
                  className={`w-8 h-1 rounded-full transition-all ${
                    index === featuredIndex ? "bg-white" : "bg-white/30"
                  }`}
                  onClick={() => setFeaturedIndex(index)}
                />
              ))}
            </div>
          </motion.div>
        </div>

        {/* Gallery Grid - Preview Only */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mb-12">
          {featuredDesigns.map((design, index) => (
            <div
              key={design.id}
              className={`transition-all duration-700 delay-${(index % 3) * 100} ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              } ${design.id === 4 ? "sm:col-span-2" : ""}`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <Card
                className={`overflow-hidden cursor-pointer group relative transform transition-all duration-500`}
                style={{
                  boxShadow: hoveredIndex === index ? "0 10px 40px -15px rgba(139, 92, 246, 0.5)" : "none",
                  ...getFeaturedStyle(index, design),
                  aspectRatio: "16/9", // Consistent 16:9 rectangular format
                }}
                onClick={() => router.push("/graphics")}
                onMouseEnter={() => showPreview(design.thumbnail, design.title, design.category)}
                onMouseLeave={hidePreview}
              >
                {/* Featured badge for special items */}
                {design.featured && (
                  <div className="absolute top-3 right-3 z-30">
                    <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white border-none">
                      Featured
                    </Badge>
                  </div>
                )}

                {/* Animated gradient border */}
                <div
                  className="absolute inset-0 z-20 opacity-0 group-hover:opacity-100 transition-all duration-500"
                  style={{
                    background: "transparent",
                    border: "2px solid transparent",
                    backgroundImage:
                      design.id === 4
                        ? "linear-gradient(90deg, #8b5cf6, #ec4899, #3b82f6, #10b981, #8b5cf6)"
                        : "linear-gradient(90deg, #8b5cf6, #ec4899, #8b5cf6)",
                    backgroundSize: "300% 100%",
                    animation: "border-rotate 4s linear infinite",
                    WebkitMask: "linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)",
                    WebkitMaskComposite: "xor",
                    maskComposite: "exclude",
                    pointerEvents: "none",
                  }}
                ></div>

                {/* Futuristic overlay with glow effect */}
                <div
                  className="absolute inset-0 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 overflow-hidden"
                  style={{
                    background:
                      design.id === 4
                        ? "linear-gradient(to right bottom, rgba(139, 92, 246, 0.3), rgba(236, 72, 153, 0.3))"
                        : "linear-gradient(to right bottom, rgba(139, 92, 246, 0.2), rgba(236, 72, 153, 0.2))",
                  }}
                >
                  {/* Animated scan line effect */}
                  <div
                    className="absolute inset-0 opacity-30"
                    style={{
                      backgroundImage: "linear-gradient(to bottom, transparent 50%, rgba(139, 92, 246, 0.5) 50%)",
                      backgroundSize: "100% 4px",
                      animation: "scanline 3s linear infinite",
                    }}
                  ></div>

                  {/* Animated corner accents */}
                  <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-purple-500 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100"></div>
                  <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-pink-500 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200"></div>
                  <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-pink-500 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-300"></div>
                  <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-purple-500 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-400"></div>
                </div>

                {/* Content overlay with 3D parallax effect */}
                <div className="absolute inset-0 bg-black/70 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-center text-white p-4 z-30 overflow-hidden">
                  {/* Animated background grid */}
                  <div
                    className="absolute inset-0 cyberpunk-grid opacity-20"
                    style={{
                      transform: hoveredIndex === index ? `translateZ(-50px)` : "none",
                      transition: "transform 0.5s ease-out",
                    }}
                  ></div>

                  {/* Content with staggered animation */}
                  <div className="relative z-10 flex flex-col items-center">
                    <div className="text-center">
                      <h3 className="font-bold text-center mb-1">{design.title}</h3>
                      <p className="text-xs text-white/80 mb-2">{design.category}</p>
                    </div>

                    <div className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                      <Eye className="h-4 w-4 text-white" />
                    </div>
                  </div>
                </div>

                {/* Image with advanced hover effect */}
                <div className="relative w-full h-full overflow-hidden">
                  <Image
                    src={design.thumbnail || "/placeholder.svg?height=600&width=800&query=graphic+design+thumbnail"}
                    alt={design.title}
                    fill
                    className="object-cover transition-all duration-500 group-hover:scale-105"
                    style={{
                      filter: hoveredIndex === index ? "brightness(0.8)" : "none",
                    }}
                  />

                  {/* Overlay gradient flash effect on hover */}
                  <div
                    className="absolute inset-0 bg-gradient-to-tr from-purple-500/0 to-pink-500/0 opacity-0 group-hover:opacity-30 transition-opacity duration-300"
                    style={{
                      backgroundSize: "200% 200%",
                      animation: hoveredIndex === index ? "gradient-shift 3s ease infinite" : "none",
                    }}
                  ></div>
                </div>
              </Card>
            </div>
          ))}
        </div>

        {/* Enhanced Floating preview */}
        <AnimatePresence>
          {isPreviewVisible && previewImage && (
            <motion.div
              ref={previewRef}
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
                width: isPreviewExpanded ? "90vw" : "280px",
                height: isPreviewExpanded ? "auto" : "160px",
                right: isPreviewExpanded ? "50%" : "1rem",
                bottom: isPreviewExpanded ? "50%" : "1rem",
                x: isPreviewExpanded ? "50%" : "0",
                y: isPreviewExpanded ? "50%" : "0",
              }}
              exit={{ opacity: 0, scale: 0.8, y: 20 }}
              transition={{ duration: 0.4 }}
              className="fixed z-50 rounded-lg overflow-hidden shadow-2xl pointer-events-auto"
              style={{
                boxShadow: "0 10px 40px -5px rgba(139, 92, 246, 0.5)",
                aspectRatio: isPreviewExpanded ? "16/9" : "auto",
              }}
              onClick={togglePreviewExpand}
            >
              {/* Animated scan line effect */}
              <div
                className="absolute inset-0 opacity-30 z-20 pointer-events-none"
                style={{
                  backgroundImage: "linear-gradient(to bottom, transparent 50%, rgba(139, 92, 246, 0.5) 50%)",
                  backgroundSize: "100% 4px",
                  animation: "scanline 3s linear infinite",
                }}
              ></div>

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent z-10"></div>
              <Image
                src={previewImage || "/placeholder.svg"}
                alt={previewTitle}
                fill
                className="object-cover transition-transform duration-500"
                style={{
                  transform: isPreviewExpanded ? "scale(1.05)" : "scale(1)",
                }}
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
                <h4 className="text-sm font-bold text-white neon-text">{previewTitle}</h4>
                <p className="text-xs text-white/80">{previewCategory}</p>
              </div>

              {/* Expand/collapse indicator */}
              <div className="absolute top-4 right-4 z-30">
                <Button
                  size="sm"
                  variant="ghost"
                  className="h-8 w-8 p-0 rounded-full bg-black/30 hover:bg-black/50 text-white"
                  onClick={(e) => {
                    e.stopPropagation()
                    togglePreviewExpand()
                  }}
                >
                  {isPreviewExpanded ? (
                    <ArrowRight className="h-4 w-4 rotate-225" />
                  ) : (
                    <ArrowRight className="h-4 w-4 rotate-45" />
                  )}
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* View all button with futuristic design */}
        <div className="text-center">
          <Button
            size="lg"
            className="group relative overflow-hidden bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white border-none"
            onClick={() => router.push("/graphics")}
          >
            <span className="relative z-10 flex items-center">
              View All Designs
              <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </span>
            <span className="absolute inset-0 bg-white/20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
          </Button>
        </div>
      </div>

      {/* Add some CSS animations */}
      <style jsx global>{`
        @keyframes border-rotate {
          0% {
            background-position: 0% 50%;
          }
          100% {
            background-position: 300% 50%;
          }
        }
      `}</style>
    </section>
  )
}
