"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import Link from "next/link"
import { Send, CheckCircle } from "lucide-react"

export default function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [acceptTerms, setAcceptTerms] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!acceptTerms) {
      alert("Debes aceptar los términos de uso, política de privacidad y política de cookies para continuar.")
      return
    }

    setIsLoading(true)

    // Simular envío del formulario
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsLoading(false)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <div className="text-center space-y-6 py-12">
        <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto">
          <CheckCircle className="h-8 w-8 text-red-600" />
        </div>
        <div className="space-y-2">
          <h3 className="text-xl font-semibold text-gray-900">¡Mensaje Enviado!</h3>
          <p className="text-gray-600">
            Gracias por contactar con nosotros. Nos pondremos en contacto contigo en menos de 24 horas para ofrecerte el
            mejor presupuesto.
          </p>
        </div>
        <Button onClick={() => setIsSubmitted(false)} variant="outline">
          Enviar otro mensaje
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label htmlFor="nombre" className="text-sm font-medium text-gray-700">
            Nombre *
          </label>
          <Input id="nombre" name="nombre" type="text" required placeholder="Tu nombre" className="w-full" />
        </div>
        <div className="space-y-2">
          <label htmlFor="apellidos" className="text-sm font-medium text-gray-700">
            Apellidos *
          </label>
          <Input id="apellidos" name="apellidos" type="text" required placeholder="Tus apellidos" className="w-full" />
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="calle" className="text-sm font-medium text-gray-700">
          Dirección *
        </label>
        <Input id="calle" name="calle" type="text" required placeholder="Calle, número, piso..." className="w-full" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label htmlFor="telefono" className="text-sm font-medium text-gray-700">
            Teléfono *
          </label>
          <Input id="telefono" name="telefono" type="tel" required placeholder="+34 XXX XXX XXX" className="w-full" />
        </div>
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium text-gray-700">
            Correo Electrónico *
          </label>
          <Input id="email" name="email" type="email" required placeholder="tu@email.com" className="w-full" />
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="mensaje" className="text-sm font-medium text-gray-700">
          Mensaje *
        </label>
        <Textarea
          id="mensaje"
          name="mensaje"
          required
          placeholder="Cuéntanos sobre tu proyecto de reforma de fachada..."
          rows={4}
          className="w-full"
        />
      </div>

      <div className="flex items-start space-x-3">
        <Checkbox
          id="terms"
          checked={acceptTerms}
          onCheckedChange={(checked) => setAcceptTerms(checked as boolean)}
          className="mt-1"
        />
        <label htmlFor="terms" className="text-sm text-gray-600 leading-relaxed">
          Acepto los{" "}
          <Link href="/aviso-legal" className="text-red-600 hover:underline">
            términos de uso
          </Link>
          ,{" "}
          <Link href="/politica-privacidad" className="text-red-600 hover:underline">
            política de privacidad
          </Link>{" "}
          y{" "}
          <Link href="/politica-cookies" className="text-red-600 hover:underline">
            política de cookies
          </Link>
          . *
        </label>
      </div>

      <Button
        type="submit"
        disabled={isLoading || !acceptTerms}
        className="w-full bg-red-600 text-white hover:bg-red-700 focus:ring-red-500 flex items-center justify-center"
      >
        {isLoading ? (
          <>
            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
            Enviando...
          </>
        ) : (
          <>
            <Send className="h-4 w-4 mr-2" />
            Enviar Mensaje
          </>
        )}
      </Button>

      <p className="text-xs text-gray-500 text-center">
        * Campos obligatorios. Nos pondremos en contacto contigo en menos de 24 horas.
      </p>
    </form>
  )
}
