export type Review = {
  email: string;
  rating: number;
  comment: string;
};

export type Movie = {
  title: string;
  description: string;
  releaseDate: Date;
  genre: string;
  reviews: [Review];
  slug: String;
  viewCount: number;
  isDeleted?: boolean;
};
