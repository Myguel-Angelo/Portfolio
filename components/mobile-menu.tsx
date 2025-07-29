"use client"

import { useState } from "react"
import { X, Menu } from "lucide-react"

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden text-white hover:text-green-400 transition-colors"
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile menu overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm md:hidden">
          <div className="flex flex-col items-center justify-center h-full space-y-8">
            <button onClick={() => setIsOpen(false)} className="absolute top-4 right-4 text-white hover:text-green-400">
              <X size={24} />
            </button>

            <nav className="flex flex-col items-center space-y-6 text-xl">
              <a
                href="#inicio"
                onClick={() => setIsOpen(false)}
                className="text-white hover:text-green-400 transition-colors"
              >
                Início
              </a>
              <a
                href="#sobre"
                onClick={() => setIsOpen(false)}
                className="text-white hover:text-green-400 transition-colors"
              >
                Sobre
              </a>
              <a
                href="#techs"
                onClick={() => setIsOpen(false)}
                className="text-white hover:text-green-400 transition-colors"
              >
                Techs
              </a>
              <a
                href="#projetos"
                onClick={() => setIsOpen(false)}
                className="text-white hover:text-green-400 transition-colors"
              >
                Projetos
              </a>
              <a
                href="#contato"
                onClick={() => setIsOpen(false)}
                className="text-white hover:text-green-400 transition-colors"
              >
                Contato
              </a>
            </nav>
          </div>
        </div>
      )}
    </>
  )
}
