import { searchNews } from "@/lib/news"
import NewsCard from "@/components/news-card"

export default async function SearchResults({ query }) {
  const news = await searchNews(query)

  if (news.articles.length === 0) {
    return (
      <p className="text-center text-gray-500">
        No results found for &quot;{query}&quot;
      </p>
    )
  }

  return (
    <div className="space-y-6">
      <p className="text-muted-foreground">Found {news.totalResults} articles</p>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {news.articles.map((article, index) => (
          <NewsCard key={`${article.url}-${index}`} article={article} />
        ))}
      </div>
    </div>
  )
}