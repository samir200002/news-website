const API_KEY = process.env.NEWS_API_KEY;
const BASE_URL = "https://newsapi.org/v2";

export async function getTopHeadlines(category = "general", page = 1) {
  try {
    const response = await fetch(
      `${BASE_URL}/top-headlines?category=${category}&page=${page}&apiKey=${API_KEY}`,
      {
        next: { revalidate: 3600 },
      }
    );

    if (!response.ok) {
      console.error('Failed to fetch:', response.status, await response.text());
      throw new Error("Failed to fetch news");
    }

    return response.json();
  } catch (error) {
    console.error('Error fetching top headlines:', error);
    throw error;
  }
}

export async function searchNews(query, page = 1) {
  try {
    const encodedQuery = encodeURIComponent(query);
    const response = await fetch(
      `${BASE_URL}/everything?q=${encodedQuery}&page=${page}&apiKey=${API_KEY}`,
      {
        next: { revalidate: 3600 },
      }
    );

    if (!response.ok) {
      console.error('Failed to fetch:', response.status, await response.text());
      throw new Error("Failed to fetch news");
    }

    return response.json();
  } catch (error) {
    console.error('Error searching news:', error);
    throw error;
  }
}