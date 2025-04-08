"use client"

import { useInView } from "react-intersection-observer"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

export default function SkillsSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const designSkills = [
    { name: "UI/UX Design", level: 95 },
    { name: "Wireframing & Prototyping", level: 90 },
    { name: "Responsive Design", level: 92 },
    { name: "User Research", level: 85 },
    { name: "Graphic Design", level: 88 },
  ]

  const toolsSkills = [
    { name: "Figma", level: 95 },
    { name: "Adobe Photoshop", level: 90 },
    { name: "Adobe Illustrator", level: 85 },
    { name: "Adobe XD", level: 88 },
    { name: "Sketch", level: 80 },
  ]

  const developmentSkills = [
    { name: "HTML/CSS", level: 90 },
    { name: "JavaScript", level: 85 },
    { name: "React", level: 80 },
    { name: "Next.js", level: 75 },
    { name: "Tailwind CSS", level: 85 },
  ]

  return (
    <section id="skills" className="py-20 bg-muted/30" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Skills
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical and creative skills.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div
            className={`transition-all duration-700 delay-100 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <h3 className="text-xl font-bold mb-6 text-center">Design</h3>
            <div className="space-y-6">
              {designSkills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-muted-foreground">{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} className="h-2" />
                </div>
              ))}
            </div>
          </div>

          <div
            className={`transition-all duration-700 delay-300 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <h3 className="text-xl font-bold mb-6 text-center">Tools</h3>
            <div className="space-y-6">
              {toolsSkills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-muted-foreground">{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} className="h-2" />
                </div>
              ))}
            </div>
          </div>

          <div
            className={`transition-all duration-700 delay-500 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <h3 className="text-xl font-bold mb-6 text-center">Development</h3>
            <div className="space-y-6">
              {developmentSkills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-muted-foreground">{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} className="h-2" />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div
          className={`mt-16 grid md:grid-cols-4 gap-4 transition-all duration-700 delay-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="col-span-full mb-6">
            <h3 className="text-xl font-bold text-center">Additional Skills</h3>
          </div>

          {[
            "Video Editing",
            "Motion Graphics",
            "Prompt Design",
            "3D Modeling",
            "Content Strategy",
            "Brand Identity",
            "Typography",
            "Color Theory",
            "Accessibility",
            "Usability Testing",
            "Information Architecture",
            "Interaction Design",
          ].map((skill, index) => (
            <div
              key={index}
              className="bg-background rounded-lg p-4 text-center border border-border hover:border-primary transition-colors"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
