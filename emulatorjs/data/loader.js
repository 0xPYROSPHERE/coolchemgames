(async function() {
                    const folderPath = (path) => path.substring(0, path.length - path.split('/').pop().length);
                    let scriptPath = (typeof window.EJS_pathtodata === "string") ? window.EJS_pathtodata : folderPath((new URL(document.currentScript.src)).pathname);
                    if (!scriptPath.endsWith('/')) scriptPath+='/';
                    //console.log(scriptPath);
                    function loadScript(file) {
                        return new Promise(function (resolve, reject) {
                            let script = document.createElement('script');
                            script.src = function() {
                                if ('undefined' != typeof EJS_paths && typeof EJS_paths[file] === 'string') {
                                    return EJS_paths[file];
                                } else {
                                    return scriptPath+file;
                                }
                            }();
                            script.onload = resolve;
                            script.onerror = () => {
                                filesmissing(file).then(e => resolve());
                            }
                            document.head.appendChild(script);
                        })
                    }
                    function loadStyle(file) {
                        return new Promise(function(resolve, reject) {
                            let css = document.createElement('link');
                            css.rel = 'stylesheet';
                            css.href = function() {
                                if ('undefined' != typeof EJS_paths && typeof EJS_paths[file] === 'string') {
                                    return EJS_paths[file];
                                } else {
                                    return scriptPath+file;
                                }
                            }();
                            css.onload = resolve;
                            css.onerror = () => {
                                filesmissing(file).then(e => resolve());
                            }
                            document.head.appendChild(css);
                        })
                    }

                    async function filesmissing(file) {
                        console.error("Failed to load " + file);
                        let minifiedFailed = file.includes(".min.") && !file.includes("socket");
                        console[minifiedFailed?"warn":"error"]("Failed to load " + file + " beacuse it's likly that the minified files are missing.\nTo fix this you have 3 options:\n1. You can download the zip from the latest release here: https://github.com/EmulatorJS/EmulatorJS/releases/latest - Stable\n2. You can download the zip from here: https://cdn.emulatorjs.org/latest/data/emulator.min.zip and extract it to the data/ folder. (easiest option) - Beta\n3. You can build the files by running `npm i && npm run build` in the data/minify folder. (hardest option) - Beta\nNote: you will probably need to do the same for the cores, extract them to the data/cores/ folder.");
                        if (minifiedFailed) {
                            console.log("Attempting to load non-minified files");
                            if (file === "emulator.min.js") {
                                await loadScript('emulator.js');
                                await loadScript('nipplejs.js');
                                await loadScript('shaders.js');
                                await loadScript('storage.js');
                                await loadScript('gamepad.js');
                                await loadScript('GameManager.js');
                                await loadScript('socket.io.min.js');
                            } else {
                                await loadStyle('emulator.css');
                            }
                        }
                    }
})