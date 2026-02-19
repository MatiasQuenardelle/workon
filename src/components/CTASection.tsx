import { MessageCircle } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/constants";

export default function CTASection() {
  return (
    <section
      id="contacto"
      className="bg-gradient-to-br from-[#1a1a2e] to-[#0f3460] py-20 sm:py-28"
    >
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
          ¿Listo para vestir a tu equipo?
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-lg text-gray-300">
          Escribinos y recibí tu presupuesto sin compromiso. Respondemos en
          menos de 24 hs.
        </p>
        <a
          href={getWhatsAppUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 inline-flex items-center gap-3 rounded-full bg-[#25D366] px-10 py-5 text-xl font-bold text-white shadow-lg transition-transform hover:scale-105"
        >
          <MessageCircle size={26} />
          Chateá con nosotros
        </a>
      </div>
    </section>
  );
}
