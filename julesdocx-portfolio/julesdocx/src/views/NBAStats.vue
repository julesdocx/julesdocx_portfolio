<template>
  <div class="work viewContainer">
    <h1>NBA Stats</h1>
     <p> 
    <ul>
      <li>
        MongoDB and Node Express
      </li>
      <li>
        The project used an NBA (basketball) stats api, at sportsdata.io/nba-api
      </li>
      <li>
        The webapp allowed the user to save certain stats comparison charts to the database.
      </li>
      <li>
        The app saved api endpoints and not the data itself, which made the data always up to date.
      </li>
      <li>
        The user can choose players and a specific statistics, which will be shown on a graph, next to each other.
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