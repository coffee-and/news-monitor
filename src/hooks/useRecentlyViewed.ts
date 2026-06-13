import { useEffect, useState } from "react";
import type { GuardianNews } from "../types/news";

const STORAGE_KEY = "recentlyViewedArticles";

export const useRecentlyViewed = () => {
  const [recentArticles, setRecentArticles] = useState<GuardianNews[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);

    if (stored) {
      setRecentArticles(JSON.parse(stored));
    }
  }, []);

  const addRecent = (article: GuardianNews) => {
    const updated = [
      article,
      ...recentArticles.filter((item) => item.id !== article.id),
    ].slice(0, 20);

    setRecentArticles(updated);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  };

  return {
    recentArticles,
    addRecent,
  };
};
