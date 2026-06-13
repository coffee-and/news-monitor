import type { GuardianNews } from "../types/news";
import NewsCard from "./NewsCard";

interface NewsListProps {
  articles: GuardianNews[];
  onArticleClick: (article: GuardianNews) => void;
  onToggleBookmark: (articleId: string) => void;
  isBookmarked: (articleId: string) => boolean;
}

const NewsList = ({
  articles,
  onArticleClick,
  onToggleBookmark,
  isBookmarked,
}: NewsListProps) => {
  return (
    <section className="news-list">
      {articles.map((article) => (
        <NewsCard
          key={article.id}
          article={article}
          onArticleClick={onArticleClick}
          isBookmarked={isBookmarked(article.id)}
          onToggleBookmark={onToggleBookmark}
        />
      ))}
    </section>
  );
};

export default NewsList;
