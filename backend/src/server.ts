import express from 'express';
import * as dotenv from 'dotenv';

const app = express();
const port = process.env.PORT || 8888;

app.get('/', (req, res) => {
  res.send('Hello world');
});

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
