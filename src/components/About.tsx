import { Award, Clock, Users } from "lucide-react";

export default function About() {
  return (
    <section id="nosotros" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold text-[#1a1a2e] sm:text-4xl">
              Sobre WORKON
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-gray-600">
              Somos una empresa argentina especializada en indumentaria corporativa.
              Trabajamos con empresas de todos los tamaños en todo el país, brindando
              soluciones de vestimenta que reflejan la identidad de cada marca.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-gray-600">
              Nuestro compromiso es ofrecer productos de calidad, con atención
              personalizada y cumplimiento en cada entrega. Porque sabemos que la
              imagen de tu equipo es la imagen de tu empresa.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-3 lg:grid-cols-1">
            <div className="flex items-start gap-4 rounded-xl bg-[#f5f5f5] p-6">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#0f3460]">
                <Award size={24} className="text-white" />
              </div>
              <div>
                <h3 className="font-bold text-[#1a1a2e]">Compromiso</h3>
                <p className="mt-1 text-sm text-gray-600">
                  Cumplimos con cada detalle de tu pedido
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 rounded-xl bg-[#f5f5f5] p-6">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#0f3460]">
                <Clock size={24} className="text-white" />
              </div>
              <div>
                <h3 className="font-bold text-[#1a1a2e]">Puntualidad</h3>
                <p className="mt-1 text-sm text-gray-600">
                  Entregamos en los plazos acordados
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 rounded-xl bg-[#f5f5f5] p-6">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#0f3460]">
                <Users size={24} className="text-white" />
              </div>
              <div>
                <h3 className="font-bold text-[#1a1a2e]">Confianza</h3>
                <p className="mt-1 text-sm text-gray-600">
                  Empresas de todo Argentina confían en nosotros
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
