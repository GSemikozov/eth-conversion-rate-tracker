import { DataTypes, Model } from 'sequelize';
import sequelize from '../sequelize';

class ConversionRate extends Model {
  public rate!: number;
  public createdAt!: Date;
}

export const ConversionRateModel = ConversionRate.init(
  {
    rate: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
    },
  },
  {
    sequelize,
    tableName: 'conversion_rates',
    timestamps: false,
  }
);
