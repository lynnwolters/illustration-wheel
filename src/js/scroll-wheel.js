import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

// let tl = gsap.timeline({
//     scrollTrigger:{
//         trigger: 'body',
//         pin: true,
//         scrub: 6,
//     }
// })

// tl.to('.js-wheel', {rotation: 360})

// ScrollTrigger.defaults({
//     scroller: '.wheel'
// })

// gsap.to('.item-1', {
//     scrollTrigger: '.item-1', 
// })

// gsap.to('.item-2', {
//     scrollTrigger: '.item-2',  
// })

// gsap.to('.item-3', {
//     scrollTrigger: '.item-3',  
// })

// gsap.to('.item-4', {
//     scrollTrigger: '.item-4',  
// })

let items = gsap.utils.toArray('.item')

gsap.to(items, {
  xPercent: -100 * (items.length - 1),
    scrollTrigger: {
        trigger: 'body',
        pin: true,
        scrub: 1,
        snap: 1 / (items.length - 1),
    }
})














