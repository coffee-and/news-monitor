import { useEffect, useState } from "react";

const STORAGE_KEY = "tech-radar-bookmarks";

export const useBookmarks = () => {
  const [bookmarkedIds, setBookmarkedIds] = useState<string[]>([]);

  useEffect(() => {
    const savedBookmarks = localStorage.getItem(STORAGE_KEY);

    if (savedBookmarks) {
      setBookmarkedIds(JSON.parse(savedBookmarks));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(bookmarkedIds));
  }, [bookmarkedIds]);

  const toggleBookmark = (articleId: string) => {
    setBookmarkedIds((prevIds) =>
      prevIds.includes(articleId)
        ? prevIds.filter((id) => id !== articleId)
        : [...prevIds, articleId],
    );
  };

  const isBookmarked = (articleId: string) => {
    return bookmarkedIds.includes(articleId);
  };

  return {
    bookmarkedIds,
    toggleBookmark,
    isBookmarked,
  };
};
