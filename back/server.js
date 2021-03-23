require('dotenv').config();
const express = require('express');
const app = express();
const sequelize = require('./config/db');
const cors = require('cors');
const port = process.env.PORT;
const volleyball = require('volleyball');
const authAPI = require('./routes');

app.use(volleyball);

app.use(
  cors({
    origin: 'http://localhost:3000/',
    credentials: true,
  }),
);

// Express Route File Requires

app.use(express.json());
app.use(express.urlencoded());

app.use('/api', authAPI);

sequelize.sync({ force: false }).then(() => {
  app.listen(port, () => {
    console.log(`Server listening at port ${port}`);
  });
});
