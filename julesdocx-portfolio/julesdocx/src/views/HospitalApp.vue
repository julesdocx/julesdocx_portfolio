<template>
  <div class="work viewContainer">
    <h1>IOS Hospitals</h1>
     <p> 
    <ul>
      <li>
        - Index of hospitals in Brussels using <b>Swift</b> in <b>XCode</b>. 
      </li>
      <li>
        - Each hospital has a detailed view, including its location pinned on a map.
      </li>
      <li>
        - Ability to add a hospital.
      </li>
      <li>
        - A second screen locates you and all nearby hospitals on a map.
      </li>
      <li>
        - <a target="_blank" href="https://github.com/julesdocx/werkstukios">URL</a>.
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
        {url:'https://firebasestorage.googleapis.com/v0/b/werkstuk-jules-docx-angular.appspot.com/o/ios%201.jpg?alt=media&token=eab17f13-2e20-4c05-8f2d-912c6430a265', name: 'List'},
        {url:'https://firebasestorage.googleapis.com/v0/b/werkstuk-jules-docx-angular.appspot.com/o/ios%202.jpg?alt=media&token=f4062bf7-2f2a-4458-814d-a6a2609d62e1', name: 'Details'},
        {url:'https://firebasestorage.googleapis.com/v0/b/werkstuk-jules-docx-angular.appspot.com/o/ios%204.jpg?alt=media&token=0b886a40-15d0-4f59-a59e-34c5e00d4f79', name: 'Hospitals map'},
        {url:'https://firebasestorage.googleapis.com/v0/b/werkstuk-jules-docx-angular.appspot.com/o/ios%203.jpg?alt=media&token=0aba41ec-32b1-4cea-95d9-c74c30a05bb1', name: 'Add hospital'},
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
</style>