"use client"

import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

// This would typically come from a database or API
const projects = [
  {
    id: "nit-hamirpur-app",
    title: "NIT Hamirpur App",
    category: "mobile",
    image: "/placeholder.svg?height=600&width=800",
    description:
      "Official mobile application for NIT Hamirpur students with features for campus updates, academic resources, and event notifications.",
    tags: ["UI/UX", "Mobile App", "React Native"],
    links: {
      live: "https://play.google.com/store",
      github: "https://github.com",
    },
  },
  {
    id: "sorted-tech-website",
    title: "Sorted Tech Website",
    category: "web",
    image: "/placeholder.svg?height=600&width=800",
    description:
      "A fully responsive website designed and developed from scratch for a tech startup, featuring modern UI elements and smooth interactions.",
    tags: ["Web Design", "Frontend", "React"],
    links: {
      live: "https://example.com",
      github: "https://github.com",
    },
  },
  {
    id: "bharatpros-mobile-app",
    title: "BharatPros Mobile App",
    category: "mobile",
    image: "/placeholder.svg?height=600&width=800",
    description:
      "Cross-platform mobile application with seamless user flows and consistent design language across iOS and Android.",
    tags: ["Mobile Design", "Flutter", "UX Research"],
    links: {
      live: "https://play.google.com/store",
      github: "https://github.com",
    },
  },
  {
    id: "youtube-creator-branding",
    title: "YouTube Creator Branding",
    category: "graphic",
    image: "/placeholder.svg?height=600&width=800",
    description:
      "Complete brand identity and thumbnail design system for a YouTube channel with over 100K subscribers.",
    tags: ["Branding", "Thumbnails", "Visual Identity"],
    links: {
      live: "https://youtube.com",
    },
  },
  {
    id: "campus-recruitment-portal",
    title: "Campus Recruitment Portal",
    category: "web",
    image: "/placeholder.svg?height=600&width=800",
    description:
      "Web portal for campus recruitment activities with dashboards for students, recruiters, and placement cell administrators.",
    tags: ["UI Design", "Dashboard", "Web App"],
    links: {
      live: "https://example.com",
      github: "https://github.com",
    },
  },
  {
    id: "design-system",
    title: "Design System",
    category: "ui",
    image: "/placeholder.svg?height=600&width=800",
    description:
      "Comprehensive design system with reusable components, style guides, and documentation for consistent product development.",
    tags: ["Design System", "Components", "Documentation"],
    links: {
      github: "https://github.com",
    },
  },
  {
    id: "e-commerce-app",
    title: "E-Commerce App",
    category: "mobile",
    image: "/placeholder.svg?height=600&width=800",
    description:
      "Mobile shopping application with intuitive product browsing, cart management, and checkout experience.",
    tags: ["Mobile Design", "E-Commerce", "UX/UI"],
    links: {
      live: "https://play.google.com/store",
      github: "https://github.com",
    },
  },
  {
    id: "travel-website",
    title: "Travel Website",
    category: "web",
    image: "/placeholder.svg?height=600&width=800",
    description: "Responsive travel booking website with destination discovery, booking management, and user reviews.",
    tags: ["Web Design", "Travel", "Booking System"],
    links: {
      live: "https://example.com",
      github: "https://github.com",
    },
  },
  {
    id: "restaurant-branding",
    title: "Restaurant Branding",
    category: "graphic",
    image: "/placeholder.svg?height=600&width=800",
    description:
      "Complete brand identity for a high-end restaurant including logo, menu design, and marketing materials.",
    tags: ["Branding", "Logo Design", "Print Design"],
    links: {
      live: "https://example.com",
    },
  },
  {
    id: "fitness-app",
    title: "Fitness App",
    category: "mobile",
    image: "/placeholder.svg?height=600&width=800",
    description: "Workout tracking and fitness planning app with progress visualization and social features.",
    tags: ["Mobile Design", "Health", "UX Research"],
    links: {
      live: "https://play.google.com/store",
      github: "https://github.com",
    },
  },
  {
    id: "portfolio-template",
    title: "Portfolio Template",
    category: "web",
    image: "/placeholder.svg?height=600&width=800",
    description: "Customizable portfolio website template for designers and creative professionals.",
    tags: ["Web Design", "Template", "Portfolio"],
    links: {
      live: "https://example.com",
      github: "https://github.com",
    },
  },
  {
    id: "music-streaming-app",
    title: "Music Streaming App",
    category: "mobile",
    image: "/placeholder.svg?height=600&width=800",
    description: "Music streaming application with personalized recommendations and playlist management.",
    tags: ["Mobile Design", "Music", "UX/UI"],
    links: {
      live: "https://play.google.com/store",
      github: "https://github.com",
    },
  },
]

