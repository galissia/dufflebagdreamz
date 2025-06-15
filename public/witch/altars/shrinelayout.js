document.addEventListener("DOMContentLoaded", function () {
  // Page has finished loading. Now, do things.
  loadLayoutByPetraPixel();

  // Add any custom JavaScript code here...
});

function loadLayoutByPetraPixel() {
  const mainEl = document.querySelector("main");
  if (!mainEl) return;
  mainEl.insertAdjacentHTML("beforebegin", headerHTML());
  mainEl.insertAdjacentHTML("afterend", footerHTML());
  giveActiveClassToCurrentPage();
}

const nesting = getNesting();

function headerHTML() {
  // ${nesting} outputs "./" or "../" depending on current page depth.
  // You can use it to refer to images etc.
  // Example: <img src="${nesting}img/logo.png"> might output <img src="../img/logo.png">

  return `
  
      <!-- =============================================== -->
      <!-- HEADER -->
      <!-- =============================================== -->

      <header>

        <div class="header-content">
	        <div class="header-title"><a style="text-decoration:none;" href="./altars.html"> -ˏˋ ALTARS ˊˎ- </a>
</div>
	        
        	
        </div>
      </header>

	  
	
	  
      <!-- =============================================== -->
      <!-- RIGHT SIDEBAR -->
      <!-- =============================================== -->

      <aside class="right-sidebar">
	  
        
        <!-- NAVIGATION -->
        <nav>
          <div class="sidebar-title">Navigation</div>
          <ul>
            <li><a href="https://galissia.neocities.org/witch/witchy">Witchcraft Home</a></li>
            <li><a href="https://galissia.neocities.org">Main Site</a></li>
    
        	<li>
        	
              	<details>
                <summary>Shrines</summary>
                <ul>
                  <li><a href="./apollo.html">Apollo</a></li>
                  <li><a href="./artemis.html">Artemis</a></li>
                  <li><a href="./brighid.html">Brigid</a></li>
                  <li><a href="./dionysus.html">Dionysus</a></li>
                  <li><a href="./selene.html">Selene</a></li>
                  
                </ul>
                </details>
            </li>
          </ul>
        </nav>
        

        
        <div class="sidebar-section">
          <div class="sidebar-title">Moon Phase</div>
          <blockquote>
            <iframe width="180" height="180" style="border:none" src="https://dimden.dev/moon?custom=1" name="dimdenmoonwidget"></iframe>
           
          </blockquote>
        </div>
        
        
        <div class="sidebar-section">
          <div class="sidebar-title">Buttons</div>
          
          <img src="https://i.imgur.com/dT9HQge.png" alt="She/Her (Bisexual flag)">
          	<img src="https://i.imgur.com/jA5A7gu.png" alt="sun">
          	<img src="https://i.imgur.com/AOsZxjG.png" alt="moon">
          	<img src="https://i.imgur.com/tUt6mnx.png" alt="rising">
          	<img src="https://i.imgur.com/fqaiLqt.png" alt="chinese zodiac">
            <img src="https://i.imgur.com/amjweU8.png" alt="celtic tree zodiac">
            <img src="https://i.imgur.com/4XRlTbW.png" alt="celtic animal zodiac">
            <img src="https://i.imgur.com/bx7nz65.png" alt="witch">
            <img src=".../images/polytheist.png">
            
          
        </div>
        
        <div class="sidebar-section">
          <div class="sidebar-title">Fanlistings</div>
          <a target="_blank" href="http://fanique.altervista.org/moon/buttons.php"
          ><img src=".../images/fanlistings/moon.png" alt="Moon" title="The Moon"
        /></a>
        <a
          target="_blank"
          href="https://fans.thislove.nu/ghosts
"
          ><img src=".../images/fanlistings/ghosts.png" alt="Ghosts" title="Ghosts"
        /></a>
        <a target="_blank" href="https://fan.wings.nu/witchcraft/"
          ><img src=".../images/fanlistings/witchcraft.png" alt="Witchcraft" border="0" title="Witchcraft"
        /></a>
        <a target="_blank" href="http://fan.still-breathing.com/history/"
          ><img src=".../images/fanlistings/history.png" alt="History" title="History"
        /></a>
        <a target="_blank" href="https://theatregirl.net/midnight"
          ><img src=".../images/fanlistings/midnight.png" alt="Midnight" title="Midnight"
        /></a>
        <a target="_blank" href="http://amalgamate.afflatus-misery.net/apollo/"
          ><img src=".../images/fanlistings/apollo.png" alt="Apollo" title="Apollo"
        /></a>
        <a target="_blank" href="http://andrasta.net/artemis/"
          ><img src=".../images/fanlistings/artemis.jpg" alt="Artemis" title="Artemis"
        /></a>
        <a target="_blank" href="http://www.into-a-dream.com.ar/taurus/index.php"
          ><img src=".../images/fanlistings/taurus.png" alt="Taurus" title="Taurus"
        /></a>
        <a target="_blank" href="https://silent.am/beansidhe/"
          ><img src=".../images/fanlistings/banshee.png" alt="Beansidhe"
        /></a>
        <a target="_blank" href="https://shadow-lord.com/demons/"
          ><img src=".../images/fanlistings/demons.png" alt="Demons" 
        /></a>
        <a target="_blank" href="https://shadow-lord.com/mythology/"
          ><img src=".../images/fanlistings/myths.png" alt="Mythology" 
        /></a>
        
        
        </div>
        
        <div class="sidebar-section">
          <div class="sidebar-title">Link Back</div>
          <div class="site-button">
          	<a href="https://petrapixel.neocities.org/" target="_blank"><img src="https://galissia.neocities.org/images/sitebutton.gif" alt="petrapixel"></a>
        	<textarea><a href="https:/galissia.neocities.org/" target="_blank"><img src="https://galissia.neocities.org/images/sitebutton.gif" alt="petrapixel"></a></textarea>
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


      <!-- =============================================== -->
      <!-- FOOTER -->
      <!-- =============================================== -->

      <footer>
            <div><a
                                href="https://c4sif.org/2011/01/copyheart-copying-is-an-act-of-love-please-copy-and-share/"
                                >♡2023-2025 by Galissia. Copying is an act of love. Please copy.</a
                            ></div>
      </footer>`;
}

/* Do not edit anything below this line unless you know what you're doing. */

function giveActiveClassToCurrentPage() {
  const els = document.querySelectorAll("nav a");
  [...els].forEach((el) => {
    const href = el.getAttribute("href").replace(".html", "").replace("#", "");
    const pathname = window.location.pathname.replace("/public/", "");
    const currentHref = window.location.href.replace(".html", "") + "END";

	/* Homepage */
    if (href == "/" || href == "/index.html") {
      if (pathname == "/") {
        el.classList.add("active");
      }
    } else {
      /* Other pages */
      if (currentHref.includes(href + "END")) {
        el.classList.add("active");

        /* Subnavigation: */
		
        if (el.closest("details")) {
          el.closest("details").setAttribute("open", "open");
          el.closest("details").classList.add("active");
        }

        if (el.closest("ul")) {
          if (el.closest("ul").closest("ul")) {
          	el.closest("ul").closest("ul").classList.add("active");
          }
        }
      }
    }
  });
}

function getNesting() {
  const numberOfSlashes = window.location.pathname.split("/").length - 1;
  if (numberOfSlashes == 1) return "./";
  return "../".repeat(numberOfSlashes - 1);
}
