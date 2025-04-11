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
    id: "youtube-creator-branding",
    title: "YouTube Creator Branding",
    category: "graphic",
    image: "/logoo.jpg",
    description:
      "Complete brand identity and thumbnail design system for a YouTube channel with over 100K subscribers.",
    tags: ["Branding", "Thumbnails", "Visual Identity"],
    links: {
      live: "https://youtube.com",
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
    image: "/logoo.jpg",
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
  {
    id: "e-commerce-app",
    title: "E-Commerce App",
    category: "mobile",
    image: "/placeholder.svg?height=600&width=800&query=e-commerce+mobile+app+shopping+cart+product+gallery",
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
    image: "/placeholder.svg?height=600&width=800&query=travel+website+destination+booking+scenic+views",
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
    image: "/placeholder.svg?height=600&width=800&query=restaurant+branding+logo+menu+design+elegant",
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
    image: "/placeholder.svg?height=600&width=800&query=fitness+app+workout+tracker+progress+charts",
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
    image: "/placeholder.svg?height=600&width=800&query=portfolio+website+template+designer+showcase",
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
    image: "/placeholder.svg?height=600&width=800&query=music+streaming+app+player+playlist+interface",
    description: "Music streaming application with personalized recommendations and playlist management.",
    tags: ["Mobile Design", "Music", "UX/UI"],
    links: {
      live: "https://play.google.com/store",
      github: "https://github.com",
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
  <TabsList className="grid w-full max-w-md grid-cols-3"> {/* Changed to 3 columns since you have 3 tabs */}
    <TabsTrigger value="all">All</TabsTrigger>
    <TabsTrigger value="mobile">Mobile</TabsTrigger>
    <TabsTrigger value="web">Web</TabsTrigger>
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
