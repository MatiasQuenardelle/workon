import Image from "next/image";
import { Award, Clock, Users } from "lucide-react";

export default function About() {
  return (
    <section id="nosotros" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div>
            <span className="inline-block rounded-full bg-[#0f3460]/10 px-4 py-1.5 text-sm font-semibold text-[#0f3460]">
              Sobre nosotros
            </span>
            <h2 className="mt-4 text-3xl font-bold text-[#0a0a0a] sm:text-4xl lg:text-5xl">
              Sobre WORKON
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-gray-500">
              Somos una empresa argentina especializada en indumentaria corporativa.
              Trabajamos con empresas de todos los tamaños en todo el país, brindando
              soluciones de vestimenta que reflejan la identidad de cada marca.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-gray-500">
              Nuestro compromiso es ofrecer productos de calidad, con atención
              personalizada y cumplimiento en cada entrega. Porque sabemos que la
              imagen de tu equipo es la imagen de tu empresa.
            </p>

            <div className="mt-10 space-y-4">
              {[
                { icon: Award, title: "Compromiso", desc: "Cumplimos con cada detalle de tu pedido" },
                { icon: Clock, title: "Puntualidad", desc: "Entregamos en los plazos acordados" },
                { icon: Users, title: "Confianza", desc: "Empresas de todo Argentina confían en nosotros" },
              ].map(({ icon: Icon, title, desc }) => (
                <div
                  key={title}
                  className="flex items-start gap-4 rounded-2xl bg-[#f8f8f8] p-5 transition-all hover:shadow-md"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#0f3460]">
                    <Icon size={22} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#0a0a0a]">{title}</h3>
                    <p className="mt-1 text-sm text-gray-500">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image collage */}
          <div className="relative hidden lg:block">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="overflow-hidden rounded-3xl">
                  <Image
                    src="/images/trabajos/braford-bordado.jpg"
                    alt="Bordado profesional"
                    width={300}
                    height={400}
                    className="h-auto w-full object-cover"
                  />
                </div>
                <div className="overflow-hidden rounded-3xl">
                  <Image
                    src="/images/trabajos/star-polo-espalda.jpg"
                    alt="Polo corporativo Star"
                    width={300}
                    height={300}
                    className="h-auto w-full object-cover"
                  />
                </div>
              </div>
              <div className="mt-8 space-y-4">
                <div className="overflow-hidden rounded-3xl">
                  <Image
                    src="/images/trabajos/brangus-bordado.jpg"
                    alt="Bordado Brangus"
                    width={300}
                    height={400}
                    className="h-auto w-full object-cover"
                  />
                </div>
                <div className="overflow-hidden rounded-3xl">
                  <Image
                    src="/images/trabajos/exporural-bordado.jpg"
                    alt="Bordado Expo Rural"
                    width={300}
                    height={300}
                    className="h-auto w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
