import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { BicycleRoutes } from './app/modules/bicycles/bicycle.router';
const app: Application = express();

app.use(express.json());
app.use(cors());
//app routes
app.use('/api/products/', BicycleRoutes);

app.get('/', (req: Request, res: Response) => {
  res.send('Server Running 🏃🏻‍♂️‍➡️');
});

export default app;
