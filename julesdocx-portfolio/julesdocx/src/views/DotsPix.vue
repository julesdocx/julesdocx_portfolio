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
        {url:'https://firebasestorage.googleapis.com/v0/b/werkstuk-jules-docx-vue.appspot.com/o/Screenshot%202020-12-02%20181923.png?alt=media&token=0dd43ac2-fc9f-4f25-8170-815b2c5480f9', name: 'Frontpage'},
        {url:'https://firebasestorage.googleapis.com/v0/b/werkstuk-jules-docx-vue.appspot.com/o/Screenshot%202020-12-02%20182119.png?alt=media&token=38962f02-fa2c-4064-8eff-66422dca72af', name: 'Speakers details'},
        {url:'https://firebasestorage.googleapis.com/v0/b/werkstuk-jules-docx-vue.appspot.com/o/Screenshot%202020-12-02%20182231.png?alt=media&token=0cd1e7d1-2aba-4ae2-a61e-0f3f0ea24cd6', name: 'Line up'},
        {url:'https://firebasestorage.googleapis.com/v0/b/werkstuk-jules-docx-vue.appspot.com/o/Screenshot%202020-12-05%20170647.png?alt=media&token=a3c5ee1f-b052-4613-a7c7-3968511a216d', name: 'Sponsors page'},
     ]
    }
  }
}
</script>

<style lang="scss" scoped>
</style>