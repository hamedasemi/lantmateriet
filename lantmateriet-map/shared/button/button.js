import { html, PolymerElement } from '../../../node_modules/@polymer/polymer/polymer-element.js'

export default class AppButton extends PolymerElement {

    static get is () { return 'app-button'}

    static get template() {
        return html`
            <style include="shared-style">
                :host {
                    display: block;
                    border-radius: 4px;
                    box-shadow: 0 1px 4px 1px rgba(0, 0, 0, 0.5);
                    background-color: #ffffff;
                    padding: 2rem;
                    text-align: center;
                    cursor: pointer;
                    font-size: 2rem;
                }

            </style>
            <slot></slot>
        `
    }

    static get properties() {
        return {}
    }

}

window.customElements.define(AppButton.is, AppButton)
