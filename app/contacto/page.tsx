import type { Metadata } from "next"
import ContactForm from "@/components/contact-form"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export const metadata: Metadata = {
  title: "Contacto | COS & ORS TECNICS S.L. - Solicita tu Presupuesto",
  description:
    "Contacta con COS & ORS TECNICS S.L. para solicitar tu presupuesto gratuito de reforma de fachadas. Estamos en Pineda de Mar, Barcelona.",
}

export default function ContactoPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-corporate-gray py-12 md:py-16">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center space-y-4">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
              Contacta con
              <span className="block text-corporate-red">Nosotros</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              Solicita tu presupuesto gratuito sin compromiso. Estaremos encantados de asesorarte en tu proyecto de
              reforma de fachada.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-6">
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-gray-900">Información de Contacto</h2>
                <p className="text-gray-600 leading-relaxed">
                  Estamos ubicados en el corazón de Pineda de Mar, listos para atender tus consultas y visitar tu
                  proyecto sin compromiso.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-corporate-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-corporate-red" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Dirección</h3>
                    <p className="text-gray-600">
                      Avinguda Montserrat 53
                      <br />
                      08397 Pineda de Mar
                      <br />
                      Barcelona, España
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-corporate-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-corporate-red" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Teléfono</h3>
                    <p className="text-gray-600">
                      <a href="tel:+34674775757" className="hover:text-corporate-red transition-colors">
                        +34 674 77 57 57
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-corporate-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-corporate-red" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                    <p className="text-gray-600">
                      <a href="mailto:xcsgrup@gmail.com" className="hover:text-corporate-red transition-colors">
                        xcsgrup@gmail.com
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-corporate-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="h-6 w-6 text-corporate-red" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Horario</h3>
                    <div className="text-gray-600 space-y-1">
                      <p>Lunes - Viernes: 8:00 - 18:00</p>
                      <p>Sábados: 9:00 - 14:00</p>
                      <p>Domingos: Cerrado</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-50 p-6 md:p-8 rounded-2xl">
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-2">Solicita tu Presupuesto</h2>
                  <p className="text-gray-600">
                    Completa el formulario y nos pondremos en contacto contigo en menos de 24 horas.
                  </p>
                </div>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center space-y-4 mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Nuestra Ubicación</h2>
              <p className="text-lg text-gray-600">Nos encontramos en Pineda de Mar, Barcelona</p>
            </div>

            <div className="bg-white p-4 rounded-2xl shadow-sm">
              <div className="aspect-video bg-gray-200 rounded-xl flex items-center justify-center">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2975.8234567890123!2d2.6789012345678!3d41.6234567890123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDM3JzI0LjQiTiAywrA0MCc0NC4wIkU!5e0!3m2!1ses!2ses!4v1234567890123!5m2!1ses!2ses"
                  width="100%"
                  height="100%"
                  style={{ border: 0, borderRadius: "0.75rem" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ubicación de COS & ORS TECNICS S.L. en Pineda de Mar"
                  className="rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
