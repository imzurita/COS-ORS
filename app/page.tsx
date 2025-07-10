import Link from "next/link"
import { ArrowRight, CheckCircle, Users, Award, Clock } from "lucide-react"
import Image from "next/image"
import GallerySection from "@/components/gallery-section"
import ScrollReveal from "@/components/scroll-reveal"

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-corporate-gray section-padding overflow-hidden">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 slide-in-left">
              <div className="space-y-4">
                <h1 className="text-gray-900">
                  Reformas de Fachadas
                  <span className="block gradient-text">Profesionales</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  En COS & ORS TECNICS S.L. somos especialistas en reformas y rehabilitación de fachadas en Pineda de
                  Mar y toda la provincia de Barcelona.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contacto" className="btn-primary inline-flex items-center justify-center">
                  Solicita tu Presupuesto
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link href="/servicios" className="btn-secondary inline-flex items-center justify-center">
                  Ver Servicios
                </Link>
              </div>

              <div className="flex items-center space-x-8 pt-4">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-sm text-gray-600">Presupuesto gratuito</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-sm text-gray-600">Garantía de calidad</span>
                </div>
              </div>
            </div>

            <div className="relative slide-in-right">
              <div className="aspect-square rounded-2xl overflow-hidden hover-glow">
                <Image
                  src="/images/cos-ors2.jpg"
                  alt="Reforma de fachada profesional - Edificio clásico rehabilitado"
                  width={600}
                  height={600}
                  className="object-cover w-full h-full"
                  priority
                />
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-corporate-red rounded-full flex items-center justify-center text-white font-bold text-sm float-animation">
                +15 Años
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center space-y-4 mb-16 fade-in">
            <h2 className="text-gray-900">¿Por qué elegirnos?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Más de 15 años de experiencia nos avalan como especialistas en reformas de fachadas en la comarca del
              Maresme.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Award,
                title: "Experiencia",
                description:
                  "Más de 15 años especializados en reformas de fachadas, con cientos de proyectos exitosos.",
              },
              {
                icon: Users,
                title: "Equipo Profesional",
                description:
                  "Equipo altamente cualificado con formación continua en las últimas técnicas y materiales.",
              },
              {
                icon: Clock,
                title: "Puntualidad",
                description:
                  "Cumplimos los plazos acordados y mantenemos una comunicación constante durante todo el proyecto.",
              },
            ].map((feature, index) => (
              <ScrollReveal key={index} delay={index * 150} direction="up">
                <div className="text-center space-y-4 p-6 rounded-xl hover-lift-smooth">
                  <div className="w-16 h-16 bg-coral-100 rounded-full flex items-center justify-center mx-auto">
                    <feature.icon className="h-8 w-8 text-coral-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <GallerySection />

      {/* CTA Section */}
      <section className="section-padding bg-corporate-red relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-coral-600 to-coral-700" />
        <div className="container-custom text-center relative z-10">
          <div className="max-w-3xl mx-auto space-y-8 fade-in">
            <h2 className="text-white">¿Necesitas reformar tu fachada?</h2>
            <p className="text-xl text-coral-100">
              Solicita tu presupuesto gratuito sin compromiso. Te asesoramos sobre la mejor solución para tu proyecto.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contacto"
                className="bg-white text-coral-600 hover:bg-gray-50 font-medium py-3 px-8 rounded-lg transition-all duration-300 inline-flex items-center justify-center hover:shadow-lg hover:scale-105"
              >
                Contactar Ahora
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="tel:+34674775757"
                className="border-2 border-white text-white hover:bg-white hover:text-coral-600 font-medium py-3 px-8 rounded-lg transition-all duration-300 inline-flex items-center justify-center hover:shadow-lg hover:scale-105"
              >
                Llamar Directamente
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
