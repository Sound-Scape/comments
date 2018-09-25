const express = require('express');
const path = require('path');
const cors = require('cors');
const model = require('../database/models.js');
const port = process.env.PORT || 8081;
const app = express();

app.use(cors());

app.use('/songs/:songid',express.static(path.join(__dirname, '/../client/dist/')));

app.get('/api/comments/:songid', (req, res) => {
  console.log(__dirname);
  model(res, req.params.songid);
});


app.listen(port, () => console.log(`Listening on port ${port}`));
