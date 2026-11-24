import { Banner } from "@/components/Banner"
import { CategorySection } from "@/components/CategorySection"
import { CommunitySpotlight } from "@/components/CommunitySpotlight"
import { HowBorrowingWorks } from "@/components/HowBorrowingWorks"
import NewArrival from "@/components/NewArrival"

export default function Home() {
  return (
    <div>
      <Banner />
      <NewArrival />
      <CategorySection />
      <HowBorrowingWorks />
      <CommunitySpotlight />
    </div>
  )
}



