"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { X, Cookie } from "lucide-react"

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false)
  const [showPreferences, setShowPreferences] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent")
    if (!consent) {
      setShowBanner(true)
    }
  }, [])

  const acceptAll = () => {
    localStorage.setItem("cookie-consent", "accepted")
    setShowBanner(false)
  }

  const rejectAll = () => {
    localStorage.setItem("cookie-consent", "rejected")
    setShowBanner(false)
  }

  const savePreferences = () => {
    localStorage.setItem("cookie-consent", "custom")
    setShowBanner(false)
    setShowPreferences(false)
  }

  if (!showBanner) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-50">
      <div className="container-custom py-4">
        {!showPreferences ? (
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="flex items-start space-x-3 flex-1">
              <Cookie className="h-6 w-6 text-red-600 flex-shrink-0 mt-1" />
              <div className="text-sm text-gray-700">
                <p className="font-medium mb-1">Utilizamos cookies</p>
                <p>
                  Utilizamos cookies propias y de terceros para mejorar nuestros servicios. Consulta nuestra{" "}
                  <Link href="/politica-cookies" className="text-red-600 hover:underline">
                    Política de Cookies
                  </Link>{" "}
                  para más información.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setShowPreferences(true)}
                className="text-sm text-red-600 hover:text-red-700 font-medium"
              >
                Configurar
              </button>
              <button
                onClick={rejectAll}
                className="text-sm bg-gray-200 hover:bg-gray-300 text-gray-700 px-4 py-2 rounded-md font-medium transition-colors"
              >
                Rechazar
              </button>
              <button
                onClick={acceptAll}
                className="text-sm bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md font-medium transition-colors"
              >
                Aceptar todas
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-lg">Preferencias de Cookies</h3>
              <button onClick={() => setShowPreferences(false)} className="p-1 hover:bg-gray-100 rounded">
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="space-y-3 text-sm">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Cookies necesarias</p>
                  <p className="text-gray-600">Esenciales para el funcionamiento del sitio web</p>
                </div>
                <input type="checkbox" checked disabled className="rounded" />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Cookies analíticas</p>
                  <p className="text-gray-600">Nos ayudan a mejorar el rendimiento del sitio</p>
                </div>
                <input type="checkbox" className="rounded" />
              </div>
            </div>
            <div className="flex gap-2 pt-2">
              <button
                onClick={savePreferences}
                className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md font-medium transition-colors text-sm"
              >
                Guardar preferencias
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
