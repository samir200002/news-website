import { getTopHeadlines, searchNews } from '@/lib/news';

const mockNewsData = {
  articles: [
    {
      title: 'Test Article 1',
      description: 'Test Description 1',
      urlToImage: 'https://test.com/image1.jpg',
      publishedAt: '2025-02-19T12:00:00Z',
      url: 'https://test.com/article1',
      source: { name: 'Test Source' },
    },
  ],
};

describe('API Functions', () => {
  beforeEach(() => {
    global.fetch = jest.fn();
  });

  it('getTopHeadlines fetches news correctly', async () => {
    global.fetch.mockResolvedValueOnce({
      ok: true,
      json: () => Promise.resolve(mockNewsData),
    });

    const result = await getTopHeadlines('technology');
    expect(result).toEqual(mockNewsData);
    expect(global.fetch).toHaveBeenCalledWith(
      expect.stringContaining('/top-headlines?category=technology'),
      expect.any(Object)
    );
  });

  it('searchNews fetches search results correctly', async () => {
    global.fetch.mockResolvedValueOnce({
      ok: true,
      json: () => Promise.resolve(mockNewsData),
    });

    const result = await searchNews('test query');
    expect(result).toEqual(mockNewsData);
    expect(global.fetch).toHaveBeenCalledWith(
      expect.stringContaining('/everything?q=test%20query'),
      expect.any(Object)
    );
  });

  it('handles API errors gracefully', async () => {
    global.fetch.mockResolvedValueOnce({
      ok: false,
      status: 500,
      text: () => Promise.resolve('Server Error'),
    });

    await expect(getTopHeadlines('technology')).rejects.toThrow('Failed to fetch news');
  });
});