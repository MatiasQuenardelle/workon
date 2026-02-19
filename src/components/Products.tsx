import Image from "next/image";
import { MessageCircle } from "lucide-react";
import { CATEGORIES, getWhatsAppUrl } from "@/lib/constants";

export default function Products() {
  return (
    <section id="productos" className="bg-[#f8f8f8] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="inline-block rounded-full bg-[#e94560]/10 px-4 py-1.5 text-sm font-semibold text-[#e94560]">
            Catálogo
          </span>
          <h2 className="mt-4 text-3xl font-bold text-[#0a0a0a] sm:text-4xl lg:text-5xl">
            Nuestros Productos
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-500">
            Todo lo que tu empresa necesita para vestir a su equipo con identidad
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {CATEGORIES.map((cat, index) => (
            <div
              key={cat.name}
              className="group relative overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-gray-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-gray-200/50"
            >
              <div className="relative h-72 overflow-hidden">
                <Image
                  src={cat.image}
                  alt={cat.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>

              {/* Color variants */}
              {cat.variants.length > 0 && (
                <div className="flex gap-2 px-6 pt-4">
                  {cat.variants.slice(0, 4).map((v, i) => (
                    <div
                      key={i}
                      className="h-10 w-10 overflow-hidden rounded-lg ring-1 ring-gray-200"
                    >
                      <Image
                        src={v}
                        alt={`Variante ${i + 1}`}
                        width={40}
                        height={40}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  ))}
                  {cat.variants.length > 4 && (
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100 text-xs font-medium text-gray-500">
                      +{cat.variants.length - 4}
                    </div>
                  )}
                </div>
              )}

              <div className="p-6">
                <h3 className="text-xl font-bold text-[#0a0a0a]">{cat.name}</h3>
                <p className="mt-2 text-gray-500">{cat.description}</p>
                <a
                  href={getWhatsAppUrl(
                    `Hola! Me interesa consultar por ${cat.name} para mi empresa.`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#0a0a0a] px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-[#e94560]"
                >
                  <MessageCircle size={16} />
                  Consultar
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
