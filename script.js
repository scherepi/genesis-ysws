// copyright j schere, april of 2026. all code written by human hands with a human brain. 
// hell rains down on us one token at a time
function animateTitle() {
    let titleText = document.getElementById("main-title");
    let wingLeft = document.getElementById("wing-left");
    let wingRight = document.getElementById("wing-right");

    titleText.classList.add("transition-init");
    wingLeft.classList.add("transition-init"); 
    wingRight.classList.add("transition-init");
}

function fillEyes() {
    let eyeGrid = document.getElementById("eyes-grid");
    for (var i = 0; i < 6; i++) {
        for (var j = 0; j < 8; j++) {
            let eyeContainer = document.createElement("div")
            eyeContainer.id = `eye-${i}${j}`
            eyeContainer.classList.add("eye-container");
            eyeContainer.style.backgroundImage = "url(../data/eyeopen.gif)";
            eyeContainer.style.gridArea = `a${i}${j}`
            setTimeout(() => { eyeContainer.style.backgroundImage = "url(../data/eyefull.png)"; }, 1000)
            eyeGrid.appendChild(eyeContainer);
        }
    }
}

function blinkRandom() {
    setInterval(() => {
        let targetEye = document.getElementById(`eye-${Math.floor(Math.random() * 6)}${Math.floor(Math.random() * 8)}`);
        targetEye.style.backgroundImage = "url(../data/blink.gif)";
        setTimeout(() => {targetEye.style.backgroundImage = "url(../data/eyefull.png)"}, 2000)
    },
    Math.random() * 6000)
}

document.body.onload = () => {
    // trigger the initial transition by appending a class to the relevant elements
    animateTitle();
    fillEyes();
    blinkRandom();
    var r = document.querySelector(":root");
    document.getElementById("scrolling-desc").addEventListener("animationiteration", () => {
        r.style.setProperty('--desc-offset', `${Math.floor(Math.random() * 40)}%`);
    });

    document.getElementById("continue-button").addEventListener("click", () => {
        window.location.assign(`http://${window.location.host}/about`);
    })
}