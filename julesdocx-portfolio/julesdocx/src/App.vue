<template>
  <div id="app">
     <P5Component/>
    <div id="contentContainer" class="content">
      <router-view />
      <div id="nav" class="box">
        <ul>
          <li>
            <router-link to="/" class="routerlink"><h3><span class="hoverEmoji emoji">😊</span><span class="navCapital">J</span>ules Docx</h3></router-link>
          </li>
          <li>
            <router-link to="/cv" class="routerlink"><h3><span class="hoverEmoji emoji">🌱</span><span class="navCapital">M</span>y CV</h3></router-link>
          </li>
          <li>
            <router-link to="/work" class="routerlink"><h3><span class="hoverEmoji emoji">🛠️</span><span class="navCapital">W</span>ork</h3></router-link>
          </li>
          <li>
            <router-link to="/prototypes" class="routerlink"><h3><span class="hoverEmoji emoji">📁</span><span class="navCapital">P</span>rototypes</h3></router-link>
          </li>
          <li>
            <router-link to="/graphic-design" class="routerlink"><h3><span class="hoverEmoji emoji">💮</span><span class="navCapital">D</span>esign</h3></router-link>
          </li>
        </ul>
        <br>
      </div>
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
@import url('https://fonts.googleapis.com/css2?family=Syne:wght@700&display=swap');

  body {
    overflow: hidden;
    margin: 0px;
  //   background: white;
  //   background: #606060;
  }

  #app {
    font-family: Syne, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: black;
    display: flex;
    flex-direction: row;
  }

  #nav {
    place-items: start end;
    text-align: right;
    height: 98vh;
    font-weight: 800;

    ul {
      list-style: none;
      padding: 0px;
      margin: 30px 0px 0px 10px;
    }
    a, a:link, a:visited{
      color:black;
      text-decoration: none;
    } 
  }
  .viewContainer {
    margin-left: 0px;
    margin-right: 5%;
    text-align: justify;

    p {
      background: yellow;
      padding:20px
    }
  }
  h3 {
    //box-shadow:  0px 0px 15px 2px #000000;
    background: white;
    position: relative;
  }
  h1{
    background-color: white;
  }

  .content {
    display: grid;
    width: 100%;
    grid-template-columns: auto minmax(140px, 15%);
    height: 98vh;
    margin: 0px 5%;
  }

  .box {
    margin: 0px;
  }

  .hoverEmoji{
    display: none;
  }
  .emoji {
    font-size: 0.8em;
  }
  .routerlink:hover {
    .hoverEmoji {
      display: inline-block
    }
    .navCapital{
      display: none;
    }
  }

  // *** MEDIA QUERIES *** //

  @media (max-width: 800px) {
    #nav {
      display: none;
    }
    .content {
      display: grid;
      width: 100%;
      grid-template-columns: auto;
      height: 98vh;
      margin:3%;
    }
    .viewContainer {
      margin: 0px;
    }
  }

</style>