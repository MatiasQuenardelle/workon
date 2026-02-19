import { MessageCircle, PenTool, Factory, PackageCheck } from "lucide-react";
import { PROCESS_STEPS } from "@/lib/constants";

const stepIcons = [MessageCircle, PenTool, Factory, PackageCheck];

export default function Process() {
  return (
    <section className="bg-[#0f3460] py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Cómo Trabajamos
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-300">
            Un proceso simple para que tengas tu indumentaria corporativa
          </p>
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {PROCESS_STEPS.map((s, i) => {
            const Icon = stepIcons[i];
            return (
              <div key={s.step} className="relative text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#e94560] text-white">
                  <Icon size={28} />
                </div>
                <span className="mt-4 block text-sm font-semibold text-[#e94560]">
                  Paso {s.step}
                </span>
                <h3 className="mt-1 text-lg font-bold text-white">{s.title}</h3>
                <p className="mt-2 text-gray-300">{s.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
