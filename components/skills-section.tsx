"use client"

import { useInView } from "react-intersection-observer"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"

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

  const creativeSkills = [
    { name: "Visual Storytelling", level: 92 },
    { name: "Brand Identity Design", level: 88 },
    { name: "Motion Graphics", level: 85 },
    { name: "3D Visualization", level: 78 },
    { name: "Typography", level: 90 },
  ]

  const additionalSkills = [
    { name: "Video Editing", icon: "🎬", color: "from-purple-500 to-indigo-500" },
    { name: "Motion Graphics", icon: "✨", color: "from-blue-500 to-cyan-500" },
    { name: "Prompt Design", icon: "💬", color: "from-emerald-500 to-teal-500" },
    { name: "3D Modeling", icon: "🧊", color: "from-amber-500 to-orange-500" },
    { name: "Content Strategy", icon: "📊", color: "from-rose-500 to-pink-500" },
    { name: "Brand Identity", icon: "🎨", color: "from-purple-500 to-pink-500" },
    { name: "Typography", icon: "🔤", color: "from-blue-500 to-indigo-500" },
    { name: "Color Theory", icon: "🌈", color: "from-teal-500 to-green-500" },
    { name: "Accessibility", icon: "♿", color: "from-orange-500 to-red-500" },
    { name: "Usability Testing", icon: "🧪", color: "from-pink-500 to-rose-500" },
    { name: "Information Architecture", icon: "🏗️", color: "from-indigo-500 to-purple-500" },
    { name: "Interaction Design", icon: "👆", color: "from-cyan-500 to-blue-500" },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section id="skills" className="py-20 relative overflow-hidden" ref={ref}>
      {/* Background elements */}
      <div className="absolute inset-0 bg-muted/30 z-0"></div>
      <div className="absolute inset-0 opacity-5 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern"></div>
      </div>
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl z-0"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl z-0"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Skills
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my design and creative skills.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div
            className={`transition-all duration-700 delay-100 ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-25"></div>
              <div className="relative bg-background rounded-lg p-6 border border-purple-500/20">
                <h3 className="text-xl font-bold mb-6 text-center gradient-text">Design</h3>
                <div className="space-y-6">
                  {designSkills.map((skill, index) => (
                    <div key={index}>
                      <div className="flex justify-between mb-2">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="relative h-2 w-full bg-muted rounded-full overflow-hidden">
                        <div
                          className="absolute top-0 left-0 h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
                          style={{
                            width: inView ? `${skill.level}%` : "0%",
                            transition: `width 1s ease-out ${index * 0.2}s`,
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div
            className={`transition-all duration-700 delay-300 ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg blur opacity-25"></div>
              <div className="relative bg-background rounded-lg p-6 border border-blue-500/20">
                <h3 className="text-xl font-bold mb-6 text-center gradient-text">Tools</h3>
                <div className="space-y-6">
                  {toolsSkills.map((skill, index) => (
                    <div key={index}>
                      <div className="flex justify-between mb-2">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="relative h-2 w-full bg-muted rounded-full overflow-hidden">
                        <div
                          className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"
                          style={{
                            width: inView ? `${skill.level}%` : "0%",
                            transition: `width 1s ease-out ${index * 0.2}s`,
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div
            className={`transition-all duration-700 delay-500 ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-lg blur opacity-25"></div>
              <div className="relative bg-background rounded-lg p-6 border border-emerald-500/20">
                <h3 className="text-xl font-bold mb-6 text-center gradient-text">Creative</h3>
                <div className="space-y-6">
                  {creativeSkills.map((skill, index) => (
                    <div key={index}>
                      <div className="flex justify-between mb-2">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="relative h-2 w-full bg-muted rounded-full overflow-hidden">
                        <div
                          className="absolute top-0 left-0 h-full bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full"
                          style={{
                            width: inView ? `${skill.level}%` : "0%",
                            transition: `width 1s ease-out ${index * 0.2}s`,
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20">
          <h3 className="text-xl font-bold text-center mb-10 gradient-text">Additional Skills</h3>

          <motion.div
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4"
            variants={container}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
          >
            {additionalSkills.map((skill, index) => (
              <motion.div key={index} variants={item} className="relative group">
                <div
                  className={`absolute -inset-0.5 bg-gradient-to-r ${skill.color} rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                ></div>
                <div className="relative bg-background rounded-lg p-4 border border-border hover:border-primary transition-colors flex flex-col items-center justify-center h-full">
                  <div className="text-2xl mb-2">{skill.icon}</div>
                  <div className="text-center text-sm font-medium">{skill.name}</div>
                  <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
