const express = require('express');
const app = express();
app.set('view engine', 'ejs');

app.use(express.static('public'));

app.get('/', function (req, res) {
  res.render('index', { title: 'Hey', message: 'Hi there!' })
})

app.listen(3000,function () {
  console.log('example app listening on port 3000!');
});
