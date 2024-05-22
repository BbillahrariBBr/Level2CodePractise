import { format } from "date-fns";
import slugify from "slugify";
import { Movie } from "./movie.interface";
import { Movies } from "./movie.model";

const createMovie = async (payload: Movie) => {
  // for slug -- title-release-Dat
  const date = format(payload.releaseDate, "dd-MM-yyyy");

  // console.log(date,"date");

  // createing slug
  const slug = slugify(`${payload.title}-${date}`, {
    lower: true,
  });
  // console.log(slug, "slug");
  const result = await Movies.create({ ...payload, slug });
  return result;
};
const getAllMovies = async () => {
  const result = await Movies.find();
  return result;
};

const getMovieByID = async (movieID: string) => {
  try {
    const result = await Movies.findById(movieID);
    return result;
  } catch (error) {
    console.error("Error fetching movie by ID:", error);
    throw new Error("Internal server error");
  }
};

const getMovieBySlug = async (slug: string) => {
  // title-releasedyear
  try {
    const result = await Movies.findOne({ slug: slug });
    return result;
  } catch (error) {
    console.error("Error fetching movie by ID:", error);
    throw new Error("Internal server error");
  }
};

export const MovieServices = {
  createMovie,
  getAllMovies,
  getMovieByID,
  getMovieBySlug,
};
