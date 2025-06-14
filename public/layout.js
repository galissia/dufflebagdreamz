const nesting = getNesting();

document.addEventListener("DOMContentLoaded", function () {
  loadLayoutByPetraPixel();
});

function loadLayoutByPetraPixel() {
  const mainEl = document.querySelector("main");
  if (!mainEl) return;
  mainEl.insertAdjacentHTML("beforebegin", headerHTML());
  mainEl.insertAdjacentHTML("afterend", footerHTML());
  giveActiveClassToLinks();
}

function headerHTML() {
  // ${nesting} outputs "./" or "../" depending on current page depth.
  // You can use it to refer to images etc.
  // Example: <img src="${nesting}img/logo.png"> might output <img src="../img/logo.png">

  return `
<header>
<div class="header-image">
          <center><img src="https://files.catbox.moe/92kfrk.png" alt="" /></center>
          
        </div>
        
      </header>
	  
      <aside class="left-sidebar">
	  
        <nav>
          <div class="sidebar-title">✧.* Navigation</div>
          <ul>
            <li><a href="./home.html">Home</a></li>
            <li><a href="./websites.html">Links</a></li>
            <li><a href="#">Page 2</a></li>
            <li><a href="#">Page 3</a></li>
			
            <li>
              	<details>
				<summary>Submenu</summary>
                <ul>
                  <li><a href="#">Page A</a></li>
                  <li><a href="#">Page B</a></li>
                  <li><a href="#">Page C</a></li>
                  <li><a href="#">Page D</a></li>
                  <li><a href="#">Page E</a></li>
                </ul>
				</details>
            </li>
          </ul>
        </nav>
        <div class="sidebar-section">
          <div class="sidebar-title"> ✧.* Section Title</div>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          <p>Necessit atibus perferendis inventore tempore vel optio similique blanditiis quasi quam?</p>
        </div>
        <div class="sidebar-section">
          <div class="sidebar-title"> ✧.*  Changelog</div>
          <div style="padding:5px; border-style:dotted; border-radius:5%; max-height:300px; overflow-y:scroll;">
         
                        <em style="color: #c7d6f8;">Jun 14 2025</em
                        ><img
                            style="padding-left: 7px; padding-right: 3px"
                            src="https://pixelsafari.neocities.org/favicon/nature/star/star106.gif" />
                        Starting to translate pages from orginal layout into new layout.
         <hr
                            style="
                                border: dashed;
                                border-width: thin;
                                border-color: rgba(129, 119, 122, 0.4);
                                margin-top: 15px;
                                margin-bottom: 15px;
                            " />
                        <em style="color: #c7d6f8;">Apr 9 2025</em
                        ><img
                            style="padding-left: 7px; padding-right: 3px"
                            src="https://pixelsafari.neocities.org/favicon/nature/star/star106.gif" />
                        Created <a href="/witch/altars/altars.html">Altars</a> pages in witchcraft section
         <hr
                            style="
                                border: dashed;
                                border-width: thin;
                                border-color: rgba(129, 119, 122, 0.4);
                                margin-top: 15px;
                                margin-bottom: 15px;
                            " />
                        <em style="color: #c7d6f8;">Apr 9 2025</em
                        ><img
                            style="padding-left: 7px; padding-right: 3px"
                            src="https://pixelsafari.neocities.org/favicon/nature/star/star106.gif" />
                        Created <a href="/witch/altars/altars.html">Altars</a> pages in witchcraft section
                        
          </div>
          <div class="sidebar-section">
          <div class="sidebar-title">✧.* Section Title</div>
          <marquee scrollamount="4">
<img src="./images/buttons/webdesign.png">
<img src="./images/buttons/handcoded.gif">
<img src="./images/buttons/poweredbybob.gif">
<img src="./images/buttons/arizona.gif" >
<img src="./images/buttons/krisbtn.png" >
<img src="./images/buttons/htmlenhanced.gif" >
<img src="./images/buttons/neocities-pink.gif" >
<img src="./images/buttons/ilikecomputer.png" >
<img src="./images/buttons/al.png">
<img src="./images/buttons/friendship.png">
<img src="./images/buttons/windows.gif">
<img src="./images/buttons/brackets.gif">
<img src="./images/buttons/queer.png">
<img src="./images/buttons/blehhhh.gif" >
<img src="./images/buttons/physical.gif" >
<img src="./images/buttons/piracy.gif" >
<img src="./images/buttons/biflag.gif">
<img src="./images/buttons/desktop.gif">
<img src="./images/buttons/catscape3.gif">
<img src="./images/buttons/best_viewed_with_open_eyes.gif" >
<img src="./images/buttons/censor_14c.gif" >
<img src="./images/buttons/fuckingwebmaster.gif" >
		  </marquee>
        </div>
        <div class="sidebar-section">
          <div class="sidebar-title">✧.* To-do</div>
          <div style="padding:5px; border-style:dotted; border-radius:5%; max-height:200px; overflow-y:scroll;">
          <ul style="list-style-image: none; position: relative; left:-18px; top:-5px;">
                        
                        <li><s>☑ figure out how github repositories work</s></li>
                        <li><s>☑ make website responsive (to some compacity)</s> </li>
                        <li>☐ add click-to-enlarge on art gallery </li>
                        <li>☐ create a collection page (library, mlp collection, music...) </li>
                        <li>☐ create reading log page</li>
                        <li>☐ finish credits page</li>
                        <li>☐ complete about me on witchcraft page</li>
                        <li>☐ . . .</li>
                        <li><s>☑ make a to-do list </s></li>
                        <li><s>☑ finish filling art gallery pages</s></li>
                        
                    </ul>
                  </div>
        </div>
		
		
      </aside>
	
    
    
      <aside class="right-sidebar">
	  
        <div class="sidebar-section">
          
          <div class="speech-bubble" id="floating" style="padding:2px; border-style:solid; border-color:#f0f0ff;"><div id="statuscafe">
                                        <div id="statuscafe-username"></div>
                                        <div id="statuscafe-content"></div>
                                    </div>
                                    <hr
                                        style="
                                            border: dashed;
                                            border-width: thin;
                                            border-color: rgba(129, 119, 122, 0.4);
                                            margin-top: -5px;
                                            margin-bottom: 5px;
                                        " />

                                    
                                    <div style="text-align: center; margin-bottom: 5px">
                                        I am feeling...
                                        <a href="https://www.imood.com/users/galissia_"
                                            ><img
                                                src="https://moods.imood.com/display/uname-galissia_/fg-6351C6/trans-1/imood.gif"
                                                alt="The current mood of galissia_ at www.imood.com"
                                                border="0"
                                        /></a>
                                    </div>
        </div></div></div>
        
        
        <img src="https://files.catbox.moe/kkamew.PNG" style="max-width:13.5em; margin-left:-22px; margin-top:-30px;">
        <div class="sidebar-section">
          <div class="sidebar-title-2">links ✧.* </div>
          <div style="padding:5px; border-style:dotted; border-radius:10%;">
          
          <center>
          <a href="https://www.instagram.com/Galissia_/" target="_blank"><img alt="Instagram" src="https://file.garden/ZoMEF_reXgpHHpnb/Instagram.png" target="_blank"></a>
          <a href="https://toyhou.se/Galissia_" target="_blank"><img alt="Toyhouse" src="https://file.garden/ZoMEF_reXgpHHpnb/Toyhou.se.png" target="_blank"></a>
          <a href="https://www.tumblr.com/galissia-x" target="_blank"><img alt="Tumblr" src="https://file.garden/ZoMEF_reXgpHHpnb/Tumblr.png"></a>
          <a href="https://artfight.net/~Galissia_" target="_blank"><img alt="Art Fight" src="https://file.garden/ZoMEF_reXgpHHpnb/ArtFight.png"></a>
          <a href="https://www.deviantart.com/galissiax" target="_blank"><img alt="DeviantArt" src="https://file.garden/ZoMEF_reXgpHHpnb/DeviantArt.png"></a>
          <a href="https://galissiacommissions.carrd.co/" target="_blank"><img alt="Carrd" src="https://file.garden/ZoMEF_reXgpHHpnb/Carrd.png"></a>
          <a href="https://neocities.org/site/galissia" target="_blank"><img alt="Neocities Profile" src="./images/buttons/neocities-pink.gif"></a>
          </center>
          
          </div>
          </div>
          
          
          
          
		<div class="sidebar-section">
          <div class="sidebar-title-2">neat sites ✧.*</div>
        
		  	  <div style="max-height:200px; overflow-y:scroll;"> <center>
   <a href="https://dustedpink.neocities.org/" target="_blank"
          ><img alt="dustedpink.neocities.org" src="./images/buttons/dustedpink.gif"
        /></a>
   <a target="_blank" href="https://cavitycollector.neocities.org"
          ><img
            alt="cavitycollector.neocities.org"
            src="https://file.garden/ZoMEF_reXgpHHpnb/cavitycollector-button.gif"
        /></a>
        <a href="https://strawbebby228.neocities.org/" target="_blank"><img alt="strawbebby228" src="./images/buttons/ButtonPink.gif" /></a>
         <a href="http://cepheus.xyz" target="_blank"
            ><img alt="click to visit cepheus" src="./images/buttons/cepheus.gif"
        /></a>
        
        <a href="https://jackisnotbright.neocities.org" target="_blank"
            ><img src="./images/buttons/JACKISNOTBRIGHT.gif" alt="jackisnotbright"/><img
        /></a>
        <a href="https://petrapixel.neocities.org/" target="_blank"
            ><img src="./images/buttons/petra.webp" alt="petrapixel"
        /></a>
        <a href="https://mooeena.neocities.org" target="_blank"><img src="./images/buttons/goat.gif" /><img /></a>
         
         <a href="https://lastsunrise.art" target="_blank"><img src="./images/buttons/lastsunrise.gif" alt="Last Sunrise Button" /></a>
        <a href="https://theponyhighway.neocities.org/" target="_blank"><img src="./images/buttons/tphbuttonshine.gif"></a>
             <a href="https://postwick.net" target="_blank"><img src="./images/buttons/postwickbutton.gif" alt="Postwick's site button"></a>
        <a href="http://whimsical.heartette.net" target="_blank"><img src="./images/buttons/whimsical.gif" /><img /></a>
        
        <a href="https://dokode.moe" target="_blank"><img src="./images/buttons/dokodemobutton3.gif" /><img /></a>
        <a href="https://olliveen.neocities.org/" target="_blank"><img src="https://olliveen.neocities.org/img/button.gif"></a>
        
        <a href="https://maphren.neocities.org/" target="_blank"
            ><img src="https://maphren.neocities.org/imgs/buttons/maphren.gif" alt="maphren.neocities.org"
        /></a>
        <a href="https://pinkdreamsponyland.neocities.org" target="_blank"> <img src="./images/buttons/pinkpony.png"></a>
        <a href="https://ballonlea.net" target="_blank"><img src="./images/buttons/sitebutton1.gif" /><img /></a>
   <a href="https://tectrix.neocities.org" target="_blank"><img src="https://tectrix.neocities.org/images/button.gif"></a>
   <a href="https://nathanntan.neocities.org/" target="_blank"><img src="https://nathanntan.neocities.org/avatars/button%20(1).png"></a>
        <a href="https://ne0nbandit.neocities.org/" target="_blank"><img src="https://ne0nbandit.github.io/assets/img/btn/mine/nbbanner.png"></a>
   <a href="https://theabsoluterealm.com/" target="_blank">
            <img alt="the absolute realm" src="./images/buttons/absolute-realm.gif"
        /></a>
        
   <a target="_blank" href="https://doqmeat.com"><img alt="doqmeat.com" src="./images/buttons/doqmeat.png" /></a>
        <a href="https://vidapon.net/" target="_blank"><img alt="Vidapon's Artbox!" src="./images/buttons/Astertrail_button.gif"></a>
    <a target="_blank" href="https://numbersstory.com"
          ><img alt="numbersstory.com" src="./images/buttons/numbers.png"
        /></a>
        <a href="https://chimeramanticore.neocities.org" target="_blank"
            ><img src="./images/buttons/chimerabutton.gif" /><img
        /></a>
      
        <a href="https://starrs.neocities.org/" target="_blank"><img src="./images/buttons/tiny_space.gif" /></a>
   <a href="https://insect.christmas" target="_blank"><img src="./images/buttons/insectchristmas.png" /><img /></a>
        <a href="https://32bit.cafe" target="_blank"><img src="./images/buttons/32b-pcb.png" /><img /></a>
   <a target="_blank" href="https://y2kbugz.neocities.org"
          ><img alt="y2kbugz.neocities.org" src="./images/buttons/y2kbugs.png"
        /></a>
        <a href="https://dimden.dev" target="_blank"><img src="./images/buttons/dimden.gif" />
      </a>
   
        
        </center>
		  
          
          
        </div>
		
		<div class="sidebar-section">
          <div class="sidebar-title-2">link to me!!</div>
          <div class="site-button">
		  	<a href="https://galissia.neocities.org/" target="_blank"><img src="https://files.catbox.moe/2howzk.gif" alt="petrapixel"></a>
			<textarea><a href="https://galissia.neocities.org/" target="_blank"><img src="https://files.catbox.moe/2howzk.gif" alt="galissia.neocities.org"></a></textarea>
		  </div>
        </div>
      </aside>
      `;
}

