async function fetchSite() {
    let date = new Date();
    let start = new Date();
    start.setDate(0);
    let htmlString = await fetch(`https://cdn.jsdelivr.net/gh/0xPYROSPHERE/coolchemgames/embed.${date.getMonth() + 1}-${Math.ceil((date.getDate() + ((start.getDay() + 1) % 7 - 1)) / 7)}.html?v=${Math.floor(Math.random() * 100000)}`)
    htmlString = await htmlString.text();
    return htmlString;
}

const siteFrame = document.getElementById("site");
fetchSite().then(data => {siteFrame.srcdoc = data;});
const siteHtml = siteFrame.srcdoc;
console.log(window.location.search);