import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Política de Privacidad | COS & ORS TECNICS S.L.",
  description:
    "Política de privacidad y protección de datos de COS & ORS TECNICS S.L. Información sobre el tratamiento de datos personales según el RGPD.",
  robots: "noindex, nofollow",
}

export default function PoliticaPrivacidadPage() {
  return (
    <div className="section-padding bg-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto prose prose-lg">
          <h1 >Política de Privacidad</h1>


          <p className="text-gray-600">
            <strong>Última actualización:</strong> {new Date().toLocaleDateString("es-ES")}
          </p>
          <h1 className="mb-8"></h1>

          <h2 className="mb-3">1. Responsable del Tratamiento</h2>
          <p>
            <strong>COS & ORS TECNICS S.L.</strong>
            <br />
            CIF: B22512503
            <br />
            Dirección: Avinguda Montserrat 53, 08397 Pineda de Mar, Barcelona
            <br />
            Teléfono: +34 674 77 57 57
            <br />
            Email: info@cos-ors.com
          </p>
          <h1 className="mb-8"></h1>

          <h2 className="mb-3">2. Finalidad del Tratamiento</h2>
          <p>Los datos personales que nos proporciones serán tratados con las siguientes finalidades:</p>
          <ul>
            <li>Gestionar y responder a tus consultas y solicitudes de presupuesto</li>
            <li>Mantener comunicación comercial contigo</li>
            <li>Cumplir con las obligaciones legales aplicables</li>
            <li>Mejorar nuestros servicios y experiencia de usuario</li>
          </ul>

          <h1 className="mb-8"></h1>

          <h2 className="mb-3">3. Base Legal</h2>
          <p>El tratamiento de tus datos se basa en:</p>
          <ul>
            <li>Tu consentimiento explícito</li>
            <li>La ejecución de un contrato o medidas precontractuales</li>
            <li>El cumplimiento de obligaciones legales</li>
            <li>Nuestro interés legítimo en mantener relaciones comerciales</li>
          </ul>

          <h1 className="mb-8"></h1>

          <h2 className="mb-3">4. Conservación de Datos</h2>
          <p>
            Conservaremos tus datos personales durante el tiempo necesario para cumplir con las finalidades para las que
            fueron recogidos y, en cualquier caso, durante los plazos establecidos por la legislación aplicable.
          </p>

          <h1 className="mb-8"></h1>

          <h2 className="mb-3">5. Derechos del Usuario</h2>
          <p>Tienes derecho a:</p>
          <ul>
            <li>Acceder a tus datos personales</li>
            <li>Rectificar datos inexactos o incompletos</li>
            <li>Suprimir tus datos cuando ya no sean necesarios</li>
            <li>Limitar el tratamiento de tus datos</li>
            <li>Portabilidad de tus datos</li>
            <li>Oponerte al tratamiento</li>
            <li>Revocar el consentimiento en cualquier momento</li>
          </ul>

          <h1 className="mb-8"></h1>

          <h2 className="mb-3">6. Seguridad</h2>
          <p>
            Implementamos medidas técnicas y organizativas apropiadas para proteger tus datos personales contra el
            acceso no autorizado, alteración, divulgación o destrucción.
          </p>

          <h1 className="mb-8"></h1>

          <h2 className="mb-3">7. Contacto</h2>
          <p>
            Para ejercer tus derechos o resolver cualquier duda sobre esta política, puedes contactarnos en:
            info@cos-ors.com
          </p>

          <p>
            También tienes derecho a presentar una reclamación ante la Agencia Española de Protección de Datos
            (www.aepd.es).
          </p>
        </div>
      </div>
    </div>
  )
}
