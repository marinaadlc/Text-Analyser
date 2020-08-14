function checkInput (event){
  event.preventDefault();
  let formText = document.getElementById('textInput').value;
  var regexExp = !/[^a-zA-Z]/;
  if (formText.length == 0 || regexExp.test(formText)){
    alert("Invalid input");
  } else{
    checkLang(formText);
  }
}

async function checkLang(text){
  let formText = text;
  const sendText = await Client.postData("/addText", formText);
  console.log("your text is" +sendText.lang);
  document.getElementById('results').innerHTML = ('Your text: '+ sendText.text + '<br>The language: '+ sendText.lang);
  return sendText.lang;
}

export{
  checkLang,
  checkInput
}
