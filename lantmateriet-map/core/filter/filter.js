import { html, PolymerElement } from '../../node_modules/@polymer/polymer/polymer-element.js';

export default class AppFilter extends PolymerElement {

    static get template() {
        return html`
            <style include="shared-style">

                :host {
                    display: block;
                    grid-area: filter;
                    flex-grow: 1;
                }

            </style>
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

window.customElements.define('app-filter', AppFilter)
