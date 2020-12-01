<template>
  <div class="home">
    <HelloWorld msg="Prototypes" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
export default {
  name: 'Prototype',
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