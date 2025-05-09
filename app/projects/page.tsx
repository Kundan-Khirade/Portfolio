"use client"

import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { useState } from "react"

// This would typically come from a database or API
const projects = [
  {
    id: "sorted-tech-website",
    title: "Sorted Tech Website",
    category: "web",
    image: "Sorted Tech Cover Pic 4.png",
    description:
      "An website built to showcase AI-powered recycling and real-time waste management solutions.",
    tags: ["UI/UX", "Web Design", "UX Design", "SaaS Product"],
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
    id: "prompt-pdf",
    title: "PromptPDF Website",
    category: "web",
    image: "/Prompt pdf Cover.png",
    description:
      "Designed the user interface for PromptPDF, an AI-driven platform that enables users to generate professional documents effortlessly across various formats.",
    tags: ["UI Design", "UX Design", "Figma", "AI SaaS", "Web App","Responsive Design", "Prototyping"],
    links: {
      live: "https://promptpdf.vercel.app/",
    },
  },
  {
    id: "nith-career-website",
    title: "NITH Career Compass Website",
    category: "web",
    image: "/NITH career compass cover.jpg",
    description:
      "A collaborative platform connecting placed students with juniors, sharing real placement journeys, tips, and insights across on-campus and off-campus experiences.",
    tags: ["UX Design", "UI Design", "Web Platform", "Community Building",  "Figma",  "Responsive Design"],
    links: {
      live: "https://nithcc.vercel.app/",
    },
  },
  {
    id: "e-commerce",
    title: "E-Commerce Website",
    category: "web",
    image: "/E-Commerce Cover.png",
    description:
      "A modern, conversion-focused e-commerce website designed from scratch with user-centric features, responsive UI, and a seamless shopping experience tailored for today’s online retail expectations.",
    tags: ["E-Commerce", "UI/UX Design", "Product Design", "Figma", "User Flow", "Web", "Design System"],
    links: {
     
    },
  },
  {
    id: "nimbus-2022",
    title: "Nimbus 2k22 APP",
    category: "mobile",
    image: "/Nimbus 2k22 Cover.png",
    description:
      "Designed and led the development of Nimbus 2022 — an all-in-one mobile app for NIT Hamirpur’s annual technical fest, enabling real-time updates, event tracking, and student engagement through modern social features and intuitive UX.",
    tags: ["Mobile", "UX/UI", "Figma", "Gamification", "Community Engagement", "Android App Design", "Design Systems", "Product Thinking"],
    links: {
     
    },
  },
  {
    id: "bharat-pros",
    title: "BharatPro Website",
    category: "web",
    image: "/Bharatpros cover.jpg",
    description:
      "A responsive service marketplace platform designed to seamlessly connect users with verified professionals across India—featuring intuitive navigation, scalable design systems, and a clean, modern UI.",
    tags: ["E-commerce", "Marketplace Design", "UI/UX Design", "User Research", "Figma", "Responsive Web Design", "Design Systems"],
    links: {
      live: "https://www.bharatpros.com/",
    },
  },
  {
    id: "nimbus-2023",
    title: "Nimbus 2k23 APP",
    category: "mobile",
    image: "/Nimbus 2k23 Cover.png",
    description:
      "Official mobile app for NIT Hamirpur's tech fest, designed to deliver personalized schedules, real-time updates, quizzes, and a social feed — enhancing engagement for 5,000+ users.",
    tags: ["Mobile App Design", "UI/UX", "Figma", "User Engagement", "Event App", "College Fest", "Community Building"],
    links: {
      
    },
  },
  
]

export default function ProjectsPage() {
  const [activeTab, setActiveTab] = useState("all")
  const router = useRouter()

  const filteredProjects = activeTab === "all" ? projects : projects.filter((project) => project.category === activeTab)

  const handleProjectClick = (projectId: string) => {
    // Scroll to top before navigation
    window.scrollTo(0, 0)
    router.push(`/projects/${projectId}`)
  }

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

          <Tabs defaultValue="all" className="mb-12" onValueChange={setActiveTab}>
          <div className="flex justify-center">
  <TabsList className="grid w-full max-w-md grid-cols-3 gap-2">
    <TabsTrigger value="all" className="transition-all">
      All
    </TabsTrigger>
    <TabsTrigger value="mobile" className="transition-all">
      Mobile
    </TabsTrigger>
    <TabsTrigger value="web" className="transition-all">
      Web
    </TabsTrigger>
  </TabsList>
</div>

            <TabsContent value={activeTab} className="mt-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProjects.map((project) => (
                  <Card
                    key={project.id}
                    className="overflow-hidden card-hover h-full cursor-pointer"
                    onClick={() => handleProjectClick(project.id)}
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
        </div>
      </section>

      <Footer />
    </main>
  )
}
