"use client";

import Image from "next/image";
import { GALLERY_ITEMS } from "@/lib/constants";

export default function Gallery() {
  return (
    <section id="trabajos" className="bg-[#0a0a0a] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="inline-block rounded-full bg-[#e94560]/10 px-4 py-1.5 text-sm font-semibold text-[#e94560]">
            Portfolio
          </span>
          <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Trabajos Realizados
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-400">
            Marcas que ya confían en nosotros para su indumentaria corporativa
          </p>
        </div>

        <div className="mt-16 columns-2 gap-4 sm:columns-3 lg:columns-4">
          {GALLERY_ITEMS.map((item, i) => (
            <div
              key={i}
              className="group relative mb-4 break-inside-avoid overflow-hidden rounded-2xl bg-white/5 ring-1 ring-white/10 transition-all duration-300 hover:ring-[#e94560]/40"
            >
              <Image
                src={item.image}
                alt={`${item.brand} - ${item.type}`}
                width={400}
                height={500}
                className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="p-4">
                  <p className="text-sm font-bold text-white">{item.brand}</p>
                  <p className="text-xs text-gray-300">{item.type}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
