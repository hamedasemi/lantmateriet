// ------------------------------------------------------------------------------------------------------------------------------------------
// Configurations
// ------------------------------------------------------------------------------------------------------------------------------------------


// ------------------------------------------------------------------------------------------------------------------------------------------
// Imports
// ------------------------------------------------------------------------------------------------------------------------------------------
import { PolymerElement, html } from './node_modules/@polymer/polymer/polymer-element.js'
import { } from './shared/style.js'

import { } from './core/user-agent/user-agent.js'

import { } from './core/aside/aside.js'
import { } from './core/details/details.js'
import { } from './core/filter/filter.js'
import { } from './core/footer/footer.js'
import { } from './core/logo/logo.js'
import { } from './core/map/map.js'
import { } from './core/search/search.js'
import { } from './core/tags/tags.js'

// ------------------------------------------------------------------------------------------------------------------------------------------
// Initialize state
// ------------------------------------------------------------------------------------------------------------------------------------------
export default class LantmaterietMap extends PolymerElement {

    constructor() {
        super()


        // ------------------------------------------------------------------------------------------------------------------------------------------
        // Event listeners
        // ------------------------------------------------------------------------------------------------------------------------------------------


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
                    --font-size: 16px;
                    --line-height: calc(var(--baseline) / var(--font-size));
                    
                    font-size: var(--font-size);
                    line-height: 1;
                    background: white;
                    display: grid;
                    grid-template-areas: "logo search tags aside" "filter map map details" "filter map map details" "footer footer footer footer";
                    grid-template-columns: 25rem 25rem auto 25rem;
                    grid-template-rows: 6rem 6rem auto 2rem;
                }

            </style>

            <app-aside></app-aside>
            <app-details></app-details>
            <app-filter></app-filter>
            <app-footer></app-footer>
            <app-logo></app-logo>
            <app-map></app-map>
            <app-search></app-search>
            <app-tags></app-tags>

            <noscript>Your browser does not support JavaScript!</noscript>
        `
    }

    static get observers() {
        return [
            'stateUpdateHandler(state.*)'
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
                refelectToAttribute: true
            },
            height: {
                value: "0px",
                type: String,
                refelectToAttribute: true
            },
            state: {
                type: Object,
                value: {}
            }
        }
    }


    // ------------------------------------------------------------------------------------------------------------------------------------------
    // Methods and functions
    // ------------------------------------------------------------------------------------------------------------------------------------------
    stateUpdateHandler(update) {
        console.group("%c[STATE]", 'color: #16a085', new Date().toLocaleTimeString())
        console.log("%c[STATE Current]", 'color: #16a085', this.state)
        console.log("%c[STATE Update]", 'color: #16a085', update)
        console.groupEnd()
    }
}


// ------------------------------------------------------------------------------------------------------------------------------------------
// App define
// ------------------------------------------------------------------------------------------------------------------------------------------
window.customElements.define('lantmateriet-map', LantmaterietMap)
