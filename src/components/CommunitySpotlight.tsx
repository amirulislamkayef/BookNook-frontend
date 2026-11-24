import Link from "next/link"
import {
  Star,
  Quote,
  BookMarked,
  Users,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  HeartHandshake,
  Leaf,
} from "lucide-react"
import { Button } from "@/components/ui/button"

const stats = [
  {
    label: "Books in Circulation",
    value: "12,500+",
    icon: BookMarked,
    change: "Added by readers across 40+ genres",
  },
  {
    label: "Active Readers",
    value: "8,400+",
    icon: Users,
    change: "Community borrowing every week",
  },
  {
    label: "Return Success Rate",
    value: "99.2%",
    icon: CheckCircle2,
    change: "Cared for with reader respect",
  },
  {
    label: "Reader Satisfaction",
    value: "4.9 / 5",
    icon: Star,
    change: "Based on 3,200+ reader reviews",
  },
] as const

const testimonials = [
  {
    quote:
      "BookNook completely changed how I read. Borrowing takes ten seconds, and discovering hidden gems from fellow book lovers feels like browsing a cozy private bookstore.",
    author: "Elena Rostova",
    role: "Fiction & Literary Enthusiast",
    avatar: "ER",
    avatarBg: "bg-amber-100 text-amber-800",
    recentBook: "The Midnight Library",
    rating: 5,
  },
  {
    quote:
      "I put 14 books from my home shelf up for borrowing. Knowing my books are inspiring students and neighbors instead of collecting dust is the best feeling.",
    author: "Dr. Marcus Thorne",
    role: "History & Non-Fiction Reader",
    avatar: "MT",
    avatarBg: "bg-emerald-100 text-emerald-800",
    recentBook: "Sapiens: A Brief History",
    rating: 5,
  },
  {
    quote:
      "The zero-friction borrowing and clean interface make it a joy to use. No complicated library cards, just pure love for good stories and community.",
    author: "Sophia Lin",
    role: "Sci-Fi & Fantasy Fanatic",
    avatar: "SL",
    avatarBg: "bg-purple-100 text-purple-800",
    recentBook: "Project Hail Mary",
    rating: 5,
  },
] as const

const perks = [
  {
    icon: ShieldCheck,
    title: "Zero Hidden Fees",
    description: "Borrowing is 100% free with no surprise charges or subscription paywalls.",
  },
  {
    icon: HeartHandshake,
    title: "Community Trusted",
    description: "Built on mutual respect where readers share, care for, and return physical books.",
  },
  {
    icon: Leaf,
    title: "Sustainable & Green",
    description: "Re-circulating pre-loved books reduces paper waste and fosters circular reading.",
  },
] as const

