var path = require('path')
const express = require('express')
const fetch = require('node-fetch')

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
let urlOk= '';

app.post('/addText', analyseText);
async function analyseText(req,res){
  const t = await addText(req,res);
  const l = await getLang(urlOk);
  res.send(textInput);
}

async function addText(req,res){
  const text = req.body;
  textInput["text"]=text.formText;
  console.log(textInput.text);
  urlOk = initUrl+'&txt="'+textInput.text+'"';
  console.log(urlOk);
}

//API credentials
const initUrl = 'https://api.meaningcloud.com/lang-2.0?key='+process.env.API_key;

// API FUNCTION
async function getLang(url=''){
  const response = await fetch(url);
  try{
    const data = await response.json();
    console.log(data);
    textInput["lang"]=data.language_list[0].language;
    console.log(textInput.lang)
  }catch(error){
    console.log("error",error);
  }
}
