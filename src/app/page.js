// import NewsGrid from "@/components/news-grid"
// import { Suspense } from "react"
// import Loading from "./loading"
// import { CategoryTabs } from "@/components/category-tabs"

// export default function Home() {
//   return (
//     <div className="container mx-auto px-4 py-8">
//       <section className="space-y-6">
//         <div className="text-center space-y-2">
//           <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">Latest News</h1>
//           <p className="text-muted-foreground">Stay informed with the latest headlines from around the world.</p>
//         </div>
//         <CategoryTabs />
//         <Suspense fallback={<Loading />}>
//           <NewsGrid />
//         </Suspense>
//       </section>
//     </div>
//   )
// }

// app/page.js
import NewsGrid from "@/components/news-grid"
import { Suspense } from "react"
import Loading from "./loading"

export default async function Home({ searchParams }) {
  // Await the searchParams
  const category = await (searchParams.category || "general")

  return (
    <div className="container mx-auto px-4 py-8">
      <section className="space-y-6">
        <div className="text-center space-y-2">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">Latest News</h1>
          <p className="text-muted-foreground">Stay informed with the latest headlines from around the world.</p>
        </div>
        <Suspense key={category} fallback={<Loading />}>
          <NewsGrid category={category} />
        </Suspense>
      </section>
    </div>
  )
}

