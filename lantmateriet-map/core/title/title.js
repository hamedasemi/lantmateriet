import { html, PolymerElement } from '../../../node_modules/@polymer/polymer/polymer-element.js';

export default class AppTitle extends PolymerElement {

    static get template() {
        return html`
            <style include="shared-style">

                :host {
                    display: block;
                    padding: 2rem 0;
                }

            </style>
            <slot></slot>
        `
    }
}

window.customElements.define('app-title', AppTitle)
