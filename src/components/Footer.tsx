import { Phone, Mail, MapPin } from "lucide-react";
import { NAV_LINKS, getWhatsAppUrl } from "@/lib/constants";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="bg-[#050505] py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <Logo className="text-2xl text-white" />
            <p className="mt-4 text-sm leading-relaxed text-gray-500">
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
                    className="text-sm text-gray-500 transition-colors hover:text-white"
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
                  className="flex items-center gap-2 text-sm text-gray-500 transition-colors hover:text-white"
                >
                  <Phone size={16} />
                  +54 9 362 525-8692
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-500">
                <Mail size={16} />
                info@workon.com.ar
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-500">
                <MapPin size={16} />
                Argentina
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold text-white">Seguinos</h4>
            <div className="mt-4 flex gap-3">
              {[
                { label: "Instagram", abbr: "IG" },
                { label: "Facebook", abbr: "FB" },
                { label: "LinkedIn", abbr: "IN" },
              ].map(({ label, abbr }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 text-sm text-gray-500 ring-1 ring-white/10 transition-all hover:bg-[#e94560] hover:text-white hover:ring-[#e94560]"
                >
                  {abbr}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-14 border-t border-white/5 pt-8 text-center text-sm text-gray-600">
          © 2026 WORKON. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}
