import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import {
  Building,
  Paintbrush,
  Shield,
  Wrench,
  Droplets,
  Thermometer,
  ArrowRight,
  CheckCircle,
  Sparkles,
  Star,
  Zap,
} from "lucide-react"
import ScrollReveal from "@/components/scroll-reveal"

export const metadata: Metadata = {
  title: "Servicios de Reformas de Fachadas | COS & ORS TECNICS S.L.",
  description:
    "Servicios especializados en reformas de fachadas: rehabilitación, impermeabilización, pintura, aislamiento térmico y mantenimiento en Pineda de Mar.",
}

const services = [
  {
    icon: Building,
    title: "Rehabilitación de Fachadas",
    description: "Restauración completa de fachadas deterioradas, recuperando su funcionalidad y estética original.",
    image: "/images/cos-ors2.jpg",
    features: [
      "Diagnóstico previo completo",
      "Reparación de grietas y fisuras",
      "Sustitución de elementos dañados",
      "Acabados de máxima calidad",
    ],
    color: "from-corporate-red-500 to-corporate-red-600",
  },
  {
    icon: Droplets,
    title: "Impermeabilización",
    description: "Protección total contra la humedad y filtraciones con los mejores materiales del mercado.",
    image: "/images/cosors4.jpg",
    features: [
      "Sistemas de impermeabilización avanzados",
      "Tratamiento anti-humedad especializado",
      "Garantía de estanqueidad total",
      "Materiales de primera calidad",
    ],
    color: "from-cyan-500 to-corporate-red-500",
  },
  {
    icon: Paintbrush,
    title: "Pintura de Fachadas",
    description: "Renovación estética con pinturas especializadas para exteriores de máxima durabilidad.",
    image: "/images/cosors7.jpg",
    features: [
      "Pinturas anti-moho y anti-algas",
      "Colores personalizados",
      "Preparación profesional de superficies",
      "Acabados de larga duración",
    ],
    color: "from-orange-500 to-red-500",
  },
  {
    icon: Thermometer,
    title: "Aislamiento Térmico",
    description: "Mejora la eficiencia energética de tu edificio con sistemas de aislamiento SATE.",
    image: "/images/cosors10.jpg",
    features: [
      "Sistema SATE certificado",
      "Ahorro energético garantizado",
      "Máximo confort térmico",
      "Subvenciones disponibles",
    ],
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Shield,
    title: "Reparación de Grietas",
    description: "Tratamiento especializado de fisuras y grietas para evitar problemas estructurales.",
    image: "/images/cosors3.jpg",
    features: [
      "Análisis detallado de causas",
      "Sellado profesional duradero",
      "Prevención de filtraciones",
      "Garantía de reparación",
    ],
    color: "from-purple-500 to-indigo-500",
  },
  {
    icon: Wrench,
    title: "Mantenimiento",
    description: "Servicios de mantenimiento preventivo para conservar tu fachada en perfecto estado.",
    image: "/images/cosors6.jpg",
    features: ["Inspecciones periódicas", "Limpieza especializada", "Pequeñas reparaciones", "Planes de mantenimiento"],
    color: "from-gray-500 to-gray-600",
  },
]

