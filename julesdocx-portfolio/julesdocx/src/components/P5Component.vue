<template>
    <div>
        <vue-p5 id='p5-canvas' @setup="setup" @draw="draw">
        </vue-p5>
    </div>
</template>

<script>
    import VueP5 from 'vue-p5';
    import OpenSimplexNoise from './OpenSimplexNoise.js'
    export default {
        name: 'Helloworld',
        components: {
            'vue-p5': VueP5
        },
        data(){
            return {
                docWidth: window.innerWidth,
                docHeight: window.innerHeight - 5,
                field: [],
                rez: 15,
                cols: 0, 
                rows: 0,
                increment: 0.05,
                zoff: 0,
                noise: {},
            }
        },
        methods: {
            setup(p5) {
                let width = document.body.offsetWidth;
                let height = document.body.offsetHeight;
                this.canvas = p5.createCanvas(width, height)
                this.noise = new OpenSimplexNoise.OpenSimplexNoise(Date.now());
                this.cols = 1 + width / this.rez;
                this.rows = 1 + height / this.rez;
                for (let i = 0; i < this.cols; i++) {
                    let k = [];
                    for (let j = 0; j < this.rows; j++) {
                    k.push(0);
                    }
                    this.field.push(k);
                }
            },
            drawLine(p5, v1, v2) {
                p5.stroke(230);
                p5.strokeWeight(1)
                // p5.line(v1.x, v1.y, v2.x, v2.y);
             p5.point(v1.x, v1.y);
             p5.point(v2.x, v2.y);
            },
            getState(a, b, c, d) {
                return a * 8 + b * 4 + c * 2 + d * 1;
            },
            draw(p5) {
                //p5.frameRate(0.001)
                p5.background(255);
                let xoff = 0;
                for (let i = 0; i < this.cols; i++) {
                    xoff += this.increment;
                    let yoff = 0;
                    for (let j = 0; j < this.rows; j++) {
                        this.field[i][j] = p5.float(this.noise.noise3D(xoff + p5.mouseX/2000, yoff + p5.mouseY/2000, this.zoff));
                        yoff += this.increment;
                    }
                }
                this.zoff += 0.005;

                for (let i = 0; i < this.cols; i++) {
                    for (let j = 0; j < this.rows; j++) {
                        //p5.fill(this.field[i][j]*200, this.field[i][j]*200,255);
                        p5.fill((this.field[i][j] + 1.1) * 255)
                        p5.noStroke();
                        //p5.stroke(0)
                        //p5.strokeWeight(1)
                        let mouseDist = p5.dist(i * this.rez, j * this.rez, p5.mouseX, p5.mouseY)
                        if(mouseDist < 120) {
                            p5.fill((this.field[i][j] + 0.9) * 255);
                            p5.ellipse(i * this.rez, j * this.rez, 3-mouseDist/100, 3-mouseDist/100);
                        } else if (((this.field[i][j] + 1.1) * 255) < 255 ) {
                            p5.ellipse(i * this.rez, j * this.rez, 3,  3);
                        }
                    }
                }

                for (let i = 0; i < this.cols - 1; i++) {
                    for (let j = 0; j < this.rows - 1; j++) {
                        let x = i * this.rez;
                        let y = j * this.rez;
                        let a = p5.createVector(x + this.rez * 0.5, y);
                        let b = p5.createVector(x + this.rez, y + this.rez * 0.5);
                        let c = p5.createVector(x + this.rez * 0.5, y + this.rez);
                        let d = p5.createVector(x, y + this.rez * 0.5);
                        let state = this.getState(
                            p5.ceil(this.field[i][j]),
                            p5.ceil(this.field[i + 1][j]),
                            p5.ceil(this.field[i + 1][j + 1]),
                            p5.ceil(this.field[i][j + 1])
                        );
                        switch (state) {
                            case 1:
                                this.drawLine(p5, c, d);
                                break;
                            case 2:
                                this.drawLine(p5, b, c);
                                break;
                            case 3:
                                this.drawLine(p5, b, d);
                                break;
                            case 4:
                                this.drawLine(p5, a, b);
                                break;
                            case 5:
                                this.drawLine(p5, a, d);
                                this.drawLine(p5, b, c);
                                break;
                            case 6:
                                this.drawLine(p5, a, c);
                                break;
                            case 7:
                                this.drawLine(p5, a, d);
                                break;
                            case 8:
                                this.drawLine(p5, a, d);
                                break;
                            case 9:
                                this.drawLine(p5, a, c);
                                break;
                            case 10:
                                this.drawLine(p5, a, b);
                                this.drawLine(p5, c, d);
                                break;
                            case 11:
                                this.drawLine(p5, a, b);
                                break;
                            case 12:
                                this.drawLine(p5, b, d);
                                break;
                            case 13:
                                this.drawLine(p5, b, c);
                                break;
                            case 14:
                                this.drawLine(p5, c, d);
                                break;
                        }
                    }

                }
            },
            render(h) {
                return h(VueP5, {
                    on: this
            });
        }
        }
    }
</script>

<style lang="scss" scoped>
    #p5-canvas {
        position: absolute;
        z-index: -1;
    }
</style>