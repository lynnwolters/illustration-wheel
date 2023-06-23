import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Flip } from 'gsap/Flip'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'

gsap.registerPlugin(ScrollTrigger)
gsap.registerPlugin(Flip)
gsap.registerPlugin(ScrollToPlugin)

export class ScrollWheel {
    constructor() {
        this.triggers = document.querySelectorAll('.js-trigger')
        this.cards = document.querySelectorAll('.js-card')
        this.cardsWheel = document.querySelectorAll('.js-card-wheel')
        this.init()
    }

    init = () => {
        this.scroll()
    }

    scroll = () => {
        this.triggers.forEach((item, index) => {
            let title = this.cards[index].querySelector('.js-title')
            let tl = gsap.timeline({
                scrollTrigger: {
                    trigger: item,
                    start: 'top top',
                    end: 'bottom top',
                    markers: true,
                    onEnter: () => {
                        tl
                        .to(this.cardsWheel, {rotation: `${-45 * index}`, duration: 2})
                        .to(title, {opacity: 1})
                        .fromTo(title, {y: 50}, {y: -0}, '-=.5')
                    },
                    onEnterBack: () => {
                        tl
                        .to(this.cardsWheel, {rotation: `${-45 * index}`, duration: 2})
                        .to(title, {opacity: 1})
                        .fromTo(title, {y: 50}, {y: -0}, '-=.5')
                    },
                    onLeave: () => {
                        tl
                        .to(title, {opacity: 0})
                    },
                    onLeaveBack: () => {
                        tl
                        .to(title, {opacity: 0})
                    },
                }
            })
        })
    }
}
































