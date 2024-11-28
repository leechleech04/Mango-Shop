const express = require('express');
const dotenv = require('dotenv');

const app = express();
dotenv.config();

app.use(express.static(__dirname + '/public'));

app.listen(process.env.PORT, () => {
  console.log(`${process.env.PORT}포트에서 서버 실행 중`);
});

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});
