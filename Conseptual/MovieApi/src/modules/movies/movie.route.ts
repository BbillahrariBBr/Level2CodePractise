import express from "express";
import { movieController } from "./movie.controller";
const router = express.Router();

router.post("/", movieController.createMovie);
router.get("/", movieController.getAllMovies);
router.get("/id/:movieId", movieController.getMovieByID);
router.get("/slug/:slug", movieController.getMovieBySlug);

export const MovieRoutes = router;
