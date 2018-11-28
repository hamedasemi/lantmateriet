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

                :host [selected] {
                    border: 1px solid black;
                }
                [options] {
                }
            </style>
            <div selected>
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
            <div options>
                <dom-repeat items="[[options]]" as="option">
                    <template>
                        <div option selected$="[[option.selected]]">[[option.text]]</div>
                    </template>
                </dom-repeat>
            </div>
        `
    }

    ready() {
        super.ready()

    }

    static get properties() {
        return {
            options: {
                type: Array,
                value: [{
                    text: "Lorem, ipsum"
                }, {
                    text: "Aspernatur, iste",
                    selected: true
                }, {
                    text: "Deleniti, impedit"
                }, {
                    text: "Expedita, perspiciatis"
                }, {
                    text: "Molestiae, exercitationem"
                }]
            }
        }
    }
}

window.customElements.define('app-drop-down', AppDropDown)
