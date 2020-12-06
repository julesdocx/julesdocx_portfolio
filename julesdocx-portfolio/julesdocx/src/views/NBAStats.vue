<template>
  <div class="work viewContainer">
    <h1>NBA Stats</h1>
     <p> 
    <ul>
      <li>
        - Saving certain stats comparison charts to the database using <b>MongoDB</b> and <b>Node Express</b>.
      </li>
      <li>
        - Uses an NBA (basketball) stats api, which can be found at sportsdata.io/nba-api.
      </li>
      <li>
        - Saves api endpoints instead of the data itself, which keeps it up to date.
      </li>
      <li>
        - The user can choose specific players and statistics, which are represented by two adjacent bar graphs.
      </li>
      <li>
        - The user can choose players and a specific statistics, which will be shown on a graph, next to each other.
      </li>
      <li>
        - <a target="_blank" href="https://github.com/julesdocx/nba-stats-project.git">Repository URL</a>.
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
        {url:'https://firebasestorage.googleapis.com/v0/b/werkstuk-jules-docx-vue.appspot.com/o/stats%201.jpg?alt=media&token=d9b0b55c-94cd-4345-89b7-8c99b5158a1e', name: 'Without data'},
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
</style>