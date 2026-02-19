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
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-[#1a1a2e] sm:text-4xl">
            ¿Por Qué Elegirnos?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            Más de una razón para confiar en WORKON
          </p>
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {BENEFITS.map((b) => {
            const Icon = iconMap[b.icon];
            return (
              <div
                key={b.title}
                className="rounded-2xl bg-[#f5f5f5] p-8 text-center transition-shadow hover:shadow-lg"
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#0f3460]">
                  <Icon size={28} className="text-white" />
                </div>
                <h3 className="mt-5 text-lg font-bold text-[#1a1a2e]">{b.title}</h3>
                <p className="mt-2 text-gray-600">{b.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
