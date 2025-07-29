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
        "Me chamo Myguel Ângelo Costa Nunes, cristão, nascido e criado no Maranhão. Sempre fui curioso por tecnologia, eletrônica e essas coisas. Já desde novo gosto de desmontar e entender como as coisas funcionam para poder criar minhas próprias ideias. Além da programação, estudo música e também pratico vôlei no tempo livre.",
        "No geral, sou uma pessoa tranquila, mas quando me envolvo com algo, mergulho de verdade. Gosto de aprender coisas novas e acredito bastante no trabalho em equipe, em uma boa colaboração e na troca de experiências.",
      ],
      image: "/about/eu.png",
      imageAlt: "Workspace com celular e laptop",
    },
  },
  {
    id: 2,
    title: "Formação",
    icon: <GraduationCap size={20} />,
    content: {
      paragraphs: [
        "Minha base técnica veio do curso de Automação Industrial no IFMA, onde aprendi eletricidade, eletrônica, microcontroladores e automação de processos e lógica de programação. Foi lá que meu interesse na área se firmou de verdade.",
        "Hoje, aprofundo o conhecimento na graduação em Ciência da Computação pela UFMA, estudando mais lógica e a parte matemática e computacional das coisas. O curso é desafiador, mas é nele que pretendo seguir até a formação e outros objetivos futuros nessa área."
      ],
      image: "/about/formacao.png",
      imageAlt: "Imagem dividida, automação industrial e ciência da computação",
    },
  },
  {
    id: 3,
    title: "Trilha Tech",
    icon: <Code size={20} />,
    content: {
      paragraphs: [
        "Minha trajetória como programador começou de forma bem prática ainda no IFMA, mexendo com projetos de automação e prototipagem, atuando como bolsista no laboratório MaraMaker ou participando de competições de robótica. Depois disso, comecei a estudar desenvolvimento web por conta própria e fiz alguns freelas pequenos.",
        "Então ingressei no programa Trilhas Inova Maranhão, e trabalhei com backend, APIs e banco de dados. Lá tive vivenciei mais ainda o trabalho com equipe multidisciplinar, sendo líder em alguns desafios do programa."
      ],
      image: "/about/trilha-tech.png",
      imageAlt: "Pessoa andando em uma trilha",
    },
  },
  {
    id: 4,
    title: "Objetivos",
    icon: <Target size={20} />,
    content: {
      paragraphs: [
        "Meu objetivo é continuar crescendo como desenvolvedor Full Stack e trabalhar com projetos que tenham propósito. Quero construir uma boa carreira e quem sabe, inspirar outros que estão começando de onde eu comecei.",
        "Em um futuro próximo, gostaria de me especializar, e estudar ainda mais arquiteturas de software, microserviços e as novas tecnologias como IA e Machine Learning.",
      ],
      image: "/about/objetivo.png",
      imageAlt: "Alvo e meta de objetivos",
    },
  },
]

export function AboutSection() {
  const [activeTab, setActiveTab] = useState(1)
  const currentTab = tabsData.find((tab) => tab.id === activeTab) || tabsData[0]

  return (
    <section id="sobre" className="min-h-screen flex items-center justify-center bg-[#0f0f0f] py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Conheça mais <span className="text-verde">sobre mim</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Descubra minha trajetória, formação e objetivos profissionais
          </p>
        </div>

        <div className="relative">
          {/* Decorative indicator */}
          <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-verde rounded-full"></div>

          <Card className="bg-white text-black overflow-hidden shadow-2xl">
            <div className="flex flex-col lg:flex-row min-h-[500px]">
              {/* Content Area */}
              <div className="flex-1 p-6 md:p-8 lg:p-12">
                <div className="flex items-center gap-3 mb-6">
                  <div className="text-verde">{currentTab.icon}</div>
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
                      className="rounded-lg shadow-md w-full h-auto max-h-[230px] object-cover"
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
                          ${activeTab === tab.id
                            ? "bg-verde text-white shadow-lg transform scale-105"
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
                            <div className={activeTab === tab.id ? "text-white" : "text-verde"}>{tab.icon}</div>
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
                          <div className="absolute -left-1 top-1/2 transform -translate-y-1/2 w-2 h-8 bg-verde-2 rounded-r-full lg:block hidden"></div>
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
