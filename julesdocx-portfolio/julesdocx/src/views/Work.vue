<template>
  <div class="work viewContainer">
    <h1>Work</h1>
    <p> {{ data.werk_1.text }} </p>
  </div>
</template>

<script>
// @ is an alias to /src
import MyData from '../assets/myData.json';
console.log(MyData.work)

export default {
  name: 'Work',
  data () {
      return {
          data: MyData.work
      }
  }
}
</script>

<style lang="scss" scoped>
  .work {
    display: flex;
    flex-direction: column;
  }
  p {
      font-family:  Arial, sans-serif;
  }
</style>