function footerHTML() {
  // ${nesting} outputs "./" or "../" depending on current page depth.
  // You can use it to refer to images etc.
  // Example: <img src="${nesting}img/logo.png"> might output <img src="../img/logo.png">

  return `
<footer><p style="text-align: center">
                            <a
                                href="https://c4sif.org/2011/01/copyheart-copying-is-an-act-of-love-please-copy-and-share/"
                                >♡2023-2025 by Galissia. Copying is an act of love. Please copy.</a
                            >
                        </p>   
                        <pre>   |   </pre>
                        <p style="text-align: center">
                            Last Updated:
                            <span id="lastupdate"></span>
                        </p> 
                        <pre>   |   </pre>
                        <center>
                            <div id="time">
                                <iframe src="https://free.timeanddate.com/clock/i9xd2odk/n198/fn9/fcfff/tct/pct/ta1" frameborder="0" width="145" height="19" allowtransparency="true"></iframe>

                            </div>
                        </center></footer>`;
}

function getNesting() {
  const numberOfSlashes = window.location.pathname.split("/").length - 1;
  if (numberOfSlashes == 1) return "./";
  return "../".repeat(numberOfSlashes - 1);
}

function giveActiveClassToLinks() {
  const els = document.querySelectorAll("nav a");
  [...els].forEach((el) => {
    const href = el.getAttribute("href").replace(".html", "").replace("#", "");
    const pathname = window.location.pathname.replace("/public/", "");

    if (href == "/" || href == "/index.html") {
      if (window.location.href == "http://localhost:8080/" || pathname == "/") {
        el.classList.add("active");
      }
    } else {
      if (window.location.href.includes(href)) {
        el.classList.add("active");

        if (el.closest("summary")) {
          el.closest("details").addAttribute("open");
          el.closest("summary").classList.add("active");
        }
      }
    }
  });
}
