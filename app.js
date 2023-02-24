import express from 'express';
import mongoose from 'mongoose';
import blogRouter from './routes/user-blog';
import router from './routes/user-routes';
import bodyParser from 'body-parser';
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// app.use(express.json());
//middleware
app.use('/api/user', router);
app.use('/api/blog', blogRouter);

//database
mongoose
  .connect('mongodb://0.0.0.0:27017/')
  .then(() => {
    app.listen(5000);
  })
  .then(() => {
    console.log('connected to database and listening to port 5000');
  })
  .catch((err) => {
    console.log(err);
  });
