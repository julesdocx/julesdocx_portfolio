<template>
    <div class="work viewContainer">
    <h1>Frontend Card</h1>
     <p> 
    <ul>
      <li>
        Vue.js and a configured p5.js library made compatible for Vue
      </li>
      <li>
        Daniel Shiffman's The Nature of code online courses for p5.js
      </li>
      <li>
        The webapp used a particle class and the outline of a font to create a custom effect of particles going through the font outline
      </li>
      <li>
        A set of parameters can be configured with sliders
      </li>
      <li><a target="_blank" href="https://werkstuk-jules-docx-vue.web.app/">URL</a></li>
    </ul>
 </p>
    <ImageSliderComponent :images="images"/>
  </div>
</template>

<script>
import ImageSliderComponent from '../components/ImageSliderComponent.vue'

export default {
  name: 'FrontendCard',
  components: {
    ImageSliderComponent
  },
  data() {
    return {
      images: [
        {url:'https://s3-us-west-2.amazonaws.com/s.cdpn.io/5689/rock.jpg', name: 'rock'},
        {url:'https://s3-us-west-2.amazonaws.com/s.cdpn.io/5689/grooves.jpg', name: 'mountain'},
        {url:'https://s3-us-west-2.amazonaws.com/s.cdpn.io/5689/arch.jpg', name: 'sky'},
        {url:'https://s3-us-west-2.amazonaws.com/s.cdpn.io/5689/sunset.jpg', name: 'extra'},
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
  .home {
    display: flex;
    flex-direction: row;
  }
</style>