<template>
  <div id="app">
    <P5Component />
    <div id="contentContainer" class="content">
      <div id="menuToggle">
        <input type="checkbox" />
        <span class="toggleIcon"></span>
        <span class="toggleIcon"></span>
        <span class="toggleIcon"></span>
        <ul id="menu" class="julesNav navBox">
          <h4>Me</h4>
          <li>
            <router-link to="/#" rou class="routerlink">
              <h3><span class="hoverEmoji emoji">😊</span><span class="navCapital">J</span>ules Docx</h3>
            </router-link>
          </li>
          <li>
            <router-link to="/cv" class="routerlink">
              <h3><span class="hoverEmoji emoji">🌱</span><span class="navCapital">M</span>y CV</h3>
            </router-link>
          </li>
          <h4>Work</h4>
          <li>
            <router-link to="/dotsandpix" class="routerlink">
              <h3><span class="hoverEmoji emoji">✨</span><span class="navCapital">D</span>ots &amp; Pix</h3>
            </router-link>
          </li>
          <li>
            <router-link to="/frontendcard" class="routerlink">
              <h3><span class="hoverEmoji emoji">🌌</span><span class="navCapital">F</span>rontend Card</h3>
            </router-link>
          </li>
          <li>
            <router-link to="/nbastats" class="routerlink">
              <h3><span class="hoverEmoji emoji">🏀</span><span class="navCapital">N</span>BA Stats</h3>
            </router-link>
          </li>
          <li>
            <router-link to="/academy" class="routerlink">
              <h3><span class="hoverEmoji emoji">🤖</span><span class="navCapital">A</span>ndroid</h3>
            </router-link>
          </li>
          <li>
            <router-link to="/academy" class="routerlink">
              <h3><span class="hoverEmoji emoji">🏥</span><span class="navCapital">A</span>cademy</h3>
            </router-link>
          </li>
          <!-- <h4>Design</h4>
            <li>
              <router-link to="/💮" class="routerlink">
                <h3><span class="hoverEmoji emoji">💮</span><span class="navCapital">D</span>esign</h3>
              </router-link>
            </li> -->
        </ul>
      </div>
      <router-view />
      <nav id="noToggleNav" class="box">
        <ul class="julesNav navBox">
          <h4>Me</h4>
          <li>
            <router-link to="/#" rou class="routerlink">
              <h3><span class="hoverEmoji emoji">😊</span><span class="navCapital">J</span>ules Docx</h3>
            </router-link>
          </li>
          <li>
            <router-link to="/cv" class="routerlink">
              <h3><span class="hoverEmoji emoji">🌱</span><span class="navCapital">M</span>y CV</h3>
            </router-link>
          </li>
        </ul>
        <ul class="workNav navBox">
          <h4>Work</h4>
          <li>
            <router-link to="/dotsandpix" class="routerlink">
              <h3><span class="hoverEmoji emoji">✨</span><span class="navCapital">D</span>ots &amp; Pix</h3>
            </router-link>
          </li>
          <li>
            <router-link to="/frontendcard" class="routerlink">
              <h3><span class="hoverEmoji emoji">🌌</span><span class="navCapital">F</span>rontend Card</h3>
            </router-link>
          </li>
          <li>
            <router-link to="/nbastats" class="routerlink">
              <h3><span class="hoverEmoji emoji">🏀</span><span class="navCapital">N</span>BA Stats</h3>
            </router-link>
          </li>
          <li>
            <router-link to="/academy" class="routerlink">
              <h3><span class="hoverEmoji emoji">🤖</span><span class="navCapital">A</span>cademy</h3>
            </router-link>
          </li>
          <li>
            <router-link to="/ioshospitals" class="routerlink">
              <h3><span class="hoverEmoji emoji">🏥</span><span class="navCapital">I</span>OS Hospitals</h3>
            </router-link>
          </li>
        </ul>
        <!-- <ul class="designNav navBox">
          <h4>Design</h4>
          <li>
            <router-link to="/💮" class="routerlink">
              <h3><span class="hoverEmoji emoji">💮</span><span class="navCapital">D</span>esign</h3>
            </router-link>
          </li>
        </ul> -->
      </nav>
    </div>
  </div>
</template>

<script>
  import P5Component from '@/components/P5Component.vue';
  export default {
    components: {
      P5Component
    }
  }
</script>t

