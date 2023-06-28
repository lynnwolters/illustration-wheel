import { gsap } from 'gsap'

export class PageTransition {
    constructor() {
        this.overlay = document.querySelectorAll('.js-overlay')
        if (!this.overlay) {
            return false
        }
        this.activatePageTransition = document.querySelectorAll('.js-image')
        this.image = document.querySelectorAll('.js-image')
        this.cardWheel = document.querySelectorAll('.js-card-wheel')
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
        this.activatePageTransition.forEach((item) => {
            item.addEventListener('click', () => {
                this.overlayColor(item)
                this.pageTransition(item)
            })
        })
    }

    overlayColor = (item) => {
        this.overlayColor = ''
        if (item === this.imageOne) {
            this.overlayColor = '#C8D5F7'
        }
        if (item === this.imageTwo) {
            this.overlayColor = '#A1CB5B'
        }
        if (item === this.imageThree) {
            this.overlayColor = '#EBE9EC'
        }
        if (item === this.imageFour) {
            this.overlayColor = '#F7DBF4'
        }
        if (item === this.imageVife) {
            this.overlayColor = '#EBC4C5'
        }
        if (item === this.imageSix) {
            this.overlayColor = '#FAEDE5'
        }
        if (item === this.imageSeven) {
            this.overlayColor = '#92B4FE'
        }
        if (item === this.imageEight) {
            this.overlayColor = '#F0502C'
        }
        this.overlay.forEach((overlay) => {
            overlay.style.backgroundColor = this.overlayColor
        })
    }

    pageTransition = (item) => {
        let tl = gsap.timeline({})
        tl
        .to(item, {y: -150, duration: .4})
        .to(this.overlay, { y: '100%' })
        .to(this.overlay, { y: '-100%' })
    }
}
