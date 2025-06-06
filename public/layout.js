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
          <div class="sidebar-title">°•. ✿ Navigation</div>
          <ul>
            <li><a href="./PETRA(copy1).html">Home</a></li>
            <li><a href="#">Page 1</a></li>
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
          <div class="sidebar-title"> ☄. *.  Section Title</div>
          <div id="statuscafe">
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
        </div>
        <div class="sidebar-section">
          <div class="sidebar-title">Section Title</div>
          <ul>
            <li>List</li>
            <li>List</li>
            <li><a href="#">List</a></li>
            <li>List</li>
          </ul>
        </div>
		<div class="sidebar-section">
          <div class="sidebar-title">Section Title</div>
          <marquee scrollamount="4">
		  	<span>
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
</span>
<span>
<img src="./images/buttons/biflag.gif">
<img src="./images/buttons/desktop.gif">
<img src="./images/buttons/catscape3.gif">
<img src="./images/buttons/best_viewed_with_open_eyes.gif" >
<img src="./images/buttons/censor_14c.gif" >
<img src="./images/buttons/fuckingwebmaster.gif" >
</span>
		  </marquee>
        </div>
		<div class="sidebar-section">
          <div class="sidebar-title">Section Title</div>
          <img class="full-width-image" src="https://picsum.photos/id/25/900/400">
        </div>
		<div class="sidebar-section">
          <div class="sidebar-title">Section Title</div>
          <div class="site-button">
		  	<a href="https://petrapixel.neocities.org/" target="_blank"><img src="https://cdn.jsdelivr.net/gh/petracoding/petrapixel.neocities.org@latest/public/img/linkback.gif" alt="petrapixel"></a>
			<textarea><a href="https://petrapixel.neocities.org/" target="_blank"><img src="https://cdn.jsdelivr.net/gh/petracoding/petrapixel.neocities.org@latest/public/img/linkback.gif" alt="petrapixel"></a></textarea>
		  </div>
        </div>
      </aside>
	
      <aside class="right-sidebar">
	  
        <div class="sidebar-section">
          <div class="sidebar-title-2">Select Theme ✿ .•°</div>
          <form aria-label="styleswitcher">
<select name="styleswitcher" onchange="changeStyle(this.value)">
<option value="home">Starry (default) </option>
<option value="carpet">Grassy</option>
</select>
</form>
        </div>
        <div class="sidebar-section">
          <div class="sidebar-title-2">Section Title ✧.* </div>
          <blockquote>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            <p>Necessit atibus perferendis inventore tempore vel optio similique blanditiis quasi quam?</p>
          </blockquote>
        </div>
        <div class="sidebar-section">
          <div class="sidebar-title-2">Section Title ☄. *. ⋆ </div>
          <br>
          <div style="max-height:190px; overflow-y:scroll;">
          <a target="_blank" href="http://fanique.altervista.org/moon/buttons.php"
          ><img src="./images/fanlistings/moon.png" alt="Moon" title="The Moon"
        /></a>
        <a target="_blank" href="http://www.marheavenj.net/picture/index.php"
          ><img src="./images/fanlistings/dorian.jpg" alt="Dorian Gray" title="The Picture of Dorian Gray"
        /></a>
        <a target="_blank" href="http://fanimated.net/mylittlepony/"
          ><img src="./images/fanlistings/mlp.gif" alt="My Little Pony" title="My Little Pony"
        /></a>
        <a
          target="_blank"
          href="http://www.noonvale.net/scoobydoo/
"
          ><img src="./images/fanlistings/scooby.gif" alt="Scooby Doo: Mystery Incorporated" title="Scooby Doo: Mystery Incorporated"
        /></a>
        <a target="_blank" href="http://www.royal-drama.net/scoobydoo/"
          ><img src="./images/fanlistings/scooby2.png" alt="Scooby Doo, Where Are You!" title="Scooby Doo, Where Are You!"
        /></a>
        <a target="_blank" href="https://yerfej.org/moulin/" alt="Moulin Rouge!" title="Moulin Rouge!"><img src="./images/fanlistings/moulin.png"></a>
        <a target="_blank" href="http://theatregirl.net/jekyll&hyde"
          ><img src="./images/fanlistings/jekyllhyde.png" title="Jekyll and Hyde (Musical)" alt="Jekyll and Hyde (Musical)"
        /></a>
        <a target="_blank" href="https://theatregirl.net/jhsoundtrack/index.php"
          ><img src="./images/fanlistings/jekyllhyde4.png" title="Jekyll and Hyde (Soundtrack)" alt="Jekyll and Hyde (Soundtrack)"
        /></a>
        <a target="_blank" href="https://theatregirl.net/hyde/index.php"
          ><img src="./images/fanlistings/jekyllhyde3.png" alt="Jekyll and Hyde (Character)" title="Jekyll and Hyde (Character)"
        /></a>
        
        <a target="_blank" href="http://movies.i-heart-you.net/bttf."
          ><img src="./images/fanlistings/bttf.gif" alt="Back To The Future" border="0" title="Back to the Future"
        /></a>
        <a href="https://fan.redcrown.net/bride"
          ><img src="./images/fanlistings/tpb.png" alt="The Princess Bride fanlisting" title="The Princess Bride"
        /></a>
        <a target="_blank" href="http://www.ladyrose.buruma.net/animaniacs/1993"
          ><img src="./images/fanlistings/animaniacs.png" alt="Animaniacs" title="Animaniacs"
        /></a>
        <a target="_blank" href="http://tardis.i-heart-you.net/doctorwho"
          ><img src="./images/fanlistings/dw.gif" alt="Doctor Who" border="0" title="Doctor Who"
        /></a>
        <a target="_blank" href="https://auridon.com/elderscrolls/index.php"
          ><img src="./images/fanlistings/tes.png" alt="The Elder Scrolls Series" title="The Elder Scrolls Series" border="0"
        /></a>
        <a target="_blank" href="https://beatngu.altervista.org/bi/index.php"
          ><img src="images/fanlistings/bi.png" alt="Bisexuality" title="Bisexuality"
        /></a>
        <a target="_blank" href="https://nature.i-heart-you.net/forests/"
          ><img src="images/fanlistings/forests.gif" alt="Forests" title="Forests"
        /></a>
        <a
          target="_blank"
          href="https://fans.thislove.nu/ghosts
