var path = require('path')
const express = require('express')

const app = express()

// MeaningCloud credentials
const dotenv = require('dotenv')
dotenv.config();

/* Middleware*/
const bodyParser = require('body-parser');
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

app.use(express.static('dist'))

console.log(__dirname)

app.get('/', function (req, res) {
    res.sendFile('dist/index.html');
})

// designates what port the app will listen to for incoming requests
app.listen(3000, function () {
    console.log("Server running on port 3000")
})

textInput = {};

app.post('/addText', addText);
function addText(req,res){
  const text = req.body;
  textInput["text"]=text.formText;
  res.send({response:'done'});
}
