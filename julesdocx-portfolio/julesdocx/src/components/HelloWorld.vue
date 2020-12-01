<template>
    <div class="box component">
        <div class="box"><h1> {{ msg }}</h1></div>
        <div class="box"><h1> <img src="" alt=""> </h1></div>
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
        flex-direction: column;
        flex-wrap: wrap;
        margin: 10px;
        .box {
        }
        h1 {
            font-weight: 800;
            background: white;
        }
    }
</style>