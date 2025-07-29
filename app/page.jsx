import { Instagram, Linkedin, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { AboutSection } from "@/components/about-section"
import { TechSection } from "@/components/tech-section"
import { ProjectsSection } from "@/components/projects-section"
import { ContactSection } from "@/components/contact-section"
import TextoDinamico from "@/components/zText"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="text-xl font-bold text-verde">Myguel Ângelo</div>

            {/* Navigation Menu */}
            <div className="hidden md:flex space-x-8">
              <a href="#inicio" className="text-white hover:text-verde transition-colors">
                Início
              </a>
              <a href="#sobre" className="text-white hover:text-verde transition-colors">
                Sobre
              </a>
              <a href="#techs" className="text-white hover:text-verde transition-colors">
                Techs
              </a>
              <a href="#projetos" className="text-white hover:text-verde transition-colors">
                Projetos
              </a>
              <a href="#contato" className="text-white hover:text-verde transition-colors">
                Contato
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button className="text-white hover:text-verde">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="inicio" className="relative min-h-screen flex items-center pt-16">
        {/* Hexagonal decorative elements */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-20 h-20 border-2 border-verde transform rotate-45 opacity-30"></div>
          <div className="absolute top-40 left-1/4 w-16 h-16 border-2 border-verde transform rotate-12 opacity-20"></div>
          <div className="absolute bottom-40 left-20 w-24 h-24 border-2 border-verde transform -rotate-12 opacity-25"></div>
          <div className="absolute top-60 right-1/4 w-32 h-32 border-2 border-verde transform rotate-45 opacity-15"></div>
          <div className="absolute bottom-20 right-10 w-20 h-20 border-2 border-verde transform -rotate-45 opacity-30"></div>
        </div>

        <div className="max-w-5xl mx-auto z-10 px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 py-10 px-0 md:p-10 items-center">
            {/* Left Content */}
            <div className="space-y-6 items-center z-20 flex flex-col lg:items-start">
              <div className="space-y-1">
                <h1 className="text-5xl md:text-6xl font-bold mb-6">
                  Ângelo <span className="text-verde">Dev.</span>
                </h1>
                <h2 className="text-lg text-gray-300">Trilheiro de Inovação e Tecnologia</h2>
                <p className="text-verde text-lg mono font-mono">
                  <TextoDinamico />
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                <Button
                  variant="outline"
                  className="border-verde text-gray-300 hover:bg-verde hover:text-black transition-colors px-8 py-3 bg-transparent"
                >
                  Saiba mais
                </Button>

                <div className="flex space-x-4">
                  <a href="https://www.instagram.com/angelonunes_my/" className="text-gray-400 hover:text-verde transition-colors" aria-label="Instagram" target="blank">
                    <Instagram size={24} />
                  </a>
                  <a href="https://www.linkedin.com/in/myguel-%C3%A2ngelo-426a4a2a0/" className="text-gray-400 hover:text-verde transition-colors" aria-label="LinkedIn" target="blank">
                    <Linkedin size={24} />
                  </a>
                  <a href="https://github.com/Myguel-Angelo" className="text-gray-400 hover:text-verde transition-colors" aria-label="GitHub" target="blank">
                    <Github size={24} />
                  </a>
                </div>
              </div>
            </div>

            {/* Right Content - Profile Image Area */}
            <div className="relative flex justify-center lg:justify-end">
              <div className="relative">
                {/* Hexagonal frame for profile image */}
                <div className="relative w-80 h-80 md:w-96 md:h-96">
                  {/* Main hexagonal border */}
                  <div className="absolute z-0 inset-0 border-2 border-verde transform rotate-45 opacity-60"></div>
                  <div className="absolute z-0 inset-4 border-2 border-verde transform -rotate-12 opacity-40"></div>

                  {/* Profile image placeholder */}
                  <div className="absolute inset-8 bg-gray-800 rounded-lg overflow-hidden">
                    <img
                      src="/profile.jpg"
                      alt="Myguel Ângelo - Desenvolvedor Full Stack"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Additional decorative hexagons */}
                <div className="absolute -top-8 -right-8 w-16 h-16 border-2 border-verde transform rotate-12 opacity-30"></div>
                <div className="absolute -bottom-8 -left-8 w-20 h-20 border-2 border-verde transform -rotate-45 opacity-25"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre">
        {/* <AboutSection /> */}
      </section>

      {/* Tech Section */}
      <section id="techs">
        {/* <TechSection /> */}
      </section>

      {/* Projects Section */}
      <section id="projetos">
        {/* <ProjectsSection /> */}
      </section>

      {/* Contact Section */}
      <section id="contato">
        {/* <ContactSection /> */}
      </section>
    </div>
  )
}
