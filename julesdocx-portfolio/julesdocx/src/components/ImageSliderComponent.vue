<template>
    <div id="slider">
        <input checked="" type="radio" name="slider" id="slide1" selected="false">
        <input type="radio" name="slider" id="slide2" selected="false">
        <input type="radio" name="slider" id="slide3" selected="false">
        <input type="radio" name="slider" id="slide4" selected="false">
        
        <label  
        v-for="(image, index) in images" 
        :key="index"
        :for="'slide'+(index+1)"
        class="fotoLabel">
            {{ image.name }}
        </label>
        <div id="slides">
            <div id="overflow">
                <div class="inner">
                    <article v-for="image in images" :key="image.name">
                        <content>
                            <img :src="image.url" :alt="image.name">
                        </content>
                    </article>
                    <!-- <article>
                        <content>
                            <img src="https://firebasestorage.googleapis.com/v0/b/werkstuk-jules-docx-vue.appspot.com/o/Screenshot%202020-12-02%20181923.png?alt=media&token=0dd43ac2-fc9f-4f25-8170-815b2c5480f9">
                        </content>
                    </article>
                    <article>
                        <content>
                            <img src="https://firebasestorage.googleapis.com/v0/b/werkstuk-jules-docx-vue.appspot.com/o/Screenshot%202020-12-02%20182119.png?alt=media&token=38962f02-fa2c-4064-8eff-66422dca72af">
                        </content>
                    </article>
                    <article>
                        <content>
                            <img src="https://firebasestorage.googleapis.com/v0/b/werkstuk-jules-docx-vue.appspot.com/o/Screenshot%202020-12-02%20182231.png?alt=media&token=0cd1e7d1-2aba-4ae2-a61e-0f3f0ea24cd6">
                        </content>
                    </article> -->
                </div> <!-- .inner -->
            </div> <!-- #overflow -->
        </div>
    </div>
</template>

<script>
    export default {
        name: 'ImageSliderComponent',
        props: {
            images: Array
        }
    }
</script>

<style lang="scss" scoped>
    * {
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        -ms-box-sizing: border-box;
        box-sizing: border-box;
    }

    #slider {
        max-width: 740px;
        text-align: left;
        width:100%;
        margin: 0px;

        #overflow {
            width: 100%;
            overflow: hidden;
            border: 1px solid black;
        }
        #slides .inner {
            width: 400%;
        }
        #slides .inner {
            -webkit-transform: translateZ(0);
            -moz-transform: translateZ(0);
            -o-transform: translateZ(0);
            -ms-transform: translateZ(0);
            transform: translateZ(0);
            -webkit-transition: all 800ms cubic-bezier(0.770, 0.000, 0.175, 1.000);
            -moz-transition: all 800ms cubic-bezier(0.770, 0.000, 0.175, 1.000);
            -o-transition: all 800ms cubic-bezier(0.770, 0.000, 0.175, 1.000);
            -ms-transition: all 800ms cubic-bezier(0.770, 0.000, 0.175, 1.000);
            transition: all 800ms cubic-bezier(0.770, 0.000, 0.175, 1.000);
            -webkit-transition-timing-function: cubic-bezier(0.770, 0.000, 0.175, 1.000);
            -moz-transition-timing-function: cubic-bezier(0.770, 0.000, 0.175, 1.000);
            -o-transition-timing-function: cubic-bezier(0.770, 0.000, 0.175, 1.000);
            -ms-transition-timing-function: cubic-bezier(0.770, 0.000, 0.175, 1.000);
            transition-timing-function: cubic-bezier(0.770, 0.000, 0.175, 1.000);
        }
        #slides article {
            width: 25%;
            float: left;
        }
        #slide1:checked~#slides .inner {
            margin-left: 0;
        }
        #slide2:checked~#slides .inner {
            margin-left: -100%;
        }
        #slide3:checked~#slides .inner {
            margin-left: -200%;
        }
        #slide4:checked~#slides .inner {
            margin-left: -300%;
        }
        input[type="radio"] {
            display: none;
        }
        label {
            background: #00ff18;
            margin: 0px 20px 20px 0px ;
            padding: 0px 10px;
            display: inline-block;
            cursor: pointer;
            font-family: Helvetica, Arial, sans-serif;
            //font-weight: 600;
        }
        label:hover {
            text-decoration: underline;
        }

        #slide1:checked~label[for="slide1"],
        #slide2:checked~label[for="slide2"],
        #slide3:checked~label[for="slide3"],
        #slide4:checked~label[for="slide4"] {
            background: white;
            border: 1px solid #000;
            text-decoration: none;
            user-select: none;
            cursor: initial;
           // font-weight: 800;
        }
        img{
            width:100%
        }
    }


    @media (max-width: 800px) {}
</style>