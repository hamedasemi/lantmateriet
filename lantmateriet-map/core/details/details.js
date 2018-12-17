import { html, PolymerElement } from '../../../node_modules/@polymer/polymer/polymer-element.js';
import { } from '../../../node_modules/@polymer/polymer/lib/elements/dom-if.js'

export default class AppDetails extends PolymerElement {

    static get template() {
        return html`
            <style include="shared-style">

                :host {
                    display: flex;
                    flex-direction: column;
                    grid-area: details;
                    position: relative;
                    z-index: 10000;
                    height: 100%;
                }
                
                app-toggle {
                    position: absolute;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    right: 100%;
                    top: 17.7rem;
                    width: 8rem;
                    height: 8rem;
                    background: var(--accent-color);
                    color: white;
                    border-top-left-radius: .4rem;
                    border-bottom-left-radius: .4rem;
                }

                svg {
                    height: 50%;
                    width: 50%;
                    fill: currentColor;
                    transform: rotateZ(-90deg);
                    margin-bottom: .5rem;
                }

                :host([mode]) svg {
                    transform: rotateZ(90deg);
                }

                div {
                    height: 100%;
                    width: 100%;
                    position: relative;
                    overflow: hidden;
                    display: flex;
                    flex-direction: column;
                }

                [app-details-toggle] div {
                    background: red;
                    padding: 0;
                    overflow: hidden;
                }

                main {
                    overflow: auto;
                    display: block;
                    padding: 4rem;
                    display: flex;
                    flex-shrink: 0;
                    flex-direction: column;
                    height: 100%;
                }


                
            </style>

            <dom-if if="[[data]]">
                <template>
                    <app-toggle on-click="toggle">
                        <dom-if if="[[!mode]]">
                        <template>     
                            <svg viewBox="0 0 60 35">
                            <path d="M57.236 6.4a3.236 3.236 0 0 0 0-4.582 3.2 3.2 0 0 0-4.509 0L29.091 25.455 5.455 1.818a3.2 3.2 0 0 0-4.564 0A3.164 3.164 0 0 0 0 4.11 3.2 3.2 0 0 0 .945 6.4l28.146 28.145L57.236 6.4z"/>

                            </svg>
                            <span>Dölj</span>
                    </template>     
                        </dom-if>
                        <dom-if if="[[mode]]">
                        <template>     
                            <svg viewBox="0 0 60 35">
                            <path d="M57.236 6.4a3.236 3.236 0 0 0 0-4.582 3.2 3.2 0 0 0-4.509 0L29.091 25.455 5.455 1.818a3.2 3.2 0 0 0-4.564 0A3.164 3.164 0 0 0 0 4.11 3.2 3.2 0 0 0 .945 6.4l28.146 28.145L57.236 6.4z"/>

                            </svg>
                            <span>Visa</span>
                            </template>    
                        </dom-if>
                        
                        
                        
                    </app-toggle>
                    <div>
                        <main>
                            <h1>[[data.name]]</h1><br>
                            <p> A1 [[data.a1]]</p><br>
                            <p>B1 [[data.b1]]</p><br>
                            <p>Description [[data.description]]</p><br>
                            <p>E1 [[data.e1]]</p><br>
                            <p>E2 [[data.e2]]</p><br>
                            <p>E3 [[data.e3]]</p><br>
                            <p>E4 [[data.e4]]</p><br>
                        </main>
                    </div>
                </template>
            </dom-if>
           
        `
    }

    ready() {
        super.ready()
    }

    toggle() {
        this.mode = !this.mode
        this.dispatchEvent(new CustomEvent('app-details-toggle', { bubbles: true, composed: true, detail: {} }))
    }

    static get properties() {
        return {
            mode: {
                type: Boolean,
                value: true,
                reflectToAttribute: true
            },
            data: {
                type: Object,
                value: {}
            }
        }
    }
}

window.customElements.define('app-details', AppDetails)
