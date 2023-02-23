import express from 'express';
import mongoose from 'mongoose';
import router from './routes/user-routes';
const app = express();

//database
mongoose
  .connect('mongodb://0.0.0.0:27017/')
  .then(() => {
    app.listen(5000);
  })
  .then(() => {
    console.log('connected to database and listening to port 4000');
  })
  .catch((err) => {
    console.log(err);
  });

//middleware
app.use("/api/user" ,router);
