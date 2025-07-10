import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import {
  Award,
  Users,
  Clock,
  CheckCircle,
  ArrowRight,
  Target,
  Heart,
  Zap,
  Shield,
  Building2,
  Sparkles,
} from "lucide-react"
import ScrollReveal from "@/components/scroll-reveal"

export const metadata: Metadata = {
  title: "Sobre Nosotros | COS & ORS TECNICS S.L. - Especialistas en Fachadas",
  description:
    "Conoce COS & ORS TECNICS S.L., empresa especializada en reformas de fachadas en Pineda de Mar con más de 15 años de experiencia y compromiso con la calidad.",
}

const stats = [
  { number: "15+", label: "Años de Experiencia", icon: Award },
  { number: "500+", label: "Proyectos Realizados", icon: Target },
  { number: "100%", label: "Clientes Satisfechos", icon: Heart },
  { number: "24/7", label: "Soporte Técnico", icon: Zap },
]

const values = [
  {
    icon: Award,
    title: "Calidad",
    description:
      "Utilizamos únicamente materiales de primera calidad y aplicamos las mejores técnicas del sector para garantizar resultados duraderos.",
    color: "from-corporate-red to-red-600",
  },
  {
    icon: Users,
    title: "Profesionalidad",
    description:
      "Nuestro equipo está formado por profesionales cualificados comprometidos con la excelencia en cada proyecto.",
    color: "from-gray-600 to-black",
  },
  {
    icon: Clock,
    title: "Puntualidad",
    description:
      "Respetamos los plazos acordados y mantenemos una comunicación constante durante todo el desarrollo del proyecto.",
    color: "from-corporate-red to-red-700",
  },
  {
    icon: Shield,
    title: "Garantía",
    description:
      "Ofrecemos garantía completa en todos nuestros trabajos, respaldando la calidad de nuestros servicios.",
    color: "from-gray-700 to-black",
  },
]

