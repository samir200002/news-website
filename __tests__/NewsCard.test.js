import { render, screen } from "@testing-library/react";
import NewsCard from "@/components/news-card";

jest.mock("lucide-react", () => ({
  Calendar: () => <div data-testid="calendar-icon">📅</div>,
}));

jest.mock("next/image", () => ({
  __esModule: true,
  default: (props) => <img {...props} alt={props.alt} />,
}));

jest.mock("next/link", () => ({
  __esModule: true,
  default: ({ children, href }) => <a href={href}>{children}</a>,
}));

const mockArticle = {
  title: "Test Article 1",
  description: "Test Description 1",
  urlToImage: "https://test.com/image1.jpg",
  publishedAt: "2025-02-19T12:00:00Z",
  url: "https://test.com/article1",
  source: { name: "Test Source" },
};

describe("NewsCard Component", () => {
  it("renders article information correctly", () => {
    render(<NewsCard article={mockArticle} />);
    expect(screen.getByText(mockArticle.title)).toBeInTheDocument();
    expect(screen.getByText(mockArticle.description)).toBeInTheDocument();
    expect(screen.getByText(`Source: ${mockArticle.source.name}`)).toBeInTheDocument();
  });

  it("uses placeholder image when urlToImage is not provided", () => {
    const articleWithoutImage = { ...mockArticle, urlToImage: null };
    render(<NewsCard article={articleWithoutImage} />);
    expect(screen.getByAltText(mockArticle.title)).toHaveAttribute("src", "/assets/news.jpg");
  });
});
