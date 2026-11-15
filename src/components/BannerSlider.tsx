"use client"

import Image from "next/image"
import Link from "next/link"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Pagination } from "swiper/modules"
import "swiper/css"
import "swiper/css/pagination"
import { Button } from "@/components/ui/button"

const slides = [
  {
    image: "/images/banner1.jpg",
    title: "Explore and Create Your Literary Haven",
    text: "Discover thousands of titles, from timeless classics to the latest releases — all in one cozy corner of the internet.",
  },
  {
    image: "/images/banner2.jpg",
    title: "Your Quiet Reading Room Awaits",
    text: "Browse, borrow, and track every book you read. A calm, clutter-free home for your reading life.",
  },
  {
    image: "/images/banner3.jpg",
    title: "Get Lost in a Good Book",
    text: "Sink into an armchair of stories. Find your next favorite read and keep your shelf glowing.",
  },
  {
    image: "/images/banner4.jpg",
    title: "Stories That Light Up the Night",
    text: "Late-night readers, rejoice — dive into curated collections whenever inspiration strikes.",
  },
] as const

export function BannerSlider() {
  return (
    <Swiper
      modules={[Autoplay, Pagination]}
      slidesPerView={1}
      loop
      autoplay={{ delay: 5000, disableOnInteraction: false }}
      pagination={{ clickable: true }}
      className="h-[420px] w-full sm:h-[480px] lg:h-[560px]"
    >
      {slides.map((slide) => (
        <SwiperSlide key={slide.image}>
          <div className="relative h-full w-full">
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              sizes="100vw"
              className="object-cover"
              priority={slide.image === slides[0].image}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/10" />
            <div className="absolute inset-0">
              <div className="mx-auto flex h-full max-w-6xl flex-col justify-center gap-4 px-4 sm:gap-5">
                <h2 className="max-w-xl text-2xl font-bold text-white drop-shadow sm:text-3xl lg:text-4xl">
                  {slide.title}
                </h2>
                <p className="max-w-lg text-sm text-white/85 sm:text-base">{slide.text}</p>
                <div>
                  <Button
                    className="bg-[#e8925a] text-black hover:bg-[#e8925a]/90"
                    render={<Link href="/all-books" />}
                  >
                    Browse Books
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
