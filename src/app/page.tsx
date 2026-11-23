import { Banner } from "@/components/Banner"
import { HowBorrowingWorks } from "@/components/HowBorrowingWorks"
import NewArrival from "@/components/NewArrival"

export default function Home() {
  return (
    <div>
      <Banner />
      <NewArrival />
      <HowBorrowingWorks />
    </div>
  )
}

