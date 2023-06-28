import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

export class ScrollWheel {
    constructor() {
        this.triggers = document.querySelectorAll('.js-trigger')
        if (!this.triggers) {
            return false
        }
        this.cardWheel = document.querySelectorAll('.js-card-wheel')
        this.cards = document.querySelectorAll('.js-card')
        this.init()
    }

    init = () => {
        this.scrollWheel()
        this.showCardOneTitle() 
    }

    scrollWheel = () => {
        this.triggers.forEach((trigger, index) => {
            let titles = this.cards[index].querySelector('.js-title')
            let tl = gsap.timeline({
                scrollTrigger: {
                    trigger: trigger,
                    start: 'top top',
                    end: 'bottom top',
                    markers: false,
                    onEnter: () => {
                        tl
                        .to(this.cardWheel, {rotation: `${-45 * index}`, duration: 2})
                        .to(titles, {opacity: 1})
                        .fromTo(titles, {y: 30}, {y: -0}, '-=.5')
                    },
                    onEnterBack: () => {
                        tl
                        .to(this.cardWheel, {rotation: `${-45 * index}`, duration: 2})
                        .to(titles, {opacity: 1})
                        .fromTo(titles, {y: 30}, {y: -0}, '-=.5')
                    },
                    onLeave: () => {
                        tl.to(titles, {opacity: 0})
                    },
                    onLeaveBack: () => {
                        tl.to(titles, {opacity: 0})
                    },
                }
            })
        })
    }

    showCardOneTitle = () => {
        let cardOneTitle = this.cards[0].querySelector('.js-title')
        gsap.to(cardOneTitle, {opacity: 1})
    }
}
