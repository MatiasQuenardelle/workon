"use client";

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
      <svg viewBox="0 0 32 32" fill="currentColor" className="h-8 w-8">
        <path d="M16.004 0h-.008C7.174 0 0 7.176 0 16c0 3.5 1.128 6.744 3.046 9.378L1.054 31.29l6.118-1.958A15.9 15.9 0 0 0 16.004 32C24.826 32 32 24.822 32 16S24.826 0 16.004 0Zm9.31 22.606c-.39 1.1-1.932 2.014-3.164 2.28-.844.18-1.946.322-5.656-1.216-4.746-1.966-7.804-6.778-8.038-7.094-.226-.316-1.892-2.52-1.892-4.808 0-2.288 1.198-3.412 1.622-3.878.424-.466.924-.582 1.232-.582.308 0 .614.002.882.016.284.014.664-.108 1.038.792.39.934 1.322 3.222 1.438 3.456.116.234.194.508.04.816-.156.316-.234.512-.466.79-.232.274-.488.614-.698.824-.232.234-.474.488-.204.958.27.466 1.202 1.982 2.58 3.212 1.774 1.582 3.268 2.072 3.734 2.306.466.234.738.196 1.01-.118.274-.316 1.174-1.368 1.486-1.838.312-.466.624-.39 1.054-.234.432.158 2.718 1.282 3.184 1.516.466.234.776.35.892.544.116.194.116 1.126-.274 2.226Z" />
      </svg>
      <span className="pointer-events-none absolute right-20 whitespace-nowrap rounded-xl bg-[#0a0a0a] px-4 py-2.5 text-sm font-medium text-white opacity-0 shadow-lg transition-opacity group-hover:opacity-100">
        ¡Chateá con nosotros!
      </span>
    </a>
  );
}
