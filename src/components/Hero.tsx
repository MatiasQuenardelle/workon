import { MessageCircle } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/constants";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#1a1a2e]"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1920&h=1080&fit=crop')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a2e]/80 to-[#1a1a2e]" />

      <div className="relative z-10 mx-auto max-w-4xl px-4 py-32 text-center sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
          Vestí a tu equipo con la{" "}
          <span className="text-[#e94560]">imagen de tu empresa</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-300 sm:text-xl">
          Indumentaria corporativa personalizada con el logo de tu marca.
          Bordado, estampado y sublimación. Envíos a todo Argentina.
        </p>
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-8 py-4 text-lg font-semibold text-white shadow-lg transition-transform hover:scale-105"
          >
            <MessageCircle size={22} />
            Pedí tu presupuesto
          </a>
          <a
            href="#productos"
            className="inline-flex items-center gap-2 rounded-full border-2 border-white/30 px-8 py-4 text-lg font-semibold text-white transition-colors hover:border-white hover:bg-white/10"
          >
            Ver productos
          </a>
        </div>
      </div>
    </section>
  );
}
