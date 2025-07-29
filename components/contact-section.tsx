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
      url: "#",
      color: "hover:text-pink-400",
    },
    {
      icon: <Linkedin size={24} />,
      label: "LinkedIn",
      url: "#",
      color: "hover:text-blue-400",
    },
    {
      icon: <Github size={24} />,
      label: "GitHub",
      url: "#",
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

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="bg-gray-900 border-gray-700 p-8">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">Envie uma mensagem</h3>
                <p className="text-gray-400">Preencha o formulário e entrarei em contato em breve</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Nome *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-green-400 focus:border-transparent text-white placeholder-gray-400 transition-all duration-300"
                      placeholder="Seu nome"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-green-400 focus:border-transparent text-white placeholder-gray-400 transition-all duration-300"
                      placeholder="seu@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                    Assunto *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-green-400 focus:border-transparent text-white placeholder-gray-400 transition-all duration-300"
                    placeholder="Assunto da mensagem"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Mensagem *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-green-400 focus:border-transparent text-white placeholder-gray-400 transition-all duration-300 resize-none"
                    placeholder="Conte-me sobre seu projeto ou ideia..."
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-green-400 hover:bg-green-500 text-black font-semibold py-3 px-6 rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center">
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-black mr-2"></div>
                      Enviando...
                    </div>
                  ) : (
                    <div className="flex items-center justify-center">
                      <Send size={18} className="mr-2" />
                      Enviar Mensagem
                    </div>
                  )}
                </Button>
              </form>
            </Card>

            {/* Contact Info & Availability */}
            <div className="space-y-8">
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
              <Card className="bg-gradient-to-r from-green-400/10 to-green-600/10 border-green-400/30 p-8">
                <div className="flex items-center mb-4">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse mr-3"></div>
                  <h3 className="text-xl font-bold text-white">Status: Disponível para projetos</h3>
                </div>
                <p className="text-gray-300 mb-4">
                  Atualmente aceitando novos projetos e oportunidades de colaboração. Vamos criar algo incrível juntos!
                </p>
                <div className="flex items-center text-sm text-gray-400">
                  <Coffee size={16} className="mr-2" />
                  <span>Resposta em até 24 horas</span>
                </div>
              </Card>

              {/* Social Links */}
              <Card className="bg-gray-900 border-gray-700 p-8">
                <h3 className="text-xl font-bold text-white mb-4">Conecte-se comigo</h3>
                <div className="flex space-x-4">
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Brand & Description */}
            <div className="space-y-4">
              <div className="text-2xl font-bold text-green-400">Myguel Ângelo</div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Desenvolvedor Full Stack apaixonado por criar soluções digitais inovadoras e eficientes. Transformando
                ideias em realidade através do código.
              </p>
              <div className="flex items-center text-sm text-gray-500">
                <Heart size={14} className="mr-1 text-red-400" />
                <span>Feito com amor e</span>
                <Code size={14} className="mx-1 text-green-400" />
                <span>muito código</span>
              </div>
            </div>

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
                <p>📍 São Luís, Maranhão - Brasil</p>
                <p>🕒 Disponível para projetos remotos</p>
                <p>💼 Freelancer & Desenvolvedor</p>
                <p>🚀 Sempre aprendendo novas tecnologias</p>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
              <p className="text-gray-400 text-sm">
                © {new Date().getFullYear()} Myguel Ângelo. Todos os direitos reservados.
              </p>
              <div className="flex items-center space-x-4 text-sm text-gray-500">
                <span>Desenvolvido com Next.js & Tailwind CSS</span>
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse delay-100"></div>
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse delay-200"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
