import express, { Request, Response } from "express";
import { MovieRoutes } from "./modules/movies/movie.route";

const app = express();

// parser
app.use(express.json());

app.use("/api/movies", MovieRoutes);

//const port = 3000;

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World! love me");
});

export default app;
