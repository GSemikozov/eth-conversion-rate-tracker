import cron from 'node-cron';
import { insertRate } from 'db';
import { getConversionRate } from 'services';

async function trackConversionRate() {
  try {
    const rate = await getConversionRate();
    await insertRate(rate);
    console.log(`Tracked new rate: ${rate}`);
  } catch (error) {
    console.error('Error tracking conversion rate:', error);
  }
}

// Run every minute
cron.schedule('* * * * *', trackConversionRate);

console.log('Conversion rate tracker started...');
