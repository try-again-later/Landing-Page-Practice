const express = require('express');
const path = require('path');
const reload = require('reload');

const app = express();
app.set('views', path.resolve(__dirname, 'views'));
app.set('view engine', 'pug');

app.use('/Landing-Page-Practice', express.static('./dist'));

app.get('/Landing-Page-Practice', function (req, res, next) {
  try {
    res.render('index', {
      env: process.env.NODE_ENV ?? 'development',
    });
  } catch (e) {
    next(e);
  }
});

app.listen(process.env.PORT || 3000, function () {
  console.log(`Listening on http://localhost:${process.env.PORT || 3000}`);
});

reload(app);
