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
        this.activateFirstTrigger(0)
        this.scrollWheel()
    }

    activateFirstTrigger = (index) => {
        let titles = this.cards[index].querySelector('.js-title')
        let tl = gsap.timeline()
        tl
        .to(titles, {opacity: 1}, '+=1')
        
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
                        this.activateFirstTrigger(index)
                        tl
                        .to(this.cardWheel, {rotation: `${-45 * index}`, duration: 2})
                        .fromTo(titles, {y: 30}, {y: -0}, '-=1')
                    },
                    onEnterBack: () => {
                        tl
                        .to(this.cardWheel, {rotation: `${-45 * index}`, duration: 2})
                        .to(titles, {opacity: 1})
                        .fromTo(titles, {y: 30}, {y: -0}, '-=1')
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
}
