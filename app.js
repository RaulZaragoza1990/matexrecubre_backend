const express = require('express');
const app = express();
const helmet = require('helmet');
const cors = require('cors');

const APP_PORT = 3001;

app.use(helmet());
app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api', require('./routes'));

app.get('/', (req, res) => {
  return res.send('<h1>Hello World</h1>');
});

app.listen(APP_PORT, () => {
  console.log(`Express on port ${APP_PORT}`);
});