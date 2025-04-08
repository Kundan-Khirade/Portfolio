"use client"

import { useEffect, useState } from "react"
import { useParams, useRouter } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Calendar, ExternalLink, Github, Layers, User } from "lucide-react"

// This would typically come from a database or API
const projectsData = [
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
    client: "NIT Hamirpur",
    date: "2022-2023",
    role: "Lead UI/UX Designer",
    fullDescription: [
      "The NIT Hamirpur App was designed to serve as a comprehensive digital platform for students, faculty, and staff at the National Institute of Technology, Hamirpur. The goal was to create a centralized mobile application that would streamline access to campus resources, provide timely updates, and enhance the overall campus experience.",
      "As the Lead UI/UX Designer, I conducted extensive user research with students and faculty to understand their needs and pain points. This research informed the design of an intuitive interface that prioritizes easy access to frequently used features while maintaining a clean, modern aesthetic aligned with the institute's brand identity.",
      "The app includes features such as a personalized dashboard, academic calendar integration, course schedules, campus news and announcements, event notifications, and access to digital library resources. Special attention was given to ensuring the app was accessible to all users, including those with disabilities.",
    ],
    process: [
      {
        title: "Research & Discovery",
        description:
          "Conducted user interviews, surveys, and competitive analysis to understand user needs and market standards.",
      },
      {
        title: "Wireframing & Information Architecture",
        description:
          "Created low-fidelity wireframes and established a logical information hierarchy to ensure intuitive navigation.",
      },
      {
        title: "Visual Design",
        description:
          "Developed a clean, modern UI with the institute's brand colors and created a comprehensive design system for consistency.",
      },
      {
        title: "Prototyping & Testing",
        description:
          "Built interactive prototypes and conducted usability testing with students and faculty to refine the user experience.",
      },
      {
        title: "Developer Handoff",
        description:
          "Created detailed specifications and worked closely with developers to ensure accurate implementation.",
      },
    ],
    outcomes: [
      "Successfully launched on Google Play Store with over 5,000 downloads in the first month",
      "Reduced student inquiries at administrative offices by 40%",
      "Increased student participation in campus events by 25%",
      "Received an average rating of 4.7/5 from users",
    ],
    gallery: [
      "/placeholder.svg?height=800&width=400",
      "/placeholder.svg?height=800&width=400",
      "/placeholder.svg?height=800&width=400",
    ],
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
    client: "Sorted Tech",
    date: "2023",
    role: "UI/UX Designer",
    fullDescription: [
      "Sorted Tech needed a modern, responsive website that would effectively communicate their brand identity and showcase their innovative tech solutions. The goal was to create a digital presence that would attract potential clients and investors while providing a seamless user experience across all devices.",
      "I designed and developed a fully functional website from scratch, focusing on creating a clean, professional aesthetic that aligned with the company's forward-thinking approach. The design incorporates subtle animations and interactive elements to engage users and highlight key information without overwhelming them.",
      "The website features a modular design system that allows for easy updates and scalability as the company grows. Special attention was given to performance optimization, ensuring fast load times and smooth interactions even on mobile devices with slower connections.",
    ],
    process: [
      {
        title: "Brand Analysis",
        description:
          "Worked closely with the client to understand their brand values, target audience, and business objectives.",
      },
      {
        title: "Site Architecture",
        description:
          "Developed a logical site structure and user flows to ensure visitors could easily find the information they needed.",
      },
      {
        title: "UI Design",
        description:
          "Created high-fidelity mockups with a focus on clean typography, strategic use of whitespace, and compelling visual hierarchy.",
      },
      {
        title: "Responsive Development",
        description:
          "Built the site using modern frontend technologies, ensuring optimal display across all device sizes.",
      },
      {
        title: "Performance Optimization",
        description:
          "Implemented best practices for web performance, including image optimization, code splitting, and lazy loading.",
      },
    ],
    outcomes: [
      "Increased site traffic by 150% compared to the previous website",
      "Reduced bounce rate by 35% through improved user experience",
      "Increased average time on site by 2 minutes",
      "Generated 40% more leads through the contact form",
    ],
    gallery: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
  },
  // Additional projects would be defined here
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
    client: "BharatPros",
    date: "2022",
    role: "UI/UX Designer",
    fullDescription: [
      "BharatPros required a cross-platform mobile application that would connect skilled professionals with customers needing various services. The challenge was to create a consistent user experience across both iOS and Android platforms while accommodating the unique design patterns of each operating system.",
      "I designed a comprehensive mobile application with intuitive user flows for both service providers and customers. The design focused on simplifying the process of finding, booking, and paying for services, with special attention to the onboarding experience for new users.",
      "The app features a clean, accessible interface with a consistent design language that maintains platform-specific interactions where appropriate. The result is a seamless experience that feels native on both iOS and Android devices.",
    ],
    process: [
      {
        title: "User Research",
        description:
          "Conducted interviews with potential users from both customer and service provider segments to understand their needs and expectations.",
      },
      {
        title: "Competitive Analysis",
        description:
          "Analyzed similar apps in the market to identify best practices and opportunities for differentiation.",
      },
      {
        title: "User Flow Mapping",
        description: "Created detailed user flows for key tasks to ensure a logical and efficient path to completion.",
      },
      {
        title: "UI Design",
        description: "Developed a consistent design system with platform-specific adaptations where necessary.",
      },
      {
        title: "Usability Testing",
        description: "Conducted testing sessions with users on both iOS and Android devices to refine the experience.",
      },
    ],
    outcomes: [
      "Successfully launched on both App Store and Google Play with consistent 4.5+ star ratings",
      "Onboarded 500+ service providers in the first three months",
      "Achieved 20,000+ app downloads within six months of launch",
      "Maintained a 70% user retention rate after 30 days",
    ],
    gallery: [
      "/placeholder.svg?height=800&width=400",
      "/placeholder.svg?height=800&width=400",
      "/placeholder.svg?height=800&width=400",
    ],
  },
]

