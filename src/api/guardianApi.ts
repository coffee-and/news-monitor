import type { GuardianApiResponse } from "../types/news";

const API_KEY = import.meta.env.VITE_GUARDIAN_API_KEY;

export const fetchNews = async (query = "artificial intelligence") => {
  const url =
    `https://content.guardianapis.com/search` +
    `?q=${encodeURIComponent(query)}` +
    `&show-fields=thumbnail,trailText` +
    `&page-size=20` +
    `&api-key=${API_KEY}`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Failed to fetch news");
  }

  const data: GuardianApiResponse = await response.json();

  return data.response.results;
};
