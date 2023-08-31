const host = document.location.host;
const hostURL = host.split(':')
const hostPort = hostURL[1];
const mode = 'UDP' || 'UDP'; //UDP is default

console.log(`The host is : ${hostURL[0]} and port is ${hostPort}`)
console.log(`Mode is set to ${mode}`)

const apiURL = `http://${hostURL[0]}:3000`

let comms = [];
mode === 'UDP' ? comms = ['uno','due','tre', 'quattro', 'cinque', 'sei', 'sette','otto','nove','dieci','undici','dodici','tredici'] : comms = ['1','2','3', '4', '5', '6', '7','8','9','10','11','12','13'];

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
button1.addEventListener('click', ()=> {apiCall(`${apiURL}/${hostPort}/${comms[0]}`).then((e) => console.log(e)).catch((err) => console.log(err))});
button2.addEventListener('click', ()=> {apiCall(`${apiURL}/${hostPort}/${comms[1]}`).then((e) => console.log(e)).catch((err) => console.log(err))});
button3.addEventListener('click', ()=> {apiCall(`${apiURL}/${hostPort}/${comms[2]}`).then((e) => console.log(e)).catch((err) => console.log(err))});
button4.addEventListener('click', ()=> {apiCall(`${apiURL}/${hostPort}/${comms[3]}`).then((e) => console.log(e)).catch((err) => console.log(err))});
button5.addEventListener('click', ()=> {apiCall(`${apiURL}/${hostPort}/${comms[4]}`).then((e) => console.log(e)).catch((err) => console.log(err))});
button6.addEventListener('click', ()=> {apiCall(`${apiURL}/${hostPort}/${comms[5]}`).then((e) => console.log(e)).catch((err) => console.log(err))});
// button7.addEventListener('click', ()=> {apiCall(`${apiURL}/${hostPort}/${comms[6]}`)});
// button8.addEventListener('click', ()=> {apiCall(`${apiURL}/${hostPort}/${comms[7]}`)});
// button9.addEventListener('click', ()=> {apiCall(`${apiURL}/${hostPort}/${comms[8]}`)});
// button10.addEventListener('click', ()=> {apiCall(`${apiURL}/${hostPort}/${comms[9]}`)});
// button11.addEventListener('click', ()=> {apiCall(`${apiURL}/${hostPort}/${comms[10]}`)});
// button12.addEventListener('click', ()=> {apiCall(`${apiURL}/${hostPort}/${comms[11]}`)});
// button13.addEventListener('click', ()=> {apiCall(`${apiURL}/${hostPort}/${comms[12]}`)});

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