<template>
  <div class="work viewContainer">
    <h1>Dots &amp; Pix</h1>
     <p> 
    <ul>
      <li>
        - An <b>Angular</b> webapp for a mockup festival.
      </li>
      <li>
        - Fullstack.
      </li>
      <li>
        - Clear navigation throughout the whole webapp.
      </li>
      <li>
        - Use of <b>Firebase Cloud Storage</b> dynamically interacting with the <b>Angular</b> components.
      </li>
      <li>- <a target="_blank" href="https://werkstuk-jules-docx-angular.web.app/">URL</a>.</li>
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
        {url:'https://firebasestorage.googleapis.com/v0/b/werkstuk-jules-docx-vue.appspot.com/o/dots%201.jpg?alt=media&token=1bb722c6-a18b-4e34-93a5-5be6efd0c5a1', name: 'Frontpage'},
        {url:'https://firebasestorage.googleapis.com/v0/b/werkstuk-jules-docx-vue.appspot.com/o/dots%202.jpg?alt=media&token=a5ed8044-76f8-4d76-831d-1b419d28e930', name: 'Speakers details'},
        {url:'https://firebasestorage.googleapis.com/v0/b/werkstuk-jules-docx-vue.appspot.com/o/dots%203.jpg?alt=media&token=7f55439d-1299-4dad-a592-6696c38bc034', name: 'Line up'},
        {url:'https://firebasestorage.googleapis.com/v0/b/werkstuk-jules-docx-vue.appspot.com/o/dots%204.jpg?alt=media&token=7e0eccdd-c892-4768-899c-656782780632', name: 'Sponsors page'},
     ]
    }
  }
}
</script>

<style lang="scss" scoped>
</style>