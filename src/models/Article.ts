import { BelongsToManyAddAssociationMixin, DataTypes, Model } from 'sequelize';
import sequelize from '../dbConnection';
import { ITag } from './Tag';

interface IArticle extends Model {
  slug: string;
  title: string;
  description: string;
  body: string;
  addTag: BelongsToManyAddAssociationMixin<ITag, string>;
}

const Article = sequelize.define<IArticle>('Article', {
  slug: {
    type: DataTypes.STRING,
    allowNull: false,
    primaryKey: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
  },
  body: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
});

module.exports = Article; // todo remove this
export default Article;
/* {
  "article": {
    
    
    "tagList": ["dragons", "training"],
    "favorited": false,
    "favoritesCount": 0,
    "author": {
      "username": "jake",
      "bio": "I work at statefarm",
      "image": "https://i.stack.imgur.com/xHWG8.jpg",
      "following": false
    }
  }
} */
