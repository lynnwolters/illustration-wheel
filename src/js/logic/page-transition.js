import { gsap } from 'gsap'

export class PageTransition {
    constructor() {
        this.overlay = document.querySelectorAll('.js-overlay')
        if (!this.overlay) {
            return false
        }
        this.images = document.querySelectorAll('.js-image')
        this.imageOne = document.querySelector('.js-image-one')
        this.imageTwo = document.querySelector('.js-image-two')
        this.imageThree = document.querySelector('.js-image-three')
        this.imageFour = document.querySelector('.js-image-four')
        this.imageVife = document.querySelector('.js-image-vife')
        this.imageSix = document.querySelector('.js-image-six')
        this.imageSeven = document.querySelector('.js-image-seven')
        this.imageEight = document.querySelector('.js-image-eight')
        this.init()
    }

    init = () => {
        this.bindEvents()
    }

    bindEvents = () => {
        this.images.forEach(image => {
            image.addEventListener('click', () => {
                this.overlayColor(image)
                this.pageTransition(image)
            })
        })
    }

    overlayColor = (image) => {
        console.log('hello')
        this.overlayColor = ''
        if (image === this.imageOne) {
            this.overlayColor = '#C8D5F7'
        }
        if (image === this.imageTwo) {
            this.overlayColor = '#A1CB5B'
        }
        if (image === this.imageThree) {
            this.overlayColor = '#EBE9EC'
        }
        if (image === this.imageFour) {
            this.overlayColor = '#F7DBF4'
        }
        if (image === this.imageVife) {
            this.overlayColor = '#EBC4C5'
        }
        if (image === this.imageSix) {
            this.overlayColor = '#FAEDE5'
        }
        if (image === this.imageSeven) {
            this.overlayColor = '#92B4FE'
        }
        if (image === this.imageEight) {
            this.overlayColor = '#F0502C'
        }
        this.overlay.forEach(overlay => {
            overlay.style.backgroundColor = this.overlayColor
        })
    }

    pageTransition = (image) => {
        let tl = gsap.timeline({})
            tl
            .to(image, {y: -100, ease: 'Power1.easeOut'})
            .to('.js-overlay', {y: '100%'})
            .to('.js-overlay', {y: '-100%'})
    }
}




