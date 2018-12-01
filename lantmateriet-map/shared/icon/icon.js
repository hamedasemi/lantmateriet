import { html, PolymerElement } from '../../../node_modules/@polymer/polymer/polymer-element.js'
import { } from '../../../node_modules/@polymer/polymer/lib/elements/dom-repeat.js'
import { } from '../../../node_modules/@polymer/polymer/lib/elements/dom-if.js'

export default class AppIcon extends PolymerElement {

    static get template() {
        return html`
            <style include="shared-style">
                :host {
                    display: inline-block;
                    max-height: 100%;
                    max-width: 100%;
                    min-height: 100%;
                    overflow: hidden;
                }
            </style>
 
            <svg width="100%" height="100%">
            <use id="use"></use>
            <!-- <use href$="./assets/icons/icons.svg#[[name]]"></use> -->
        </svg>
        `
    }

    static get properties() {
        return {
            icon: {
                type: String,
                observer: '_nameChanged'
            }
        }
    }

    _nameChanged(name) {
        this.$.use.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', '/lantmateriet-map/assets/icons/icons.svg#' + name)
    }
}

window.customElements.define('app-icon', AppIcon)
