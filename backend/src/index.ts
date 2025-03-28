import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import rateRoutes from './routes/rateRoutes';
import { connectDB } from './db';
import { PORT } from 'config';
import './libs/tracker';

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api', rateRoutes);

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Backend running on port ${PORT}`);
  });
});
