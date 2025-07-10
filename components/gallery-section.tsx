"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, X } from "lucide-react"

const galleryImages = [
  {
    src: "/images/cos-ors2.jpg",
    alt: "Fachada clásica victoriana rehabilitada",
    title: "Rehabilitación Clásica",
    description: "Restauración completa de fachada victoriana con detalles ornamentales",
  },
  {
    src: "/images/cosors7.jpg",
    alt: "Fachadas coloridas restauradas",
    title: "Pintura Especializada",
    description: "Renovación cromática de fachadas históricas con pinturas de alta durabilidad",
  },
  {
    src: "/images/cosors4.jpg",
    alt: "Edificio moderno con fachada blanca",
    title: "Fachadas Modernas",
    description: "Mantenimiento y mejora de edificios contemporáneos",
  },
  {
    src: "/images/cos-ors.jpg",
    alt: "Arquitectura mediterránea con arcos",
    title: "Estilo Mediterráneo",
    description: "Conservación de elementos arquitectónicos tradicionales",
  },
  {
    src: "/images/cosors3.jpg",
    alt: "Edificio con diseño geométrico moderno",
    title: "Diseño Contemporáneo",
    description: "Trabajos especializados en arquitectura de vanguardia",
  },
  {
    src: "/images/cosors9.jpg",
    alt: "Fachadas urbanas con escaleras de incendios",
    title: "Rehabilitación Urbana",
    description: "Restauración de fachadas en entornos urbanos complejos",
  },
  {
    src: "/images/cosors10.jpg",
    alt: "Fachada minimalista blanca",
    title: "Minimalismo Arquitectónico",
    description: "Mantenimiento de líneas limpias y acabados impecables",
  },
  {
    src: "/images/cosors8.jpg",
    alt: "Patio interior con fachadas coloridas",
    title: "Patios y Espacios Interiores",
    description: "Renovación integral de espacios arquitectónicos complejos",
  },
]

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const openLightbox = (index: number) => {
    setSelectedImage(index)
  }

  const closeLightbox = () => {
    setSelectedImage(null)
  }

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % galleryImages.length)
    }
  }

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? galleryImages.length - 1 : selectedImage - 1)
    }
  }

  return (
    <>
      <section className="section-padding bg-corporate-gray overflow-hidden">
        <div className="container-custom">
          <div className="text-center space-y-6 mb-16 fade-in">
            <h2 className="text-gray-900">
              Nuestros
              <span className="block gradient-text-corporate">Proyectos Realizados</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Descubre la calidad y diversidad de nuestros trabajos en reformas de fachadas. Cada proyecto refleja
              nuestro compromiso con la excelencia y la innovación.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className={`group relative overflow-hidden rounded-2xl cursor-pointer hover-lift ${
                  index % 2 === 0 ? "fade-in-delay-1" : "fade-in-delay-2"
                } ${index < 4 ? "lg:h-80" : "lg:h-64"}`}
                onClick={() => openLightbox(index)}
              >
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="font-semibold text-lg mb-2">{image.title}</h3>
                  <p className="text-sm text-gray-200">{image.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12 fade-in-delay-3">
            <p className="text-gray-600 mb-6">¿Te gusta lo que ves? Hagamos realidad tu proyecto</p>
            <button className="btn-primary-corporate">Ver Más Proyectos</button>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10"
          >
            <X className="h-8 w-8" />
          </button>

          <button
            onClick={prevImage}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors z-10"
          >
            <ChevronLeft className="h-8 w-8" />
          </button>

          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors z-10"
          >
            <ChevronRight className="h-8 w-8" />
          </button>

          <div className="max-w-4xl max-h-full">
            <Image
              src={galleryImages[selectedImage].src || "/placeholder.svg"}
              alt={galleryImages[selectedImage].alt}
              width={1200}
              height={800}
              className="max-w-full max-h-full object-contain"
            />
            <div className="text-center mt-4 text-white">
              <h3 className="text-xl font-semibold mb-2">{galleryImages[selectedImage].title}</h3>
              <p className="text-gray-300">{galleryImages[selectedImage].description}</p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
