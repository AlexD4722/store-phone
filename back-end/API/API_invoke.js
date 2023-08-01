async function callAPI(sendData) {
  let r = await fetch("localhost:2203/learning/store-phone/back-end/API/API.php", {
    method: "post",
    body: sendData,
  }).then((response) => response.json());

  return r;
}

//Example : callAPI({...object detail}).then(obj => document.getElementById("...").innerText = obj.data)