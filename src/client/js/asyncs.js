// async post
async function postData(url='',data=''){
  const send = await fetch(url,{
    method:'POST',
    credentials:'same-origin',
    headers:{
      'Content-Type':'application/json',
    },
    body:JSON.stringify(data),
  })
  try{
    const response = await send.json();
    return response;
    console.log(response);
  }catch(error){
    console.log("error",error);
  }
}

// async GET data from server
async function getData(url=''){
  const response = await fetch(url);
  try{
    const data = await response.json();
    console.log(data);
  }catch(error){
    console.log("error",error);
  }
}

// async GET temp from API OpenWeather
async function getLang(url=''){
  const response = await fetch(url);
  try{
    const data = await response.json();
    console.log(data);
  }catch(error){
    console.log("error",error);
  }
}

export{
  postData,
  getData,
  getLang
}
