import 'dotenv/config';

import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

import { notFound, errorHandler } from './middleware/errorHandler';
import sequelize from './dbConnection';

import User from './models/User';
import Article from './models/Article';
import Tag from './models/Tag';
import Comment from './models/Comments';
import userRoute from './routes/users';
import articleRoute from './routes/articles';
import commentRoute from './routes/comments';
import tagRoute from './routes/tags';
import profileRoute from './routes/profile';
import favouriteRoute from './routes/favourites';

const app = express();

//CORS
app.use(cors({ credentials: true, origin: true }));

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

app.use(express.json());
app.use(morgan('tiny'));

app.get('/', (req, res) => {
  res.json({ status: 'API is running' });
});
app.use('/api', userRoute);
app.use('/api/articles', articleRoute);
app.use('/api/articles', commentRoute);
app.use('/api/tags', tagRoute);
app.use('/api/profiles', profileRoute);
app.use('/api/articles', favouriteRoute);
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
