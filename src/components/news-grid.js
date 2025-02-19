
import { getTopHeadlines } from "@/lib/news"
import InfiniteScroll from "./infinite-scroll"

export default async function NewsGrid({ category = "general" }) {
  const initialNews = await getTopHeadlines(category)

  const fetchMore = async (page) => {
    "use server"
    return getTopHeadlines(category, page)
  }

  return (
    <InfiniteScroll 
      key={category} 
      initialArticles={initialNews.articles} 
      fetchMore={fetchMore} 
    />
  )
}

