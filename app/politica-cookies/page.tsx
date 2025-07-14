import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Política de Cookies | COS & ORS TECNICS S.L.",
  description:
    "Política de cookies de COS & ORS TECNICS S.L. Información sobre el uso de cookies en nuestro sitio web.",
  robots: "noindex, nofollow",
}

export default function PoliticaCookiesPage() {
  return (
    <div className="section-padding bg-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto prose prose-lg">
          <h1>Política de Cookies</h1>

          <p className="text-gray-600">
            <strong>Última actualización:</strong> {new Date().toLocaleDateString("es-ES")}
          </p>
          <h1 className="mb-8"></h1>

          <h2 className="mb-3">1. ¿Qué son las Cookies?</h2>
          <p>
            Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo cuando visitas un sitio web.
            Nos ayudan a mejorar tu experiencia de navegación y a entender cómo utilizas nuestro sitio web.
          </p>
          <h1 className="mb-8"></h1>

          <h2 className="mb-3">2. Tipos de Cookies que Utilizamos</h2>

          <h4 className="mb-3">Cookies Necesarias</h4>
          <p>
            Estas cookies son esenciales para el funcionamiento del sitio web y no pueden ser desactivadas. Incluyen
            cookies de sesión, preferencias de idioma y configuración de privacidad.
          </p>

          <h1 className="mb-3"></h1>

          <h4 className="mb-2">Cookies Analíticas</h4>
          <p>
            Nos ayudan a entender cómo los visitantes interactúan con nuestro sitio web, proporcionándonos información
            sobre las páginas visitadas, el tiempo de permanencia y otros datos estadísticos.
          </p>
          <h1 className="mb-3"></h1>


          <h4 className="mb-2">Cookies de Funcionalidad</h4>
          <p>
            Permiten que el sitio web recuerde las elecciones que haces (como tu nombre de usuario, idioma o región) y
            proporcionan características mejoradas y más personales.
          </p>
          <h1 className="mb-8"></h1>



          <h2 className="mb-3">3. Gestión de Cookies</h2>
          <p>
            Puedes controlar y/o eliminar las cookies como desees. Puedes eliminar todas las cookies que ya están en tu
            dispositivo y puedes configurar la mayoría de navegadores para evitar que se coloquen.
          </p>
          <h1 className="mb-3"></h1>


          <h4 className="mb-2">Configuración del Navegador</h4>
          <ul>
            <li>
              <strong>Chrome:</strong> Configuración {">"} Privacidad y seguridad {">"} Cookies
            </li>
            <li>
              <strong>Firefox:</strong> Opciones {">"} Privacidad y seguridad {">"} Cookies
            </li>
            <li>
              <strong>Safari:</strong> Preferencias {">"} Privacidad {">"} Cookies
            </li>
            <li>
              <strong>Edge:</strong> Configuración {">"} Cookies y permisos del sitio
            </li>
          </ul>
          <h1 className="mb-8"></h1>

          <h2 className="mb-3">4. Cookies de Terceros</h2>
          <p>
            Nuestro sitio web puede contener enlaces a otros sitios web. No somos responsables de las políticas de
            privacidad de estos sitios web de terceros.
          </p>
          <h1 className="mb-8"></h1>
          <h2 className="mb-3">5. Consentimiento</h2>
          <p>
            Al utilizar nuestro sitio web, consientes el uso de cookies de acuerdo con esta Política de Cookies. Si no
            estás de acuerdo con el uso de cookies, puedes desactivarlas en tu navegador.
          </p>
          <h1 className="mb-8"></h1>
          <h2 className="mb-3">6. Contacto</h2>
          <p>Si tienes alguna pregunta sobre nuestra Política de Cookies, puedes contactarnos en: info@cos-ors.com</p>
          <h1 className="mb-8"></h1>
          <h2 className="mb-3">7. Actualizaciones</h2>
          <p>
            Esta Política de Cookies puede ser actualizada periódicamente. Te recomendamos revisarla regularmente para
            estar informado de cualquier cambio.
          </p>
          <h1 className="mb-8"></h1>
        </div>
      </div>
    </div>
  )
}
