import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

let triggers = document.querySelectorAll('.js-trigger')

triggers.forEach((item, index) => { 
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

    let tl2 = gsap.timeline({
        scrollTrigger: {
            trigger: item,
            start: 'top top',
            end: 'bottom top',
            markers: false,
            onEnter: () => {
                tl2
                .to('.js-title', { opacity: 1 })
            },
            onEnterBack: () => {
                tl2
                .to('.js-title', { opacity: 1 })
            },
            onLeave: () => {
                tl2
                .to('.js-title', { opacity: 0 })
            },
            onLeaveBack: () => {
                tl2
                .to('.js-title', { opacity: 0 })
            },
        }
    })
})






























