import { Truck, Palette, ShieldCheck, Headphones } from "lucide-react";
import { BENEFITS } from "@/lib/constants";

const iconMap = {
  Truck,
  Palette,
  ShieldCheck,
  Headphones,
} as const;

export default function Benefits() {
  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="inline-block rounded-full bg-[#0f3460]/10 px-4 py-1.5 text-sm font-semibold text-[#0f3460]">
            Ventajas
          </span>
          <h2 className="mt-4 text-3xl font-bold text-[#0a0a0a] sm:text-4xl lg:text-5xl">
            ¿Por Qué Elegirnos?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-500">
            Más de una razón para confiar en WORKON
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {BENEFITS.map((b) => {
            const Icon = iconMap[b.icon];
            return (
              <div
                key={b.title}
                className="group rounded-3xl bg-[#f8f8f8] p-8 text-center transition-all duration-300 hover:-translate-y-1 hover:bg-[#0a0a0a] hover:shadow-xl hover:shadow-black/10"
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#0f3460] transition-colors group-hover:bg-[#e94560]">
                  <Icon size={28} className="text-white" />
                </div>
                <h3 className="mt-6 text-lg font-bold text-[#0a0a0a] group-hover:text-white">
                  {b.title}
                </h3>
                <p className="mt-2 text-gray-500 group-hover:text-gray-400">
                  {b.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
