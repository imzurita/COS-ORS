"use client"

import Link from "next/link"
import Image from "next/image"
import { MapPin, Phone, Mail, Linkedin, Instagram, Facebook } from "lucide-react"
import { useEffect, useState } from "react"

export default function Footer() {
  const [year, setYear] = useState<number>()

  useEffect(() => {
    setYear(new Date().getFullYear())
  }, [])

  return (
    <footer className="bg-corporate-gray text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo y descripción */}
          <div className="space-y-4">
            {/* Logo */}
            <Link href="/" className="flex items-center justify-center space-x-2 py-3">
              {/* Logo */}
              <img
                src="/images/logo_completo.svg"
                alt="Logo Cos & Ors"
                className="h-32 w-auto transition-all duration-300 my-0.5"
              />
            </Link>

            {/* Botones de redes sociales */}
            <div className="flex justify-center items-center gap-6 pt-2">
              <a href="https://www.instagram.com/sitesolutionses/" aria-label="Instagram" className="text-corporate-red hover:text-corporate-red transition-colors">
                <Instagram size={32} />
              </a>
              <a href="https://www.instagram.com/sitesolutionses/" aria-label="Instagram" className="text-corporate-red hover:text-corporate-red transition-colors">
                <Facebook size={32} />
              </a>
            </div>
          </div>

          {/* Información de contacto */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg text-black">Contacto</h3>
            <div className="space-y-2 text-sm text-gray-900">
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 mt-1 text-corporate-red flex-shrink-0" />
                <Link href="https://maps.app.goo.gl/ZXS4f4CTR7RNAkxG8" target="_blank" className="text-gray-900 hover:underline">
                   <span>
                  Avinguda Montserrat 53
                  <br />
                  Pineda de Mar, Barcelona
                </span>

                </Link>
              </div>
              <div className="flex items-center space-x-2">

                <Phone className="h-4 w-4 text-corporate-red" />
                <Link href="tel:+34656944757" target="_blank" className="text-gray-900 hover:underline">
                 <span>+34 656 944 757</span>
                </Link>

                <Phone className="h-4 w-4 text-corporate-red" />
                <Link href="tel:+34692682050" target="_blank" className="text-gray-900 hover:underline">
                  <span>+34 692 682 050</span>
                </Link>

              </div>

              <div className="flex items-center space-x-2">


                <Mail className="h-4 w-4 text-corporate-red" />
                <Link href="mailto:info@cos-ors.com" target="_blank" className="text-gray-900 hover:underline">
                  <span>info@cos-ors.com</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Enlaces legales */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg text-black">Enlaces</h3>
            <div className="space-y-2 text-sm">
              <Link href="/politica-privacidad" className="block text-gray-900 hover:text-black transition-colors">
                Política de Privacidad
              </Link>
              <Link href="/aviso-legal" className="block text-gray-900 hover:text-black transition-colors">
                Aviso Legal
              </Link>
              <Link href="/politica-cookies" className="block text-gray-900 hover:text-black transition-colors">
                Política de Cookies
              </Link>
              <Link href="/contacto" className="block text-gray-900 hover:text-black transition-colors">
                Contacto
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-900">
        <p>
          &copy; {year ?? ""} COS & ORS TECNICS S.L. Todos los derechos reservados.
        </p>
      </div>
      </div>
    </footer>
  )
}
