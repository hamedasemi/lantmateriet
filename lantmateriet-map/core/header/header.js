import { html, PolymerElement } from '../../node_modules/@polymer/polymer/polymer-element.js';

export default class AppHeader extends PolymerElement {

    static get template() {
        return html`
            <style include="shared-style">

                :host {
                    display: flex;
                    justify-content: flex-end;
                    grid-area: header;
                    
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

window.customElements.define('app-header', AppHeader)
