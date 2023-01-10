import { DataTypes } from 'sequelize';
import sequelize from '../dbConnection';

const Comment = sequelize.define('Comment', {
  body: {
    type: DataTypes.TEXT,
  },
});

export default Comment;
module.exports = Comment; // todo remove this
