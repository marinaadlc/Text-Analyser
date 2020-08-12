async function checkLang(event){
  event.preventDefault();
  let formText = document.getElementById('textInput').value;
  const sendText = await Client.postData("/addText", {formText});
  console.log("your text is" +sendText.lang);
  document.getElementById('results').innerHTML = ('Your text: '+ sendText.text + '<br>The language: '+ sendText.lang);
}

export{
  checkLang
}
