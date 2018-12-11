import { html, PolymerElement } from '../../../node_modules/@polymer/polymer/polymer-element.js'
import { } from '../../../node_modules/@polymer/polymer/lib/elements/dom-repeat.js'
import { } from '../../../node_modules/@polymer/polymer/lib/elements/dom-if.js'

export default class AppSelect extends PolymerElement {

    static get template() {
        return html`
            <style include="shared-style">

                :host {
                    display: block;
                }

            </style>
                select
        `
    }

    ready() {
        super.ready()
    }

    static get properties() {
        return {
        }
    }
}

window.customElements.define('app-select', AppSelect)
