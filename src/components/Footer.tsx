import { Phone, Mail, MapPin } from "lucide-react";
import { NAV_LINKS, getWhatsAppUrl } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-[#1a1a2e] py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <span className="text-2xl font-bold tracking-wider text-white">
              WORKON
            </span>
            <p className="mt-4 text-sm leading-relaxed text-gray-400">
              Indumentaria corporativa personalizada para empresas de toda
              Argentina.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold text-white">Navegación</h4>
            <ul className="mt-4 space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-400 transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white">Contacto</h4>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-gray-400 transition-colors hover:text-white"
                >
                  <Phone size={16} />
                  +54 9 362 525-8692
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-400">
                <Mail size={16} />
                info@workon.com.ar
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-400">
                <MapPin size={16} />
                Argentina
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold text-white">Seguinos</h4>
            <div className="mt-4 flex gap-4">
              <a
                href="#"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-gray-400 transition-colors hover:bg-white/20 hover:text-white"
              >
                IG
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-gray-400 transition-colors hover:bg-white/20 hover:text-white"
              >
                FB
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-gray-400 transition-colors hover:bg-white/20 hover:text-white"
              >
                IN
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8 text-center text-sm text-gray-500">
          © 2026 WORKON. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}
