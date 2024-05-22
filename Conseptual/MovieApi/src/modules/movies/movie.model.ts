import { model, Schema } from "mongoose";
import { Movie, Review } from "./movie.interface";

const reviewSchema = new Schema<Review>({
  email: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  comment: {
    type: String,
    required: true,
  },
});

const movieSchema = new Schema<Movie>({
  title: {
    type: String,
    required: [true, "Title  is required"],
  },
  description: {
    type: String,
    required: [true, "Description  is required"],
  },
  releaseDate: {
    type: Date,
  },
  genre: {
    type: String,
    required: [true, "genre  is required"],
  },
  reviews: {
    type: [reviewSchema],
  },
  slug: {
    type: String,
  },
  viewCount: {
    type: Number,
    default: 0,
  },
  isDeleted: {
    type: Boolean,
    default: false,
  },
});

export const Movies = model<Movie>("Movie", movieSchema);
