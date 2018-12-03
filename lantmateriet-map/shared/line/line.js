import { html, PolymerElement } from '../../../node_modules/@polymer/polymer/polymer-element.js';

export default class AppLine extends PolymerElement {

    static get template() {
        return html`
            <style include="shared-style">

                :host {
                    display: block;
                    background: #dfe1e6;
                }

                :host([horizontal]) {
                    width: 100%;
                    height: 2px;
                }

                :host([vertical]) {
                    height: 100%;
                    width: 2px;
                }

                :host([margin-bottom]) {
                    margin-bottom: 24px;
                }

                :host([margin-top]) {
                    margin-top: 24px;
                }

            </style>
        `
    }

    ready() {
        super.ready()

    }

    static get properties() {
        return {}
    }
}

window.customElements.define('app-line', AppLine)
