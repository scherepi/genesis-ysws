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

document.body.onload = () => {
    // trigger the initial transition by appending a class to the relevant elements
    console.log("doc and script loaded");
    animateTitle();
    fillEyes()
}