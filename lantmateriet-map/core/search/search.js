import { html, PolymerElement } from '../../node_modules/@polymer/polymer/polymer-element.js';

export default class AppSearch extends PolymerElement {

    static get template() {
        return html`
            <style include="shared-style">

                :host {
                    display: block;
                    grid-area: search;
                }

            </style>
            <input type="text" placeholder="Search">
            <slot></slot>
        `
    }

    ready() {
        super.ready()

    }

    static get properties() {
        return {}
    }
}

window.customElements.define('app-search', AppSearch)
