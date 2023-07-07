async function postData(url = "", data = {}) {
   return await fetch(url, {
    method: "POST", 
    mode: "cors",
    cache: "no-cache", 
    headers: {
      "Content-Type": "application/json"
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
    body: data
  })
}
postData("https://riza.us/ask.php",{answer:7}).then((data) => {
  console.log(data.json());
});
