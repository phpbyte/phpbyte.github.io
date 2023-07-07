async function postData(url = "", data = {}) {
   const result = await fetch(url, {
    method: "POST", 
    mode: "cors",
    cache: "no-cache", 
    headers: {
      "Content-Type": "application/json"
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
    body: JSON.stringify(data)
  }); return result.json()
}
postData("https://riza.us/ask.php",{answer:7}).then((data) => {
  console.log(data);
});
