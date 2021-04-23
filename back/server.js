require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT;
const authAPI = require('./routes');
const sequelize = require('./config/db');
const volleyball = require('volleyball');

// Middlewares

app.use(volleyball);

app.use(
  cors({
    origin:true,
    credentials: true,
  }),
);

// Express Route File Requires
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

app.use('/api', authAPI);

app.use(function (err, req, res, next) {
  console.error(err.stack);
  const status = err.status || 500;
  
  res.status(status).send('Something broke!');
});

sequelize.sync({ force: false}).then(() => {
  app.listen(port, () => {
    console.log(`Server listening at port ${port}`);
  });
});
