var finalResponse;

// FUNCTION FOR GETTING THE ISO IMAGE
function getISOImage()
    {
    // CREATING THE REQUEST
    var oReq = new XMLHttpRequest();

    // SETTING WHICH FILE MUST BE OBTAINED
    
    oReq.open("GET", isoUrl, true);

    // SETTING THE RESPONSE TYPE
    oReq.responseType = "blob";

    // SETTING WHAT WILL HAPPEN WHEN THE REQUEST IS FULLY LOADED
    oReq.onload = function (oEvent)
        {
        // CHECKING IF THE REQUEST IT'S DONE
        if (oReq.readyState==oReq.DONE)
            {
            // CHECKING IF THE REQUEST STATUS
            if (oReq.status==200)
                {
                // GETTING THE RESPONSE CONTENT
                finalResponse = oReq.response;

                // SETTING THE OPTIONS FOR THE EMULATOR
                var opts = {reportSpeed: function(s){parent.document.title = "VirtualXP - " + s + " MIPS";}};
                opts.mem = "192";
                opts.vgamem = "16";
                opts.fast = true;
                opts.bios = "VirtualXPBIOS.bin";
                opts.vgabios = "VirtualXPVGA.bin";
                opts.apic = false;
                opts.acpi = false;
                opts.pci = false;
                opts.pcivga = false;
                opts.floppy = false;
                opts.winnt_hack = true;
                opts.canvas = document.getElementById("canvas");
                opts["cda"] = new File(["empty.txt"], "filename");

                // CREATING THE EMULATOR
                var halfix = new Halfix(opts);
                halfix.init(function()
                    {
                    // RUNNING THE EMULATOR
                    halfix.run();

                    // FORCING TO UPDATE THE SCREEN EVERY 1 SECOND
                    setInterval(function(){try{halfix.updateScreen();}catch(err){}}, 1000);

                    // WAITING 5 SECONDS
                    setTimeout(function()
                        {
                        // HIDING THE PLEASE WAIT ANIMATION AND THE PERCENTAGE
                        document.getElementsByClassName("pleasewait")[0].style.display = "none";
                        document.getElementsByClassName("percentage")[0].style.display = "none";
                        },5000);
                    });
                }
                else
                {
                // IF THERE IS AN ERROR, THE REQUEST IS EXECUTED ONE MORE TIME
                getISOImage();
                }
            }
        };

    // SETTING WHAT WILL HAPPEN WHEN THE REQUEST IS DOWNLOADING THE FILE
    oReq.onprogress = function (oEvent)
        {
        // CHECKING IF THERE IS A FILE SIZE
        if (oEvent.total>0)
            {
            // UPDATING THE PERCENTAGE LABEL
            document.getElementsByClassName("percentage")[0].innerHTML = Math.floor(oEvent.loaded * 100 / oEvent.total) + "%";
            }
        };

    // IF DURING THE REQUEST IS AN ERROR, THE REQUEST IS EXECUTED ONE MORE TIME
    oReq.onerror = function(){setTimeout(function(){getISOImage();},1000);};

    // IF DURING THE REQUEST IS A TIMEOUT, THE REQUEST IS EXECUTED ONE MORE TIME
    oReq.ontimeout = function(e){setTimeout(function(){getISOImage();},1000);};

    // EXECUTING THE REQUEST
    oReq.send(null);
    }

function blockSpecialKeys(e)
    {
    try
        {
        // GETTING THE KEY EVENT
        e = e || window.event;

        // CHECKING IF IT ANY SPECIAL KEY IS PRESSED
        if (e.altKey || e.ctrlKey || e.metaKey || e.keyCode == 27)
            {
            // BLOCKING THE SPECIAL KEY
            e.preventDefault();
            e.stopPropagation();
            e.stopImmediatePropagation();
            }
        }
        catch(err)
        {
        }
    }

// DISABLING THE CONTEXT MENU
window.oncontextmenu = function()
    {
    return false;
    }

// SETTING WHAT WILL HAPPEN WHEN THE WEBSITE IS FULLY LOADED
window.addEventListener("load", function()
    {
    // SETTING WHAT WILL HAPPEN WHEN THE USER CLICKS ON THE CANVAS
    document.getElementById("canvas").addEventListener("click",function(event)
        {
        try
            {
            // REQUESTING POINTER LOCK ON THE CANVAS
            document.getElementById("canvas").requestPointerLock();
            }
            catch(err)
            {
            }
        });

    // BUGFIX FOR THE SPECIALS KEYS
    document.addEventListener("keydown",function(e){blockSpecialKeys(e)});
    document.addEventListener("keypress",function(e){blockSpecialKeys(e)});
    document.addEventListener("keyup", function(e){blockSpecialKeys(e)});

    // CHECKING IF IS NOT RUNNING WITHIN AN IFRAME
    if (window.top == window.self)
        {
        // REQUESTING THE ISO IMAGE
        getISOImage();
        }
    });

if ("serviceWorker" in navigator)
    {
    navigator.serviceWorker.register("worker.js").then(function(registration)
        {
        // Registration successful
        //console.log("ServiceWorker registration successful with scope: " + registration.scope);
        }).catch(function(err)
        {
        // Registration failed
        //console.log("ServiceWorker registration failed: " + err);
        });
    }