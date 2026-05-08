var currentVersion = 30;

async function fetchSite() {
    let htmlString = "";
    let foundVersion = false;
    let i = currentVersion;
    while (!foundVersion) {
        let fetchRequest = await fetch(`embed${i}.html`);
        if (fetchRequest.status != 403) {
            foundVersion = true;
            currentVersion = i;
            htmlString = await fetchRequest.text();
        }
        i--;
    }
    return htmlString;
}

const siteFrame = document.getElementById("site");
fetchSite().then(data => {siteFrame.srcdoc = data;});
const siteHtml = siteFrame.srcdoc;
siteFrame.addEventListener("fullscreenchange", () => {
    siteFrame.style.display = document.fullscreenElement ? "block" : "none"
});
document.getElementById("open").addEventListener("click", () => {
    siteFrame.requestFullscreen();
});
document.getElementById("new").addEventListener("click", async () => {
    const siteWindow = window.open("", "_blank");
    siteWindow.document.write(`
        <html>
            <head>
                <title>Cool Chem Games</title>
                <style>
                    body, html {
                        margin: 0;
                        padding: 0;
                        width: 100%;
                        height: 100%;
                        overflow: hidden;
                    }
                    #main {
                        position: absolute;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 100%;
                        border: none;
                    }
                </style>
            </head>
            <body>
                <iframe id="main" srcdoc=""></iframe>
                <script>
                    var loaded = false;
                    window.addEventListener("message", (e) => {
                            if (!loaded) {
                                document.getElementById("main").srcdoc = e.data;
                                loaded = true;
                            }
                        });
                <\/script>
            </body>
        </html>
    `);
    siteWindow.postMessage(await fetchSite(), "*");
})