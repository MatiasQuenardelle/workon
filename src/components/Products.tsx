import Image from "next/image";
import { MessageCircle } from "lucide-react";
import { CATEGORIES, getWhatsAppUrl } from "@/lib/constants";

export default function Products() {
  return (
    <section id="productos" className="bg-[#f5f5f5] py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-[#1a1a2e] sm:text-4xl">
            Nuestros Productos
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            Todo lo que tu empresa necesita para vestir a su equipo con identidad
          </p>
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {CATEGORIES.map((cat) => (
            <div
              key={cat.name}
              className="group overflow-hidden rounded-2xl bg-white shadow-md transition-shadow hover:shadow-xl"
            >
              <div className="relative h-52 w-full overflow-hidden">
                <Image
                  src={cat.image}
                  alt={cat.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#1a1a2e]">{cat.name}</h3>
                <p className="mt-2 text-gray-600">{cat.description}</p>
                <a
                  href={getWhatsAppUrl(
                    `Hola! Me interesa consultar por ${cat.name} para mi empresa.`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#e94560] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#d63a54]"
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
