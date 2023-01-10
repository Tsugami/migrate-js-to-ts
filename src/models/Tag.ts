import { DataTypes, Model } from 'sequelize';
import sequelize from '../dbConnection';

export interface ITag extends Model {
  name: string;
}

const Tag = sequelize.define<ITag>(
  'Tag',
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    },
  },
  {
    timestamps: false,
  },
);

module.exports = Tag; // todo remove this
export default Tag;
