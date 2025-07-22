"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isAtTop, setIsAtTop] = useState(true)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsAtTop(window.scrollY === 0)
    }
    window.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navigation = [
    { name: "Inicio", href: "/" },
    { name: "Servicios", href: "/servicios" },
    { name: "Sobre Nosotros", href: "/sobre-nosotros" },
    { name: "Contacto", href: "/contacto" },
  ]

  const handleHomeClick = (e: React.MouseEvent) => {
    if (location.pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
      setIsMenuOpen(false); // Cierra menú móvil si está abierto
    }
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        isAtTop ? 'bg-transparent shadow-none' : 'bg-white shadow-sm'
      }`}
    >
      <nav className="container-custom">
        <div className="flex justify-between items-center min-h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 py-3" onClick={handleHomeClick}>
            {/* Logo */}
            <img
              src="/images/banner_cosors.svg"
              alt="Logo Cos & Ors"
              className="h-16 w-auto transition-all duration-300 my-0.5"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm font-medium transition-colors duration-200 hover:text-corporate-red ${
                  pathname === item.href ? "text-corporate-red border-b-2 border-corporate-red pb-1" : "text-black"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link href="/contacto" className="btn-primary">
              Solicita Presupuesto
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-corporate-red focus:outline-none focus:ring-2 focus:ring-coral-500"
            aria-label="Abrir menú de navegación"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-base font-medium transition-colors duration-200 hover:text-corporate-red ${
                    pathname === item.href ? "text-corporate-red" : "text-gray-700"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/contacto"
                className="btn-primary inline-block text-center mt-4"
                onClick={() => setIsMenuOpen(false)}
              >
                Solicita Presupuesto
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
