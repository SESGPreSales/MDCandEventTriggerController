const apiURL = "backend"

// Listeners
const buttonQSR = document.querySelector(".item1");
const buttonFashion = document.querySelector(".item2");
const buttonCorporate = document.querySelector(".item3");
const buttonOnOff = document.querySelector(".item4");
const buttons = document.querySelectorAll(".button");

// Eventlisteners
buttonQSR.addEventListener('click', ()=> {apiCall(`${apiURL}/1/1`).then(console.log("sentcommand"))});
buttonFashion.addEventListener('click', ()=> {apiCall(`${apiURL}/1/2`).then(console.log("sentcommand"))});
buttonCorporate.addEventListener('click', ()=> {apiCall(`${apiURL}/1/3`).then(console.log("sentcommand"))});

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
async function apiCall(url = "") {
    // Default options are marked with *
        console.log("sending", url)
        const response = await fetch(url);
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