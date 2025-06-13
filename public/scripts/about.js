//Make the DIV element draggagle:
dragElement(document.getElementById("moms"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    /* if present, the header is where you move the DIV from:*/
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    /* otherwise, move the DIV from anywhere inside the DIV:*/
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;
  }
}
   
//Make the DIV element draggagle:
dragElement(document.getElementById("video"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    /* if present, the header is where you move the DIV from:*/
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    /* otherwise, move the DIV from anywhere inside the DIV:*/
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;
  }
}
//Make the DIV element draggagle:
dragElement(document.getElementById("kingdom"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    /* if present, the header is where you move the DIV from:*/
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    /* otherwise, move the DIV from anywhere inside the DIV:*/
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;
  }
}
 function showvideo() {
  var x = document.getElementById("video");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
    function showjerma() {
  var x = document.getElementById("ads");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
    
    
        const Winamp = window.Webamp;

        // All configuration options are optional.
        const webamp = new Webamp({
            // Optional.
            initialTracks: [{
                    metaData: {
                        artist: "a-ha",
                        title: "Take On Me [8-bit]",
                    },
                    url: "https://files.catbox.moe/9l6b2s.mp3",
                }, 
                
                {
                    metaData: {
                        artist: "Tears for Fears",
                        title: "Everybody Wants to Rule the World [8-bit]",
                    },
                    url: "https://files.catbox.moe/fiqxd9.mp3",
                },
                
                {
                    metaData: {
                        artist: "Journey",
                        title: "Don't Stop Believin' [8-bit]",
                    },
                    url: "https://files.catbox.moe/wnh4e7.mp3",
                },
                {
                    metaData: {
                        artist: "Huey Lewis and the News",
                        title: "The Power of Love [8-bit]",
                    },
                    url: "https://files.catbox.moe/sthwgp.mp3",
                },


                {
                    metaData: {
                        artist: "Bon Jovi",
                        title: "Livin' on a Prayer [8-bit]",
                    },
                    url: "https://files.catbox.moe/pnbbl2.mp3",
                },
                {
                    metaData: {
                        artist: "Hall & Oates",
                        title: "Out of Touch [8-bit]",
                    },
                    url: "https://files.catbox.moe/lydaec.mp3",
                },
                {
                    metaData: {
                        artist: "Kakariko [8-bit]",
                        title: "The Legend of Zelda: Ocarina of Time",
                    },
                    url: "https://files.catbox.moe/cp3xqw.mp3",
                },
                {
                  metaData: {
                        artist: "Song of Storms [ 8-bit]",
                        title: "The Legend of Zelda: Ocarina of Time",
                    },
                    url: "https://files.catbox.moe/nkgtyw.mp3",
                }, 
              
                
                {
                    metaData: {
                        artist: "Title Theme [8-bit]",
                        title: "The Legend of Zelda: Ocarina of Time",
                    },
                    url: "https://files.catbox.moe/mvnf40.mp3",
                },
                {
                    metaData: {
                        artist: "Bill Withers and Grover Washington Jr",
                        title: "Just the Two of Us [Meowsynth]",
                    },
                    url: "https://files.catbox.moe/m816pq.mp3",
                },
                {
                  metaData: {
                        artist: "Kero Kero Bonito",
                        title: "Flamingo [Meowsynth]",
                    },
                    url: "https://files.catbox.moe/csxwgd.mp3",
                }, 
              
                    
                
                {
                    metaData: {
                        artist: "Jack Stauber",
                        title: "Two Time [Meowsynth]",
                    },
                    url: "https://files.catbox.moe/qpv9vp.mp3",
                }

            ],
            initialSkin: {
                url: "https://cdn.webampskins.org/skins/ece4ffbb0d5e4624a5c144dbc64fa58f.wsz"
            },
        });
        // Render after the skin has loaded.
        webamp.renderWhenReady(document.getElementById('winamp-container'));

        const icon = document.getElementById('webamp-icon');

        webamp.onClose(() => {
            icon.addEventListener('click', () => {
                webamp.reopen();
            });
        })

        
        webamp.play();
        
