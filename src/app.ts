import express, { Application, Request, Response } from 'express';
import cors from 'cors';
const app: Application = express();

app.use(express.json());
app.use(cors());
//app routes
// app.use('/api/');

app.get('/', (req: Request, res: Response) => {
  res.send('Server Running 🏃🏻‍♂️‍➡️');
});

export default app;
