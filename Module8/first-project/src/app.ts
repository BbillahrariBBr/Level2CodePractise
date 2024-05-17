import cors from 'cors';
import express, { Application, Request, Response } from 'express';
const app: Application = express();
// const port = 3000;

//parser
app.use(express.json());
app.use(cors());

app.get('/', (req: Request, res: Response) => {
  const a = 10;

  res.send(a);
  // let b = 20;
});

export default {
  app,
};

console.log(process.cwd());
