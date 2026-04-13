// copyright j. schere, april 2026. written with human hands and a sleep-deprived human brain.

function spawnEye(x, y, imageURL, linkURL, label) {
    const eyeSize = 72;
    const viewportPadding = 12;
    const clampedX = Math.max(viewportPadding, Math.min(x, window.innerWidth - eyeSize - viewportPadding));
    const eyeTopRaw = 100 + (Math.random() * Math.max(1, window.innerHeight - eyeSize - 140)) + y;
    const eyeTop = Math.max(viewportPadding, Math.min(eyeTopRaw, window.innerHeight - eyeSize - viewportPadding));

    let eyeContainer = document.createElement("div");
    eyeContainer.classList.add("eye-container");
    eyeContainer.style.backgroundImage = "url(../data/eyeopen.gif)";
    eyeContainer.style.position = "fixed";
    eyeContainer.style.left = `${clampedX}px`;
    eyeContainer.style.transform = `rotateZ(${Math.random() * 30 * (Math.random() > 0.5 ? -1 : 1)}deg)`
    eyeContainer.style.top = `${eyeTop}px`;
    document.body.appendChild(eyeContainer);
    setTimeout(() => { 
        eyeContainer.style.backgroundImage = `url(${imageURL})`; 
        imageURL == "./data/github.png" ? eyeContainer.style.filter = "invert()" : "";
        eyeContainer.style.transform = '';
        let labelElement = document.createElement("a");
        labelElement.classList.add("labelElement");
        labelElement.style.position = "fixed";
        labelElement.style.transform = "translateX(-50%)";
        labelElement.style.whiteSpace = "nowrap";
        labelElement.style.color = "white";
        labelElement.innerHTML = label;
        if (linkURL != null) {
            labelElement.href = linkURL;
        } else {
            labelElement.style.textDecoration = "none";
        }
        document.body.appendChild(labelElement);

        const labelWidth = labelElement.offsetWidth;
        const minCenter = (labelWidth / 2) + viewportPadding;
        const maxCenter = window.innerWidth - (labelWidth / 2) - viewportPadding;
        const labelCenter = Math.max(minCenter, Math.min(clampedX + (eyeSize / 2), maxCenter));
        const labelTop = Math.min(
            eyeTop + eyeSize + 8,
            window.innerHeight - labelElement.offsetHeight - viewportPadding
        );

        labelElement.style.left = `${labelCenter}px`;
        labelElement.style.top = `${labelTop}px`;
    }, 1000);
}

function getLeftPos() {
    return Math.floor(Math.random() * (document.getElementById("main-container").getBoundingClientRect().left - 20));
}

function getRightPos() {
    const rightEdge = document.getElementById("main-container").getBoundingClientRect().right
    return rightEdge + 20 + Math.floor(Math.random() * (window.innerWidth - (rightEdge + 20)));
}
function loadResources() {
    console.log("Loading resources.");
    document.querySelectorAll(".eye-container, .labelElement").forEach((element) => { element.remove(); });
    spawnEye(getLeftPos(), 50, "./data/rust.png", "https://os.phil-opp.com/", "Writing an OS in Rust");
    spawnEye(getRightPos(), 100, "./data/osdev.png", "https://wiki.osdev.org/Creating_an_Operating_System", "Creating an Operating System (in C)");
    spawnEye(getLeftPos(), 150, "./data/github.png", "https://github.com/scherepi/cursedOS", "CursedOS, guac and lou's example");
}

function loadRewards() {
    console.log("Loading rewards.");
    document.querySelectorAll(".eye-container, .labelElement").forEach((element) => { element.remove(); });
    let rewardParagraph = document.createElement("p");
    rewardParagraph.id = "rewardParagraph"
    rewardParagraph.style.position = "fixed";
    rewardParagraph.style.right = "15%";
    rewardParagraph.style.bottom = "10%";
    rewardParagraph.innerHTML = `use <a href="https://hackatime.hackclub.com">hackatime</a> to track your time!<br>9 hours for a Pi, 24 for a ZimaBoard!`;
    document.body.appendChild(rewardParagraph);
    spawnEye(getLeftPos(), 50, "./data/rpi.jpg", "https://www.raspberrypi.com/products/raspberry-pi-5/", "A Raspberry Pi 5!");
    spawnEye(getRightPos(), 100, "./data/cmodule.png", "https://www.raspberrypi.com/products/raspberry-pi-5/", "A Pi 5 Compute Module!");
    spawnEye(getLeftPos(), 150, "./data/zboard.png", "https://shop.zimaspace.com/collections/all-products/products/zimaboard-232-single-board-computer-server-firewall-kit", "A ZimaBoard or LattePanda!");
}

document.body.onload = () => {
    let currentDisplay = "";
    document.getElementById("resources-button").addEventListener("mousedown", () => {
        if (currentDisplay == "resources") { return; }
        currentDisplay = "resources";
        document.querySelectorAll("#rewardParagraph").forEach((element) => { element.remove(); })
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
        disclaimerDiv.style.top = e.clientY + "px";
        disclaimerDiv.style.left = e.clientX + "px";
        disclaimerDiv.style.zIndex = 3;
        disclaimerDiv.style.border = "1px solid white";
        disclaimerDiv.innerHTML = "oopsies, not implemented yet :P";
        document.body.appendChild(disclaimerDiv);
        setTimeout(() => { disclaimerDiv.remove(); }, 1000)
    })
};