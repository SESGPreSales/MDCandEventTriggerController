const host = document.location.host;
const hostURL = host.split(':')
console.log(`The host is : ${hostURL[0]}`)
const apiURL = `http://${hostURL[0]}:3000`


// Listeners
const button1 = document.querySelector(".item1");
const button2 = document.querySelector(".item2");
const button3 = document.querySelector(".item3");
const button4 = document.querySelector(".item4");
const button5 = document.querySelector(".item5");
const button6 = document.querySelector(".item6");
const button7 = document.querySelector(".item7");
const button8 = document.querySelector(".item8");
const button9 = document.querySelector(".item9");
const button10 = document.querySelector(".item10");
const button11 = document.querySelector(".item11");
const button12 = document.querySelector(".item12");
const button13 = document.querySelector(".item13");

const buttons = document.querySelectorAll(".button");

// Eventlisteners to call API
button1.addEventListener('click', ()=> {apiCall(`${apiURL}/2/uno`)});
button2.addEventListener('click', ()=> {apiCall(`${apiURL}/2/due`)});
button3.addEventListener('click', ()=> {apiCall(`${apiURL}/2/tre`)});
button4.addEventListener('click', ()=> {apiCall(`${apiURL}/2/quattro`)});
button5.addEventListener('click', ()=> {apiCall(`${apiURL}/2/cinque`)});
button6.addEventListener('click', ()=> {apiCall(`${apiURL}/2/sei`)});
// button7.addEventListener('click', ()=> {apiCall(`${apiURL}/2/sette`)});
// button8.addEventListener('click', ()=> {apiCall(`${apiURL}/2/otto`)});
// button9.addEventListener('click', ()=> {apiCall(`${apiURL}/2/nove`)});
// button10.addEventListener('click', ()=> {apiCall(`${apiURL}/2/dieci`)});
// button11.addEventListener('click', ()=> {apiCall(`${apiURL}/2/undici`)});
// button12.addEventListener('click', ()=> {apiCall(`${apiURL}/2/dodici`)});
// button13.addEventListener('click', ()=> {apiCall(`${apiURL}/2/tredici`)});



//Call API Call
// async function changeChannel(url = "", data = {}, token) {
//     // Default options are marked with *
//         const response = await fetch(url, {
//             method: "PUT", // *GET, POST, PUT, DELETE, etc.
//             mode: "cors", // no-cors, *cors, same-origin
//             cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
//             credentials: "same-origin", // include, *same-origin, omit
//             headers: {
//                 "Content-Type": "application/json",
//                 "api_key": token
//                 // 'Content-Type': 'application/x-www-form-urlencoded',
//             },
//             redirect: "follow", // manual, *follow, error
//             referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
//             body: JSON.stringify(data), // body data type must match "Content-Type" header
//             });
//         return response.json(); // parses JSON response into native JavaScript objects
//     }



// Get Auth Token:
async function apiCall(url) {
    // Default options are marked with *
        //console.log("sending", url)
        const response = await fetch(url, {
            method: "GET", // *GET, POST, PUT, DELETE, etc.
            mode: "no-cors", // no-cors, *cors, same-origin
            cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
            credentials: "same-origin", // include, *same-origin, omit
            redirect: "follow", // manual, *follow, error
            referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
          });
        return response; // parses JSON response into native JavaScript objects
    }

 // getAuth(apiURL, cred)
    // .then((res) => {
    //     console.log(res.token); // JSON data parsed by `data.json()` call
    // });



//   postData("https://example.com/answer", { answer: 42 })
//   .then((data) => {
//     console.log(data); // JSON data parsed by `data.json()` call
//   });