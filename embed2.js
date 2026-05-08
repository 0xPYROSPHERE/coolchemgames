const siteFrame = document.getElementById("site");
fetch(`embed.html?v=${Math.random() * 100000}`).then(response => response.text()).then(response => {siteFrame.srcdoc = response});
const siteHtml = siteFrame.srcdoc;
siteFrame.addEventListener("fullscreenchange", () => {
    siteFrame.style.display = document.fullscreenElement ? "block" : "none"
});
document.getElementById("open").addEventListener("click", () => {
    siteFrame.requestFullscreen();
});
document.getElementById("new").addEventListener("click", () => {
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
    siteWindow.postMessage(siteHtml, "*");
})