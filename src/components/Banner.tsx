"use client"

import dynamic from "next/dynamic"

// Swiper instantiates its modules (Autoplay reads `new Date()`) during render,
// which fails Next's prerender check — load it client-side only.
const BannerSlider = dynamic(
  () => import("./BannerSlider").then((mod) => mod.BannerSlider),
  {
    ssr: false,
    loading: () => (
      <div
        aria-label="Loading banner"
        className="h-[420px] w-full animate-pulse bg-muted sm:h-[480px] lg:h-[560px]"
      />
    ),
  }
)

export function Banner() {
  return (
    <section aria-label="Featured collections" className="relative w-full">
      <BannerSlider />
    </section>
  )
}
