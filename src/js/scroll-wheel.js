import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

let triggers = document.querySelectorAll('.js-trigger')

triggers.forEach((item, index) => { 
    let onTitle = document.querySelectorAll('.js-title')
    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: item,
            start: 'top top',
            end: 'bottom top',
            markers: false,
            onEnter: () => {
                tl
                .to('.js-wheel', {rotation: `${45 * index}`, duration: 2,})
                .to(onTitle, { opacity: 1 })
            },
            onEnterBack: () => {
                tl
                .to('.js-wheel', {rotation: `${45 * index}`, duration: 2})
                .to(onTitle, { opacity: 1 })
            },
            onLeave: () => {
                tl
                .to(onTitle, { opacity: 0 })
            },
            onLeaveBack: () => {
                tl
                .to(onTitle, { opacity: 0 })
            },
        }
    })
})




























