
"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { useInView } from "react-intersection-observer"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import {
  X,
  ChevronLeft,
  ChevronRight,
  ZoomIn,
  ArrowLeft,
  Search,
  Filter,
  Grid3X3,
  Grid2X2,
  Download,
  Share,
  Info,
  Maximize,
  Minimize,
  Play,
  Pause,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { useRouter } from "next/navigation"
import { Input } from "@/components/ui/input"
import { motion, AnimatePresence, useMotionValue, useTransform } from "framer-motion"

// Graphic design work data
const graphicDesigns = [
    {
        id: 1,
        title: "YouTube Thumbnail",
        category: "Poster Design",
        thumbnail: "Youtube Thumbnail 1.jpg",
        fullImage: "Youtube Thumbnail 1.jpg",
        description:
          "",
        tags: ["Adobe Photoshop", "Poster", "YouTube", "Educational", "Kids", "Story Telling"],
        year: "2022",
      },
      {
        id: 2,
        title: "YouTube Thumbnail",
        category: "Poster Design",
        thumbnail: "Youtube Thumbnail 2.jpg",
        fullImage: "Youtube Thumbnail 2.jpg",
        description:
          "",
        tags: ["Adobe Photoshop","Illustrator", "Poster", "YouTube", "Educational", "Kids", "Story Telling"],
        year: "2021",
      },
      {
        id: 3,
        title: "YouTube Thumbnail",
        category: "Poster Design",
        thumbnail: "Youtube Thumbnail 3.jpg",
        fullImage: "Youtube Thumbnail 3.jpg",
        description:
          "",
        tags: ["Adobe Photoshop", "Poster", "YouTube", "Educational", "Kids", "Story Telling"],
        year: "2023",
      },
      {
        id: 4,
        title: "YouTube Thumbnail",
        category: "Poster Design",
        thumbnail: "Youtube Thumbnail 4.jpg",
        fullImage: "Youtube Thumbnail 4.jpg",
        description:
          "",
        tags: ["Adobe Photoshop", "Poster", "YouTube", "Educational", "Kids", "Story Telling"],
        year: "2021",
      },
      
  {
    id: 9,
    title: "Social Media Campaign",
    category: "Digital",
    thumbnail: "/graphic-designs/social-campaign-thumb.png",
    fullImage: "/graphic-designs/social-campaign-thumb.png",
    description:
      "Series of coordinated social media graphics for a marketing campaign with consistent visual language.",
    tags: ["Social Media", "Digital", "Campaign"],
    year: "2022",
    featured: true,
    details:
      "This comprehensive social media campaign was designed for a major product launch, featuring a cohesive visual language across multiple platforms. The design system includes templates for Instagram, Facebook, Twitter, and LinkedIn, with adaptations for both feed posts and stories. The campaign achieved a 45% increase in engagement compared to previous campaigns.",
    colors: ["#8B5CF6", "#EC4899", "#3B82F6", "#10B981"],
  },
  {
    id: 5,
    title: "YouTube Thumbnail",
        category: "Poster Design",
        thumbnail: "Youtube Thumbnail 5.jpg",
        fullImage: "Youtube Thumbnail 5.jpg",
        description:
          "",
        tags: ["Adobe Photoshop", "Poster", "YouTube", "Educational", "Kids", "Story Telling"],
        year: "2022",
      },
  {
    id: 6,
    title: "App Icon Set",
    category: "UI Design",
    thumbnail: "/graphic-designs/icon-set-thumb.png",
    fullImage: "/graphic-designs/icon-set-thumb.png",
    description: "Cohesive set of app icons with consistent style, grid system, and visual language.",
    tags: ["UI", "Icons", "Mobile"],
    year: "2023",
    featured: false,
  },
  {
    id: 7,
    title: "Event Invitation",
    category: "Print",
    thumbnail: "/graphic-designs/invitation-thumb.png",
    fullImage: "/graphic-designs/invitation-thumb.png",
    description: "Elegant invitation design for a corporate gala with gold foil details and custom typography.",
    tags: ["Print", "Event", "Invitation"],
    year: "2022",
    featured: false,
  },
  {
    id: 8,
    title: "Magazine Layout",
    category: "Editorial",
    thumbnail: "/graphic-designs/magazine-thumb.png",
    fullImage: "/graphic-designs/magazine-thumb.png",
    description: "Dynamic magazine spread design with thoughtful typography hierarchy and visual storytelling.",
    tags: ["Editorial", "Print", "Layout"],
    year: "2021",
    featured: false,
  },
  {
    id: 30,
    title: "Infographic Design",
    category: "Data Visualization",
    thumbnail: "/graphic-designs/infographic-thumb.png",
    fullImage: "/graphic-designs/infographic-thumb.png",
    description: "Clear and engaging infographic that transforms complex data into an accessible visual narrative.",
    tags: ["Data", "Infographic", "Information"],
    year: "2022",
    featured: false,
  },
  {
    id: 10,
    title: "Album Cover Art",
    category: "Music",
    thumbnail: "/graphic-designs/album-cover-thumb.png",
    fullImage: "/graphic-designs/album-cover-thumb.png",
    description: "Atmospheric album cover design that captures the mood and theme of the musical project.",
    tags: ["Music", "Album", "Cover"],
    year: "2023",
    featured: false,
  },
  {
    id: 11,
    title: "Motion Graphics Stills",
    category: "Animation",
    thumbnail: "/graphic-designs/motion-graphics-thumb.png",
    fullImage: "/graphic-designs/motion-graphics-thumb.png",
    description: "Key frames from a motion graphics project showcasing dynamic visual storytelling techniques.",
    tags: ["Animation", "Motion", "Video"],
    year: "2022",
    featured: false,
  },
  {
    id: 12,
    title: "Typography Poster",
    category: "Typography",
    thumbnail: "/graphic-designs/typography-poster-thumb.png",
    fullImage: "/graphic-designs/typography-poster-thumb.png",
    description: "Experimental typography poster exploring the intersection of letterforms and visual composition.",
    tags: ["Typography", "Poster", "Experimental"],
    year: "2021",
    featured: false,
  },
  {
    id: 13,
    title: "Mobile App UI Kit",
    category: "UI Design",
    thumbnail: "/modern-app-design-system.png",
    fullImage: "/modern-app-design-system.png",
    description: "Comprehensive UI kit for mobile applications with consistent components and design patterns.",
    tags: ["UI", "Mobile", "Design System"],
    year: "2023",
    featured: false,
  },
  {
    id: 14,
    title: "Corporate Brochure",
    category: "Print",
    thumbnail: "/elegant-corporate-brochure.png",
    fullImage: "/elegant-corporate-brochure.png",
    description: "Professional corporate brochure design with clean layout and strategic information hierarchy.",
    tags: ["Print", "Corporate", "Brochure"],
    year: "2022",
    featured: false,
  },
  {
    id: 15,
    title: "Product Catalog",
    category: "Editorial",
    thumbnail: "/minimalist-product-catalog.png",
    fullImage: "/minimalist-product-catalog.png",
    description: "Elegant product catalog with minimalist design approach highlighting product photography.",
    tags: ["Editorial", "Catalog", "Product"],
    year: "2021",
    featured: false,
  },
  {
    id: 16,
    title: "Data Visualization",
    category: "Data Visualization",
    thumbnail: "/data-insights-overview.png",
    fullImage: "/data-insights-overview.png",
    description: "Complex data presented through intuitive and visually engaging charts and graphics.",
    tags: ["Data", "Visualization", "Analytics"],
    year: "2023",
    featured: false,
  },
]

