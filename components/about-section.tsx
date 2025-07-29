"use client"

import type React from "react"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { User, GraduationCap, Code, Target } from "lucide-react"

interface TabContent {
  id: number
  title: string
  icon: React.ReactNode
  content: {
    paragraphs: string[]
    image?: string
    imageAlt?: string
  }
}

const tabsData: TabContent[] = [
  {
    id: 1,
    title: "Sobre Mim",
    icon: <User size={20} />,
    content: {
      paragraphs: [
        "Olá! Sou Myguel Ângelo, um desenvolvedor Full Stack apaixonado por tecnologia e inovação. Minha jornada na programação começou há alguns anos e desde então tenho me dedicado a criar soluções digitais que fazem a diferença.",
        "Acredito que a tecnologia tem o poder de transformar vidas e negócios. Por isso, estou sempre em busca de novos desafios e oportunidades para aplicar meus conhecimentos de forma criativa e eficiente, sempre focando na experiência do usuário e na qualidade do código.",
      ],
      image: "/placeholder.svg?height=200&width=300",
      imageAlt: "Workspace com piano e laptop",
    },
  },
  {
    id: 2,
    title: "Formação",
    icon: <GraduationCap size={20} />,
    content: {
      paragraphs: [
        "Minha formação acadêmica inclui cursos especializados em Desenvolvimento Web e Ciência da Computação. Estou sempre me atualizando com as mais recentes tecnologias e metodologias do mercado.",
        "Além da formação formal, invisto constantemente em cursos online, certificações e participação em comunidades de desenvolvedores. Acredito que o aprendizado contínuo é fundamental para se manter relevante nesta área em constante evolução.",
      ],
      image: "/placeholder.svg?height=200&width=300",
      imageAlt: "Livros de formação e computador",
    },
  },
  {
    id: 3,
    title: "Experiência",
    icon: <Code size={20} />,
    content: {
      paragraphs: [
        "Tenho experiência sólida no desenvolvimento de aplicações web modernas, trabalhando com tecnologias como React, Next.js, Node.js, TypeScript e bancos de dados relacionais e não-relacionais.",
        "Já participei de projetos diversos, desde landing pages responsivas até sistemas complexos de gerenciamento. Minha abordagem sempre prioriza código limpo, performance otimizada e arquiteturas escaláveis.",
      ],
      image: "/placeholder.svg?height=200&width=300",
      imageAlt: "Setup de programação com múltiplos monitores",
    },
  },
  {
    id: 4,
    title: "Objetivos",
    icon: <Target size={20} />,
    content: {
      paragraphs: [
        "Meu objetivo é continuar crescendo como desenvolvedor Full Stack, contribuindo para projetos inovadores que impactem positivamente a vida das pessoas. Busco sempre trabalhar em equipes colaborativas e ambientes desafiadores.",
        "No futuro próximo, planejo me especializar ainda mais em arquiteturas de microsserviços e tecnologias emergentes como IA e Machine Learning, sempre mantendo o foco na criação de soluções robustas e escaláveis.",
      ],
      image: "/placeholder.svg?height=200&width=300",
      imageAlt: "Metas e gráfico de crescimento",
    },
  },
]

export function AboutSection() {
  const [activeTab, setActiveTab] = useState(1)
  const currentTab = tabsData.find((tab) => tab.id === activeTab) || tabsData[0]

  return (
    <section id="sobre" className="min-h-screen flex items-center justify-center bg-gray-900 py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Conheça mais <span className="text-green-400">sobre mim</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Descubra minha trajetória, formação e objetivos profissionais
          </p>
        </div>

        <div className="relative">
          {/* Decorative indicator */}
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-green-400 rounded-full"></div>

          <Card className="bg-white text-black overflow-hidden shadow-2xl">
            <div className="flex flex-col lg:flex-row min-h-[500px]">
              {/* Content Area */}
              <div className="flex-1 p-8 lg:p-12">
                <div className="flex items-center gap-3 mb-6">
                  <div className="text-green-500">{currentTab.icon}</div>
                  <h3 className="text-3xl font-bold text-gray-800">{currentTab.title}</h3>
                </div>

                <div className="space-y-4 mb-8">
                  {currentTab.content.paragraphs.map((paragraph, index) => (
                    <p key={index} className="text-gray-600 leading-relaxed text-lg">
                      {paragraph}
                    </p>
                  ))}
                </div>

                {currentTab.content.image && (
                  <div className="mt-8">
                    <img
                      src={currentTab.content.image || "/placeholder.svg"}
                      alt={currentTab.content.imageAlt}
                      className="rounded-lg shadow-md max-w-full h-auto"
                    />
                  </div>
                )}
              </div>

              {/* Tabs Area */}
              <div className="lg:w-80 bg-gray-50 border-l border-gray-200">
                <div className="p-6">
                  <div className="grid grid-cols-4 lg:grid-cols-1 gap-3">
                    {tabsData.map((tab) => (
                      <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`
                          relative p-6 rounded-lg text-left transition-all duration-300 group
                          ${
                            activeTab === tab.id
                              ? "bg-green-500 text-white shadow-lg transform scale-105"
                              : "bg-gray-200 text-gray-600 hover:bg-gray-300 hover:text-gray-800"
                          }
                        `}
                      >
                        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-3">
                          <div
                            className={`
                            flex-shrink-0 p-2 rounded-full
                            ${activeTab === tab.id ? "bg-white/20" : "bg-white"}
                          `}
                          >
                            <div className={activeTab === tab.id ? "text-white" : "text-green-500"}>{tab.icon}</div>
                          </div>
                          <div className="text-center lg:text-left">
                            <div
                              className={`
                              text-4xl font-bold mb-1
                              ${activeTab === tab.id ? "text-white" : "text-gray-400"}
                            `}
                            >
                              {tab.id}
                            </div>
                            <div
                              className={`
                              text-sm font-medium hidden lg:block
                              ${activeTab === tab.id ? "text-white" : "text-gray-600"}
                            `}
                            >
                              {tab.title}
                            </div>
                          </div>
                        </div>

                        {/* Active indicator */}
                        {activeTab === tab.id && (
                          <div className="absolute -left-1 top-1/2 transform -translate-y-1/2 w-2 h-8 bg-green-600 rounded-r-full lg:block hidden"></div>
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
