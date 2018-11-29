import { html, PolymerElement } from '../../../node_modules/@polymer/polymer/polymer-element.js'
import { } from '../../../node_modules/@polymer/polymer/lib/elements/dom-repeat.js'
import { } from '../../../node_modules/@polymer/polymer/lib/elements/dom-if.js'

export default class AppDropDown extends PolymerElement {

    static get template() {
        return html`
            <style include="shared-style">

                :host {
                    display: block;
                    position: relative;
                    
                }
                
                :host > [selected] {
                    background-color: #f8f8f8;
                    padding: 11px;
                    display: block;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    border: 1px solid black;
                    border-top-right-radius: 4px;
                    border-top-left-radius: 4px;
                }
                [options] {
                    z-index: 1;
                    display: none;
                    position: absolute;
                    background-color: #f8f8f8;
                    padding: 11px;
                    width: 100%;
                    box-shadow: 0px 5px 17px -5px;
                    border: 1px solid black;
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
            </style>
 
            <div selected on-click="selectedClick">
                <dom-if if="[[!getSelectedStats(options)]]">
                    <template>
                        [[placeholder]] 
                        <svg xmlns="http://www.w3.org/2000/svg" width="60" height="35" viewBox="0 0 60 35">
                            <path fill="#333" fill-rule="evenodd" d="M57.236 6.4a3.236 3.236 0 0 0 0-4.582 3.2 3.2 0 0 0-4.509 0L29.091 25.455 5.455 1.818a3.2 3.2 0 0 0-4.564 0A3.164 3.164 0 0 0 0 4.11 3.2 3.2 0 0 0 .945 6.4l28.146 28.145L57.236 6.4z"/>
                        </svg>

                    </template>
                </dom-if>
                <dom-repeat items="[[options]]" as="option">
                    <template>      
                        <dom-if if="[[option.selected]]">
                            <template>
                                <span>[[option.text]]</span>
                            </template>
                        </dom-if>
                    </template>
                </dom-repeat>
                <!-- <dom-if if="[[getSelectedStats(options)]]">
                    <template>
                        [[getSelectedStats(options)]] vald
                    </template>
                </dom-if> -->
            </div>
           
            <div options active$="[[active]]">
                <dom-repeat items="[[options]]" as="option">
                    <template>      
                        <div option selected$="[[option.selected]]" on-click="optionClick" index="[[option.index]]">
                            <input type="checkbox" checked$="[[option.selected]]">
                            <span>[[option.text]]</span>
                        </div>
                    </template>
                </dom-repeat>
            </div>
        `
    }

    ready() {
        super.ready()
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

    getSelectedStats(options) {
        let selectedStats = 0
        options.map((option) => {
            if (option.selected) {
                selectedStats++
            }
        })
        return selectedStats
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
}

window.customElements.define('app-drop-down', AppDropDown)
