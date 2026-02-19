import { Quote } from "lucide-react";
import { TESTIMONIALS } from "@/lib/constants";

export default function Testimonials() {
  return (
    <section className="bg-[#f8f8f8] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="inline-block rounded-full bg-[#e94560]/10 px-4 py-1.5 text-sm font-semibold text-[#e94560]">
            Testimonios
          </span>
          <h2 className="mt-4 text-3xl font-bold text-[#0a0a0a] sm:text-4xl lg:text-5xl">
            Lo Que Dicen Nuestros Clientes
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-500">
            Empresas que ya confían en WORKON
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.company}
              className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-gray-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#e94560]/10">
                <Quote size={24} className="text-[#e94560]" />
              </div>
              <p className="mt-6 text-gray-600 italic leading-relaxed">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="mt-6 border-t border-gray-100 pt-5">
                <p className="font-bold text-[#0a0a0a]">{t.contact}</p>
                <p className="text-sm text-gray-500">
                  {t.company} · {t.industry}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
