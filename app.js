import express from 'express';
import mongoose from 'mongoose';
const app = express();

//database
mongoose
  .connect('mongodb://0.0.0.0:27017/')
  .then(() => {
    app.listen(4000);
  })
  .then(() => {
    console.log('connected to database and listening to port 4000');
  })
  .catch((err) => {
    console.log(err);
  });

//middleware
app.use('/api', (req, res, next) => {
  res.send('Api ');
});
