async function postData(url, data={}) {
   const parsHeader = new Headers({
            "Content-Type": "multipart/form-data"
         }),
         urlEncoded = new URLSearchParams(data),
         optionData = {
            method: 'POST',
            headers: parsHeader,
            mode: "cors",
            cache: "no-cache", 
            body: urlEncoded,
         };
   return await fetch(url, optionData)
}
postData("https://riza.us/ask.php",{answer:7}).then((data) => {
  console.log(data);
});
