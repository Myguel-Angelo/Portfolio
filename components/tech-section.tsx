import type React from "react"
import { Server, Database, Globe, Wrench } from "lucide-react"
import { Card } from "@/components/ui/card"

interface Technology {
  name: string
  pathIcon: string
}

interface TechCategory {
  title: string
  icon: React.ReactNode
  technologies: Technology[]
}

const techCategories: TechCategory[] = [
  {
    title: "Back-End",
    icon: <Server size={20} />,
    technologies: [
      { name: "python", pathIcon: "/techs/backend/python.svg" },
      { name: "django", pathIcon: "/techs/backend/django.svg" },
      { name: "node.js", pathIcon: "/techs/backend/nodejs.svg" },
      { name: "express", pathIcon: "/techs/backend/express.svg" },
    ],
  },
  {
    title: "Front-End",
    icon: <Globe size={20} />,
    technologies: [
      { name: "html", pathIcon: "/techs/frontend/html5.svg" },
      { name: "css", pathIcon: "/techs/frontend/css3.svg" },
      { name: "javascript", pathIcon: "/techs/frontend/javascript.svg" },
      { name: "react", pathIcon: "/techs/frontend/react.svg" },
      { name: "tailwind", pathIcon: "/techs/frontend/tailwind.svg" },
    ],
  },
  {
    title: "Banco de Dados",
    icon: <Database size={20} />,
    technologies: [
      { name: "mysql", pathIcon: "/techs/database/mysql.svg" },
      { name: "postgresql", pathIcon: "/techs/database/postgresql.svg" },
      { name: "sqlite", pathIcon: "/techs/database/sqlite.svg" },
      { name: "mongodb", pathIcon: "/techs/database/mongodb.svg" },
    ],
  },
  {
    title: "Produtividade",
    icon: <Wrench size={20} />,
    technologies: [
      { name: "vscode", pathIcon: "/techs/tools/vscode.svg" },
      { name: "git", pathIcon: "/techs/tools/git.svg" },
      { name: "github", pathIcon: "/techs/tools/github.svg" },
      { name: "postman", pathIcon: "/techs/tools/postman.svg" },
      { name: "docker", pathIcon: "/techs/tools/docker.svg" },
    ],
  },
]

export function TechSection() {
  return (
    <section id="techs" className="min-h-none flex items-center justify-center bg-black py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
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
                    <div className="w-14 h-14 mb-3 flex items-center justify-center rounded-xl group-hover/tech:shadow-2xl group-hover/tech:scale-110 transition-all duration-300 shadow-lg">
                      <img src={tech.pathIcon} alt={tech.name} className="w-full h-full" />
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
      </div>
    </section>
  )
}
