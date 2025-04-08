"use client"

import { useInView } from "react-intersection-observer"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Briefcase, Calendar, ChevronRight } from "lucide-react"
import { useState } from "react"

export default function ExperienceSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const experiences = [
    {
      title: "Lead UI/UX Designer",
      company: "App Team NIT Hamirpur",
      period: "2021 - Present",
      description:
        "Led the design and development of three mobile applications now live on the Play Store. Conducted user research, created wireframes, prototypes, and visual designs. Collaborated with developers and mentored junior designers.",
      skills: ["User Research", "Wireframing", "Prototyping", "Visual Design", "Team Leadership"],
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "UI/UX Designer",
      company: "Sorted Tech",
      period: "2023",
      description:
        "Designed and developed a fully functional live website from scratch, aligned with the brand's identity and optimized for user experience.",
      skills: ["Website Design", "Brand Alignment", "UX Optimization", "Frontend Development"],
      color: "from-cyan-500 to-blue-500",
    },
    {
      title: "UI/UX Designer",
      company: "BharatPros",
      period: "2022",
      description:
        "Contributed to both website and mobile app design with a focus on cross-platform consistency and seamless user flows.",
      skills: ["Cross-platform Design", "User Flows", "Mobile App Design", "Web Design"],
      color: "from-emerald-500 to-teal-500",
    },
    {
      title: "Freelance Graphic Designer",
      company: "Self-employed",
      period: "2018 - Present",
      description:
        "Worked with various YouTube creators to craft engaging thumbnails, posters, and brand visuals that enhance content visibility and storytelling.",
      skills: ["Thumbnails", "Posters", "Brand Visuals", "Content Strategy"],
      color: "from-amber-500 to-orange-500",
    },
    {
      title: "Design Team Member",
      company: "Training & Placement Cell, NIT Hamirpur",
      period: "2021 - Present",
      description:
        "Created impactful visuals for campus recruitment campaigns, training sessions, and student outreach events.",
      skills: ["Campaign Design", "Event Graphics", "Institutional Branding"],
      color: "from-rose-500 to-red-500",
    },
  ]

  return (
    <section id="experience" className="py-20 bg-muted/30" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Experience
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My Professional <span className="gradient-text">Journey</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Over 8 years of experience in design, from freelancing to leading design teams.
          </p>
        </div>

        <div className="grid gap-8 relative">
          {/* Timeline line */}
          <div className="absolute left-[15px] md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-purple-500 to-pink-500 transform md:-translate-x-1/2"></div>

          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`relative transition-all duration-700 delay-${index * 100} ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className={`flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} gap-8`}>
                {/* Timeline dot with animated glow effect */}
                <div
                  className={`absolute left-0 md:left-1/2 top-6 w-8 h-8 bg-background rounded-full border-2 border-primary flex items-center justify-center transform md:-translate-x-1/2 z-10 transition-all duration-300 ${
                    hoveredIndex === index ? "scale-125 shadow-[0_0_15px_rgba(139,92,246,0.7)]" : ""
                  }`}
                >
                  <Briefcase
                    className={`h-4 w-4 text-primary transition-all duration-300 ${
                      hoveredIndex === index ? "rotate-12" : ""
                    }`}
                  />
                </div>

                {/* Date for mobile */}
                <div className="md:hidden pl-12 mb-4 flex items-center text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4 mr-2" />
                  {exp.period}
                </div>

                {/* Content */}
                <div className={`md:w-1/2 ${index % 2 === 0 ? "md:text-right md:pr-8" : "md:pl-8"} pl-12 md:pl-0`}>
                  <Card
                    className={`card-hover overflow-hidden transition-all duration-500 ${
                      hoveredIndex === index
                        ? "transform md:translate-x-2 shadow-[0_10px_40px_-15px_rgba(139,92,246,0.5)]"
                        : ""
                    }`}
                  >
                    {/* Gradient line on top of card */}
                    <div
                      className={`h-1 w-full bg-gradient-to-r ${exp.color} transition-all duration-500 ${
                        hoveredIndex === index ? "opacity-100" : "opacity-70"
                      }`}
                    ></div>

                    <CardHeader className="pb-2 relative overflow-hidden">
                      {/* Futuristic background pattern */}
                      <div
                        className={`absolute inset-0 bg-grid-pattern opacity-0 transition-opacity duration-500 ${
                          hoveredIndex === index ? "opacity-10" : ""
                        }`}
                      ></div>

                      <h3 className="text-xl font-bold flex items-center gap-2">
                        {exp.title}
                        <ChevronRight
                          className={`h-4 w-4 transition-all duration-300 ${
                            hoveredIndex === index ? "opacity-100 translate-x-1" : "opacity-0 -translate-x-2"
                          }`}
                        />
                      </h3>
                      <p
                        className={`text-primary font-medium transition-all duration-300 ${
                          hoveredIndex === index ? "text-transparent bg-clip-text bg-gradient-to-r " + exp.color : ""
                        }`}
                      >
                        {exp.company}
                      </p>

                      {/* Date for desktop */}
                      <div className="hidden md:flex items-center text-sm text-muted-foreground mt-1 gap-2 justify-start">
                        <Calendar className="h-4 w-4" />
                        {exp.period}
                      </div>
                    </CardHeader>

                    <CardContent>
                      <p className="text-muted-foreground mb-4">{exp.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill, i) => (
                          <Badge
                            key={i}
                            variant="secondary"
                            className={`text-xs transition-all duration-300 ${
                              hoveredIndex === index ? "bg-gradient-to-r " + exp.color + " text-white" : ""
                            }`}
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Empty div for timeline layout */}
                <div className="hidden md:block md:w-1/2"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
