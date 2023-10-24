var express = require("express");
var bodyParser = require("body-parser");

const mongoose = require('mongoose');
const mongoDB = 'mongodb://127.0.0.1:27017/application';
mongoose.connect(mongoDB, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => {
    console.log('Connected to MongoDB!');
  })
  .catch((err) => {
    console.error(err);
  });

var app = express();

app.use(bodyParser.json());
app.use(express.static('public'));
app.use(bodyParser.urlencoded({
  extended: true
}));


app.post('/sign_up', function (req, res) {
  var name = req.body.name;
  var email = req.body.email;
  var pass = req.body.password;
  var phone = req.body.phone;
  var jobId = req.params.jobId; 

  var data = {
    "name": name,
    "email": email,
    "password": pass,
    "phone": phone,
    "jobId": jobId 
  }

  mongoose.connection.collection('details').insertOne(data, function (err, collection) {
    if (err) throw err;
    console.log("Record inserted Successfully");
    return res.send("Successfully Submitted");
  });
});

app.get('/', function (req, res) {
  res.set({
    'Access-control-Allow-Origin': '*'
  });
  return res.send("Welcome to the Signup Page");
}).listen(3000);

console.log("Server listening at port 3000");

