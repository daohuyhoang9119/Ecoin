import express from 'express';
import path from 'path';
import morgan from 'morgan';
import compression from 'compression';
import dotenv from 'dotenv';
dotenv.config({ path: path.resolve(__dirname, '../.env') });

const app = express();
const port = process.env.PORT || 8888;

//init middlewares
// Use Morgan middleware
app.use(morgan('dev'));
// app.use(morgan('combined'));

app.use(
  compression({
    threshold: 0,
    level: 6
  })
);

app.get('/', (req, res) => {
  res.status(200).json({
    msg: 'Welcome từ đây'
  });
});
app.get('/a', (req, res) => {
  res.status(200).json({
    msg: 'từ a'
  });
});

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
