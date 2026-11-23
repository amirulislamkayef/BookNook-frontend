import { Search, BookOpen, RotateCcw } from "lucide-react"

const steps = [
  {
    step: "Step 1",
    title: "Find a book",
    description: "Browse the shelf and open any book you like.",
    icon: Search,
  },
  {
    step: "Step 2",
    title: "Borrow it",
    description: "Confirm the borrow. The book is yours for 7 days.",
    icon: BookOpen,
  },
  {
    step: "Step 3",
    title: "Return it",
    description: "Done reading? Return it from My Borrows in one click.",
    icon: RotateCcw,
  },
] as const

export function HowBorrowingWorks() {
  return (
    <section aria-labelledby="how-borrowing-works-title" className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <h2
            id="how-borrowing-works-title"
            className="font-serif text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl"
          >
            How Borrowing Works
          </h2>
          <p className="mt-3 text-base text-neutral-500 sm:text-lg">
            Three steps. No library card needed.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-3">
          {steps.map(({ step, title, description, icon: Icon }) => (
            <div
              key={step}
              className="group relative flex flex-col items-center rounded-2xl border border-neutral-200/90 bg-white p-8 text-center shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-neutral-300 hover:shadow-lg"
            >
              {/* Icon Circle */}
              <div className="mb-5 flex size-14 items-center justify-center rounded-full bg-emerald-100 text-emerald-800 transition-transform duration-300 group-hover:scale-110">
                <Icon className="size-6 stroke-[2.2]" aria-hidden="true" />
              </div>

              {/* Step number badge */}
              <span className="mb-2 text-xs font-semibold uppercase tracking-wider text-[#e8925a]">
                {step}
              </span>

              {/* Step title */}
              <h3 className="mb-2 text-xl font-bold tracking-tight text-neutral-900">
                {title}
              </h3>

              {/* Step description */}
              <p className="text-sm leading-relaxed text-neutral-600">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
