import express from 'express';
import type { Response, Router } from 'express';
import { insertRate, getHistory } from '../db';
import { getConversionRate } from 'services';

const router: Router = express.Router();

router.get('/rate', async (_, res: Response) => {
  try {
    const rate = await getConversionRate();
    await insertRate(rate);
    res.json({ rate });
  } catch (error) {
    console.error('Error fetching conversion rate:', error);
    res.status(500).json({ error: 'Failed to fetch conversion rate' });
  }
});

router.get('/rate/history', async (_, res: Response) => {
  try {
    const history = await getHistory();
    res.status(200).json(history);
  } catch (err) {
    res.status(500).json({ error: 'Failed to retrieve history' });
  }
});

export default router;
