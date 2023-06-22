import './style.scss'
import './styles/scroll-wheel.scss'
import './styles/swup.scss'

// hierin wordt de app aangemaakt / geinitalisseerd,
// dit gebeurt een keer, vandaar dat die in de domcontentloaded wordt gecalled

import { App } from './js/app'

export let app = null

function initApp() {
    app = new App()
}

document.addEventListener('DOMContentLoaded', () => {
    initApp()
})
