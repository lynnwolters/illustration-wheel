import { gsap } from 'gsap'

export class PageTransition {
    constructor() {
        this.images = document.querySelectorAll('.js-image')
        this.init()
    }

    init = () => {
        this.bindEvents()
    }

    bindEvents = () => {
        this.images.forEach(image => {
            image.addEventListener('click', () => {
                this.startPageTransition(image)
            })
        })
    }

    overlayColor = () => {
        let overlayColor = ''
        if () {
            overlayColor = '#C8D5F7'
        }
    }

    startPageTransition = (image) => {
        let tl = gsap.timeline({})
            tl
            .to(image, {y: -100, ease: 'Power1.easeOut'})
            .to('.js-overlay', {y: '100%'})
            .to('.js-overlay', {y: '-100%'})
    }
}

// const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0
// if (isTouchDevice) {
//     console.log('On a touch device!')
//     rectangle.addEventListener('click', (event) => {
//         this.touchDeviceState(rectangle, event)
//     })
// } else {
//     console.log('Not on a touch device!')
// }


