<template>
    <div class="work viewContainer">
    <h1>Presentation Card</h1>
     <p> 
    <ul>
      <li>
        - Presenting myself using <b>Vue.js</b> and a configured <b>p5.js</b> library, compatible with <b>Vue.js</b>.
      </li>
      <li>
        - Inspired by Daniel Shiffman's <i>The Nature of code</i> online courses for <b>p5.js</b>.
      </li>
      <li>
        - Use of vector-based particles moving through the outline of a font.
      </li>
      <li>
        - A set of parameters can be configured with sliders.
      </li>
      <li>- <a target="_blank" href="https://werkstuk-jules-docx-vue.web.app/">URL</a>.</li>
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
        {url:'https://firebasestorage.googleapis.com/v0/b/werkstuk-jules-docx-vue.appspot.com/o/Screenshot%202020-12-05%20173940.png?alt=media&token=f8790116-ee9f-402a-95bd-992d7794b96e', name: 'shot 1'},
        {url:'https://firebasestorage.googleapis.com/v0/b/werkstuk-jules-docx-vue.appspot.com/o/Screenshot%20(12).png?alt=media&token=63f3d2a9-4888-4edb-821d-bdc0f7cd29b6', name: 'shot 2'},
        {url:'https://firebasestorage.googleapis.com/v0/b/werkstuk-jules-docx-vue.appspot.com/o/Screenshot%20(11).png?alt=media&token=7307a42e-d12e-48c9-ad3b-e2f0eea521a0', name: 'shot 3'},
        {url:'https://firebasestorage.googleapis.com/v0/b/werkstuk-jules-docx-vue.appspot.com/o/Screenshot%20(10).png?alt=media&token=755bbe1d-e7a5-4810-a09f-69b933566d08', name: 'shot 4'},
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