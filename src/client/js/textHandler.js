function checkInput (event){
  event.preventDefault();
  let formText = document.getElementById('textInput').value;
  if (formText.length == 0){
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