export function CommunitySpotlight() {
  return (
    <section aria-labelledby="community-spotlight-title" className="bg-neutral-50/70 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-orange-200/90 bg-orange-50 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-[#e8925a]">
            <Sparkles className="size-3.5" />
            Loved by Readers Worldwide
          </span>
          <h2
            id="community-spotlight-title"
            className="mt-3 font-serif text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl lg:text-5xl"
          >
            Where Stories Find Their <span className="text-orange-400">Next Chapter</span>
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-base text-neutral-600 sm:text-lg">
            Join thousands of passionate book enthusiasts sharing their shelves, discovering new
            perspectives, and keeping the magic of reading alive.
          </p>
        </div>

        {/* Live Community Stats Grid */}
        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((item) => {
            const Icon = item.icon
            return (
              <div
                key={item.label}
                className="group relative overflow-hidden rounded-2xl border border-neutral-200/90 bg-white p-6 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-neutral-500">{item.label}</span>
                  <div className="flex size-10 items-center justify-center rounded-xl bg-orange-50 text-[#e8925a] transition-transform duration-300 group-hover:scale-110">
                    <Icon className="size-5" />
                  </div>
                </div>
                <div className="mt-4">
                  <span className="font-serif text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
                    {item.value}
                  </span>
                  <p className="mt-1 text-xs text-neutral-500">{item.change}</p>
                </div>
              </div>
            )
          })}
        </div>

        {/* Reader Testimonials Header */}
        <div className="mt-16 text-center sm:mt-20">
          <h3 className="font-serif text-2xl font-bold text-neutral-900 sm:text-3xl">
            Real Stories From Real Readers
          </h3>
          <p className="mt-2 text-sm text-neutral-600 sm:text-base">
            See how BookNook makes borrowing books as simple as turning a page.
          </p>
        </div>

        {/* Testimonials Cards */}
        <div className="mt-8 grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.author}
              className="relative flex flex-col justify-between rounded-2xl border border-neutral-200/90 bg-white p-7 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-neutral-300 hover:shadow-xl"
            >
              {/* Decorative Quote Icon */}
              <Quote className="absolute top-6 right-6 size-8 text-neutral-200/80" aria-hidden="true" />

              <div>
                {/* 5-Star Rating */}
                <div className="flex items-center gap-1">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="size-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="mt-4 text-sm leading-relaxed text-neutral-700 italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              {/* Author Info & Badge */}
              <div className="mt-6 border-t border-neutral-100 pt-5">
                <div className="flex items-center gap-3">
                  <div
                    className={`flex size-10 shrink-0 items-center justify-center rounded-full font-bold text-xs ${t.avatarBg}`}
                  >
                    {t.avatar}
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="truncate text-sm font-semibold text-neutral-900">{t.author}</h4>
                    <p className="truncate text-xs text-neutral-500">{t.role}</p>
                  </div>
                </div>

                <div className="mt-3 inline-flex items-center gap-1.5 rounded-md bg-neutral-100 px-2 py-1 text-[11px] font-medium text-neutral-600">
                  <BookMarked className="size-3 text-[#e8925a]" />
                  <span>Recently read: <strong className="font-semibold text-neutral-800">{t.recentBook}</strong></span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Why BookNook Value Pillars */}
        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {perks.map((p) => {
            const Icon = p.icon
            return (
              <div
                key={p.title}
                className="flex items-start gap-4 rounded-xl border border-neutral-200/70 bg-white/70 p-5 shadow-2xs backdrop-blur-xs"
              >
                <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-orange-100/70 text-[#e8925a]">
                  <Icon className="size-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-neutral-900">{p.title}</h4>
                  <p className="mt-1 text-xs leading-relaxed text-neutral-600">{p.description}</p>
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom Call to Action Card */}
        <div className="relative mt-16 overflow-hidden rounded-3xl bg-neutral-950 px-6 py-12 text-white shadow-xl sm:px-12 sm:py-16">
          {/* Ambient Warm Gradient Glows */}
          <div
            className="pointer-events-none absolute -top-24 -right-24 size-96 rounded-full bg-gradient-to-br from-[#e8925a]/30 to-transparent blur-3xl"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute -bottom-24 -left-24 size-96 rounded-full bg-gradient-to-tr from-amber-600/20 to-transparent blur-3xl"
            aria-hidden="true"
          />

          <div className="relative mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-orange-500/30 bg-orange-500/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-orange-400">
              <Sparkles className="size-3.5" />
              Community Sharing
            </span>
            <h3 className="mt-4 font-serif text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Have Books Resting on Your Shelf?
            </h3>
            <p className="mt-4 text-base leading-relaxed text-neutral-300 sm:text-lg">
              Give your stories a second life. List your books in less than two minutes, connect with
              passionate fellow readers, and help us grow a borderless literary haven.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
              <Button
                className="h-12 w-full bg-[#e8925a] px-8 font-semibold text-neutral-950 hover:bg-[#e8925a]/90 sm:w-auto"
                render={<Link href="/add-book" />}
              >
                Share a Book
                <ArrowRight className="ml-2 size-4" />
              </Button>
              <Button
                variant="outline"
                className="h-12 w-full border-neutral-700 bg-neutral-900/60 px-8 font-semibold text-white hover:bg-neutral-800 hover:text-white sm:w-auto"
                render={<Link href="/all-books" />}
              >
                Browse the Library
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