export default function ServiciosPage() {
  return (
    <>
      {/* Add a wrapper div with overflow-x-hidden */}
      <div className="overflow-x-hidden">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center overflow-hidden bg-corporate-gray">
          {/* Animated Background Elements */}
          <div className="hero-shape hero-shape-1"></div>
          <div className="hero-shape hero-shape-2"></div>
          <div className="hero-shape hero-shape-3"></div>

          {/* Geometric Pattern Overlay */}
          <div className="absolute inset-0 geometric-pattern"></div>

          {/* Main Content */}
          <div className="container-custom relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center min-h-screen py-20">
              {/* Left Content - Text */}
              <div className="lg:col-span-7 space-y-8">
                {/* Badge */}
                <div className="slide-in-from-left stagger-1 opacity-0">
                  <div className="inline-flex items-center space-x-3 backdrop-blur-subtle rounded-full px-6 py-3 border border-coral-200/50">
                    <div className="w-2 h-2 bg-corporate-red-500 rounded-full animate-pulse"></div>
                    <Sparkles className="h-4 w-4 text-corporate-red-600" />
                    <span className="text-coral-800 font-medium text-sm">Servicios Especializados</span>
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-3 w-3 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Main Title */}
                <div className="space-y-4">
                  <h1 className="slide-in-from-left stagger-2 opacity-0">
                    <span className="block text-5xl lg:text-7xl font-bold text-gray-900 text-shadow-soft leading-tight">
                      Servicios de
                    </span>
                    <span className="block text-5xl lg:text-7xl font-bold text-corporate-red leading-tight">
                      Fachadas
                    </span>
                    <span className="block text-2xl lg:text-3xl font-light text-gray-600 mt-2">Profesionales</span>
                  </h1>
                </div>

                {/* Description */}
                <div className="slide-in-from-left stagger-3 opacity-0">
                  <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-2xl">
                    Transformamos y rehabilitamos fachadas con
                    <span className="font-semibold text-corporate-red-600"> técnicas innovadoras</span> y
                    <span className="font-semibold text-corporate-red-600"> materiales de vanguardia</span>, garantizando
                    resultados excepcionales.
                  </p>
                </div>

                {/* Stats */}
                <div className="slide-in-from-left stagger-4 opacity-0">
                  <div className="flex flex-wrap gap-8 pt-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-gradient-to-r from-corporate-red-500 to-corporate-red-600 rounded-xl flex items-center justify-center">
                        <Zap className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-gray-900">500+</div>
                        <div className="text-sm text-gray-600">Proyectos</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center">
                        <CheckCircle className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-gray-900">15+</div>
                        <div className="text-sm text-gray-600">Años</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center">
                        <Star className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-gray-900">100%</div>
                        <div className="text-sm text-gray-600">Garantía</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="slide-in-from-left stagger-4 opacity-0">
                  <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <Link
                      href="/contacto"
                      className="group bg-white/80 backdrop-blur-sm text-corporate-red-600 px-8 py-4 rounded-2xl font-semibold text-lg border-2 border-coral-200 transition-all duration-300 hover:bg-white hover:shadow-xl hover:scale-105 inline-flex items-center justify-center"
                    >
                      Solicitar Presupuesto
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <Link
                      href="#servicios"
                      className="group bg-white/80 backdrop-blur-sm text-corporate-red-600 px-8 py-4 rounded-2xl font-semibold text-lg border-2 border-coral-200 transition-all duration-300 hover:bg-white hover:shadow-xl hover:scale-105 inline-flex items-center justify-center"
                    >
                      Ver Servicios
                      <Sparkles className="ml-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Right Content - Visual */}
              <div className="lg:col-span-5 relative">
                <div className="hero-parallax">
                  <div className="relative">
                    {/* Main Image */}
                    <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-shadow duration-500">
                      <Image
                        src="/images/cosors4.jpg"
                        alt="Servicios profesionales de reformas de fachadas"
                        fill
                        className="object-cover transition-transform duration-700 hover:scale-105"
                        sizes="(max-width: 1024px) 100vw, 40vw"
                        priority
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-corporate-red-900/20 to-transparent"></div>
                    </div>

                    {/* Floating Elements */}
                    <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center shadow-xl float-animation">
                      <Star className="h-8 w-8 text-white" />
                    </div>

                    <div className="absolute -bottom-6 -left-6 backdrop-blur-subtle rounded-2xl p-6 shadow-xl border border-white/20">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-corporate-red-600">24/7</div>
                        <div className="text-sm text-gray-600 font-medium">Soporte</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section id="servicios" className="section-padding bg-white">
          <div className="container-custom">
            <div className="space-y-24">
              {services.map((service, index) => (
                <ScrollReveal key={index} delay={index * 100}>
                  <div
                    className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                      index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                    }`}
                  >
                    {/* Content */}
                    <ScrollReveal
                      direction={index % 2 === 0 ? "left" : "right"}
                      delay={200}
                      className={`space-y-8 ${index % 2 === 1 ? "lg:col-start-2" : ""}`}
                    >
                      <div className="space-y-4">
                        <div
                          className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${service.color} text-white`}
                        >
                          <service.icon className="h-8 w-8" />
                        </div>
                        <h3 className="text-3xl font-bold text-gray-900">{service.title}</h3>
                        <p className="text-lg text-gray-600 leading-relaxed">{service.description}</p>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {service.features.map((feature, featureIndex) => (
                          <div
                            key={featureIndex}
                            className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg hover-lift"
                          >
                            <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                            <span className="text-sm font-medium text-gray-700">{feature}</span>
                          </div>
                        ))}
                      </div>

                      <div className="flex flex-col sm:flex-row gap-4">
                        <Link href="/contacto" className="btn-primary inline-flex items-center justify-center">
                          Solicitar Información
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                        <Link href="/contacto" className="btn-secondary inline-flex items-center justify-center">
                          Presupuesto Gratuito
                        </Link>
                      </div>
                    </ScrollReveal>

                    {/* Image */}
                    <ScrollReveal
                      direction={index % 2 === 0 ? "right" : "left"}
                      delay={300}
                      className={`relative ${index % 2 === 1 ? "lg:col-start-1" : ""}`}
                    >
                      <div className="relative aspect-square rounded-3xl overflow-hidden hover-glow">
                        <Image
                          src={service.image || "/placeholder.svg"}
                          alt={`${service.title} - Ejemplo de trabajo realizado`}
                          fill
                          className="object-cover transition-transform duration-700 hover:scale-110"
                          sizes="(max-width: 1024px) 100vw, 50vw"
                        />
                        <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-20`} />
                      </div>

                      {/* Floating Stats */}
                      <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-xl hover-lift">
                        <div className="text-center">
                          <div
                            className={`text-2xl font-bold bg-gradient-to-r ${service.color} bg-clip-text text-transparent`}
                          >
                            {index === 0
                              ? "500+"
                              : index === 1
                                ? "100%"
                                : index === 2
                                  ? "15+"
                                  : index === 3
                                    ? "30%"
                                    : index === 4
                                      ? "24h"
                                      : "365"}
                          </div>
                          <div className="text-xs text-gray-600 font-medium">
                            {index === 0
                              ? "Proyectos"
                              : index === 1
                                ? "Garantía"
                                : index === 2
                                  ? "Años Exp."
                                  : index === 3
                                    ? "Ahorro"
                                    : index === 4
                                      ? "Respuesta"
                                      : "Días/Año"}
                          </div>
                        </div>
                      </div>
                    </ScrollReveal>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="section-padding bg-gradient-to-br from-gray-50 to-coral-50 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/images/cosors5.jpg')] bg-cover bg-center opacity-5" />
          <div className="container-custom relative z-10">
            <div className="max-w-4xl mx-auto">
              <div className="text-center space-y-4 mb-16 fade-in">
                <h2 className="text-gray-900">Nuestro Proceso de Trabajo</h2>
                <p className="text-xl text-gray-600">
                  Seguimos un proceso estructurado para garantizar los mejores resultados
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  {
                    step: "01",
                    title: "Consulta Inicial",
                    description: "Evaluamos tus necesidades y visitamos la obra",
                    icon: "🔍",
                  },
                  {
                    step: "02",
                    title: "Presupuesto",
                    description: "Elaboramos un presupuesto detallado sin compromiso",
                    icon: "📋",
                  },
                  {
                    step: "03",
                    title: "Ejecución",
                    description: "Realizamos los trabajos con máxima calidad",
                    icon: "🔨",
                  },
                  {
                    step: "04",
                    title: "Entrega",
                    description: "Revisamos el trabajo y garantizamos tu satisfacción",
                    icon: "✅",
                  },
                ].map((item, index) => (
                  <ScrollReveal key={index} delay={index * 150} direction="scale">
                    <div className="text-center space-y-4">
                      <div className="relative">
                        <div className="w-20 h-20 bg-white shadow-lg rounded-2xl flex items-center justify-center mx-auto hover-lift">
                          <span className="text-2xl">{item.icon}</span>
                        </div>
                        <div className="absolute -top-2 -right-2 w-8 h-8 bg-corporate-red-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                          {item.step}
                        </div>
                      </div>
                      <h3 className="font-semibold text-lg text-gray-900">{item.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-gradient-to-r from-corporate-red-600 to-corporate-red-700 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/images/cosors9.jpg')] bg-cover bg-center opacity-10" />
          <div className="container-custom text-center relative z-10">
            <div className="max-w-3xl mx-auto space-y-8 fade-in">
              <h2 className="text-black">¿Necesitas más información sobre nuestros servicios?</h2>
              <p className="text-xl text-corporate-black">
                Contacta con nosotros para recibir asesoramiento personalizado y un presupuesto adaptado a tu proyecto.
              </p>
              <Link
                href="/contacto"
                className="bg-white text-corporate-red-600 hover:bg-gray-50 font-medium py-4 px-8 rounded-lg transition-all duration-300 inline-flex items-center justify-center hover:shadow-lg hover:scale-105"
              >
                Solicitar Consulta Gratuita
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