<style lang="scss">
  @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500;700;800&display=swap');
  $yellow: #ffff00;
  $green: #00ff18;

  li {
    margin: 5px 0px;
  }

  body {
    //overflow: hidden;
    margin: 0px;
    overflow-x: hidden;
    //   background: white;
    //   background: #606060;
  }

  body::-webkit-scrollbar {
    display: none;
  }

  #app {
    overflow-x: hidden;
    font-family: Syne, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: black;
    display: flex;
    flex-direction: row;
  }

  #noToggleNav {
    position: fixed;
    top: 32px;
    right: 7%;
    place-items: start end;
    text-align: right;
    height: 98vh;
    font-weight: 800;
    width: 180px;

    a,
    a:link,
    a:visited {
      color: black;
      text-decoration: none;
    }
  }

  ul {
    list-style: none;
    padding: 0px;
    margin: 0px 0px 0px 10px;
  }

  .viewContainer {
    margin-left: 0px;
    margin-right: 5%;
  }

  p {
    max-width: 700px;
    background: white;
    border: 1px solid #000;
    // box-shadow: inset 0px 0px 7px 0px rgba(0,0,0,0.75);
    padding: 10px;
    font-family: Syne, Arial, sans-serif;
    font-weight: 300;
    //border-radius: 10px;
  }

  h3 {
    //box-shadow:  0px 0px 15px 2px #000000;
    background: $green;
    font-weight: 700;
    user-select: none;
  }

  h4 {
    margin-bottom: 0px;
  }

  h5 {
    margin: 0px 0px 0px 10px;
    font-size: 1.1em;
    z-index: 1;
    position: absolute;
  }

  h1 {
    font-size: 2.2em;
    font-weight: 800;
  }

  .content {
    display: grid;
    width: 100%;
    grid-template-rows: auto;
    grid-template-columns: 0px auto minmax(200px, 15%);
    height: 98vh;
    margin: 0px 7%;
  }

  .box {
    margin: 0px;
  }

  .hoverEmoji {
    display: none;
  }

  .emoji {
    font-size: 0.7em;
  }

  .routerlink:hover {
    .hoverEmoji {
      display: inline-block
    }

    .navCapital {
      display: none;
    }
  }

  a {
    background: $green;
  }

  a:link,
  a:visited {
    text-decoration: none;
    color: black;
  }

  a:hover {
    text-decoration: underline;
  }

  .workNav li {
    background: $green;
  }

  .router-link-active {
    h3 {
      background: white;
      border: 1px solid black;
    }

    .hoverEmoji {
      display: inline-block
    }

    .navCapital {
      display: none;
    }
  }

  // *** HAMBURGER MENU *** //

  #menuToggle {
    display: none;
    visibility: hidden;
    height: 10px;
    position: relative;
    display: block;
    // top: 50px;
    // left: 50px;
    z-index: 1;
    -webkit-user-select: none;
    user-select: none;
  }

  #menuToggle a {
    text-decoration: none;
    color: #232323;

    transition: color 0.3s ease;
  }

  #menuToggle input {
    display: none;
    margin: 0px;
    width: 100%;
    height: 32px;
    position: absolute;
    cursor: pointer;
    opacity: 0;
    z-index: 2;
    -webkit-touch-callout: none;
  }

  #menuToggle .toggleIcon {
    display: none;
    left: 3%;
    width: 100%;
    height: 4px;
    margin-bottom: 5px;
    background: $green;
    border-radius: 3px;
    z-index: 3;
    transform-origin: 4px 0px;
    transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1.0),
      background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1.0),
      opacity 0.55s ease;
    transition-duration: 0.3s;
  }

  #menuToggle .toggleIcon:first-child {
    transform-origin: 0% 0%;
  }

  #menuToggle .toggleIcon:nth-last-child(2) {
    transform-origin: 0% 100%;
  }

  #menuToggle input:checked~.toggleIcon {
    opacity: 1;
    transform: rotate(45deg) translate(-2px, -1px);
    width: 33px;
    background: #232323;
    transition-duration: 0.3s;
  }


  #menuToggle input:checked~.toggleIcon:nth-last-child(3) {
    opacity: 0;
    transform: rotate(0deg) scale(0.2, 0.2);
  }

  #menuToggle input:checked~.toggleIcon:nth-last-child(2) {
    transform: rotate(-45deg) translate(0, -1px);
  }

  #menu {
    margin-top: 15px;
    position: absolute;
    text-align: right;
    width: 100%;
    background: white;
    border: 1px solid #000;
    list-style-type: none;
    -webkit-font-smoothing: antialiased;
    transform-origin: 0% 0%;
    transform: translate(120%, 0);
    transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1.0);

    h3,
    h4 {
      padding-right: 20px;
    }
  }

  #menuToggle input:checked~ul {
    transform: none;
  }

  // *** MEDIA QUERIES *** //

  @media (max-width: 800px) {
    .navBox {
      margin: 0px;
    }

    h1 {
      margin: 0px;
    }

    #noToggleNav {
      display: none;
    }

    #menuToggle {
      visibility: initial;
      display: block;

      .toggleIcon,
      input,
      ul {
        display: block;
      }

    }

    #contentContainer {
      display: grid;
      grid-template-columns: auto;
      grid-template-rows: 40px auto;
      height: 98vh;
      margin: 3%;
    }

    .viewContainer {
      margin: 0px;
      width: 100%;
    }

    p {
      width: initial;
    }
  }
</style>