console.log('hello world')

let timeline = anime.timeline({
    duration: 3000,
    easing: 'easeInOutQuart'
}).add({
    targets: ['#heySVG'],
    keyframes: [
        {scale:0},
        {scale:90}
    ],
    duration: 2500
}).add({
    targets: ['feTurbulence', 'feDisplacementMap'],
    baseFrequency: 0, 
    numOctaves: 0,
    scale: 1,
}, '-=3000')


