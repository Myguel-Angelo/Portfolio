import type React from "react"
import { Database, Globe, Wrench } from "lucide-react"
import { Card } from "@/components/ui/card"

interface Technology {
  name: string
  icon: string
  color: string
}

interface TechCategory {
  title: string
  icon: React.ReactNode
  technologies: Technology[]
}

const techCategories: TechCategory[] = [
  {
    title: "Back-End",
    icon: <Database size={20} />,
    technologies: [
      { name: "python", icon: "🐍", color: "#3776ab" },
      { name: "django", icon: "🎯", color: "#092e20" },
      { name: "node.js", icon: "📗", color: "#339933" },
      { name: "express", icon: "⚡", color: "#000000" },
    ],
  },
  {
    title: "Front-End",
    icon: <Globe size={20} />,
    technologies: [
      { name: "html", icon: "🌐", color: "#e34f26" },
      { name: "css", icon: "🎨", color: "#1572b6" },
      { name: "javascript", icon: "⚡", color: "#f7df1e" },
      { name: "react", icon: "⚛️", color: "#61dafb" },
      { name: "tailwind", icon: "🌊", color: "#06b6d4" },
    ],
  },
  {
    title: "Banco de Dados",
    icon: <Database size={20} />,
    technologies: [
      { name: "mysql", icon: "🐬", color: "#4479a1" },
      { name: "postgresql", icon: "🐘", color: "#336791" },
      { name: "sqlite", icon: "💾", color: "#003b57" },
      { name: "mongodb", icon: "🍃", color: "#47a248" },
    ],
  },
  {
    title: "Produtividade",
    icon: <Wrench size={20} />,
    technologies: [
      { name: "vscode", icon: "💻", color: "#007acc" },
      { name: "git", icon: "🔀", color: "#f05032" },
      { name: "github", icon: "🐙", color: "#181717" },
      { name: "postman", icon: "📮", color: "#ff6c37" },
      { name: "docker", icon: "🐳", color: "#2496ed" },
    ],
  },
]

export function TechSection() {
  return (
    <section id="techs" className="min-h-screen flex items-center justify-center bg-black py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Ferramentas & <span className="text-green-400">Tecnologias</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Tecnologias e ferramentas que utilizo para criar soluções digitais modernas e eficientes
          </p>
        </div>

        {/* Tech Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {techCategories.map((category, categoryIndex) => (
            <Card
              key={categoryIndex}
              className="bg-gray-900 border-gray-700 p-8 hover:border-green-400/50 transition-all duration-300 group"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-8">
                <div className="text-green-400 group-hover:scale-110 transition-transform duration-300">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-white">{category.title}</h3>
              </div>

              {/* Technologies Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
                {category.technologies.map((tech, techIndex) => (
                  <div key={techIndex} className="flex flex-col items-center group/tech cursor-pointer">
                    {/* Tech Icon */}
                    <div className="w-16 h-16 mb-3 flex items-center justify-center rounded-xl bg-gray-800 group-hover/tech:bg-gray-700 group-hover/tech:scale-110 transition-all duration-300 shadow-lg">
                      <span className="text-2xl">{tech.icon}</span>
                    </div>

                    {/* Tech Name */}
                    <span className="text-sm text-gray-300 group-hover/tech:text-green-400 transition-colors duration-300 font-medium text-center">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="text-center mt-16">
          <p className="text-gray-400 text-lg">
            Sempre em busca de novas tecnologias e ferramentas para aprimorar meu desenvolvimento
          </p>
          <div className="flex justify-center mt-6">
            <div className="flex space-x-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse delay-100"></div>
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse delay-200"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
