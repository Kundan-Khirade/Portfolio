"use client"

import { useState } from "react"
import { useInView } from "react-intersection-observer"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ExternalLink, Github } from "lucide-react"
import Link from "next/link"
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
      id: "sorted-tech-website",
      title: "Sorted Tech Website",
      category: "web",
      image: "Sorted Tech Cover Pic 4.png",
      description:
        "An website built to showcase AI-powered recycling and real-time waste management solutions.",
      tags: ["UI/UX", "Web Design", "UX Design", "SaaS Product", "Figma"],
      links: {
        live: "https://www.sortedtech.io/",
      
      },
    },
    {
      id: "hill-ffair-app",
      title: "HILL’FFAIR 2k22 APP",
      category: "mobile",
      image: "Hill ffair 2022 cover.jpg",
      description:
        "An immersive mobile app designed for NIT Hamirpur’s annual cultural fest, featuring event listings, real-time updates, interactive social feed, and society promotions—all in one engaging experience.",
      tags: ["UI/UX Design", "Mobile App Design", "Figma", "Community Engagement", "EdTech"],
      links: {
       
      },
    },
    {
      id: "vaani-sudhar-app",
      title: "Vaani Sudhar App",
      category: "mobile",
      image: "/Vaani Sudhar cover.jpg",
      description:
        "An interactive Hindi speech therapy app designed for children aged 2–5, helping them improve articulation through playful, voice-guided learning.",
      tags: ["Mobile Design", "Speech Therapy", "UX Research", "Kids App", "EdTech", "UI Design"],
      links: {
  
      },
    },
    {
      id: "uber-website",
      title: "Uber Website Layout",
      category: "web",
      image: "/uber cover.png",
      description:
        "A pixel-perfect clone of Uber’s official website, built from scratch with a focus on responsive design, layout accuracy, and performance optimization.",
      tags: ["Web Design", "Frontend Development", "Responsive UI", "UI Cloning", "Web Performance"],
      links: {
  
      },
    },
    {
      id: "promptpdf",
      title: "PromptPDF Website ",
      category: "web",
      image: "/Prompt pdf Cover.png",
      description:
        "Designed the user interface for PromptPDF, an AI-driven platform that enables users to generate professional documents effortlessly across various formats.",
      tags: ["UI Design", "UX Design", "Figma", "AI SaaS", "Web App", "Responsive Design","Prototyping"],
      links: {
        live: "https://promptpdf.vercel.app/",
      },
    },
    {
      id: "nith-career-compass",
      title: "NITH Career Compass Website",
      category: "web",
      image: "/NITH career compass cover.jpg",
      description:
        "A collaborative platform connecting placed students with juniors, sharing real placement journeys, tips, and insights across on-campus and off-campus experiences.",
      tags: ["UX Design", "UI Design", "Web Platform", "Community Building", "Figma", "Responsive Design"],
      links: {
        live: "https://nithcc.vercel.app/",
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
  <TabsList className="grid w-full max-w-md grid-cols-3"> {/* Changed to 3 columns since you have 3 tabs */}
    <TabsTrigger value="all">All</TabsTrigger>
    <TabsTrigger value="mobile">Mobile</TabsTrigger>
    <TabsTrigger value="web">Web</TabsTrigger>
  </TabsList>
</div>

          <TabsContent value={activeTab} className="mt-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project, index) => (
                <Card
                  key={index}
                  className={`overflow-hidden card-hover transition-all duration-700 delay-${index * 100} ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"} cursor-pointer`}
                  onClick={() => router.push(`/projects/${project.id}`)}
                >
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      src={
                        project.id === "nit-hamirpur-app" ? "/kundan-image.png" : project.image || "/placeholder.svg"
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
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <div className="text-center">
          <Link href="/projects">
            <Button size="lg" variant="outline" className="group">
              View All Projects
              <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
