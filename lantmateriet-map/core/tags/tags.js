import { html, PolymerElement } from '../../node_modules/@polymer/polymer/polymer-element.js';

export default class AppTags extends PolymerElement {

    static get template() {
        return html`
            <style include="shared-style">

                :host {
                    display: block;
                    grid-area: tags;
                }

            </style>
                tags
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

window.customElements.define('app-tags', AppTags)
