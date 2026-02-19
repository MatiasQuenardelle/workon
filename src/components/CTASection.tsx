import { MessageCircle } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/constants";

export default function CTASection() {
  return (
    <section
      id="contacto"
      className="relative overflow-hidden bg-[#0a0a0a] py-24 sm:py-32"
    >
      {/* Gradient orbs */}
      <div className="absolute -left-40 top-0 h-[400px] w-[400px] rounded-full bg-[#e94560]/15 blur-[100px]" />
      <div className="absolute -right-40 bottom-0 h-[400px] w-[400px] rounded-full bg-[#0f3460]/20 blur-[100px]" />

      <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
          ¿Listo para vestir a tu equipo?
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-lg text-gray-400">
          Escribinos y recibí tu presupuesto sin compromiso. Respondemos en
          menos de 24 hs.
        </p>
        <a
          href={getWhatsAppUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 inline-flex items-center gap-3 rounded-full bg-[#25D366] px-10 py-5 text-xl font-bold text-white shadow-lg shadow-[#25D366]/25 transition-all hover:scale-105 hover:shadow-xl hover:shadow-[#25D366]/30"
        >
          <MessageCircle size={26} />
          Chateá con nosotros
        </a>
      </div>
    </section>
  );
}
