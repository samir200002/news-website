"use client"

import { useEffect, useState } from "react"
import NewsCard from "./news-card"
import { useInView } from "react-intersection-observer"

export default function InfiniteScroll({ initialArticles, fetchMore }) {
  const [articles, setArticles] = useState(initialArticles)
  const [page, setPage] = useState(1)
  const [hasMore, setHasMore] = useState(true)
  const [isLoading, setIsLoading] = useState(false)

  const { ref, inView } = useInView({
    threshold: 0,
  })

  useEffect(() => {
    if (inView && hasMore && !isLoading) {
      loadMore()
    }
  }, [inView, hasMore, isLoading]) // Added hasMore and isLoading to dependencies

  const loadMore = async () => {
    setIsLoading(true)
    const nextPage = page + 1
    try {
      const newArticles = await fetchMore(nextPage)
      if (newArticles.articles.length === 0) {
        setHasMore(false)
      } else {
        setArticles([...articles, ...newArticles.articles])
        setPage(nextPage)
      }
    } catch (error) {
      console.error("Error loading more articles:", error)
      setHasMore(false)
    }
    setIsLoading(false)
  }

  return (
    <>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {articles.map((article, index) => (
          <NewsCard key={`${article.url}-${index}`} article={article} />
        ))}
      </div>
      {hasMore && (
        <div ref={ref} className="flex justify-center p-4">
          {isLoading && <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary" />}
        </div>
      )}
    </>
  )
}

