<template>
    <div class="box component">
        <div class="box"><h1>text</h1></div>
        <div class="box"><h1>{{ msg }}</h1></div>
    </div>
</template>

<script>
    export default {
        name: 'Helloworld',
        props: {
            msg: String
        }
    }
</script>

<style lang="scss" scoped>
    .component {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
    }
</style>