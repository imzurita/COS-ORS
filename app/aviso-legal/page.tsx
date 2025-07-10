import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Aviso Legal | COS & ORS TECNICS S.L.",
  description:
    "Aviso legal de COS & ORS TECNICS S.L. Información legal sobre el uso del sitio web y condiciones generales.",
  robots: "noindex, nofollow",
}

export default function AvisoLegalPage() {
  return (
    <div className="section-padding bg-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto prose prose-lg">
          <h1>Aviso Legal</h1>

          <p className="text-gray-600">
            <strong>Última actualización:</strong> {new Date().toLocaleDateString("es-ES")}
          </p>

          <h2>1. Datos Identificativos</h2>
          <p>
            En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la
            Información y de Comercio Electrónico, se informa de los siguientes datos:
          </p>
          <ul>
            <li>
              <strong>Denominación social:</strong> COS & ORS TECNICS S.L.
            </li>
            <li>
              <strong>CIF:</strong> XXXXXXXXX
            </li>
            <li>
              <strong>Domicilio:</strong> Avinguda Montserrat 53, 08397 Pineda de Mar, Barcelona
            </li>
            <li>
              <strong>Teléfono:</strong> +34 674 77 57 57
            </li>
            <li>
              <strong>Email:</strong> xcsgrup@gmail.com
            </li>
          </ul>

          <h2>2. Objeto</h2>
          <p>
            El presente aviso legal regula el uso del sitio web de COS & ORS TECNICS S.L., que pone a disposición de los
            usuarios de Internet información sobre nuestros servicios de reformas de fachadas.
          </p>

          <h2>3. Condiciones de Uso</h2>
          <p>
            El acceso y uso de este sitio web implica la aceptación plena de las presentes condiciones generales. Si no
            está de acuerdo con estas condiciones, le rogamos que no utilice este sitio web.
          </p>

          <h2>4. Uso Autorizado</h2>
          <p>El usuario se compromete a:</p>
          <ul>
            <li>Hacer un uso adecuado y lícito del sitio web</li>
            <li>No utilizar el sitio web para fines ilegales o no autorizados</li>
            <li>No dañar, inutilizar o sobrecargar el sitio web</li>
            <li>Respetar los derechos de propiedad intelectual</li>
          </ul>

          <h2>5. Propiedad Intelectual</h2>
          <p>
            Todos los contenidos del sitio web, incluyendo textos, fotografías, gráficos, imágenes, iconos, tecnología,
            software, así como su diseño gráfico y códigos fuente, constituyen una obra cuya propiedad pertenece a COS &
            ORS TECNICS S.L.
          </p>

          <h2>6. Exclusión de Garantías y Responsabilidad</h2>
          <p>
            COS & ORS TECNICS S.L. no se hace responsable de los posibles daños ocasionados por el uso de la información
            contenida en este sitio web.
          </p>

          <h2>7. Modificaciones</h2>
          <p>
            COS & ORS TECNICS S.L. se reserva el derecho de efectuar sin previo aviso las modificaciones que considere
            oportunas en su portal.
          </p>

          <h2>8. Legislación Aplicable</h2>
          <p>
            La relación entre COS & ORS TECNICS S.L. y el usuario se regirá por la normativa española vigente y
            cualquier controversia se someterá a los Juzgados y Tribunales de Barcelona.
          </p>
        </div>
      </div>
    </div>
  )
}
