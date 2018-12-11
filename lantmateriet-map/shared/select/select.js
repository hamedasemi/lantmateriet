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
                    margin-bottom: 24px;
                }

                :host > [selected] {
                    background-color: #f8f8f8;
                    display: flex;
                    justify-content: space-between;
                    border: 1px solid black;
                    border-radius: 4px;
                    padding: 2rem;
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
                    padding: 11px;
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

                [option][selected] {

                }

                input, span {
                    pointer-events: none;
                }

                app-icon {
                    font-size: 2rem;
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

                input[type="checbox"] {
                    width: 4.4rem;
                    height: 4.4rem;
                }

                [button] {
                    padding: 2rem;
                    background: black;
                    color: white;
                    border-radius: .4rem;
                }

                app-icon[checked] {
                    display: none;
                }
                
                [selected] svg {
                    height: 2rem;
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
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 35">
                    <path fill="#333" fill-rule="evenodd" d="M57.236 6.4a3.236 3.236 0 0 0 0-4.582 3.2 3.2 0 0 0-4.509 0L29.091 25.455 5.455 1.818a3.2 3.2 0 0 0-4.564 0A3.164 3.164 0 0 0 0 4.11 3.2 3.2 0 0 0 .945 6.4l28.146 28.145L57.236 6.4z"/>
                </svg>

            </div>
           
            <div options active$="[[active]]">
                <dom-repeat items="[[options]]" as="option">
                    <template>      
                        <div option selected$="[[option.selected]]" on-click="optionClick" index="[[option.index]]">
                            <app-icon name="icon-check_box_outline_blank" checked$="[[option.selected]]"></app-icon>
                            <app-icon name="icon-check_box" checked$="[[!option.selected]]"></app-icon>
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
