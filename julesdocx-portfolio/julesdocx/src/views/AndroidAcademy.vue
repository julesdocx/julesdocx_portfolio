<template>
  <div class="work viewContainer">
    <h1>Academy</h1>
     <p> 
    <ul>
      <li>
        - Displaying a list of my artworks using <b>Java</b> in <b>Android studio</b>.
      </li>
      <li>
        - Custom layout.	
      </li>
      <li>
        - Users can press a high five button, which is then registered in a <b>Firebase Cloud Storage</b>.
      </li>
      <li>
        - <a target="_blank" href="https://github.com/julesdocx/android_werkstuk_augustus_2020">Repository URL</a>.
      </li>
    </ul>
 </p>
    <ImageSliderComponent :images="images" />
  </div>
</template>

<script>
import ImageSliderComponent from '../components/ImageSliderComponent.vue'

export default {
  name: 'NBAStats',
  components: {
    ImageSliderComponent
  },
  data() {
    return {
      images: [
        {url:'https://firebasestorage.googleapis.com/v0/b/werkstuk-jules-docx-angular.appspot.com/o/Tekengebied%201.jpg?alt=media&token=b602a696-d25d-42a5-82ba-470ddb3ee754', name: 'List'},
        {url:'https://firebasestorage.googleapis.com/v0/b/werkstuk-jules-docx-angular.appspot.com/o/Tekengebied%203.jpg?alt=media&token=663ec5a6-43c4-4f0e-85e8-c89647a5df03', name: 'Detail view'},
        {url:'https://firebasestorage.googleapis.com/v0/b/werkstuk-jules-docx-angular.appspot.com/o/Tekengebied%204.jpg?alt=media&token=f91ab8b6-2e1a-494d-950e-2b0f3a5cba4f', name: 'High-five prompt'},
        {url:'https://firebasestorage.googleapis.com/v0/b/werkstuk-jules-docx-angular.appspot.com/o/Tekengebied%202.jpg?alt=media&token=1cd8078b-2cfd-419d-9a1b-ff300698e37e', name: 'Layered views'},
      ]
    }
  }
}
</script>

<style lang="scss" scoped>

</style>