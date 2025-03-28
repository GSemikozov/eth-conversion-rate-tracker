import sequelize from './sequelize';
import { ConversionRateModel } from './models';

export async function connectDB() {
  try {
    await sequelize.sync();
    console.log('Connected to DB and tables synchronized');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

export async function insertRate(rate: number) {
  await ConversionRateModel.create({ rate });
}

export async function getHistory() {
  return ConversionRateModel.findAll({
    order: [['createdAt', 'DESC']],
    limit: 100,
  });
}
