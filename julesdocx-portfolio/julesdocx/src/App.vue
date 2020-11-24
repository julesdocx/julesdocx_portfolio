<template>
  <div id="app">
    <div class="content">
      <router-view />
    </div>
    <div>
      <div id="nav" class="box">
        <ul>
          <li>
            <router-link to="/">Home</router-link>
          </li>
          <li>
            <router-link to="/about">About</router-link>
          </li>
        </ul>
        <br>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
  body {
    margin: 0px;
 //   background: white;
//    background: #606060;
  }
  #c {

  }

  #app {
    font-family: Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: black;
    display: flex;
    flex-direction: row;
  }

  #nav {
    display: grid;
    place-items: start end;
    width: 10rem;
    border: black 1px solid;
    height: 98vh;

    ul {

      list-style: none;
      padding: 0px;
      margin: 10px;
    }
    a, a:link, a:visited{
      font-size: 1.5em;
      color:black;
      text-decoration: none;
    } 
  }

  .content {
    margin: 10px;
    flex: auto;
    border: black 1px solid;
    height: 98vh;
  }

  .box {
    display: flex;
    flex: auto;
    margin: 10px;
  }

</style>