// ------------------------------------------------------------------------------------------------------------------------------------------
// Configurations
// ------------------------------------------------------------------------------------------------------------------------------------------


// ------------------------------------------------------------------------------------------------------------------------------------------
// Imports
// ------------------------------------------------------------------------------------------------------------------------------------------
import { PolymerElement, html } from './node_modules/@polymer/polymer/polymer-element.js'
import { } from './shared/style.js'

import { } from './core/user-agent/user-agent.js'


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

    connectedCallback() {
        super.connectedCallback()
        this.style.height = this.height
        this.style.width = this.width

        var map = L.map(this).setView([51.505, -0.09], 13);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        L.marker([51.5, -0.09]).addTo(map)
            .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
            .openPopup();
    }


    // ------------------------------------------------------------------------------------------------------------------------------------------
    // App template
    // ------------------------------------------------------------------------------------------------------------------------------------------
    static get template() {
        return html`
            <style include="shared-style">
                :root {
                    --baseline: 24px;
                    --font-size: 18px;
                    --line-height: calc(var(--baseline) / var(--font-size));
                }

                :host {
                    font-size: 2rem;
                    background: white;
                    display: block;
                    grid-template-areas: "header" "selector" "footer";
                    grid-template-columns: auto;
                    grid-template-rows: auto calc(100% - (var(--baseline) * 6)) auto;
                    grid-template-rows: auto;
                }

            </style>

            <script>
                if (window.customElements) {
                    window.customElements.forcePolyfill = true;
                }
                ShadyDOM = { force: true };
                ShadyCSS = { shimcssproperties: false };
            </script>
            
            <script src="../node_modules/@webcomponents/webcomponentsjs/webcomponents-loader.js"></script>

            <slot></slot>
                        
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