// Filter categories
const categories = [
  "All",
  "Branding",
  "Print",
  "Digital",
  "UI Design",
  "Typography",
  "Packaging",
  "Editorial",
  "Data Visualization",
  "Animation",
  "Music",
]

// Years for filtering
const years = ["All Years", "2023", "2022", "2021"]

export default function GraphicsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedYear, setSelectedYear] = useState("All Years")
  const [searchQuery, setSearchQuery] = useState("")
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isZoomed, setIsZoomed] = useState(false)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [gridView, setGridView] = useState("grid-4") // grid-4 or grid-3
  const [isFilterOpen, setIsFilterOpen] = useState(false)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 })
  const [showDetails, setShowDetails] = useState(false)
  const [slideshow, setSlideshow] = useState(false)
  const [downloadNotification, setDownloadNotification] = useState(false)
  const router = useRouter()
  const lightboxRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLImageElement>(null)

  // Motion values for interactive effects
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const rotateX = useTransform(mouseY, [-300, 300], [10, -10])
  const rotateY = useTransform(mouseX, [-300, 300], [-10, 10])

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

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

  // Slideshow functionality
  useEffect(() => {
    let interval: NodeJS.Timeout
    if (slideshow && lightboxOpen) {
      interval = setInterval(() => {
        navigateImage("next")
      }, 3000)
    }
    return () => clearInterval(interval)
  }, [slideshow, lightboxOpen])

  // Filter designs based on selected category, year, and search query
  const filteredDesigns = graphicDesigns.filter((design) => {
    const matchesCategory = selectedCategory === "All" || design.category === selectedCategory
    const matchesYear = selectedYear === "All Years" || design.year === selectedYear
    const matchesSearch =
      searchQuery === "" ||
      design.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      design.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      design.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))

    return matchesCategory && matchesYear && matchesSearch
  })

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index)
    setLightboxOpen(true)
    setShowDetails(false)
    document.body.style.overflow = "hidden" // Prevent scrolling when lightbox is open
  }

  const closeLightbox = () => {
    setLightboxOpen(false)
    setIsZoomed(false)
    setIsFullscreen(false)
    setSlideshow(false)
    setShowDetails(false)
    document.body.style.overflow = "auto" // Re-enable scrolling
  }

  const navigateImage = (direction: "next" | "prev") => {
    if (direction === "next") {
      setCurrentImageIndex((prevIndex) => (prevIndex === filteredDesigns.length - 1 ? 0 : prevIndex + 1))
    } else {
      setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? filteredDesigns.length - 1 : prevIndex - 1))
    }
    setIsZoomed(false) // Reset zoom when navigating
    setShowDetails(false) // Hide details when navigating
  }

  const toggleZoom = () => {
    setIsZoomed(!isZoomed)
  }

  const toggleFullscreen = () => {
    if (!isFullscreen) {
      if (lightboxRef.current?.requestFullscreen) {
        lightboxRef.current.requestFullscreen()
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen()
      }
    }
    setIsFullscreen(!isFullscreen)
  }

  const toggleSlideshow = () => {
    setSlideshow(!slideshow)
  }

  const toggleDetails = () => {
    setShowDetails(!showDetails)
  }

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight") navigateImage("next")
    if (e.key === "ArrowLeft") navigateImage("prev")
    if (e.key === "Escape") closeLightbox()
    if (e.key === "f") toggleFullscreen()
    if (e.key === "z") toggleZoom()
    if (e.key === "i") toggleDetails()
    if (e.key === "s") toggleSlideshow()
  }

  // Handle download functionality
  const handleDownload = () => {
    const currentDesign = filteredDesigns[currentImageIndex]
    const link = document.createElement("a")
    link.href = currentDesign.fullImage
    link.download = `${currentDesign.title.replace(/\s+/g, "-").toLowerCase()}.png`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)

    // Show download notification
    setDownloadNotification(true)
    setTimeout(() => {
      setDownloadNotification(false)
    }, 3000)
  }

  // Enhanced parallax effect for cursor
  const getParallaxStyle = (index: number) => {
    if (hoveredIndex !== index) return {}

    const windowWidth = typeof window !== "undefined" ? window.innerWidth : 1000
    const windowHeight = typeof window !== "undefined" ? window.innerHeight : 800

    // Calculate distance from center (normalized to -1 to 1)
    const moveX = (cursorPosition.x - windowWidth / 2) / (windowWidth / 2)
    const moveY = (cursorPosition.y - windowHeight / 2) / (windowHeight / 2)

    // Apply more dramatic effect
    const tiltX = moveY * 10 // Tilt based on Y position (inverted for natural feel)
    const tiltY = moveX * -10 // Tilt based on X position (inverted for natural feel)
    const translateZ = 30 // Give depth to the element

    return {
      transform: `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) translateZ(${translateZ}px)`,
      transition: "transform 0.2s ease-out",
    }
  }

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
    <main className="min-h-screen relative overflow-hidden">
      {/* Background elements */}
      <div className="fixed inset-0 bg-gradient-to-b from-background via-background to-muted/30 -z-10"></div>
      <div className="fixed inset-0 opacity-5 -z-10">
        <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern"></div>
      </div>
      <div className="fixed -top-40 -right-40 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl -z-10"></div>
      <div className="fixed -bottom-40 -left-40 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl -z-10"></div>

      <Navbar />

      <section className="pt-32 pb-20" ref={ref}>
        <div className="container mx-auto px-4">
          <Button variant="ghost" className="mb-8 flex items-center gap-2" onClick={() => router.back()}>
            <ArrowLeft className="h-4 w-4" />
            Back
          </Button>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <Badge variant="outline" className="mb-4">
              Graphic Design
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Visual <span className="gradient-text">Creations</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A comprehensive showcase of my graphic design work across various mediums and styles.
            </p>
          </motion.div>

          {/* Search and Filter Controls */}
          <div className="mb-8">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              <div className="relative w-full md:w-auto flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search designs..."
                  className="pl-10 bg-background/50 backdrop-blur-sm border-muted"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>

              <div className="flex items-center gap-4 w-full md:w-auto justify-between md:justify-end">
                <Button
                  variant="outline"
                  size="sm"
                  className="flex items-center gap-2"
                  onClick={() => setIsFilterOpen(!isFilterOpen)}
                >
                  <Filter className="h-4 w-4" />
                  Filters
                </Button>

                <div className="flex items-center border rounded-md overflow-hidden">
                  <Button
                    variant="ghost"
                    size="sm"
                    className={`rounded-none ${gridView === "grid-4" ? "bg-muted" : ""}`}
                    onClick={() => setGridView("grid-4")}
                  >
                    <Grid2X2 className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className={`rounded-none ${gridView === "grid-3" ? "bg-muted" : ""}`}
                    onClick={() => setGridView("grid-3")}
                  >
                    <Grid3X3 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Expandable Filter Panel */}
            <AnimatePresence>
              {isFilterOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden mt-4"
                >
                  <div className="p-4 bg-background/50 backdrop-blur-sm border border-muted rounded-lg">
                    <div className="mb-4">
                      <h3 className="text-sm font-medium mb-2">Categories</h3>
                      <div className="flex flex-wrap gap-2">
                        {categories.map((category) => (
                          <Button
                            key={category}
                            variant={selectedCategory === category ? "default" : "outline"}
                            size="sm"
                            onClick={() => setSelectedCategory(category)}
                            className="rounded-full text-xs"
                          >
                            {category}
                          </Button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-sm font-medium mb-2">Year</h3>
                      <div className="flex flex-wrap gap-2">
                        {years.map((year) => (
                          <Button
                            key={year}
                            variant={selectedYear === year ? "default" : "outline"}
                            size="sm"
                            onClick={() => setSelectedYear(year)}
                            className="rounded-full text-xs"
                          >
                            {year}
                          </Button>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Results count */}
          <div className="mb-6 text-sm text-muted-foreground">
            Showing {filteredDesigns.length} {filteredDesigns.length === 1 ? "design" : "designs"}
          </div>

          {/* Gallery Grid */}
          <div
            className={`grid ${
              gridView === "grid-4"
                ? "grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
                : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
            } gap-4 md:gap-6`}
          >
            <AnimatePresence>
              {filteredDesigns.map((design, index) => (
                <motion.div
                  key={design.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className={`group perspective ${design.id === 4 ? "md:col-span-2 md:row-span-2" : ""}`}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <Card
                    className={`overflow-hidden cursor-pointer relative ${design.id === 4 ? "aspect-auto md:aspect-square" : "aspect-square"} transform transition-all duration-500 hover:z-10 hover-3d`}
                    style={{
                      transform:
                        hoveredIndex === index ? "perspective(1000px) rotateX(5deg) rotateY(-5deg)" : "scale(1)",
                      boxShadow: hoveredIndex === index ? "0 10px 40px -15px rgba(139, 92, 246, 0.5)" : "none",
                      ...getFeaturedStyle(index, design),
                    }}
                    onClick={() => openLightbox(index)}
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
                    <div
                      className="absolute inset-0 bg-black/70 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-center text-white p-4 z-30 overflow-hidden"
                      style={getParallaxStyle(index)}
                    >
                      {/* Animated background grid */}
                      <div
                        className="absolute inset-0 cyberpunk-grid opacity-20"
                        style={{
                          transform: hoveredIndex === index ? `translateZ(-50px)` : "none",
                          transition: "transform 0.5s ease-out",
                        }}
                      ></div>

                      {/* Content with staggered animation */}
                      <div className="relative z-10 flex flex-col items-center transform transition-all duration-500 group-hover:translate-y-0 translate-y-4">
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={hoveredIndex === index ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                          transition={{ duration: 0.3 }}
                          className="text-center"
                        >
                          <h3 className="font-bold text-center mb-1">{design.title}</h3>
                          <p className="text-xs text-white/80 mb-3">{design.category}</p>
                        </motion.div>

                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={hoveredIndex === index ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                          transition={{ duration: 0.3, delay: 0.1 }}
                          className="flex flex-wrap justify-center gap-1 mb-4"
                        >
                          {design.tags.map((tag, i) => (
                            <span
                              key={i}
                              className="text-[10px] glass px-2 py-0.5 rounded-full transform transition-all duration-300 hover:scale-110 hover:bg-white/30"
                              style={{
                                transform: `translateZ(${20 + i * 5}px)`,
                                transition: "transform 0.3s ease-out",
                              }}
                            >
                              {tag}
                            </span>
                          ))}
                        </motion.div>

                        {/* Special color palette for featured item */}
                        {design.id === 4 && design.colors && (
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={hoveredIndex === index ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                            transition={{ duration: 0.3, delay: 0.15 }}
                            className="flex gap-1 mb-4"
                          >
                            {design.colors.map((color: string, i: number) => (
                              <div
                                key={i}
                                className="w-5 h-5 rounded-full"
                                style={{
                                  backgroundColor: color,
                                  boxShadow: `0 0 10px ${color}80`,
                                  transform: `translateZ(${30 + i * 3}px)`,
                                }}
                              />
                            ))}
                          </motion.div>
                        )}

                        <motion.div
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={hoveredIndex === index ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                          transition={{ duration: 0.3, delay: 0.2 }}
                          className="relative"
                          style={{
                            transform: `translateZ(40px)`,
                            transition: "transform 0.3s ease-out",
                          }}
                        >
                          <div className="w-12 h-12 rounded-full glass flex items-center justify-center backdrop-blur-sm mx-auto glow-pulse">
                            <ZoomIn className="h-5 w-5 text-white" />
                          </div>
                          {/* Circular progress indicator */}
                          <svg className="absolute -top-2 -left-2 w-16 h-16 rotate-[-90deg] opacity-80">
                            <circle
                              cx="32"
                              cy="32"
                              r="28"
                              stroke="rgba(139, 92, 246, 0.3)"
                              strokeWidth="2"
                              fill="none"
                            />
                            <circle
                              cx="32"
                              cy="32"
                              r="28"
                              stroke={design.id === 4 ? "url(#gradient-special)" : "url(#gradient)"}
                              strokeWidth="3"
                              fill="none"
                              strokeDasharray="175.9"
                              strokeDashoffset="175.9"
                              className="group-hover:animate-progress"
                              style={{
                                strokeDashoffset: hoveredIndex === index ? "0" : "175.9",
                                transition: "stroke-dashoffset 1.5s ease-out",
                              }}
                            />
                            <defs>
                              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#8b5cf6" />
                                <stop offset="100%" stopColor="#ec4899" />
                              </linearGradient>
                              <linearGradient id="gradient-special" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#8b5cf6" />
                                <stop offset="33%" stopColor="#ec4899" />
                                <stop offset="66%" stopColor="#3b82f6" />
                                <stop offset="100%" stopColor="#10b981" />
                              </linearGradient>
                            </defs>
                          </svg>
                        </motion.div>
                      </div>
                    </div>

                    {/* Image with advanced hover effect */}
                    <div className="relative w-full h-full overflow-hidden">
                      <Image
                        src={design.thumbnail || "/placeholder.svg?height=600&width=800&query=graphic+design+thumbnail"}
                        alt={design.title}
                        fill
                        className="object-cover transition-all duration-700 group-hover:scale-110 group-hover:filter-brightness-75"
                        style={{
                          filter: hoveredIndex === index ? "brightness(0.7) contrast(1.1)" : "none",
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
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* No results message */}
          {filteredDesigns.length === 0 && (
            <div className="text-center py-16">
              <p className="text-muted-foreground mb-4">No designs found matching your criteria.</p>
              <Button
                variant="outline"
                onClick={() => {
                  setSelectedCategory("All")
                  setSelectedYear("All Years")
                  setSearchQuery("")
                }}
              >
                Reset Filters
              </Button>
            </div>
          )}

          {/* Advanced Lightbox */}
          {lightboxOpen && filteredDesigns.length > 0 && (
            <div
              className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center"
              onClick={closeLightbox}
              onKeyDown={handleKeyDown}
              tabIndex={0}
              ref={lightboxRef}
            >
              {/* Animated background elements */}
              <div className="absolute inset-0 cyberpunk-grid opacity-5"></div>
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-pink-500 opacity-50"></div>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-pink-500 to-purple-500 opacity-50"></div>

              {/* Close button with animation */}
              <motion.button
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute top-4 right-4 text-white p-2 rounded-full bg-black/50 hover:bg-black/70 transition-colors z-50"
                onClick={closeLightbox}
              >
                <X className="h-6 w-6" />
              </motion.button>

              {/* Navigation buttons with animations */}
              <motion.button
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="absolute left-4 text-white p-2 rounded-full bg-black/50 hover:bg-black/70 transition-colors z-50"
                onClick={(e) => {
                  e.stopPropagation()
                  navigateImage("prev")
                }}
              >
                <ChevronLeft className="h-6 w-6" />
              </motion.button>

              <motion.button
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="absolute right-4 text-white p-2 rounded-full bg-black/50 hover:bg-black/70 transition-colors z-50"
                onClick={(e) => {
                  e.stopPropagation()
                  navigateImage("next")
                }}
              >
                <ChevronRight className="h-6 w-6" />
              </motion.button>

              {/* Action buttons */}
              <div className="absolute bottom-4 right-4 flex gap-2 z-50">
                {/* Info button */}
                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0, transition: { delay: 0.05 } }}
                  className={`text-white p-2 rounded-full transition-colors ${
                    showDetails ? "bg-purple-500/70" : "bg-black/50 hover:bg-black/70"
                  }`}
                  onClick={(e) => {
                    e.stopPropagation()
                    toggleDetails()
                  }}
                >
                  <Info className="h-5 w-5" />
                </motion.button>

                {/* Slideshow button */}
                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0, transition: { delay: 0.1 } }}
                  className={`text-white p-2 rounded-full transition-colors ${
                    slideshow ? "bg-purple-500/70" : "bg-black/50 hover:bg-black/70"
                  }`}
                  onClick={(e) => {
                    e.stopPropagation()
                    toggleSlideshow()
                  }}
                >
                  {slideshow ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
                </motion.button>

                {/* Fullscreen button */}
                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0, transition: { delay: 0.15 } }}
                  className="text-white p-2 rounded-full bg-black/50 hover:bg-black/70 transition-colors"
                  onClick={(e) => {
                    e.stopPropagation()
                    toggleFullscreen()
                  }}
                >
                  {isFullscreen ? <Minimize className="h-5 w-5" /> : <Maximize className="h-5 w-5" />}
                </motion.button>

                {/* Zoom button */}
                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0, transition: { delay: 0.2 } }}
                  className={`text-white p-2 rounded-full transition-colors ${
                    isZoomed ? "bg-purple-500/70" : "bg-black/50 hover:bg-black/70"
                  }`}
                  onClick={(e) => {
                    e.stopPropagation()
                    toggleZoom()
                  }}
                >
                  <ZoomIn className="h-5 w-5" />
                </motion.button>

                {/* Download button */}
                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0, transition: { delay: 0.25 } }}
                  className="text-white p-2 rounded-full bg-black/50 hover:bg-black/70 transition-colors"
                  onClick={(e) => {
                    e.stopPropagation()
                    handleDownload()
                  }}
                >
                  <Download className="h-5 w-5" />
                </motion.button>

                {/* Share button */}
                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0, transition: { delay: 0.3 } }}
                  className="text-white p-2 rounded-full bg-black/50 hover:bg-black/70 transition-colors"
                  onClick={(e) => {
                    e.stopPropagation()
                    // Share functionality would go here
                    // For demo purposes, we'll just prevent the click from closing the lightbox
                  }}
                >
                  <Share className="h-5 w-5" />
                </motion.button>
              </div>

              {/* Image container with animations */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="relative max-w-[90vw] max-h-[90vh] overflow-auto custom-scrollbar"
                onClick={(e) => e.stopPropagation()}
                style={{
                  cursor: isZoomed ? "zoom-out" : "zoom-in",
                }}
              >
                {/* Special effects for the 4th image */}
                {filteredDesigns[currentImageIndex].id === 4 && (
                  <div className="absolute inset-0 pointer-events-none z-20">
                    <div className="absolute top-0 left-0 w-full h-full opacity-30">
                      <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-purple-500"></div>
                      <div className="absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 border-pink-500"></div>
                      <div className="absolute bottom-0 left-0 w-20 h-20 border-b-2 border-l-2 border-pink-500"></div>
                      <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-purple-500"></div>
                    </div>
                  </div>
                )}

                <div className="relative">
                  <Image
                    ref={imageRef}
                    src={
                      filteredDesigns[currentImageIndex].fullImage ||
                      "/placeholder.svg?height=1200&width=800&query=graphic+design+full+image" ||
                      "/placeholder.svg" ||
                      "/placeholder.svg"
                    }
                    alt={filteredDesigns[currentImageIndex].title}
                    width={isZoomed ? 1920 : 1200}
                    height={isZoomed ? 1080 : 800}
                    className={`transition-transform duration-300 ${isZoomed ? "scale-150" : "scale-100"}`}
                    onClick={toggleZoom}
                    style={{
                      boxShadow:
                        filteredDesigns[currentImageIndex].id === 4 ? "0 0 30px rgba(139, 92, 246, 0.3)" : "none",
                    }}
                  />
                </div>

                {/* Image info with animation */}
                <AnimatePresence>
                  {!showDetails ? (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 20 }}
                      className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white"
                    >
                      <h3 className="text-xl font-bold">{filteredDesigns[currentImageIndex].title}</h3>
                      <div className="flex items-center gap-2 mt-1 mb-2">
                        <span className="text-sm text-white/80">{filteredDesigns[currentImageIndex].category}</span>
                        <span className="text-xs bg-white/20 px-2 py-0.5 rounded-full">
                          {filteredDesigns[currentImageIndex].year}
                        </span>
                      </div>
                      <p className="mt-2 text-sm max-w-2xl">{filteredDesigns[currentImageIndex].description}</p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-1 mt-3">
                        {filteredDesigns[currentImageIndex].tags.map((tag, i) => (
                          <span key={i} className="text-xs bg-white/20 px-2 py-0.5 rounded-full">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 20 }}
                      className="absolute inset-0 bg-black/80 backdrop-blur-sm p-6 text-white overflow-y-auto custom-scrollbar"
                    >
                      <h3 className="text-2xl font-bold mb-4">{filteredDesigns[currentImageIndex].title}</h3>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="text-lg font-semibold mb-2">Project Details</h4>
                          <p className="mb-4">{filteredDesigns[currentImageIndex].description}</p>

                          {filteredDesigns[currentImageIndex].details && (
                            <p className="mb-4">{filteredDesigns[currentImageIndex].details}</p>
                          )}

                          <div className="mb-4">
                            <h5 className="text-sm font-medium mb-1">Category</h5>
                            <p className="text-white/80">{filteredDesigns[currentImageIndex].category}</p>
                          </div>

                          <div className="mb-4">
                            <h5 className="text-sm font-medium mb-1">Year</h5>
                            <p className="text-white/80">{filteredDesigns[currentImageIndex].year}</p>
                          </div>

                          <div>
                            <h5 className="text-sm font-medium mb-1">Tags</h5>
                            <div className="flex flex-wrap gap-1">
                              {filteredDesigns[currentImageIndex].tags.map((tag, i) => (
                                <span key={i} className="text-xs bg-white/20 px-2 py-0.5 rounded-full">
                                  {tag}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>

                        <div>
                          {filteredDesigns[currentImageIndex].colors && (
                            <div className="mb-6">
                              <h4 className="text-lg font-semibold mb-2">Color Palette</h4>
                              <div className="flex gap-2">
                                {filteredDesigns[currentImageIndex].colors.map((color: string, i: number) => (
                                  <div key={i} className="flex flex-col items-center">
                                    <div
                                      className="w-12 h-12 rounded-md mb-1"
                                      style={{
                                        backgroundColor: color,
                                        boxShadow: `0 0 10px ${color}80`,
                                      }}
                                    />
                                    <span className="text-xs text-white/80">{color}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}

                          <div>
                            <h4 className="text-lg font-semibold mb-2">Actions</h4>
                            <div className="flex gap-2">
                              <Button
                                size="sm"
                                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 border-none"
                                onClick={handleDownload}
                              >
                                <Download className="h-4 w-4 mr-2" />
                                Download
                              </Button>
                              <Button size="sm" variant="outline">
                                <Share className="h-4 w-4 mr-2" />
                                Share
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>

              {/* Image counter with animation */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute bottom-4 left-4 text-white/80 text-sm bg-black/50 px-3 py-1 rounded-full"
              >
                {currentImageIndex + 1} / {filteredDesigns.length}
              </motion.div>

              {/* Download notification */}
              <AnimatePresence>
                {downloadNotification && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="absolute top-20 left-1/2 transform -translate-x-1/2 bg-green-500/90 text-white px-4 py-2 rounded-md flex items-center gap-2"
                  >
                    <Download className="h-4 w-4" />
                    Download started
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Slideshow indicator */}
              {slideshow && (
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-white/20 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                    className="h-full bg-gradient-to-r from-purple-500 to-pink-500"
                  />
                </div>
              )}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  )
}
