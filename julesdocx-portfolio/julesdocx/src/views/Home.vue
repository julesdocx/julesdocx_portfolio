<template>
  <div class="home">
    <HelloWorld msg="Hello &amp; Welcome" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
export default {
  name: 'Home',
  components: {
    HelloWorld,
  }
}
</script>

<style lang="scss" scoped>
  .home {
    display: flex;
    flex-direction: row;
  }
</style>
