import { MessageCircle, PenTool, Factory, PackageCheck } from "lucide-react";
import { PROCESS_STEPS } from "@/lib/constants";

const stepIcons = [MessageCircle, PenTool, Factory, PackageCheck];

export default function Process() {
  return (
    <section className="relative overflow-hidden bg-[#0f3460] py-24 sm:py-32">
      {/* Subtle pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="inline-block rounded-full bg-white/10 px-4 py-1.5 text-sm font-semibold text-[#e94560]">
            Proceso
          </span>
          <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Cómo Trabajamos
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-300">
            Un proceso simple para que tengas tu indumentaria corporativa
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {PROCESS_STEPS.map((s, i) => {
            const Icon = stepIcons[i];
            return (
              <div key={s.step} className="relative text-center">
                {/* Connector line */}
                {i < PROCESS_STEPS.length - 1 && (
                  <div className="absolute left-1/2 top-8 hidden h-px w-full bg-gradient-to-r from-white/20 to-transparent lg:block" />
                )}
                <div className="relative mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#e94560] text-white shadow-lg shadow-[#e94560]/30">
                  <Icon size={28} />
                </div>
                <span className="mt-5 block text-sm font-bold text-[#e94560]">
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
