export interface GuardianNews {
  id: string;
  webTitle: string;
  webUrl: string;
  webPublicationDate: string;
  sectionName: string;

  fields?: {
    thumbnail?: string;
    trailText?: string;
  };
}

export interface GuardianApiResponse {
  response: {
    status: string;
    results: GuardianNews[];
  };
}