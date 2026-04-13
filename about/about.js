// copyright j. schere, april 2026. written with human hands and a sleep-deprived human brain.

function spawnEye(URL, label) {

}

function loadResources() {

}

function loadRewards() {

}

function loadSubmit() {

}

document.body.onload = () => {
    let currentDisplay = "";
    document.getElementById("resources-button").addEventListener("mousedown", () => {
        if (currentDisplay == "resources") { return; }
        currentDisplay = "resources";
        loadResources();
    });
    document.getElementById("rewards-button").addEventListener("mousedown", () => {
        if (currentDisplay == "rewards") { return; }
        currentDisplay = "rewards";
        loadRewards();
    })
    document.getElementById("submit-button").addEventListener("mousedown", (e) => {
        currentDisplay = "submit";
        let disclaimerDiv = document.createElement("div");
        disclaimerDiv.style.position = "fixed";
        // something didn't work here but i lowkey don't give a damn right now
        disclaimerDiv.style.bottom = e.clientY;
        disclaimerDiv.style.left = e.clientX;
        disclaimerDiv.style.zIndex = 3;
        disclaimerDiv.style.border = "1px solid white";
        disclaimerDiv.innerHTML = "oopsies, not implemented yet :P";
        document.body.appendChild(disclaimerDiv);
        setTimeout(() => { disclaimerDiv.remove(); }, 1000)
    })
};