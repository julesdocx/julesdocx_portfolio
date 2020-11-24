<template>
  <div class="home">
    <CanvasComponent id="c"/>
    <HelloWorld/>
  </div>
</template>

<script>
// @ is an alias to /src
import CanvasComponent from '@/components/CanvasComponent.vue';
import HelloWorld from '@/components/HelloWorld.vue';
export default {
  name: 'Home',
  components: {
    HelloWorld,
    CanvasComponent
  }
}
</script>

<style lang="scss" scoped>
.home {
  display: flex;
  flex-direction: row;
  .component {
    display: block;
  }
}
</style>
