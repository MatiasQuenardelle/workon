import { Quote } from "lucide-react";
import { TESTIMONIALS } from "@/lib/constants";

export default function Testimonials() {
  return (
    <section className="bg-[#f5f5f5] py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-[#1a1a2e] sm:text-4xl">
            Lo Que Dicen Nuestros Clientes
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            Empresas que ya confían en WORKON
          </p>
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.company}
              className="rounded-2xl bg-white p-8 shadow-md"
            >
              <Quote size={32} className="text-[#e94560]" />
              <p className="mt-4 text-gray-700 italic leading-relaxed">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="mt-6 border-t pt-4">
                <p className="font-bold text-[#1a1a2e]">{t.contact}</p>
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