export default function ProjectDetailPage() {
  const params = useParams()
  const router = useRouter()
  const [project, setProject] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (params.id) {
      const foundProject = projectsData.find((p) => p.id === params.id)
      if (foundProject) {
        setProject(foundProject)
      } else {
        // Project not found, redirect to projects page
        router.push("/projects")
      }
      setLoading(false)
    }
  }, [params.id, router])

  if (loading) {
    return (
      <div className="min-h-screen grid-pattern noise-bg flex items-center justify-center">
        <div className="animate-pulse text-2xl">Loading...</div>
      </div>
    )
  }

  if (!project) {
    return null
  }

  return (
    <main className="min-h-screen grid-pattern noise-bg">
      <Navbar />

      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <Button variant="ghost" className="mb-8 flex items-center gap-2" onClick={() => router.back()}>
            <ArrowLeft className="h-4 w-4" />
            Back to Projects
          </Button>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="md:col-span-2">
              <Badge variant="outline" className="mb-4">
                {project.category.charAt(0).toUpperCase() + project.category.slice(1)} Design
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">{project.title}</h1>
              <p className="text-xl text-muted-foreground mb-8">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-8">
                {project.tags.map((tag: string, i: number) => (
                  <Badge key={i} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>

              <div className="flex gap-4">
                {project.links.live && (
                  <Link href={project.links.live} target="_blank" rel="noopener noreferrer">
                    <Button className="gap-2">
                      <ExternalLink className="h-4 w-4" />
                      View Live Project
                    </Button>
                  </Link>
                )}
                {project.links.github && (
                  <Link href={project.links.github} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" className="gap-2">
                      <Github className="h-4 w-4" />
                      View Code
                    </Button>
                  </Link>
                )}
              </div>
            </div>

            <div>
              <Card>
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-start gap-3">
                    <User className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <h3 className="font-medium">Client</h3>
                      <p className="text-muted-foreground">{project.client}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Calendar className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <h3 className="font-medium">Timeline</h3>
                      <p className="text-muted-foreground">{project.date}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Layers className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <h3 className="font-medium">My Role</h3>
                      <p className="text-muted-foreground">{project.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="mb-16">
            <div className="relative w-full h-[60vh] rounded-xl overflow-hidden">
              <Image
                src={project.id === "nit-hamirpur-app" ? "/kundan-image.png" : project.image || "/placeholder.svg"}
                alt={project.title}
                fill
                className="object-cover object-center"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-16 mb-16">
            <div className="md:col-span-2">
              <h2 className="text-3xl font-bold mb-8">Project Overview</h2>
              <div className="space-y-6">
                {project.fullDescription.map((paragraph: string, i: number) => (
                  <p key={i} className="text-muted-foreground">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-8">Outcomes</h2>
              <ul className="space-y-4">
                {project.outcomes.map((outcome: string, i: number) => (
                  <li key={i} className="flex items-start gap-2">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                      <span className="text-primary font-medium text-sm">{i + 1}</span>
                    </div>
                    <p className="text-muted-foreground">{outcome}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Design Process</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {project.process.map((step: any, i: number) => (
                <Card key={i} className="card-hover">
                  <CardContent className="p-6">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <span className="text-primary font-bold">{i + 1}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-8">Project Gallery</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {project.gallery.map((image: string, i: number) => (
                <div key={i} className="relative aspect-[9/16] rounded-xl overflow-hidden card-hover">
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`${project.title} gallery image ${i + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
