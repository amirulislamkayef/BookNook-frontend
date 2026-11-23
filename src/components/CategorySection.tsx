import Link from "next/link"
import {
  BookOpen,
  Compass,
  Atom,
  Landmark,
  User,
  Wand2,
  Fingerprint,
  Sparkles,
  ArrowRight,
} from "lucide-react"

const categories = [
  {
    name: "Fiction",
    description: "Immerse in timeless novels, literary classics, and modern storytelling.",
    icon: BookOpen,
    tag: "Popular",
    iconBg: "bg-amber-50 text-amber-600 border-amber-200/80 group-hover:bg-amber-100",
    badgeColor: "bg-amber-50 text-amber-700 border-amber-200/60",
    glowColor: "from-amber-500/10 to-transparent",
  },
  {
    name: "Non-Fiction",
    description: "Real-world insights, thought-provoking truths, and personal growth.",
    icon: Compass,
    tag: "Enriching",
    iconBg: "bg-emerald-50 text-emerald-600 border-emerald-200/80 group-hover:bg-emerald-100",
    badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200/60",
    glowColor: "from-emerald-500/10 to-transparent",
  },
  {
    name: "Science",
    description: "The wonders of astrophysics, quantum realms, nature, and biology.",
    icon: Atom,
    tag: "Curious",
    iconBg: "bg-sky-50 text-sky-600 border-sky-200/80 group-hover:bg-sky-100",
    badgeColor: "bg-sky-50 text-sky-700 border-sky-200/60",
    glowColor: "from-sky-500/10 to-transparent",
  },
  {
    name: "History",
    description: "Chronicles of forgotten eras, civil revolutions, and world leaders.",
    icon: Landmark,
    tag: "Timeless",
    iconBg: "bg-rose-50 text-rose-600 border-rose-200/80 group-hover:bg-rose-100",
    badgeColor: "bg-rose-50 text-rose-700 border-rose-200/60",
    glowColor: "from-rose-500/10 to-transparent",
  },
  {
    name: "Biography",
    description: "Intimate memoirs and extraordinary lives that changed history.",
    icon: User,
    tag: "Inspiring",
    iconBg: "bg-indigo-50 text-indigo-600 border-indigo-200/80 group-hover:bg-indigo-100",
    badgeColor: "bg-indigo-50 text-indigo-700 border-indigo-200/60",
    glowColor: "from-indigo-500/10 to-transparent",
  },
  {
    name: "Fantasy",
    description: "Mythical lands, arcane magic, epic kingdoms, and hero journeys.",
    icon: Wand2,
    tag: "Imaginative",
    iconBg: "bg-purple-50 text-purple-600 border-purple-200/80 group-hover:bg-purple-100",
    badgeColor: "bg-purple-50 text-purple-700 border-purple-200/60",
    glowColor: "from-purple-500/10 to-transparent",
  },
  {
    name: "Mystery",
    description: "Gripping detective sleuths, crime thrillers, and twist endings.",
    icon: Fingerprint,
    tag: "Suspense",
    iconBg: "bg-zinc-100 text-zinc-700 border-zinc-200 group-hover:bg-zinc-200",
    badgeColor: "bg-zinc-100 text-zinc-700 border-zinc-200",
    glowColor: "from-zinc-500/10 to-transparent",
  },
  {
    name: "Children's",
    description: "Whimsical bedtime stories, vibrant illustrations, and young wonders.",
    icon: Sparkles,
    tag: "Playful",
    iconBg: "bg-orange-50 text-[#e8925a] border-orange-200/80 group-hover:bg-orange-100",
    badgeColor: "bg-orange-50 text-orange-700 border-orange-200/60",
    glowColor: "from-orange-500/10 to-transparent",
  },
] as const

export function CategorySection() {
  return (
    <section aria-labelledby="categories-heading" className="bg-white py-16 sm:py-24 border-y border-border/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header with pill and View All link */}
        <div className="flex flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left mb-12">
          <div>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-orange-200/80 bg-orange-50 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-[#e8925a]">
              <Sparkles className="size-3.5" />
              Curated Shelves
            </span>
            <h2
              id="categories-heading"
              className="mt-3 font-serif text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl lg:text-5xl"
            >
              Explore by <span className="text-orange-400">Category</span>
            </h2>
            <p className="mt-2.5 max-w-2xl text-base text-neutral-600">
              Browse our diverse library across genres. Find your next favorite novel,
              dive into historical eras, or expand your mind with cutting-edge science.
            </p>
          </div>

          <div className="shrink-0">
            <Link
              href="/all-books"
              className="inline-flex items-center gap-2 rounded-lg border border-neutral-300 bg-white px-4 py-2.5 text-sm font-semibold text-neutral-800 shadow-xs transition-colors hover:border-neutral-400 hover:bg-neutral-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              Browse All Books
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>

        {/* 8 Category Cards Grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((cat) => {
            const Icon = cat.icon
            return (
              <Link
                key={cat.name}
                href="/all-books"
                className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-neutral-200/90 bg-white p-6 shadow-xs transition-all duration-300 hover:-translate-y-1.5 hover:border-neutral-300 hover:shadow-xl"
              >
                {/* Subtle top gradient glow on card hover */}
                <div
                  className={`pointer-events-none absolute -top-12 -right-12 size-36 rounded-full bg-gradient-to-br ${cat.glowColor} blur-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
                  aria-hidden="true"
                />

                <div>
                  {/* Icon & Tag */}
                  <div className="flex items-center justify-between gap-2">
                    <div
                      className={`flex size-12 items-center justify-center rounded-xl border transition-all duration-300 group-hover:scale-105 ${cat.iconBg}`}
                    >
                      <Icon className="size-6 stroke-[2]" aria-hidden="true" />
                    </div>
                    <span
                      className={`rounded-full border px-2.5 py-0.5 text-[11px] font-semibold tracking-wide uppercase ${cat.badgeColor}`}
                    >
                      {cat.tag}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="mt-5 text-lg font-bold tracking-tight text-neutral-900 transition-colors group-hover:text-orange-500">
                    {cat.name}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-neutral-600">
                    {cat.description}
                  </p>
                </div>

                {/* Footer action link */}
                <div className="mt-6 flex items-center gap-1.5 text-xs font-semibold text-neutral-800 transition-colors group-hover:text-orange-500">
                  <span>Explore books</span>
                  <ArrowRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
