<template>
  <div class="work viewContainer">
    <h1>Dots &amp; Pix</h1>
     <p> 
    <ul>
      <li>
        Angular
      </li>
      <li>
        Fullstack
      </li>
      <li>
        Mockup festival site
      </li>
      <li>
        Clear navigation throughout the whole webapp
      </li>
      <li>
        Use of Firebase Cloud Storage applied in dynamic Angular components
      </li>
      <li><a target="_blank" href="https://werkstuk-jules-docx-angular.web.app/">URL</a></li>
    </ul>
 </p>
    <ImageSliderComponent :images="images"/>

  </div>
</template>

<script>
import ImageSliderComponent from '../components/ImageSliderComponent.vue'

export default {
  name: 'DotsPix',
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
</style>