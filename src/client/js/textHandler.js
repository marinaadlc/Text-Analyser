async function checkLang(event){
  event.preventDefault();
  let formText = document.getElementById('textInput').value;
  const sendText = await Client.postData("/addText", {formText});
}

export{
  checkLang
}
