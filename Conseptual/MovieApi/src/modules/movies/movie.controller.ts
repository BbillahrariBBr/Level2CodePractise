import { Request, Response } from "express";
import { MovieServices } from "./movie.service";

const createMovie = async (req: Request, res: Response) => {
  const movieData = req.body;
  const result = await MovieServices.createMovie(movieData);
  res.json({
    success: true,
    message: "Movie is Created Successfully!",
    data: result,
  });
};

const getAllMovies = async (req: Request, res: Response) => {
  try {
    const result = await MovieServices.getAllMovies();
    res.status(200).json({
      success: true,
      message: "Movie is Fetched Successfully!",
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: "could not fetched Movie",
      data: error,
    });
  }
};

const getMovieByID = async (req: Request, res: Response) => {
  //   console.log(req.params);
  const movieID = req.params.movieId;
  //   console.log("Type of movie ID:", typeof movieID); // Log the type of movieID
  //   console.log("Movie ID:", movieID);
  try {
    const result = await MovieServices.getMovieByID(movieID);
    if (!result) {
      return res.status(400).json({ message: "Movie not found" });
    }
    res.status(200).json({
      success: true,
      message: "Movie is Fetched Successfully!",
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: "could not find any  Movie",
      data: error,
    });
  }
};

const getMovieBySlug = async (req: Request, res: Response) => {
  //   console.log(req.params);
  const {slug} = req.params;
  //   console.log("Type of movie ID:", typeof movieID); // Log the type of movieID
  //   console.log("Movie ID:", movieID);
  try {
    const result = await MovieServices.getMovieBySlug (slug);
    if (!result) {
      return res.status(400).json({ message: "Movie not found" });
    }
    res.status(200).json({
      success: true,
      message: "Movie is Fetched Successfully!",
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: "could not find any  Movie",
      data: error,
    });
  }
};

export const movieController = {
  createMovie,
  getAllMovies,
  getMovieByID,
  getMovieBySlug,
};
