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
        if (!this.triggers) {
            return false
        }
        this.cardsWheel = document.querySelectorAll('.js-card-wheel')
        this.cards = document.querySelectorAll('.js-card')
        this.init()
    }

    init = () => {
        this.firstTrigger(0)
        this.scroll()
    }

    firstTrigger = (index) => {
        let title = this.cards[index].querySelector('.js-title')
        let tl = gsap.timeline()
        tl
        .to(title, {opacity: 1}, '+=1')
        
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
                        this.firstTrigger(index)
                        tl
                        .to(this.cardsWheel, {rotation: `${-45 * index}`, duration: 2})
                        .fromTo(title, {y: 30}, {y: -0}, '-=1')
                    },
                    onEnterBack: () => {
                        tl
                        .to(this.cardsWheel, {rotation: `${-45 * index}`, duration: 2})
                        .to(title, {opacity: 1})
                        .fromTo(title, {y: 30}, {y: -0}, '-=1')
                    },
                    onLeave: () => {
                        tl.to(title, {opacity: 0})
                    },
                    onLeaveBack: () => {
                        tl.to(title, {opacity: 0})
                    },
                }
            })
        })
    }
}
