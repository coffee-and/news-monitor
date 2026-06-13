import type { GuardianNews } from "../types/news";
import { formatDate } from "../utils/formatDate";
import { stripHtml } from "../utils/stripHtml";

interface NewsCardProps {
  article: GuardianNews;
  onArticleClick: (article: GuardianNews) => void;
  isBookmarked: boolean;
  onToggleBookmark: (articleId: string) => void;
}

const NewsCard = ({
  article,
  onArticleClick,
  isBookmarked,
  onToggleBookmark,
}: NewsCardProps) => {
  return (
    <article className="news-card">
      {article.fields?.thumbnail && (
        <img
          src={article.fields.thumbnail}
          alt={article.webTitle}
          className="news-card__image"
        />
      )}
      <div className="news-card__content">
        <span className="news-card__section">
          {article.sectionName} • {formatDate(article.webPublicationDate)}
        </span>
        <h3>{article.webTitle}</h3>
        <p>{stripHtml(article.fields?.trailText ?? "No summary available.")}</p>
        <div className="news-card__actions">
          <a
            href={article.webUrl}
            target="_blank"
            rel="noreferrer"
            onClick={() => onArticleClick(article)}
          >
            View Article →
          </a>
          <button
            type="button"
            className={
              isBookmarked ? "bookmark-button active" : "bookmark-button"
            }
            onClick={() => onToggleBookmark(article.id)}
          >
            {isBookmarked ? "Saved" : "Save"}
          </button>
        </div>
      </div>
    </article>
  );
};

export default NewsCard;
