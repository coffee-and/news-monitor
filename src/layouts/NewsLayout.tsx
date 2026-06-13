import { useState } from "react";
import CategoryFilter from "../components/CategoryFilter";
import NewsList from "../components/NewsList";
import SearchBar from "../components/SearchBar";
import { useBookmarks } from "../hooks/useBookmarks";
import { useNews } from "../hooks/useNews";
import { useRecentlyViewed } from "../hooks/useRecentlyViewed";

const NewsLayout = () => {
  const [query, setQuery] = useState("artificial intelligence");
  const [showRecent, setShowRecent] = useState(false);
  const [showBookmarks, setShowBookmarks] = useState(false);

  const { articles, loading, error } = useNews(query);
  const { toggleBookmark, isBookmarked } = useBookmarks();
  const { recentArticles, addRecent } = useRecentlyViewed();

  const bookmarkedArticles = articles.filter((article) =>
    isBookmarked(article.id),
  );

  const visibleArticles = showBookmarks
    ? bookmarkedArticles
    : showRecent
      ? recentArticles
      : articles;

  const handleSearch = (value: string) => {
    setShowBookmarks(false);
    setShowRecent(false);
    setQuery(value);
  };

  const handleCategorySelect = (value: string) => {
    if (value === "bookmarks") {
      setShowBookmarks((prev) => !prev);
      setShowRecent(false);
      return;
    }

    if (value === "recent") {
      setShowRecent((prev) => !prev);
      setShowBookmarks(false);
      return;
    }

    setShowBookmarks(false);
    setShowRecent(false);
    setQuery(value);
  };

  return (
    <main>
      <section className="hero-section">
        <h1 className="hero-title">Tech Radar</h1>
        <p className="hero-description">
          Track industry trends, emerging technologies and AI developments in
          real time.
        </p>
        <p className="hero-meta">
          {loading
            ? "Loading Articles "
            : `${visibleArticles.length} Articles `}
          · Guardian API · Real-time
        </p>
      </section>
      <SearchBar onSearch={handleSearch} />
      <CategoryFilter
        selected={showRecent ? "recent" : showBookmarks ? "bookmarks" : query}
        onSelect={handleCategorySelect}
      />
      {error && <div>{error}</div>}
      {!loading && !error && (
        <NewsList
          articles={visibleArticles}
          onToggleBookmark={toggleBookmark}
          isBookmarked={isBookmarked}
          onArticleClick={addRecent}
        />
      )}
    </main>
  );
};

export default NewsLayout;
