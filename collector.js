// thanks https://www.tpgi.com/detecting-if-images-are-disabled-in-browsers/ for providing ideas
function allowImage() {
    if (document.getElementById('flag').offsetWidth == 1) {
        return true;
    }
    else {
        return false;
    }
}

function allowCss() {
    const bgColor = document.getElementById("flag");
    const flagOffset = window.getComputedStyle(bgColor).backgroundPositionX;
    if (flagOffset == "1%") {
        return true;
    }
    else {
        return false;
    }
    // if (bgColor.style.backgroundColor == "gainsboro") {
    //     return bgColor.style.backgroundColor;
    // }
    // else {
    //     return bgColor.style.backgroundColor;
    // }
}

// get idle activity
let startIdle;
// start idle timer
function startTimer() { 
    // window.setTimeout returns an Id that can be used to start and stop a timer
    // setinterval loses time
    // window.setInterval(function() {timeoutMilSec++;}, 1);
    startIdle = Date.now();
    console.log("time: ", startIdle);
}
// reset idle timer, log if idle time >= 2sec
function resetTimer() {
    let endIdle = Date.now();
    let idleTime = endIdle - startIdle;
    if (idleTime >= 2000) {
        console.log("Break ended at: ", endIdle)
        console.log("Idle time: ", idleTime);
    }
    startIdle = Date.now();
}

// session ID 
const sessionID = '_' + Math.random().toString(36).substring(2, 9) + Date.now()

// static & performance data
// Javascript allowance is in HTML file <noscript>, which requires another route.
window.addEventListener("load", async function(event) {
    const agent = navigator.userAgent;
    const lang = navigator.language;
    const cookieEn = navigator.cookieEnabled;
    // if the script runs, javascript is enabled
    const javaScriptEn = true;
    const imageEn = allowImage();
    // console.log(agent);
    // check if css is enabled
    const cssEn = allowCss();
    // console.log(cssEn);
    const screenWidth = window.screen.width * window.devicePixelRatio;
    const screenHeight = window.screen.height * window.devicePixelRatio;
    const windowWidth = window.innerWidth * window.devicePixelRatio;
    const windowHeight = window.innerHeight * window.devicePixelRatio;
    // console.log(windowWidth);
    const netType = navigator.connection.effectiveType;
    // console.log(netType);
    const timingObj = performance.getEntriesByType("navigation")[0];
    const loadStart = timingObj.domContentLoadedEventStart;
    const loadEnd = timingObj.domComplete;
    // Is this in milliseconds? (from online data: yes, but needs assurance)
    const loadTime = loadEnd - loadStart;
    // console.log(loadTime);

    // idle timer
    startTimer();

    // when the user entered the page
    const timeEntered = Date.now();

    // which page the user is on
    const pageRef = window.location.href;

    // set up static data & send || store
    const staticData = {};
    staticData["agent"] = agent;
    staticData["lang"] = lang;
    staticData["cookieEn"] = cookieEn;
    staticData["javaScriptEn"] = javaScriptEn;
    staticData["imageEn"] = imageEn;
    staticData["cssEn"] = cssEn;
    staticData["screenWidth"] = screenWidth;
    staticData["screenHeight"] = screenHeight;
    staticData["windowWidth"] = windowWidth;
    staticData["windowHeight"] = windowHeight;
    staticData["netType"] = netType;
    staticData["sessionID"] = sessionID;
    // console.log(staticData);

    // set up performance data & send || store
    const performanceData = {};
    performanceData["timingObj"] = timingObj;
    performanceData["loadStart"] = loadStart;
    performanceData["loadEnd"] = loadEnd;
    performanceData["loadTime"] = loadTime;
    performanceData["sessionID"] = sessionID;
    // console.log(performanceData);

    // try to send data
    try {
        // static data  
        // if localstorage is not empty
        if (localStorage.length > 0) {
            for (let i = 0; i < localStorage.length; i++) {
                await postData("https://brooksniu.com/json/posts", localStorage.getItem(localStorage.key(i)));
            }
        }
        await postData("https://brooksniu.com/json/posts", JSON.stringify(staticData));
        await postData("https://brooksniu.com/json/posts", JSON.stringify(performanceData));
        // clear localstorage if above operations are successful
        localStorage.clear();
    } catch(error) {
        // if unsuccessful, save data to localstorage
        localStorage.setItem(("staticData" + sessionID), JSON.stringify(staticData));
        localStorage.setItem(("performanceData" + sessionID), JSON.stringify(performanceData));
        console.log("error occured, set local storage");
        console.error(error);
    }

});

// data function
// thanks https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch for ideas
async function postData(url = "", data = {}) {
    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type" : "application/json",
        },
        body: data,
    })
    .then(response => response.json())
    .then(data => {
        return data;
    })
    .catch((error) => {
        // console.log("error occured, passing to parent function");
        throw new Error(error);
    });
}

// arrays for activity logs

// mouse movement activity (PageX and PageY, for absolute area coordinates)
// thanks https://www.delftstack.com/howto/javascript/javascript-mouse-position/ for the idea
function mouseMove(event) {
    console.log("pageX: ", event.pageX, "pageY: ", event.pageY);
    resetTimer();
}
window.addEventListener("mousemove", mouseMove);

// mouse click activity
function mouseClick(event) {
    // 0 for left button, 1 for middle, 2 for right, 3 for X1, 4 for X2 (two side buttons)
    console.log("mouse ", event.button, "clicked.");
    resetTimer();
}
window.addEventListener("mousedown", mouseClick);

// scrolling activity
// get body for the entire html scroll
function scroll(event) {
    console.log((parseFloat(window.scrollY) / (document.documentElement.scrollHeight - window.innerHeight)).toFixed(6));
    resetTimer();
}
window.addEventListener("scroll", scroll);

// get keyboard activity
function keyDownListener(event) {
    console.log("Key Down: ", event.keyCode);
    resetTimer();
}
window.addEventListener("keydown", keyDownListener);

function keyUpListener(event) {
    console.log("Key Up: ", event.keyCode);
    resetTimer();
}
window.addEventListener("keyup", keyUpListener);

// Q: Are we recording phones?

// when user leaves the page
function leaveTime(event) {
    console.log("Leave time: ", Date.now());
}
window.addEventListener("beforeunload", leaveTime);