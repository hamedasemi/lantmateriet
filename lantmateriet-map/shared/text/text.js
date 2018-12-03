import { html, PolymerElement } from '../../../node_modules/@polymer/polymer/polymer-element.js';

export default class AppText extends PolymerElement {

    static get template() {
        return html`
            <style include="shared-style">

                :host {
                    display: block;
                }

                :host([margin-bottom]) {
                    margin-bottom: 24px;
                }

                :host([center]) {
                    text-align: center;
                }
            </style>
            <slot></slot>
        `
    }
}

window.customElements.define('app-text', AppText)
