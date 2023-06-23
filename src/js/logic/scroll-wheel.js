import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Flip } from 'gsap/Flip'
gsap.registerPlugin(ScrollTrigger)
gsap.registerPlugin(Flip)

export class ScrollWheel {
    constructor() {
        this.triggers = document.querySelectorAll('.js-trigger')
        this.cards = document.querySelectorAll('.js-card')
        this.button = document.querySelector('.js-continue')
        this.init()
    }

    init = () => {
        this.scroll()
        this.bindEvents()
    }

    bindEvents = () => {
        this.button.addEventListener('click', () => {
            this.flip()
        })
    }

    flip = () => {
        const state = Flip.getState('.js-begin-state')
        let beginState = document.querySelector('.js-begin-state')
        beginState.classList.add('flip')
        Flip.from(state, {
            duration: 0.5, 
            ease: 'power1.inOut'
        })
    }

    scroll = () => {
        this.triggers.forEach((item, index) => {
            let title = this.cards[index].querySelector('.js-title')
            let image = this.cards[index].querySelector('.js-image')
            let snap = gsap.utils.snap([100, 50, 500])
            let tl = gsap.timeline({
                scrollTrigger: {
                    trigger: item,
                    start: 'top top',
                    end: 'bottom top',
                    markers: true,
                    onEnter: () => {
                        tl
                        // wheel
                        .to('.js-wheel', {rotation: `${-45 * index}`, duration: 2, snap: 65})
        
                        // show title
                        .to(title, {opacity: 1}, '-=1')
        
                        // move title
                        .fromTo(title, {y: 50}, {y: -0}, '-=1')
        
                        // show image
                        .to(image, {opacity: 1}, '-=1')
        
                        // scale image
                        .to(image, {scale: 1.2}, '-=1')
                    },
                    onEnterBack: () => {
                        tl
                        // wheel
                        .to('.js-wheel', {rotation: `${-45 * index}`, duration: 2})
        
                        // show title
                        .to(title, {opacity: 1}, '-=1')
        
                        // move title
                        .fromTo(title, {y: 50}, {y: -0}, '-=1')
        
                        // show image
                        .to(image, {opacity: 1}, '-=1')
        
                        // scale image
                        .to(image, {scale: 1.2}, '-=1')
                    },
                    onLeave: () => {
                        tl
                        // hide title
                        .to(title, {opacity: 0})
        
                        // hide image
                        .to(image, {opacity: .5})
        
                        // scale back image
                        .to(image, {scale: 1}, '-=1')
                    },
                    onLeaveBack: () => {
                        tl
                        // hide title
                        .to(title, {opacity: 0})
        
                        // hide image
                        .to(image, {opacity: .5})
        
                        // scale back image
                        .to(image, {scale: 1}, '-=1')
                    },
                }
            })
        })
    }
}
































