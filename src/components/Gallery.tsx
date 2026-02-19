"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { GALLERY_ITEMS } from "@/lib/constants";

export default function Gallery() {
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());
  const [headerVisible, setHeaderVisible] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = entry.target.getAttribute("data-index");
            if (index === "header") {
              setHeaderVisible(true);
            } else {
              setVisibleItems((prev) => new Set(prev).add(Number(index)));
            }
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "50px" }
    );

    if (headerRef.current) observer.observe(headerRef.current);
    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="trabajos"
      className="relative bg-[#0a0a0a] py-28 sm:py-36 overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-1/4 h-[500px] w-[500px] rounded-full bg-[#e94560]/[0.04] blur-[100px]" />
        <div className="absolute -bottom-40 right-1/4 h-[500px] w-[500px] rounded-full bg-[#0f3460]/[0.08] blur-[100px]" />
        <div className="absolute left-0 top-1/2 h-[300px] w-[300px] -translate-y-1/2 rounded-full bg-[#e94560]/[0.02] blur-[80px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          ref={headerRef}
          data-index="header"
          className={`mb-20 text-center transition-all duration-1000 ${
            headerVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-10 opacity-0"
          }`}
        >
          <div className="inline-flex items-center gap-2.5 rounded-full border border-[#e94560]/20 bg-[#e94560]/[0.06] px-5 py-2 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#e94560] opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#e94560]" />
            </span>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#e94560]">
              Portfolio
            </span>
          </div>

          <h2 className="mt-8 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Trabajos{" "}
            <span className="bg-gradient-to-r from-[#e94560] via-[#ff6b81] to-[#e94560] bg-clip-text text-transparent">
              Realizados
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-lg text-base leading-relaxed text-gray-400 sm:text-lg">
            Marcas que ya confían en nosotros para su indumentaria corporativa
          </p>

          {/* Decorative divider */}
          <div className="mx-auto mt-10 flex items-center justify-center gap-3">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#e94560]/40" />
            <div className="h-1 w-1 rounded-full bg-[#e94560]/60" />
            <div className="h-1.5 w-1.5 rounded-full bg-[#e94560]" />
            <div className="h-1 w-1 rounded-full bg-[#e94560]/60" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#e94560]/40" />
          </div>
        </div>

        {/* Masonry Gallery Grid */}
        <div className="columns-2 gap-4 sm:columns-3 sm:gap-5 lg:columns-4">
          {GALLERY_ITEMS.map((item, i) => (
            <div
              key={i}
              ref={(el) => {
                itemRefs.current[i] = el;
              }}
              data-index={i}
              className={`group relative mb-4 break-inside-avoid transition-all duration-700 ease-out sm:mb-5 ${
                visibleItems.has(i)
                  ? "translate-y-0 opacity-100"
                  : "translate-y-12 opacity-0"
              }`}
              style={{ transitionDelay: `${(i % 4) * 120}ms` }}
            >
              {/* Gradient border wrapper */}
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-b from-white/10 to-white/[0.03] p-px transition-all duration-500 group-hover:from-[#e94560]/40 group-hover:to-[#e94560]/10">
                <div className="relative overflow-hidden rounded-[15px] bg-[#111]">
                  {/* Image */}
                  <Image
                    src={item.image}
                    alt={`${item.brand} - ${item.type}`}
                    width={400}
                    height={500}
                    className="w-full object-cover transition-all duration-700 ease-out group-hover:scale-110"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />

                  {/* Subtle permanent bottom gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-0 transition-all duration-500 group-hover:opacity-100" />

                  {/* Top accent line on hover */}
                  <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-[#e94560] to-transparent opacity-0 transition-all duration-500 group-hover:opacity-100" />

                  {/* Content overlay */}
                  <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
                    {/* Accent line */}
                    <div className="mb-2.5 h-px w-0 bg-gradient-to-r from-[#e94560] to-transparent transition-all duration-500 group-hover:w-8" />

                    <p className="text-sm font-semibold tracking-wide text-white drop-shadow-lg transition-transform duration-500 group-hover:-translate-y-0.5">
                      {item.brand}
                    </p>
                    <p className="mt-0.5 text-xs text-white/60 transition-all duration-500 group-hover:text-white/80">
                      {item.type}
                    </p>
                  </div>

                  {/* Subtle inner glow on hover */}
                  <div className="pointer-events-none absolute inset-0 rounded-[15px] ring-1 ring-inset ring-white/[0.06] transition-all duration-500 group-hover:ring-[#e94560]/20" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom stats bar */}
        <div
          className={`mt-24 transition-all duration-1000 delay-300 ${
            visibleItems.size > 6
              ? "translate-y-0 opacity-100"
              : "translate-y-8 opacity-0"
          }`}
        >
          <div className="mx-auto max-w-2xl rounded-2xl border border-white/[0.06] bg-white/[0.02] p-8 backdrop-blur-sm sm:p-10">
            <div className="flex flex-wrap items-center justify-center gap-10 sm:gap-16">
              {[
                { value: "50+", label: "Empresas" },
                { value: "1000+", label: "Prendas entregadas" },
                { value: "100%", label: "Satisfacción" },
              ].map((stat, i) => (
                <div key={stat.label} className="text-center">
                  <p className="bg-gradient-to-r from-[#e94560] to-[#ff6b81] bg-clip-text text-3xl font-bold text-transparent sm:text-4xl">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-xs font-medium uppercase tracking-[0.15em] text-gray-500">
                    {stat.label}
                  </p>
                  {i < 2 && (
                    <div className="absolute right-0 top-1/2 hidden h-8 w-px -translate-y-1/2 bg-white/10 sm:block" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
