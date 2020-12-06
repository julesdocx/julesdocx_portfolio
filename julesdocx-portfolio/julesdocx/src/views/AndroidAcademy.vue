<template>
  <div class="work viewContainer">
    <h1>Academy</h1>
     <p> 
    <ul>
      <li>
        Java in Android studio
      </li>
      <li>
        An Android application with a custom layout displaying a list of my artworks	
      </li>
      <li>
        The user could press on a high five button which would register in a Firebase Cloud Storage.
      </li>
      <li>
        <a target="_blank" href="https://github.com/julesdocx/android_werkstuk_augustus_2020">URL</a>
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
        {url:'https://firebasestorage.googleapis.com/v0/b/werkstuk-jules-docx-angular.appspot.com/o/Screenshot%202020-12-05%20182825.png?alt=media&token=3a9a4931-847a-4d0f-b450-8689a23ff0d0', name: 'List'},
        {url:'https://firebasestorage.googleapis.com/v0/b/werkstuk-jules-docx-angular.appspot.com/o/Screenshot%202020-12-05%20182938.png?alt=media&token=16544bb8-3405-4594-af5c-3d76932dc83b', name: 'Detail view'},
        {url:'https://firebasestorage.googleapis.com/v0/b/werkstuk-jules-docx-angular.appspot.com/o/Screenshot%202020-12-05%20183117.png?alt=media&token=6420e998-b3cf-4bde-a327-e34f715af31d', name: 'High-five Prompt'},
        {url:'https://firebasestorage.googleapis.com/v0/b/werkstuk-jules-docx-angular.appspot.com/o/Screenshot%202020-12-05%20183153.png?alt=media&token=49544713-48af-42c3-9984-34c2475cc18c', name: 'Layered views'},
      ]
    }
  }
}
</script>

<style lang="scss" scoped>

</style>