import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

import { notFound, errorHandler } from './middleware/errorHandler';

import userRoute from './routes/users';
import articleRoute from './routes/articles';
import commentRoute from './routes/comments';
import tagRoute from './routes/tags';
import profileRoute from './routes/profile';
import favouriteRoute from './routes/favourites';

const app = express();

//CORS
app.use(cors({ credentials: true, origin: true }));

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

export default app;
