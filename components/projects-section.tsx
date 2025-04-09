"use client"

import { useState } from "react"
import { useInView } from "react-intersection-observer"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ExternalLink, Github } from "lucide-react"
import { useRouter } from "next/navigation"

export default function ProjectsSection() {
  const [activeTab, setActiveTab] = useState("all")
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })
  const router = useRouter()

  const projects = [
    {
      id: "nit-hamirpur-app",
      title: "NIT Hamirpur App",
      category: "mobile",
      image: "/vibrant-purple-app.png",
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
      image: "/modern-tech-dark-responsive.png",
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
      image: "/mobile-service-dashboard.png",
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
      image: "/vibrant-youtube-branding.png",
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
      image: "/recruitment-dashboard-professional.png",
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
      image: "/placeholder.svg?height=600&width=800&query=ui+component+library+design+system+documentation",
      description:
        "Comprehensive design system with reusable components, style guides, and documentation for consistent product development.",
      tags: ["Design System", "Components", "Documentation"],
      links: {
        github: "https://github.com",
      },
    },
  ]

  const filteredProjects = activeTab === "all" ? projects : projects.filter((project) => project.category === activeTab)

  return (
    <section id="projects" className="py-20" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Projects
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured <span className="gradient-text">Work</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A selection of my recent projects across mobile, web, and graphic design.
          </p>
        </div>

        <Tabs defaultValue="all" className="mb-12" onValueChange={setActiveTab}>
          <div className="flex justify-center">
            <TabsList className="grid grid-cols-5 w-full max-w-md">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="mobile">Mobile</TabsTrigger>
              <TabsTrigger value="web">Web</TabsTrigger>
              <TabsTrigger value="graphic">Graphic</TabsTrigger>
              <TabsTrigger value="ui">UI/UX</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value={activeTab} className="mt-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project, index) => (
                <Card
                  key={index}
                  className={`overflow-hidden card-hover transition-all duration-700 delay-${index * 100} ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"} cursor-pointer`}
                  onClick={() => {
                    window.scrollTo(0, 0)
                    router.push(`/projects/${project.id}`)
                  }}
                >
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      src={project.id === "nit-hamirpur-app" ? "/kundan-image.png" : project.image}
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
                        <a
                          href={project.links.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <Button variant="outline" size="sm" className="gap-1">
                            <ExternalLink className="h-4 w-4" />
                            Live
                          </Button>
                        </a>
                      )}
                      {project.links.github && (
                        <a
                          href={project.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <Button variant="outline" size="sm" className="gap-1">
                            <Github className="h-4 w-4" />
                            Code
                          </Button>
                        </a>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <div className="text-center">
          <Button size="lg" variant="outline" className="group" onClick={() => router.push("/projects")}>
            View All Projects
            <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  )
}
