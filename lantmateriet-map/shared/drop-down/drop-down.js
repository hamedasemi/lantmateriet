import { html, PolymerElement } from '../../../node_modules/@polymer/polymer/polymer-element.js'
import { } from '../../../node_modules/@polymer/polymer/lib/elements/dom-repeat.js'
import { } from '../../../node_modules/@polymer/polymer/lib/elements/dom-if.js'

export default class AppDropDown extends PolymerElement {

    static get template() {
        return html`
            <style include="shared-style">

                :host {
                    display: block;
                }

                :host > [selected] {
                    border: 1px solid black;
                    border-radius: 4px;
                    background-color: #f8f8f8;
                    padding: 11px;
                }
                [options] {
                    display: none;
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
