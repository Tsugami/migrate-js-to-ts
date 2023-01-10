import 'dotenv/config';

import sequelize from './dbConnection';

import User from './models/User';
import Article from './models/Article';
import Tag from './models/Tag';
import Comment from './models/Comments';
import app from './app';

//RELATIONS:
//1 to many relation between user and article
User.hasMany(Article, {
  onDelete: 'CASCADE',
});
Article.belongsTo(User);

//many to many relation between article and taglist
Article.belongsToMany(Tag, {
  through: 'TagList',
  timestamps: false,
});
Tag.belongsToMany(Article, {
  through: 'TagList',
  timestamps: false,
});

//One to many relation between Article and Comments
Article.hasMany(Comment, { onDelete: 'CASCADE' });
Comment.belongsTo(Article);

//One to many relation between User and Comments
User.hasMany(Comment, { onDelete: 'CASCADE' });
Comment.belongsTo(User);

//Many to many relation between User and User
User.belongsToMany(User, {
  through: 'Followers',
  as: 'followers',
  timestamps: false,
});

//favourite Many to many relation between User and article
User.belongsToMany(Article, { through: 'Favourites', timestamps: false });
Article.belongsToMany(User, { through: 'Favourites', timestamps: false });

const sync = async () => await sequelize.sync({ alter: true });
sync();

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
