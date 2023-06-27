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

    startPageTransition = (image) => {
        let tl = gsap.timeline({})
            tl
            .to(image, {y: -100, ease: 'Power1.easeOut'})
            .to('.js-overlay', {y: '100%'})
            .to('.js-overlay', {y: '-100%'})
    }
}


