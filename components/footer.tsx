import Link from "next/link"
import Image from "next/image"
import { MapPin, Phone, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo y descripción */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-3">
              <div className="relative w-12 h-12 bg-corporate-gray rounded-lg p-2">
                <Image src="/images/logo.svg" alt="COS&ORS TECNICS S.L." fill className="object-contain" />
              </div>
              <div>
                <span className="font-bold text-xl">COS&ORS TECNICS</span>
                <div className="text-xs text-corporate-red font-medium">REHABILITACIÓN DE FACHADAS</div>
              </div>
            </Link>
            <p className="text-gray-300 text-sm leading-relaxed">
              Especialistas en reformas de fachadas en Pineda de Mar. Profesionalidad y calidad garantizada.
            </p>
          </div>

          {/* Información de contacto */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Contacto</h3>
            <div className="space-y-2 text-sm text-gray-300">
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 mt-1 text-corporate-red flex-shrink-0" />
                <span>
                  Avinguda Montserrat 53
                  <br />
                  Pineda de Mar, Barcelona
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-corporate-red" />
                <span>+34 674 77 57 57</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-corporate-red" />
                <span>xcsgrup@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Enlaces legales */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Enlaces</h3>
            <div className="space-y-2 text-sm">
              <Link href="/politica-privacidad" className="block text-gray-300 hover:text-white transition-colors">
                Política de Privacidad
              </Link>
              <Link href="/aviso-legal" className="block text-gray-300 hover:text-white transition-colors">
                Aviso Legal
              </Link>
              <Link href="/politica-cookies" className="block text-gray-300 hover:text-white transition-colors">
                Política de Cookies
              </Link>
              <Link href="/contacto" className="block text-gray-300 hover:text-white transition-colors">
                Contacto
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} COS & ORS TECNICS S.L. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
