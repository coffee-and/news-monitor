import { useEffect, useState } from "react";
import { fetchNews } from "../api/guardianApi";
import type { GuardianNews } from "../types/news";

export const useNews = (query: string) => {
  const [articles, setArticles] = useState<GuardianNews[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadNews = async () => {
      try {
        setLoading(true);

        const data = await fetchNews(query);

        setArticles(data);
      } catch (err) {
        setError("뉴스를 불러오지 못했습니다.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    loadNews();
  }, [query]);

  return {
    articles,
    loading,
    error,
  };
};
