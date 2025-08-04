"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, ExternalLink, Calendar, Users } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface Project {
  id: number
  title: string
  subtitle: string
  description: string
  longDescription: string
  technologies: string[]
  image: string
  link: string
  category: string
  year: string
  client: string
}

const projects: Project[] = [
  {
    id: 1,
    title: "Gerenciador de Anotações",
    subtitle: "Sistema de Gestão Acadêmica",
    description:
      "Plataforma desenvolvida para a Academia de Cadetes da Polícia Militar do Maranhão para organização e gerenciamento de anotações acadêmicas.",
    longDescription:
      "Sistema completo de gerenciamento de anotações desenvolvido especificamente para atender às necessidades dos usuários. A plataforma permite aos oficiais selecionar, anotar e gerenciar suas anotações aos cadetes de forma eficiente, e permite aos cadetes visualiza-las em tempo real.",
    technologies: ["Python", "Django", "PostgreSQL", "HTML", "CSS", "JavaScript"],
    image: "/projects/mappa.png",
    link: "https://mappacfopm.com.br",
    category: "Sistema Web",
    year: "10/2024",
    client: "Academia de Cadetes - APMGD",
  },
  {
    id: 2,
    title: "Plataforma de Estudos",
    subtitle: "Dodô Aulas - Educação Online",
    description:
      "Plataforma completa para publicação e organização de cursos e conteúdos educacionais, desenvolvida para o projeto 'Dodô Aulas'.",
    longDescription:
      "Esse sistema educacional permite a criação, publicação e gerenciamento de cursos online. Desenvolvida para 'Dodô Aulas', oferece recursos como gerenciamento de vídeo-aulas, materiais didáticos, acompanhamento de lives e materiais exclusivos",
    technologies: ["Python", "Django", "HTML", "PostgreSQL", "Tailwind CSS", "JavaScript"],
    image: "/projects/dodoaulas.png",
    link: "https://dodoaulas.com.br/",
    category: "Plataforma Educacional",
    year: "03/2025",
    client: "Dodô Aulas",
  },
  {
    id: 3,
    title: "Olimpíada de Matemática Aplicada",
    subtitle: "Site Oficial do Evento",
    description:
      "Website oficial da Olimpíada de Matemática Aplicada, criada por Adriano Lucas Trindade, estudante de Medicina.",
    longDescription:
      "Site oficial completo para a Olimpíada de Matemática Aplicada, incluindo sistema de inscrições, área do participante, cronograma/calendário e outros recursos. Desenvolvido com foco na experiência do usuário e performance otimizada.",
    technologies: ["HTML", "CSS", "JavaScript", "Python", "SQLite"],
    image: "/projects/oma.png",
    link: "#",
    category: "Website Institucional",
    year: "08/2025",
    client: "Adriano Lucas Trindade",
  },
  {
    id: 4,
    title: "Desafio 4 - Trilhas",
    subtitle: "Grupo ZeluS",
    description:
      "A ZeluS é uma plataformaa que induz a reciclagem através de um sistema de pontos e recompensas",
    longDescription:
      "O site atuou como um MVP da nossa solução. Contando com um sistema de login e cadastro de novos usuários, gameficação, registro de descarte e dashboard interativo.",
    technologies: ["HTML", "CSS", "Node.js", "MySQL", "Express"],
    image: "/projects/zelus.png",
    link: "https://deploy-desafio4-trilhas-5p18.vercel.app/landing/index.html",
    category: "Website Institucional",
    year: "04/2025",
    client: "Trilhas Inova Maranhão",
  },
]

export function ProjectsSection() {
  const [currentProject, setCurrentProject] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentProject((prev) => (prev + 1) % projects.length)
    }, 5000) // Change every 5 seconds

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length)
    setIsAutoPlaying(false)
  }

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length)
    setIsAutoPlaying(false)
  }

  const goToProject = (index: number) => {
    setCurrentProject(index)
    setIsAutoPlaying(false)
  }

  const currentProjectData = projects[currentProject]

  return (
    <section id="projetos" className="min-h-screen flex items-center justify-center bg-[#0f0f0f] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Meus <span className="text-verde">Projetos</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Conheça alguns dos projetos que desenvolvi, aplicando a tecnologias acima.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Main Project Card */}
          <Card className="bg-black border-gray-700 overflow-hidden shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">
              {/* Project Image */}
              <div className="relative overflow-hidden bg-gray-800">
                <img
                  src={currentProjectData.image || "/placeholder.svg"}
                  alt={currentProjectData.title}
                  className="md:w-full md:h-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>

                {/* Project Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-verde text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
                    {currentProjectData.category}
                  </span>
                </div>

                {/* External Link Button */}
                <div className="absolute top-4 right-4">
                  <Button
                    size="sm"
                    className="bg-white/20 backdrop-blur-sm hover:bg-verde hover:text-black transition-all duration-300"
                    onClick={() => window.open(currentProjectData.link, "_blank")}
                  >
                    <ExternalLink size={16} />
                  </Button>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="space-y-6">
                  {/* Project Header */}
                  <div>
                    <div className="flex items-center gap-4 mb-2 text-sm text-gray-400">
                      <div className="flex items-center gap-1">
                        <Calendar size={14} />
                        <span>{currentProjectData.year}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Users size={14} />
                        <span>{currentProjectData.client}</span>
                      </div>
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-2">{currentProjectData.title}</h3>
                    <p className="text-verde text-lg font-medium">{currentProjectData.subtitle}</p>
                  </div>

                  {/* Project Description */}
                  <div className="space-y-4">
                    <p className="text-gray-300 leading-relaxed">{currentProjectData.description}</p>
                    <p className="text-gray-400 text-sm leading-relaxed">{currentProjectData.longDescription}</p>
                  </div>

                  {/* Technologies Used */}
                  <div>
                    <h4 className="text-white font-semibold mb-3">Tecnologias Utilizadas:</h4>
                    <div className="flex flex-wrap gap-2">
                      {currentProjectData.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="bg-gray-800 text-verde px-3 py-1 rounded-full text-sm border border-gray-700 hover:border-verde transition-colors duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Button */}
                  <div className="pt-4">
                    <Button
                      className="bg-verde text-black hover:bg-verde-2 transition-colors duration-300 px-4 py-3"
                      onClick={() => window.open(currentProjectData.link, "_blank")}
                    >
                      <ExternalLink size={16} className="mr-1" />
                      Ver Projeto
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Navigation Arrows */}
          <button
            onClick={prevProject}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-verde text-white hover:text-black p-3 rounded-full transition-all duration-300 backdrop-blur-sm z-10"
            aria-label="Projeto anterior"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={nextProject}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-verde text-white hover:text-black p-3 rounded-full transition-all duration-300 backdrop-blur-sm z-10"
            aria-label="Próximo projeto"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Project Indicators */}
        <div className="flex justify-center items-center mt-8 space-x-4">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => goToProject(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentProject ? "bg-verde scale-125" : "bg-gray-600 hover:bg-gray-500"
                }`}
              aria-label={`Ir para projeto ${index + 1}`}
            />
          ))}
        </div>

        {/* Project Counter */}
        <div className="text-center mt-6">
          <span className="text-gray-400 text-sm">
            {currentProject + 1} de {projects.length} projetos
          </span>
        </div>

        {/* Auto-play Control */}
        <div className="text-center mt-4">
          <button
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className="text-gray-400 hover:text-verde text-sm transition-colors duration-300"
          >
            {isAutoPlaying ? "Pausar apresentação" : "Continuar apresentação"}
          </button>
        </div>
      </div>
    </section>
  )
}
