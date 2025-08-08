"use client"

import type React from "react"

import { useState } from "react"
import { Mail, Phone, MapPin, Send, Heart, Coffee, Code, Instagram, Linkedin, Github, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    // Reset form
    setFormData({ name: "", email: "", subject: "", message: "" })
    setIsSubmitting(false)

    // You can integrate with a real form service here
    alert("Mensagem enviada com sucesso! Entrarei em contato em breve.")
  }

  const contactInfo = [
    {
      icon: <Mail size={20} />,
      label: "Email",
      value: "myguel.angelo@email.com",
      link: "mailto:myguel.angelo@email.com",
    },
    {
      icon: <Phone size={20} />,
      label: "Telefone",
      value: "+55 (98) 99999-9999",
      link: "tel:+5598999999999",
    },
    {
      icon: <MapPin size={20} />,
      label: "Localização",
      value: "São Luís, Maranhão - Brasil",
      link: "#",
    },
  ]

  const socialLinks = [
    {
      icon: <Instagram size={24} />,
      label: "Instagram",
      url: "https://www.instagram.com/angelonunes_my/",
      color: "hover:text-pink-400",
    },
    {
      icon: <Linkedin size={24} />,
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/myguel-%C3%A2ngelo-426a4a2a0/",
      color: "hover:text-blue-400",
    },
    {
      icon: <Github size={24} />,
      label: "GitHub",
      url: "https://github.com/Myguel-Angelo",
      color: "hover:text-gray-300",
    },
  ]

  const quickLinks = [
    { name: "Início", href: "#inicio" },
    { name: "Sobre", href: "#sobre" },
    { name: "Tecnologias", href: "#techs" },
    { name: "Projetos", href: "#projetos" },
  ]

  return (
    <footer id="contato" className="bg-black text-white">
      {/* Main Contact Section */}
      <div className="relative py-20">
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 left-10 w-20 h-20 border-2 border-green-400/20 transform rotate-45"></div>
          <div className="absolute bottom-10 right-10 w-16 h-16 border-2 border-green-400/20 transform -rotate-12"></div>
          <div className="absolute top-1/2 left-1/4 w-24 h-24 border-2 border-green-400/10 transform rotate-12"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Vamos trabalhar <span className="text-green-400">juntos?</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Estou sempre aberto a novos desafios e oportunidades. Entre em contato e vamos criar algo incrível!
            </p>
          </div>

          <div className="">
            {/* Contact Info & Availability */}
            <div className="flex flex-col md:flex-row gap-6">
              {/* Contact Information */}
              <Card className="bg-gray-900 border-gray-700 p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Informações de Contato</h3>
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <a
                      key={index}
                      href={info.link}
                      className="flex items-center space-x-4 text-gray-300 hover:text-green-400 transition-colors duration-300 group"
                    >
                      <div className="text-green-400 group-hover:scale-110 transition-transform duration-300">
                        {info.icon}
                      </div>
                      <div>
                        <p className="text-sm text-gray-400">{info.label}</p>
                        <p className="font-medium">{info.value}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </Card>

              {/* Availability Status */}
              <Card className="bg-[#1C1C1C] border-green-400/30 p-8">
                <div className="flex items-center mb-4">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse mr-3"></div>
                  <h3 className="text-xl font-bold text-white">Status: Disponível para projetos</h3>
                </div>
                <p className="text-gray-300 mb-4">
                  Atualmente aceitando novos projetos e oportunidades de colaboração. Basta entrar em contato que conversamos melhor.
                </p>
                <div className="flex items-center text-sm text-gray-400">
                  <Coffee size={16} className="mr-2" />
                  <span>Resposta em até 24 horas</span>
                </div>
                <div className="flex space-x-4 mt-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 bg-gray-800 rounded-lg text-gray-400 ${social.color} transition-all duration-300 hover:scale-110 hover:bg-gray-700`}
                      aria-label={social.label}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white">Navegação Rápida</h4>
              <div className="grid grid-cols-2 gap-2">
                {quickLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="text-gray-400 hover:text-green-400 transition-colors duration-300 text-sm flex items-center"
                  >
                    <ExternalLink size={12} className="mr-2" />
                    {link.name}
                  </a>
                ))}
              </div>
            </div>

            {/* Additional Info */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white">Informações</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <p>São Luís, Maranhão - Brasil</p>
                <p>Disponível para contrado</p>
                <p>Freelancer & Desenvolvedor</p>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-4 pt-4 text-center">
            <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
              <p className="text-gray-400 text-sm">
                © {new Date().getFullYear()} Myguel Ângelo. Todos os direitos reservados.
              </p>

            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
