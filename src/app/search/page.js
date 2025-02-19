import { Suspense } from "react"
import Loading from "../loading"
import SearchResults from "./search-results"

export default function SearchPage({ searchParams }) {
  const query = searchParams.q || ""

  if (!query) {
    return (
      <div className="container mx-auto px-4 py-8">
        <p className="text-center text-gray-500">Please enter a search query.</p>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="space-y-6">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold tracking-tighter">
            Search Results for &quot;{query}&quot;
          </h1>
        </div>
        <Suspense fallback={<Loading />}>
          <SearchResults query={query} />
        </Suspense>
      </div>
    </div>
  )
}