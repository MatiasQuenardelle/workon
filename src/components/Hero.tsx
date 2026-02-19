import Image from "next/image";
import { MessageCircle, ChevronDown } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/constants";
import Logo from "./Logo";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-screen items-center overflow-hidden bg-[#0a0a0a]"
    >
      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Gradient orbs */}
      <div className="absolute -left-40 top-1/4 h-[500px] w-[500px] rounded-full bg-[#e94560]/10 blur-[120px]" />
      <div className="absolute -right-40 bottom-1/4 h-[500px] w-[500px] rounded-full bg-[#0f3460]/20 blur-[120px]" />

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 px-4 py-32 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        {/* Left: Text content */}
        <div className="text-center lg:text-left">
          <div className="animate-fade-in-up">
            <Logo className="text-5xl text-white sm:text-6xl lg:text-7xl" />
          </div>
          <h1 className="animate-fade-in-up animation-delay-200 mt-6 text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
            Vestí a tu equipo con la{" "}
            <span className="bg-gradient-to-r from-[#e94560] to-[#ff6b81] bg-clip-text text-transparent">
              imagen de tu empresa
            </span>
          </h1>
          <p className="animate-fade-in-up animation-delay-400 mx-auto mt-6 max-w-xl text-lg text-gray-400 lg:mx-0">
            Indumentaria corporativa personalizada con el logo de tu marca.
            Bordado, estampado y sublimación. Envíos a todo Argentina.
          </p>
          <div className="animate-fade-in-up animation-delay-600 mt-10 flex flex-col items-center gap-4 sm:flex-row lg:justify-start">
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-8 py-4 text-lg font-semibold text-white shadow-lg shadow-[#25D366]/25 transition-all hover:scale-105 hover:shadow-xl hover:shadow-[#25D366]/30"
            >
              <MessageCircle size={22} />
              Pedí tu presupuesto
            </a>
            <a
              href="#productos"
              className="inline-flex items-center gap-2 rounded-full border-2 border-white/20 px-8 py-4 text-lg font-semibold text-white transition-all hover:border-white/40 hover:bg-white/5"
            >
              Ver productos
            </a>
          </div>
        </div>

        {/* Right: Product showcase */}
        <div className="relative hidden lg:block">
          <div className="animate-float relative mx-auto w-full max-w-lg">
            {/* Main product image */}
            <div className="relative z-10 overflow-hidden rounded-3xl bg-gradient-to-br from-white/10 to-white/5 p-8 backdrop-blur-sm ring-1 ring-white/10">
              <Image
                src="/images/trabajos/star-polo-promo.jpg"
                alt="Chomba corporativa personalizada Star"
                width={600}
                height={800}
                className="w-full rounded-2xl object-cover"
                priority
              />
            </div>
            {/* Floating accent card */}
            <div className="absolute -right-6 bottom-20 z-20 overflow-hidden rounded-2xl bg-white/10 p-2 shadow-2xl backdrop-blur-md ring-1 ring-white/20">
              <Image
                src="/images/trabajos/exporural-bordado.jpg"
                alt="Detalle bordado Expo Rural"
                width={120}
                height={120}
                className="h-24 w-24 rounded-xl object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#productos"
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 animate-bounce text-white/40 transition-colors hover:text-white/70"
      >
        <ChevronDown size={28} />
      </a>
    </section>
  );
}
