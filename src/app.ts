import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { BicycleRoutes } from './app/modules/bicycles/bicycle.router';
import { OrderRoutes } from './app/modules/orders/order.router';
const app: Application = express();

app.use(express.json());
app.use(cors());
//app routes
app.use('/api/products/', BicycleRoutes);
app.use('/api/orders/', OrderRoutes);

app.get('/', (req: Request, res: Response) => {
  res.send('Server Running 🏃🏻‍♂️‍➡️');
});

export default app;
