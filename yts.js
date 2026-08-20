async function fetchSite() {
    let htmlString = await fetch(`https://cdn.jsdelivr.net/gh/0xPYROSPHERE/coolchemgames@main/ytshorts.html`);
    htmlString = await htmlString.text();
    return htmlString;
}

const siteFrame = document.getElementById("site");
fetchSite().then(data => {siteFrame.srcdoc = data;});