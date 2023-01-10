import { DataTypes, Model } from 'sequelize';
import sequelize from '../dbConnection';

export interface IUser extends Model {
  email: string;
  username: string;
  bio: string;
  image: string;
  password: string;
}

const User = sequelize.define<IUser>(
  'User',
  {
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    bio: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    image: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  },
);

module.exports = User; //TODO remove this
export default User;
