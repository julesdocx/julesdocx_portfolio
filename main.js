console.log('hello world')

let timeline = anime.timeline({
    duration: 4000,
    easing: 'easeInOutQuart'
})

timeline.add({
    targets: 'svg',
    keyframes: [
        {scale:0.3},
        {scale: 1}
    ],
    duration: 2500
})

timeline.add({
    targets: ['feTurbulence', 'feDisplacementMap'],
    baseFrequency: 0, 
    numOctaves: 0,
    scale: 1,
}, '-=4000')