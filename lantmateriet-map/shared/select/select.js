import { html, PolymerElement } from '../../../node_modules/@polymer/polymer/polymer-element.js'
import { } from '../../../node_modules/@polymer/polymer/lib/elements/dom-repeat.js'
import { } from '../../../node_modules/@polymer/polymer/lib/elements/dom-if.js'

import { } from '../icon/icon.js'

export default class AppSelect extends PolymerElement {

    static get template() {
        return html`
            <style include="shared-style">

                :host {
                    display: block;
                    position: relative;
                    margin-bottom: 2rem;
                }

                :host > [selected] {
                    background-color: #f8f8f8;
                    display: flex;
                    justify-content: space-between;
                    border: 1px solid black;
                    border-radius: .4rem;
                    padding: 2rem;
                }

                :host > [selected] svg {
                    height: 2rem;
                }
                :host [selected-nest] {
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }

                [options] {
                    z-index: 1;
                    display: none;
                    background-color: #f8f8f8;
                    padding: 1rem;
                    width: 100%;
                    border: 1px solid black;
                    border-top: 0;
                    border-bottom-right-radius: .4rem;
                    border-bottom-left-radius: .4rem;
                }

                [active][options] {
                    display: flex;
                    flex-direction: column;
                }

                input, span {
                    pointer-events: none;
                }

                [option] {
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    margin-bottom: 2rem;
                }

                [option] app-icon {
                    font-size: 4rem;
                    margin-right: 2rem;
                    pointer-events: none;
                }

                [button] {
                    padding: 2rem;
                    background: var(--basic-color);
                    color: white;
                    border-radius: .4rem;
                }

                svg {
                    width: 4rem;
                    height: 4rem;
                    flex-shrink: 0;
                    pointer-events: none;
                    color: var(--basic-color);
                    fill: currentColor;
                }

                [options] svg {
                    margin-right: 2rem;
                }

                svg[checked] {
                    display: none;
                }
                
                
                

            </style>
            <div selected on-click="selectedClick">
                    <dom-if if="[[!getSelectedStats(options)]]">
                        <template>
                            [[placeholder]] 
                        </template>
                    </dom-if>
                    <div selected-nest>
                <dom-repeat items="[[options]]" as="option">
                    <template>      
                        <dom-if if="[[option.selected]]">
                            <template>
                                <span>[[option.text]]</span>
                            </template>
                        </dom-if>
                    </template>
                </dom-repeat>
                </div>
                <svg viewBox="0 0 60 35">
                    <path fill="#333" fill-rule="evenodd" d="M57.236 6.4a3.236 3.236 0 0 0 0-4.582 3.2 3.2 0 0 0-4.509 0L29.091 25.455 5.455 1.818a3.2 3.2 0 0 0-4.564 0A3.164 3.164 0 0 0 0 4.11 3.2 3.2 0 0 0 .945 6.4l28.146 28.145L57.236 6.4z"/>
                </svg>

            </div>
           
            <div options active$="[[active]]">
                <dom-repeat items="[[options]]" as="option">
                    <template>      
                        <div option selected$="[[option.selected]]" on-click="optionClick" index="[[option.index]]">
                            <svg checked$="[[option.selected]]" viewBox="0 0 44 44">
                                <path d="M39.7375,43.5875 L4.125,43.5875 C2.0625,43.5875 0.4125,41.9375 0.4125,39.7375 L0.4125,4.2625 C0.4125,2.2 2.0625,0.55 4.125,0.4125 L39.7375,0.4125 C41.8,0.4125 43.5875,2.0625 43.5875,4.2625 L43.5875,39.7375 C43.45,41.8 41.8,43.5875 39.7375,43.5875 Z M4.125,2.475 C3.1625,2.475 2.475,3.3 2.475,4.125 L2.475,39.6 C2.475,40.5625 3.1625,41.25 4.125,41.25 L39.7375,41.25 C40.7,41.25 41.3875,40.425 41.3875,39.6 L41.3875,4.2625 C41.3875,3.3 40.5625,2.6125 39.7375,2.6125 L4.125,2.475 Z"></path>                           
                            </svg>
                            <svg checked$="[[!option.selected]]" viewBox="0 0 44 44">
                                <path d="M39.7375,43.5875 L4.125,43.5875 C2.0625,43.5875 0.4125,41.9375 0.4125,39.7375 L0.4125,4.2625 C0.4125,2.2 2.0625,0.55 4.125,0.4125 L39.7375,0.4125 C41.8,0.4125 43.5875,2.0625 43.5875,4.2625 L43.5875,39.7375 C43.45,41.8 41.8,43.5875 39.7375,43.5875 Z M4.125,2.475 C3.1625,2.475 2.475,3.3 2.475,4.125 L2.475,39.6 C2.475,40.5625 3.1625,41.25 4.125,41.25 L39.7375,41.25 C40.7,41.25 41.3875,40.425 41.3875,39.6 L41.3875,4.2625 C41.3875,3.3 40.5625,2.6125 39.7375,2.6125 L4.125,2.475 Z" id="Shape" fill-rule="nonzero"></path>
                                <path d="M17.05,35.2 L7.0125,25.1625 C5.9125,24.0625 5.9125,22.4125 7.0125,21.3125 C8.1125,20.2125 9.7625,20.2125 10.8625,21.3125 L16.775,27.225 L33.275,7.975 C34.1,6.6 35.75,6.325 37.125,7.15 C38.5,7.975 38.775,9.7625 37.8125,11 C37.675,11.1375 37.5375,11.4125 37.4,11.55 L17.05,35.2 Z" id="Path"></path>
                            </svg>
                            <span>[[option.text]]</span>
                        </div>
                    </template>
                </dom-repeat>
                <div button on-click="buttonClick">Spara filtrering</div>
            </div>
        `
    }

    static get properties() {
        return {
            options: {
                type: Array,
                value: () => { return [] }
            },
            placeholder: {
                type: String,
                value: ""
            }
        }
    }

    selectedClick() {
        this.active = !this.active
    }

    optionClick(e) {
        this.set(`options.${e.target.index}.selected`, !this.get(`options.${e.target.index}.selected`))
        let options = this.get('options')
        this.set('options', [])
        this.set('options', options)
    }

    buttonClick(e) {
        this.active = false
    }

    getSelectedStats(options) {
        let selectedStats = 0
        options.map((option) => {
            if (option.selected) {
                selectedStats++
            }
        })
        return selectedStats
    }
}

window.customElements.define('app-select', AppSelect)
