"use client"

import { useInView } from "react-intersection-observer"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Brush, Lightbulb, Palette, PenTool } from "lucide-react"

export default function AboutSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="about" className="py-20" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            About Me
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Passionate <span className="gradient-text">Designer</span> & Problem Solver
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
          I'm a final-year B.Tech CSE student at NIT Hamirpur, India, passionate about crafting clean, user-centered designs that solve real problems and enhance everyday experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div
            className={`transition-all duration-700 delay-100 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <h3 className="text-2xl font-bold mb-4">My Design Process</h3>
            <p className="text-muted-foreground mb-6">
            I like to keep my design process simple, flexible, and user-focused. Every project is different, but here's how I usually approach it:

            </p>
            <p className="text-muted-foreground mt-2">
            <span className="font-bold">1. Understand the Problem -</span> I start by learning about the problem through research, user insights, and asking the right questions.
            </p>
            <p className="text-muted-foreground mt-2">
            <span className="font-bold">2. Define - </span> Once I have clarity, I define the key user personas, map out user journeys, and identify the core problems. This step sets a clear direction for design.
            </p>
            <p className="text-muted-foreground mt-2">
            <span className="font-bold">3. Explore Ideas - </span> I sketch, wireframe, and explore multiple ideas. I enjoy experimenting with layouts and interactions to see what feels natural and intuitive for the user.
            </p>
            <p className="text-muted-foreground mt-2">
            <span className="font-bold">4. Design - </span> After locking in a direction, I move into high-fidelity design, while keeping things clean, accessible, and visually consistent. I usually work in Figma and build out components if needed.
            </p>
            
            <p className="text-muted-foreground mt-2">
            <span className="font-bold">5. Test & Iterate - </span> I conduct usability testing, gather feedback, and iterate quickly to improve the design. Based on what I learn, I tweak and improve the design before it moves to development.
            </p>
            
          </div>

          <div
            className={`transition-all duration-700 delay-300 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <div className="grid grid-cols-2 gap-4">
              <Card className="card-hover">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Palette className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="font-bold mb-2">UI/UX Design</h4>
                  <p className="text-sm text-muted-foreground">Creating intuitive and engaging user experiences</p>
                </CardContent>
              </Card>

              <Card className="card-hover">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Brush className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="font-bold mb-2">Graphic Design</h4>
                  <p className="text-sm text-muted-foreground">Crafting visually compelling Brand assets</p>
                </CardContent>
              </Card>

              <Card className="card-hover">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <PenTool className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="font-bold mb-2">Visual Design</h4>
                  <p className="text-sm text-muted-foreground">
                    Creating stunning visuals that communicate effectively
                  </p>
                </CardContent>
              </Card>

              <Card className="card-hover">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Lightbulb className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="font-bold mb-2">Problem Solving</h4>
                  <p className="text-sm text-muted-foreground">Finding creative solutions to complex challenges</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        <div
          className={`bg-gradient-to-r from-purple-900/10 to-pink-900/10 rounded-2xl p-8 border border-purple-500/20 transition-all duration-700 delay-500 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h3 className="text-2xl font-bold mb-4 text-center">Education</h3>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h4 className="font-bold text-lg">B.Tech in Computer Science & Engineering</h4>
              <p className="text-muted-foreground">National Institute of Technology, Hamirpur, India</p>
            </div>
            <Badge variant="secondary">2021 - 2025</Badge>
          </div>
        </div>
      </div>
    </section>
  )
}
