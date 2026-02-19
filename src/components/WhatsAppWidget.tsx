"use client";

import { MessageCircle } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/constants";

export default function WhatsAppWidget() {
  return (
    <a
      href={getWhatsAppUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chateá con nosotros por WhatsApp"
      className="group fixed bottom-6 right-6 z-[100] flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl shadow-[#25D366]/30 transition-all hover:scale-110 hover:shadow-[#25D366]/40"
    >
      <MessageCircle size={30} />
      <span className="pointer-events-none absolute right-20 whitespace-nowrap rounded-xl bg-[#0a0a0a] px-4 py-2.5 text-sm font-medium text-white opacity-0 shadow-lg transition-opacity group-hover:opacity-100">
        ¡Chateá con nosotros!
      </span>
    </a>
  );
}
