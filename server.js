const express = require('express');
const app = express();
const port = 8082;

var options = {
  dotfiles: 'ignore',
  etag: false,
  extensions: ['png', 'jpeg', 'html'],
  index: false,
  maxAge: '1d',
  redirect: false,
  setHeaders: function (res, path, stat) {
    res.set('x-timestamp', Date.now())
  }
};

app.use(express.json());

app.use('/html', express.static('public/html'));
app.use('/img', express.static('public/img'));
app.use('/commingsoon', express.static('public/commingsoon'));
app.use('/css', express.static('public/css'));
app.use('/Fonts', express.static('public/Fonts'));

app.use('/JavaScript', express.static('public/JavaScript'));


// Add Rout
const courseRout = require('./router/courserouter');
const memberRout = require('./router/memberrouter');


//Use Rout
app.use('/api', courseRout);
app.use('/api', memberRout);



app.get('/', function (req, res) {
  res.redirect('html');
});


app.listen(port, () => {
  console.log(`app is listen ${port}`);
});