"
          ><img src="./images/fanlistings/ghosts.png" alt="Ghosts" title="Ghosts"
        /></a>
        <a target="_blank" href="https://fan.wings.nu/witchcraft/"
          ><img src="./images/fanlistings/witchcraft.png" alt="Witchcraft" border="0" title="Witchcraft"
        /></a>
        <a target="_blank" href="http://fan.still-breathing.com/history/"
          ><img src="images/fanlistings/history.png" alt="History" title="History"
        /></a>
        <a target="_blank" href="https://theatregirl.net/midnight"
          ><img src="./images/fanlistings/midnight.png" alt="Midnight" title="Midnight"
        /></a>
        <a target="_blank" href="https://ryo.whorehau.se/index.php"
          ><img src="./images/fanlistings/50x50ryo1.png" alt="Ryo Asuka" title="Ryo Asuka"
        /></a>
        <a target="_blank" href="https://tardis.i-heart-you.net/s4/"
          ><img src="./images/fanlistings/s4.gif" alt="Doctor Who Series 4" title="Doctor Who Series 4"
        /></a>
        <a target="_blank" href="https://tv.i-heart-you.net/crowley/"
          ><img src="images/fanlistings/crowley.gif" alt="Crowley" title="Crowley"
        /></a>
        <a target="_blank" href="http://contradiction.altervista.org/supernatural/index.php"
          ><img src="images/fanlistings/supernatural.png" alt="Supernatural" title="Supernatural"
        /></a>
        <a target="_blank" href="https://go.wings.nu/index.php"
          ><img src="./images/fanlistings/go07.png" alt="Good Omens" title="Good Omens"
        /></a>
        <a target="_blank" href="https://yerfej.org/lucifer/"
          ><img src="images/fanlistings/lucifer.png" alt="Lucifer" title="Lucifer"
        /></a>
        <a target="_blank" href="https://www.into-a-dream.com.ar/wwstv/"
          ><img src="images/fanlistings/wwdits.png" alt="What We Do In The Shadows" title="What We Do In The Shadows"
        /></a>
        <a target="_blank" href="https://fan.robotess.net/david-tennant"
          ><img src="images/fanlistings/tennant.jpeg" alt="David Tennant" title="David Tennant"
        /></a>
        
        <a target="_blank" href="https://yaten.net/capaldi/"
          ><img src="images/fanlistings/capaldi.png" alt="Peter Capaldi" title="Peter Capaldi"
        /></a>
        <a target="_blank" href="http://winterseve.altervista.org/jensen"
          ><img src="images/fanlistings/jensen.png" alt="Jensen Ackles" title="Jensen Ackles"
        /></a>
        <a target="_blank" href="https://boundless-realms.com/misha/"
          ><img src="images/fanlistings/misha.jpg" alt="Misha Collins" title="Misha Collins"
        /></a>
        <a target="_blank" href="https://tardis.i-heart-you.net/rose/"
          ><img src="images/fanlistings/rose.gif" alt="Rose Tyler" title="Rose Tyler"
        /></a>
        <a target="_blank" href="http://edgeofseventeen.altervista.org/sweeneytodd/index.php"
          ><img src="images/fanlistings/sweeney.png" alt="Sweeney Todd" title="Sweeny Todd"
        /></a>
        <a target="_blank" href="https://love.cordy.nu/grimm/"
          ><img src="images/fanlistings/monroe.webp" alt="Grimm" title="Grimm"
        /></a>
      <a target="_blank" href="http://amalgamate.afflatus-misery.net/apollo/"
          ><img src="images/fanlistings/apollo.png" alt="Apollo" title="Apollo"
        /></a>
        <a target="_blank" href="http://andrasta.net/artemis/"
          ><img src="images/fanlistings/artemis.jpg" alt="Artemis" title="Artemis"
        /></a>
        <a target="_blank" href="http://www.into-a-dream.com.ar/taurus/index.php"
          ><img src="images/fanlistings/taurus.png" alt="Taurus" title="Taurus"
        /></a>
        <a target="_blank" href="http://fan.greenhype.net/mp3players/about.php"
          ><img src="images/fanlistings/mp3players50j.gif" alt="MP3 Players" title="MP3 Players"
        /></a>
        <a target="_blank" href=""><img src="./images/fanlistings/html50x50_001.png" alt="HTML" title="html"> </a>
        </div></div>
		<div class="sidebar-section">
          <div class="sidebar-title-2">Section Title ✧.*</div>
          <marquee scrollamount="4">
		  	 <a href="https://numbersstory.com" target="_blank"><img src="images/buttons/numbers.png"><img></a>
    <a href="https://dokode.moe" target="_blank"><img src="images/buttons/dokodemobutton3.gif"><img></a>
    <a href="https://theabsoluterealm.com/" target="_blank"> <img alt="the absolute realm" src="images/buttons/absolute-realm.gif"></a>
    <a href="https://mooeena.neocities.org" target="_blank"><img src="images/buttons/goat.gif"><img></a>
    <a href="https://starrs.neocities.org/" target="_blank"><img src="/images/buttons/tiny_space.gif"></a>
    <a href="https://ballonlea.net" target="_blank"><img src="images/buttons/sitebutton1.gif"><img></a>
    <a href="https://sunwukong.neocities.org" target="_blank"><img src="images/buttons/wukongbutton.png"><img></a>
    <a href="https://goblin-heart.net/sadgrl/" target="_blank"><img src="https://goblin-heart.net/sadgrl/assets/images/buttons/sadgrlonline.gif"></a>
    <a href="http://cepheus.xyz" target="_blank"><img alt="click to visit cepheus" src="https://cepheus.neocities.org/img/button2.gif"></a>
   <a href="https://petrapixel.neocities.org/" target="_blank"><img src="https://github.com/petracoding/petrapixel.neocities.org/blob/master/public/img/linkback.webp?raw=true" alt="petrapixel"></a>
   <a href="https://numbersstory.com" target="_blank"><img src="images/buttons/numbers.png"><img></a>
    <a href="https://dokode.moe" target="_blank"><img src="images/buttons/dokodemobutton3.gif"><img></a>
    <a href="https://theabsoluterealm.com/" target="_blank"> <img alt="the absolute realm" src="images/buttons/absolute-realm.gif"></a>
    <a href="https://mooeena.neocities.org" target="_blank"><img src="images/buttons/goat.gif"><img></a>
    <a href="https://starrs.neocities.org/" target="_blank"><img src="/images/buttons/tiny_space.gif"></a>
    <a href="https://doqmeat.com" target="_blank"><img src="/images/buttons/doqmeat.png" alt="doqmeat"></a>
    <a href="http://whimsical.heartette.net" target="_blank"><img src="images/buttons/whimsical.gif"><img></a>
    <a href="https://lastsunrise.art"><img src="https://lastsunrise.neocities.org/images/mybutton.gif" alt="Last Sunrise Button"></a>
    <a href="https://insect.christmas" target="_blank"><img src="images/buttons/insectchristmas.png"><img></a>
    <a href="https://chimeramanticore.neocities.org" target="_blank"><img src="images/buttons/chimerabutton.gif"><img></a>
   <a href='https://strawbebby228.neocities.org/' target='_blank'><img src='https://strawbebby228.neocities.org/arts/UI/ButtonPink.gif'></a>
    <a href="https://mooeena.neocities.org" target="_blank"><img src="images/buttons/goat.gif"><img></a>
    <a href="https://starrs.neocities.org/" target="_blank"><img src="/images/buttons/tiny_space.gif"></a>
    <a href="https://32bit.cafe" target="_blank"><img src="https://32bit.cafe/linktous/32b-pcb.png"><img></a>
    <a href="https://lastsunrise.art"><img src="https://lastsunrise.neocities.org/images/mybutton.gif" alt="Last Sunrise Button"></a>
    <a href="https://goblin-heart.net/sadgrl/" target="_blank"><img src="https://goblin-heart.net/sadgrl/assets/images/buttons/sadgrlonline.gif"></a>
    <a href="http://cepheus.xyz" target="_blank"><img alt="click to visit cepheus" src="https://cepheus.neocities.org/img/button2.gif"></a>
    <a href="https://petrapixel.neocities.org/" target="_blank"><img src="https://github.com/petracoding/petrapixel.neocities.org/blob/master/public/img/linkback.webp?raw=true" alt="petrapixel"></a>
		  </marquee>
        </div>
		<div class="sidebar-section">
          <div class="sidebar-title-2">Section Title</div>
          <img class="full-width-image" src="https://picsum.photos/id/25/900/400">
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
