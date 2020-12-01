<template>
    <div class="box component">
        <div class="box"><h1> {{ msg }}</h1></div>

    </div>
</template>

<script>
    export default {
        name: 'Helloworld',
        props: {
            msg: [],
        }
    }
</script>

<style lang="scss" scoped>
    .component {
 
    }
</style>