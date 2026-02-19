import Image from "next/image";
import { MessageCircle, ChevronDown, ArrowRight } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/constants";
import Logo from "./Logo";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-screen flex-col overflow-hidden bg-[#0a0a0a]"
    >
      {/* Noise texture overlay */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.015]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
      }} />

      {/* Ambient gradient — top left warm glow */}
      <div className="absolute -left-64 -top-32 h-[600px] w-[600px] rounded-full bg-[#e94560]/8 blur-[160px]" />
      {/* Ambient gradient — bottom right cool glow */}
      <div className="absolute -bottom-32 -right-64 h-[500px] w-[500px] rounded-full bg-[#1a1a2e]/40 blur-[140px]" />

      {/* Main content */}
      <div className="relative z-10 mx-auto flex w-full max-w-[1400px] flex-1 items-center px-5 py-28 sm:px-8 lg:px-12">
        <div className="grid w-full items-center gap-16 lg:grid-cols-[1fr_1.1fr] lg:gap-20">

          {/* ── Left: Copy ── */}
          <div className="text-center lg:text-left">
            {/* Eyebrow */}
            <div className="animate-fade-in-up mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-[#e94560]" />
              <span className="text-xs font-medium tracking-widest text-white/60 uppercase">
                Indumentaria corporativa
              </span>
            </div>

            {/* Headline */}
            <h1 className="animate-fade-in-up animation-delay-200 text-4xl leading-[1.08] font-bold tracking-tight text-white sm:text-5xl lg:text-[3.5rem] xl:text-6xl">
              Vestí a tu equipo{" "}
              <br className="hidden sm:block" />
              con la{" "}
              <span className="relative inline-block">
                <span className="relative z-10 bg-gradient-to-r from-[#e94560] to-[#ff6b81] bg-clip-text text-transparent">
                  imagen de tu marca
                </span>
                <span className="absolute -bottom-1 left-0 h-[3px] w-full bg-gradient-to-r from-[#e94560]/60 to-transparent" />
              </span>
            </h1>

            {/* Description */}
            <p className="animate-fade-in-up animation-delay-400 mx-auto mt-7 max-w-lg text-base leading-relaxed text-white/50 sm:text-lg lg:mx-0">
              Diseñamos y producimos indumentaria personalizada con el logo de tu empresa.
              Bordado, estampado y sublimación con envíos a todo el país.
            </p>

            {/* CTAs */}
            <div className="animate-fade-in-up animation-delay-600 mt-10 flex flex-col items-center gap-3 sm:flex-row lg:justify-start">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2.5 rounded-full bg-[#25D366] px-7 py-3.5 text-[15px] font-semibold text-white shadow-lg shadow-[#25D366]/20 transition-all duration-300 hover:scale-[1.03] hover:shadow-xl hover:shadow-[#25D366]/30"
              >
                <MessageCircle size={18} />
                Pedí tu presupuesto
                <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-0.5" />
              </a>
              <a
                href="#productos"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 px-7 py-3.5 text-[15px] font-medium text-white/80 transition-all duration-300 hover:border-white/30 hover:bg-white/[0.04] hover:text-white"
              >
                Ver productos
              </a>
            </div>

            {/* Trust strip */}
            <div className="animate-fade-in-up animation-delay-600 mt-14 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 lg:justify-start">
              {[
                { value: "500+", label: "empresas" },
                { value: "10K+", label: "prendas/mes" },
                { value: "100%", label: "Argentina" },
              ].map((stat) => (
                <div key={stat.label} className="flex items-baseline gap-1.5">
                  <span className="text-lg font-bold text-white/90">{stat.value}</span>
                  <span className="text-xs tracking-wide text-white/35">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: Image mosaic ── */}
          <div className="relative hidden lg:block">
            <div className="hero-mosaic grid grid-cols-12 grid-rows-12 gap-3" style={{ height: "580px" }}>

              {/* Card 1 — Hasting Jacket (tall left) */}
              <div className="animate-fade-in-up animation-delay-200 col-span-5 row-span-12 overflow-hidden rounded-2xl bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-2 ring-1 ring-white/[0.08]">
                <div className="relative h-full w-full overflow-hidden rounded-xl">
                  <Image
                    src="/images/hero/hasting-jacket.png"
                    alt="Campera corporativa Hasting con bordado personalizado"
                    fill
                    className="object-cover object-top"
                    priority
                    sizes="(min-width: 1024px) 280px, 0px"
                  />
                </div>
              </div>

              {/* Card 2 — Morbidelli Tee (top right) */}
              <div className="animate-fade-in-up animation-delay-400 col-span-7 row-span-7 overflow-hidden rounded-2xl bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-2 ring-1 ring-white/[0.08]">
                <div className="relative h-full w-full overflow-hidden rounded-xl">
                  <Image
                    src="/images/hero/morbidelli-tee.png"
                    alt="Remera corporativa Morbidelli con estampado"
                    fill
                    className="object-cover object-center"
                    priority
                    sizes="(min-width: 1024px) 380px, 0px"
                  />
                </div>
              </div>

              {/* Card 3 — Embroidery detail (bottom-right small) */}
              <div className="animate-fade-in-up animation-delay-600 col-span-3 row-span-5 overflow-hidden rounded-2xl bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-1.5 ring-1 ring-white/[0.08]">
                <div className="relative h-full w-full overflow-hidden rounded-xl">
                  <Image
                    src="/images/hero/hasting-embroidery.png"
                    alt="Detalle de bordado corporativo"
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 160px, 0px"
                  />
                </div>
              </div>

              {/* Card 4 — Benelli Tee (bottom-right) */}
              <div className="animate-fade-in-up animation-delay-600 col-span-4 row-span-5 overflow-hidden rounded-2xl bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-1.5 ring-1 ring-white/[0.08]">
                <div className="relative h-full w-full overflow-hidden rounded-xl">
                  <Image
                    src="/images/hero/benelli-tee.png"
                    alt="Remera Benelli Nordeste personalizada"
                    fill
                    className="object-cover object-top"
                    sizes="(min-width: 1024px) 220px, 0px"
                  />
                </div>
              </div>

            </div>

            {/* Floating accent — green polo */}
            <div className="animate-float absolute -bottom-4 -left-6 z-20 h-28 w-28 overflow-hidden rounded-2xl bg-white/[0.06] p-1.5 shadow-2xl ring-1 ring-white/[0.1] backdrop-blur-md">
              <div className="relative h-full w-full overflow-hidden rounded-xl">
                <Image
                  src="/images/hero/green-polo.png"
                  alt="Chomba polo verde"
                  fill
                  className="object-cover"
                  sizes="112px"
                />
              </div>
            </div>
          </div>

          {/* ── Mobile: single showcase image ── */}
          <div className="animate-fade-in-up animation-delay-400 mx-auto w-full max-w-sm lg:hidden">
            <div className="grid grid-cols-2 gap-3">
              <div className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-white/[0.04] p-1.5 ring-1 ring-white/[0.08]">
                <Image
                  src="/images/hero/hasting-jacket.png"
                  alt="Campera corporativa personalizada"
                  fill
                  className="rounded-xl object-cover object-top"
                  priority
                  sizes="(max-width: 1023px) 45vw, 0px"
                />
              </div>
              <div className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-white/[0.04] p-1.5 ring-1 ring-white/[0.08]">
                <Image
                  src="/images/hero/morbidelli-tee.png"
                  alt="Remera corporativa personalizada"
                  fill
                  className="rounded-xl object-cover object-center"
                  priority
                  sizes="(max-width: 1023px) 45vw, 0px"
                />
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom divider line */}
      <div className="absolute bottom-0 left-0 z-10 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* Scroll indicator */}
      <a
        href="#productos"
        className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 animate-bounce text-white/30 transition-colors hover:text-white/60"
      >
        <ChevronDown size={24} />
      </a>
    </section>
  );
}
