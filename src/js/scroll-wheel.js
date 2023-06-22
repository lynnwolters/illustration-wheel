import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

let triggers = document.querySelectorAll('.js-trigger')
let cards = document.querySelectorAll('.js-card')

triggers.forEach((item, index) => {
    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: item,
            start: 'top top',
            end: 'bottom top',
            markers: false,
            onEnter: () => {
                tl
                // wheel
                .to('.js-wheel', {rotation: `${-45 * index}`, duration: 2})

                // show title
                .to(cards[index].querySelector('.js-title'), {opacity: 1}, '-=1')

                // move title
                .fromTo(cards[index].querySelector('.js-title'), {y: 50}, {y: -0}, '-=1')

                // show image
                .to(cards[index].querySelector('.js-image'), {opacity: 1}, '-=1')

                // scale image
                .to(cards[index].querySelector('.js-image'), {scale: 1.2}, '-=1')
            },
            onEnterBack: () => {
                tl
                // wheel
                .to('.js-wheel', {rotation: `${-45 * index}`, duration: 2})

                // show title
                .to(cards[index].querySelector('.js-title'), {opacity: 1}, '-=1')

                // move title
                .fromTo(cards[index].querySelector('.js-title'), {y: 50}, {y: -0}, '-=1')

                // show image
                .to(cards[index].querySelector('.js-image'), {opacity: 1}, '-=1')

                // scale image
                .to(cards[index].querySelector('.js-image'), {scale: 1.2}, '-=1')
            },
            onLeave: () => {
                tl
                // hide title
                .to(cards[index].querySelector('.js-title'), {opacity: 0})

                // hide image
                .to(cards[index].querySelector('.js-image'), {opacity: .5})

                // scale back image
                .to(cards[index].querySelector('.js-image'), {scale: 1}, '-=1')
            },
            onLeaveBack: () => {
                tl
                // hide title
                .to(cards[index].querySelector('.js-title'), {opacity: 0})

                // hide image
                .to(cards[index].querySelector('.js-image'), {opacity: .5})

                // scale back image
                .to(cards[index].querySelector('.js-image'), {scale: 1}, '-=1')
            },
        }
    })
})
































