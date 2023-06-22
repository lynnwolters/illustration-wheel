// de functie nieuwe pagina aanmaken en de oude pagina verwijderen valt weg door swup 
// swup vervangt de oude pagina met de nieuwe zonder de website te reloaden waardoor de browser niet weet dat er een nieuwe pagina is,
// gevolg is dat je geschreven javascript niet update
// om dit te fixen moet je de app laten weten dat alle content van de vorige pagina is vervangen

import Swup from 'swup' 
import { app } from '../main'

export class Router { 
    constructor () {
        this.swup = new Swup({}) 
        this.init() 
    }

    init = () => { 
        this.bindEvents() 
    }

    bindEvents = () => { 
        this.swup.on('contentReplaced', this.contentReplaced)
    }

    contentReplaced = () => {
        app.handleContentReplaced()
    }
}