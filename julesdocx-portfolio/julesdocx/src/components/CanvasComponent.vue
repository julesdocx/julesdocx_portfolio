<template>
    <div id="canvas" class="box component">
        <canvas 
        id="myCanvas" 
        width="560" 
        height="360" 
        @mousedown="beginDrawing" 
        @mousemove="keepDrawing"
        @mouseup="stopDrawing" />
    </div>
</template>

<script>
    export default {
        name: 'Canvas',
        props: {
            canvas: Number,
            x: Number,
            y: Number,
            isDrawing: Boolean,
        },
        methods: {
            drawLine(x1, y1, x2, y2) {
                let ctx = this.canvas;
                ctx.beginPath();
                ctx.strokeStyle = 'black';
                ctx.lineWidth = 1;
                ctx.moveTo(x1, y1);
                ctx.lineTo(x2, y2);
                ctx.stroke();
                ctx.closePath();
            },
            beginDrawing(e) {
                this.x = e.offsetX;
                this.y = e.offsetY;
                this.isDrawing = true;
            },
            keepDrawing(e) {
                if (this.isDrawing === true) {
                    this.drawLine(this.x, this.y, e.offsetX, e.offsetY);
                    this.x = e.offsetX;
                    this.y = e.offsetY;
                }
            },
            stopDrawing(e) {
                if (this.isDrawing === true) {
                    this.drawLine(this.x, this.y, e.offsetX, e.offsetY);
                    this.x = 0;
                    this.y = 0;
                    this.isDrawing = false;
                }
            }
        },
        mounted() {
            var c = document.getElementById("myCanvas");
            this.canvas = c.getContext('2d');
        }
    }
</script>

<style lang="scss" scoped>
    #myCanvas {
        border: 1px solid grey;
    }
</style>