export default function SobreNosotrosPage() {
  return (
    <>
      {/* Revolutionary Hero Section - Text Right */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-corporate-gray">
        {/* Animated Background Elements - Mirrored */}
        <div
          className="hero-shape"
          style={{
            width: "250px",
            height: "250px",
            top: "15%",
            left: "8%",
            background: "linear-gradient(135deg, rgba(213, 54, 43, 0.1), rgba(184, 46, 36, 0.05))",
            animationDelay: "1s",
          }}
        ></div>
        <div
          className="hero-shape"
          style={{
            width: "180px",
            height: "180px",
            bottom: "25%",
            right: "10%",
            background: "linear-gradient(135deg, rgba(0, 0, 0, 0.1), rgba(213, 54, 43, 0.05))",
            animationDelay: "3s",
          }}
        ></div>
        <div
          className="hero-shape"
          style={{
            width: "120px",
            height: "120px",
            top: "50%",
            left: "25%",
            background: "linear-gradient(135deg, rgba(230, 230, 226, 0.3), rgba(213, 54, 43, 0.05))",
            animationDelay: "5s",
          }}
        ></div>

        {/* Geometric Pattern Overlay */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
            radial-gradient(circle at 75% 25%, rgba(213, 54, 43, 0.05) 0%, transparent 50%),
            radial-gradient(circle at 25% 75%, rgba(0, 0, 0, 0.03) 0%, transparent 50%)
          `,
          }}
        ></div>

        {/* Main Content */}
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center min-h-screen py-20">
            {/* Left Content - Visual */}
            <div className="lg:col-span-5 relative order-2 lg:order-1">
              <div className="hero-parallax">
                <div className="relative">
                  {/* Image Grid */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-4">
                      <div className="aspect-square rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-500">
                        <Image
                          src="/images/cosors4.jpg"
                          alt="Equipo profesional trabajando"
                          width={300}
                          height={300}
                          className="object-cover w-full h-full transition-transform duration-700 hover:scale-110"
                        />
                      </div>
                      <div className="aspect-video rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-500">
                        <Image
                          src="/images/cosors6.jpg"
                          alt="Proyectos realizados"
                          width={300}
                          height={200}
                          className="object-cover w-full h-full transition-transform duration-700 hover:scale-110"
                        />
                      </div>
                    </div>
                    <div className="space-y-4 pt-8">
                      <div className="aspect-video rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-500">
                        <Image
                          src="/images/cosors8.jpg"
                          alt="Arquitectura rehabilitada"
                          width={300}
                          height={200}
                          className="object-cover w-full h-full transition-transform duration-700 hover:scale-110"
                        />
                      </div>
                      <div className="aspect-square rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-500">
                        <Image
                          src="/images/cosors3.jpg"
                          alt="Fachadas modernas"
                          width={300}
                          height={300}
                          className="object-cover w-full h-full transition-transform duration-700 hover:scale-110"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Floating Elements */}
                  <div className="absolute -top-6 -left-6 w-24 h-24 bg-gradient-to-r from-corporate-red to-red-600 rounded-2xl flex items-center justify-center shadow-xl float-animation">
                    <Building2 className="h-8 w-8 text-white" />
                  </div>

                  <div className="absolute -bottom-6 -right-6 backdrop-blur-subtle rounded-2xl p-6 shadow-xl border border-corporate-red/20">
                    <div className="text-center">
                      <div className="text-3xl font-bold bg-gradient-to-r from-corporate-red to-red-600 bg-clip-text text-transparent">
                        15+
                      </div>
                      <div className="text-sm text-corporate-red font-medium">Años</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content - Text */}
            <div className="lg:col-span-7 space-y-8 order-1 lg:order-2">
              {/* Badge */}
              <div className="slide-in-from-right stagger-1 opacity-0">
                <div className="inline-flex items-center space-x-3 backdrop-blur-subtle rounded-full px-6 py-3 border border-corporate-red/20">
                  <div className="w-2 h-2 bg-corporate-red rounded-full animate-pulse"></div>
                  <Users className="h-4 w-4 text-corporate-red" />
                  <span className="text-black font-medium text-sm">Conoce Nuestro Equipo</span>
                  <div className="flex items-center space-x-1">
                    <div className="w-1 h-1 bg-corporate-red rounded-full"></div>
                    <div className="w-1 h-1 bg-red-600 rounded-full"></div>
                    <div className="w-1 h-1 bg-gray-600 rounded-full"></div>
                  </div>
                </div>
              </div>

              {/* Main Title */}
              <div className="space-y-4">
                <h1 className="slide-in-from-right stagger-2 opacity-0">
                  <span className="block text-5xl lg:text-7xl font-bold text-gray-900 text-shadow-soft leading-tight">
                    Sobre
                  </span>
                  <span className="block text-4xl lg:text-6xl font-bold bg-gradient-to-r from-corporate-red to-red-600 bg-clip-text text-transparent leading-tight">
                    COS & ORS
                  </span>
                  <span className="block text-4xl lg:text-6xl font-bold bg-gradient-to-r from-gray-700 to-black bg-clip-text text-transparent leading-tight">
                    TECNICS S.L.
                  </span>
                </h1>
              </div>

              {/* Description */}
              <div className="slide-in-from-right stagger-3 opacity-0">
                <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-2xl">
                  Más de 15 años transformando fachadas en
                  <span className="font-semibold text-corporate-red"> Pineda de Mar</span> y Barcelona, con un
                  compromiso inquebrantable hacia la
                  <span className="font-semibold text-red-600"> excelencia</span> y la
                  <span className="font-semibold text-gray-700"> innovación</span>.
                </p>
              </div>

              {/* Mission Statement */}
              <div className="slide-in-from-right stagger-4 opacity-0">
                <div className="bg-gradient-to-r from-corporate-gray to-white rounded-2xl p-6 border border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Nuestra Misión</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Revolucionar el sector de reformas de fachadas combinando tradición artesanal con tecnología de
                    vanguardia, creando espacios que inspiran y perduran en el tiempo.
                  </p>
                </div>
              </div>

              {/* Stats */}
              <div className="slide-in-from-right stagger-4 opacity-0">
                <div className="flex flex-wrap gap-6 pt-4">
                  {stats.slice(0, 3).map((stat, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div
                        className={`w-12 h-12 bg-gradient-to-r ${
                          index === 0
                            ? "from-corporate-red to-red-600"
                            : index === 1
                              ? "from-gray-600 to-black"
                              : "from-corporate-red to-red-700"
                        } rounded-xl flex items-center justify-center`}
                      >
                        <stat.icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-gray-900">{stat.number}</div>
                        <div className="text-sm text-gray-600">{stat.label}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="slide-in-from-right stagger-4 opacity-0">
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Link
                    href="/contacto"
                    className="group bg-gradient-to-r from-corporate-red to-red-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-corporate-red/25 hover:scale-105 inline-flex items-center justify-center"
                  >
                    Conocer Más
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link
                    href="/servicios"
                    className="group bg-white/80 backdrop-blur-sm text-corporate-red px-8 py-4 rounded-2xl font-semibold text-lg border-2 border-corporate-red/30 transition-all duration-300 hover:bg-white hover:shadow-xl hover:scale-105 inline-flex items-center justify-center"
                  >
                    Nuestros Servicios
                    <Sparkles className="ml-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <ScrollReveal key={index} delay={index * 100} direction="scale">
                <div className="text-center space-y-3">
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${
                      index === 0
                        ? "from-corporate-red to-red-600"
                        : index === 1
                          ? "from-gray-600 to-black"
                          : index === 2
                            ? "from-corporate-red to-red-700"
                            : "from-gray-700 to-black"
                    } rounded-2xl flex items-center justify-center mx-auto hover-lift`}
                  >
                    <stat.icon className="h-8 w-8 text-white" />
                  </div>
                  <div
                    className={`text-3xl font-bold bg-gradient-to-r ${
                      index === 0
                        ? "from-corporate-red to-red-600"
                        : index === 1
                          ? "from-gray-600 to-black"
                          : index === 2
                            ? "from-corporate-red to-red-700"
                            : "from-gray-700 to-black"
                    } bg-clip-text text-transparent`}
                  >
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section - New Card Design */}
      <section className="section-padding bg-gradient-to-br from-corporate-gray to-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center space-y-4 mb-16 fade-in">
              <h2 className="text-gray-900">Nuestros Valores</h2>
              <p className="text-xl text-gray-600">Los principios que guían nuestro trabajo diario</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <ScrollReveal key={index} delay={index * 150} direction={index % 2 === 0 ? "left" : "right"}>
                  <div className={`relative p-8 bg-white rounded-3xl shadow-lg hover-lift-smooth overflow-hidden`}>
                    <div
                      className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${value.color} opacity-10 rounded-full -translate-y-16 translate-x-16`}
                    />
                    <div className="relative z-10 space-y-4">
                      <div
                        className={`w-16 h-16 bg-gradient-to-br ${value.color} rounded-2xl flex items-center justify-center`}
                      >
                        <value.icon className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900">{value.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{value.description}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center space-y-4 mb-12 fade-in">
              <h2 className="text-gray-900">Nuestro Compromiso</h2>
              <p className="text-xl text-gray-600">Con cada cliente y cada proyecto</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                "Presupuestos detallados y transparentes",
                "Materiales de máxima calidad certificados",
                "Cumplimiento estricto de plazos",
                "Garantía en todos nuestros trabajos",
                "Asesoramiento técnico personalizado",
                "Servicio post-venta y mantenimiento",
                "Respeto por el medio ambiente",
                "Formación continua de nuestro equipo",
              ].map((commitment, index) => (
                <ScrollReveal key={index} delay={index * 50} direction="up">
                  <div
                    className={`flex items-center space-x-3 p-4 bg-gradient-to-r from-corporate-gray to-white rounded-xl shadow-sm hover-lift-smooth`}
                  >
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{commitment}</span>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-corporate-red to-red-700 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/cosors10.jpg')] bg-cover bg-center opacity-10" />
        <div className="container-custom text-center relative z-10">
          <div className="max-w-3xl mx-auto space-y-8 fade-in">
            <h2 className="text-white">¿Quieres conocer más sobre nosotros?</h2>
            <p className="text-xl text-white/90">
              Estaremos encantados de contarte más sobre nuestra experiencia y cómo podemos ayudarte con tu proyecto de
              reforma de fachada.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contacto"
                className="bg-white text-corporate-red hover:bg-gray-50 font-medium py-3 px-8 rounded-lg transition-all duration-300 inline-flex items-center justify-center hover:shadow-lg hover:scale-105"
              >
                Contactar con Nosotros
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="/servicios"
                className="border-2 border-white text-white hover:bg-white hover:text-corporate-red font-medium py-3 px-8 rounded-lg transition-all duration-300 inline-flex items-center justify-center hover:shadow-lg hover:scale-105"
              >
                Ver Nuestros Servicios
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
