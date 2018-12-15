// ------------------------------------------------------------------------------------------------------------------------------------------
// Configurations
// ------------------------------------------------------------------------------------------------------------------------------------------


// ------------------------------------------------------------------------------------------------------------------------------------------
// Imports
// ------------------------------------------------------------------------------------------------------------------------------------------
import { PolymerElement, html } from '../node_modules/@polymer/polymer/polymer-element.js'
import { } from './shared/style.js'

import { } from './core/user-agent/user-agent.js'

import { } from './core/aside/aside.js'
import { } from './core/filters/filters.js'
import { } from './core/footer/footer.js'
import { } from './core/header/header.js'
import { } from './core/logo/logo.js'
import { } from './core/map/map.js'
import { } from './core/menu/menu.js'
import { } from './core/details/details.js'
import { } from './core/search/search.js'
import { } from './core/tags/tags.js'
import { } from './core/title/title.js'

import { } from './shared/text/text.js'
import { } from './shared/line/line.js'
import { } from './shared/drop-down/drop-down.js'
import { } from './shared/select/select.js'
import { } from './shared/input-range/input-range.js'


// ------------------------------------------------------------------------------------------------------------------------------------------
// Initialize state
// ------------------------------------------------------------------------------------------------------------------------------------------
export default class LantmaterietMap extends PolymerElement {

    constructor() {
        super()


        // ------------------------------------------------------------------------------------------------------------------------------------------
        // Event listeners
        // ------------------------------------------------------------------------------------------------------------------------------------------
        this.addEventListener('app-menu-toggle', this.appMenuToggleHandler)
        this.addEventListener('app-details-toggle', this.appDetailsToggleHandler)
        this.addEventListener('app-search', this.appSearchHandler)
        this.addEventListener('app-fetch-details-plan', this.appFetchDetailsPlanHandler)
        this.addEventListener('app-search-autocomplete', this.appSearchAutocompleteHandler)
        this.addEventListener('app-input-range-min', this.appInputRangeMinHandler)
        this.addEventListener('app-input-range-max', this.appInputRangeMaxHandler)


        // ------------------------------------------------------------------------------------------------------------------------------------------
        // Initialize events
        // ------------------------------------------------------------------------------------------------------------------------------------------
    }

    ready() {
        super.ready()
        this.style.height = this.height
        this.style.width = this.width
    }

    // ------------------------------------------------------------------------------------------------------------------------------------------
    // App template
    // ------------------------------------------------------------------------------------------------------------------------------------------
    static get template() {
        return html`
            <style include="shared-style">
                :host {
                    --baseline: 24px;
                    --font-size: 2rem;
                    --line-height: calc(var(--baseline) / var(--font-size));
                    --accent-color: #e55721;
                    --basic-color: #333;

                    font-size: var(--font-size);
                    line-height: 1;
                    background: white;
                    display: grid;
                    grid-template-areas: "menu map details";
                    grid-template-columns: 50rem auto 50rem;
                    grid-template-rows: 100%;
                    border-top: 9px solid var(--accent-color);
                }

                @media only screen and (max-width: 1200px) {
                    html {
                        font-size: 50%;
                    }
                    :host {
                        grid-template-columns: 35rem auto;
                    }
                }

                @media only screen and (max-width: 768px) {
                    :host { 
                        grid-template-columns: 30rem auto;
                    }
                }

                :host([app-menu-toggle]:not([app-details-toggle])) {
                    grid-template-columns: 0 auto 50rem;
                }
                :host([app-details-toggle]:not([app-menu-toggle])) {
                    grid-template-columns: 50rem auto 0;
                }

                :host([app-menu-toggle][app-details-toggle]) {
                    grid-template-columns: 0 auto 0;
                }
            </style>
            
            <app-menu>
                <app-logo></app-logo>
                <app-line horizontal margin-top margin-bottom></app-line>
                <p>Filtrera sökning</p>
                <h4>Vad vill du se?</h4>
                <app-line horizontal margin-top></app-line>
                <app-search autocomplete-suggestions="[[state.autocompleteSuggestions]]"></app-search>
                <app-filters>
                    <app-line horizontal margin-bottom></app-line>
                    <app-select options="[[state.filter]]" placeholder="Välj närmiljö"></app-select>
                    <app-select options="[[state.filter2]]" placeholder="Välj typ av mark"></app-select>
                    <app-select options="[[state.filter3]]" placeholder="Välj anslutningar"></app-select>
                    <app-line horizontal margin-bottom></app-line>
                    <app-text margin-bottom>Tillåten byggnadshöjd</app-text>
                    <app-text margin-bottom center>[[state.permittedBuildingHeightMin]] m - [[state.permittedBuildingHeightMax]] m </app-text>
                    <app-input-range min="0" max="100" name="permittedBuildingHeight"></app-input-range>
                    <app-line horizontal margin-bottom></app-line>
                    <app-text margin-bottom>Tillåten nockhöjd</app-text>
                    <app-text margin-bottom center>[[state.allowableNockHeightMin]] m - [[state.allowableNockHeightMax]] m </app-text>
                    <app-input-range min="0" max="100" name="allowableNockHeight"></app-input-range>
                    <app-line horizontal margin-bottom></app-line>
                    <app-text margin-bottom>Tillåten byggnadsarea</app-text>
                    <app-text margin-bottom center>[[state.allowableBuildingAreaMin]] kvm - [[state.allowableBuildingAreaMax]]+ kvm </app-text>
                    <app-input-range min="0" max="500" name="allowableBuildingArea"></app-input-range>
                    <app-line horizontal margin-bottom></app-line>
                    <app-text margin-bottom>Tillåten tomtarea</app-text>
                    <app-text margin-bottom center>[[state.allowableLandAreaMin]] kvm - [[state.allowableLandAreaMax]]+ kvm </app-text>
                    <app-input-range min="0" max="10000" name="allowableLandArea"></app-input-range>
                </app-filters>                                                                
                <app-aside></app-aside>
                <app-footer></app-footer>
            </app-menu>
            <app-map address="[[state.address]]" data-geo-json="[[state.dataGeoJson]]"></app-map>
            <app-details>
                
            </app-details>

            <noscript>Your browser does not support JavaScript!</noscript>
        `
    }

