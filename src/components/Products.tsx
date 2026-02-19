import Image from "next/image";
import { MessageCircle, ArrowRight } from "lucide-react";
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

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {CATEGORIES.map((cat) => (
            <div
              key={cat.name}
              className="group relative flex flex-col overflow-hidden rounded-2xl bg-white ring-1 ring-gray-200/60 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-black/[0.08] hover:ring-gray-300/80"
            >
              {/* Product image */}
              <div className="relative aspect-[4/5] overflow-hidden bg-gradient-to-b from-gray-50 to-gray-100/80">
                <Image
                  src={cat.image}
                  alt={cat.name}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </div>

              {/* Card content */}
              <div className="flex flex-1 flex-col p-5 sm:p-6">
                {/* Variant thumbnails */}
                {cat.variants.length > 0 && (
                  <div className="mb-4 flex gap-2">
                    {cat.variants.slice(0, 4).map((v, i) => (
                      <div
                        key={i}
                        className="h-11 w-11 overflow-hidden rounded-xl ring-1 ring-black/10 transition-all duration-300 hover:ring-2 hover:ring-[#e94560]/60"
                      >
                        <Image
                          src={v}
                          alt={`Variante ${i + 1}`}
                          width={44}
                          height={44}
                          className="h-full w-full object-cover"
                        />
                      </div>
                    ))}
                    {cat.variants.length > 4 && (
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gray-100 text-xs font-semibold text-gray-400">
                        +{cat.variants.length - 4}
                      </div>
                    )}
                  </div>
                )}

                <h3 className="text-lg font-bold tracking-tight text-[#0a0a0a]">
                  {cat.name}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-gray-500">
                  {cat.description}
                </p>

                <div className="mt-auto pt-5">
                  <a
                    href={getWhatsAppUrl(
                      `Hola! Me interesa consultar por ${cat.name} para mi empresa.`
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#0a0a0a] px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#e94560] hover:gap-3"
                  >
                    <MessageCircle size={16} />
                    Consultar
                    <ArrowRight size={14} className="opacity-0 -ml-4 transition-all duration-300 group-hover:opacity-100 group-hover:ml-0" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
