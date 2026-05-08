var siteFrame = document.getElementById("site");
fetch("index.html").then(response => response.text()).then(response => {siteFrame.srcdoc = response});
siteFrame.addEventListener("fullscreenchange", () => {
    siteFrame.style.display = document.fullscreenElement ? "block" : "none"
});
document.getElementById("open").addEventListener("click", () => {
    siteFrame.requestFullscreen();
});