    static get observers() {
        return [
            'stateUpdate(state.*)'
        ]
    }


    // ------------------------------------------------------------------------------------------------------------------------------------------
    // App properties
    // ------------------------------------------------------------------------------------------------------------------------------------------
    static get properties() {
        return {
            width: {
                value: "0px",
                type: String,
                reflectToAttribute: true
            },
            height: {
                value: "0px",
                type: String,
                reflectToAttribute: true
            },
            appMenuToggle: {
                value: false,
                type: Boolean,
                reflectToAttribute: true
            },
            appDetailsToggle: {
                value: true,
                type: Boolean,
                reflectToAttribute: true
            },
            state: {
                type: Object,
                value: {
                    autocompleteSuggestions: [],
                    permittedBuildingHeightMin: 0,
                    permittedBuildingHeightMax: 100,
                    allowableNockHeightMin: 0,
                    allowableNockHeightMax: 100,
                    allowableBuildingAreaMin: 0,
                    allowableBuildingAreaMax: 500,
                    allowableLandAreaMin: 0,
                    allowableLandAreaMax: 10000,
                    filter: [{
                        index: 0,
                        text: "Motorvägar",
                        selected: false
                    }, {
                        index: 1,
                        text: "Flygplatser",
                        selected: false
                    }, {
                        index: 2,
                        text: "Strandnära",
                        selected: false
                    }, {
                        index: 3,
                        text: "Havsnära",
                        selected: false
                    }, {
                        index: 4,
                        text: "Skolor",
                        selected: false
                    }, {
                        index: 5,
                        text: "Parker",
                        selected: false
                    }],
                    filter2: [{
                        index: 0,
                        text: "Privatägd mark",
                        selected: false
                    }, {
                        index: 1,
                        text: "Kommunalägd mark",
                        selected: false
                    }, {
                        index: 2,
                        text: "Bostäder",
                        selected: false
                    }, {
                        index: 3,
                        text: "Industri",
                        selected: false
                    }, {
                        index: 4,
                        text: "Naturområde",
                        selected: false
                    }, {
                        index: 5,
                        text: "Jordbruk",
                        selected: false
                    }, {
                        index: 6,
                        text: "Handel",
                        selected: false
                    }, {
                        index: 7,
                        text: "Strandskydd",
                        selected: false
                    }],
                    filter3: [{
                        index: 0,
                        text: "VA",
                        selected: false
                    }, {
                        index: 1,
                        text: "EL",
                        selected: false
                    }, {
                        index: 2,
                        text: "Fiberanslutning",
                        selected: false
                    }, {
                        index: 3,
                        text: "Kraftverk",
                        selected: false
                    }]
                }
            }
        }
    }


    // ------------------------------------------------------------------------------------------------------------------------------------------
    // Methods and functions
    // ------------------------------------------------------------------------------------------------------------------------------------------
    stateUpdate(update) {
        console.group("%c[STATE]", 'color: #16a085', new Date().toLocaleTimeString())
        console.log("%c[STATE Current]", 'color: #16a085', this.state)
        console.log("%c[STATE Update]", 'color: #16a085', update)
        console.groupEnd()
    }


    // ------------------------------------------------------------------------------------------------------------------------------------------
    // Handlers
    // ------------------------------------------------------------------------------------------------------------------------------------------
    appMenuToggleHandler() {
        this.appMenuToggle = !this.appMenuToggle
        window.dispatchEvent(new Event('resize'))
    }

    appDetailsToggleHandler() {
        this.appDetailsToggle = !this.appDetailsToggle
        window.dispatchEvent(new Event('resize'))
    }

    appFetchDetailsPlanHandler(e) {
        let request = new Request(`https://evry-lm-api.test.dropit.se/api/detail/search?lat1=${e.detail.lat1}&long1=${e.detail.long1}&lat2=${e.detail.lat2}&long2=${e.detail.long2}`, {
        })
        fetch(request)
            .then((response) => {
                if (response.status === 200) {
                    return response.json()
                }
            })
            .then((data) => {
                this.set('state.dataGeoJson', data.json.value)
            })
    }

    appSearchHandler() {
        this.set('state.address', [59.2431705430855, 18.275679196128674])
    }

    appSearchAutocompleteHandler(event) {
        let request = new Request(`https://evry-lm-api.test.dropit.se/api/detail/Find?type=detail&name=${event.detail.value}`, {
        })
        fetch(request)
            .then((response) => {
                if (response.status === 200) {
                    return response.json()
                }
            })
            .then((data) => {
                this.set('state.autocompleteSuggestions', data.json)
            })
    }

    appInputRangeMinHandler(event) {
        console.log(event.detail.name)
        this.set(`state.${event.detail.name}Min`, event.detail.value)
    }

    appInputRangeMaxHandler() {
        this.set(`state.${event.detail.name}Max`, event.detail.value)
    }
}


// ------------------------------------------------------------------------------------------------------------------------------------------
// App define
// ------------------------------------------------------------------------------------------------------------------------------------------
window.customElements.define('lantmateriet-map', LantmaterietMap)