export default function ProjectsPage() {
  return (
    <main className="min-h-screen grid-pattern noise-bg">
      <Navbar />

      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              Portfolio
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              All <span className="gradient-text">Projects</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Browse through my complete portfolio of design work across various categories.
            </p>
          </div>

          <Tabs defaultValue="all" className="mb-12">
            <div className="flex justify-center">
              <TabsList className="grid grid-cols-5 w-full max-w-md">
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="mobile">Mobile</TabsTrigger>
                <TabsTrigger value="web">Web</TabsTrigger>
                <TabsTrigger value="graphic">Graphic</TabsTrigger>
                <TabsTrigger value="ui">UI/UX</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="all" className="mt-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project, index) => (
                  <Link href={`/projects/${project.id}`} key={project.id}>
                    <Card className="overflow-hidden card-hover h-full">
                      <div className="relative h-48 w-full overflow-hidden">
                        <Image
                          src={
                            project.id === "nit-hamirpur-app"
                              ? "/kundan-image.png"
                              : project.image || "/placeholder.svg"
                          }
                          alt={project.title}
                          fill
                          className="object-cover object-center transition-transform duration-500 hover:scale-105"
                        />
                      </div>
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                        <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.tags.map((tag, i) => (
                            <Badge key={i} variant="secondary" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                        <div className="flex gap-3">
                          {project.links.live && (
                            <Link
                              href={project.links.live}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={(e) => e.stopPropagation()}
                            >
                              <Button variant="outline" size="sm" className="gap-1">
                                <ExternalLink className="h-4 w-4" />
                                Live
                              </Button>
                            </Link>
                          )}
                          {project.links.github && (
                            <Link
                              href={project.links.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={(e) => e.stopPropagation()}
                            >
                              <Button variant="outline" size="sm" className="gap-1">
                                <Github className="h-4 w-4" />
                                Code
                              </Button>
                            </Link>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </TabsContent>

            {["mobile", "web", "graphic", "ui"].map((category) => (
              <TabsContent key={category} value={category} className="mt-8">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {projects
                    .filter((project) => project.category === category)
                    .map((project) => (
                      <Link href={`/projects/${project.id}`} key={project.id}>
                        <Card className="overflow-hidden card-hover h-full">
                          <div className="relative h-48 w-full overflow-hidden">
                            <Image
                              src={
                                project.id === "nit-hamirpur-app"
                                  ? "/kundan-image.png"
                                  : project.image || "/placeholder.svg"
                              }
                              alt={project.title}
                              fill
                              className="object-cover object-center transition-transform duration-500 hover:scale-105"
                            />
                          </div>
                          <CardContent className="p-6">
                            <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                            <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                            <div className="flex flex-wrap gap-2 mb-4">
                              {project.tags.map((tag, i) => (
                                <Badge key={i} variant="secondary" className="text-xs">
                                  {tag}
                                </Badge>
                              ))}
                            </div>
                            <div className="flex gap-3">
                              {project.links.live && (
                                <Link
                                  href={project.links.live}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  onClick={(e) => e.stopPropagation()}
                                >
                                  <Button variant="outline" size="sm" className="gap-1">
                                    <ExternalLink className="h-4 w-4" />
                                    Live
                                  </Button>
                                </Link>
                              )}
                              {project.links.github && (
                                <Link
                                  href={project.links.github}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  onClick={(e) => e.stopPropagation()}
                                >
                                  <Button variant="outline" size="sm" className="gap-1">
                                    <Github className="h-4 w-4" />
                                    Code
                                  </Button>
                                </Link>
                              )}
                            </div>
                          </CardContent>
                        </Card>
                      </Link>
                    ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      <Footer />
    </main>
  )
}
