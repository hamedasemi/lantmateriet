import { html, PolymerElement } from '../../../node_modules/@polymer/polymer/polymer-element.js';

export default class AppFilter extends PolymerElement {

    static get template() {
        return html`
            <style include="shared-style">

                :host {
                    display: block;
                    grid-area: filter;
                    flex-grow: 1;
                    padding: 22px;
                }

                ::slotted() app-drop-down{
                    margin-bottom: 11px;
                }

            </style>
            <slot></slot>
            <hr>
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
