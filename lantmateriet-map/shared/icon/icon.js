import { html, PolymerElement } from '../../../node_modules/@polymer/polymer/polymer-element.js';

export default class AppIcon extends PolymerElement {
  
    static get template() {
        return html`
        <style>
            :host {
                color: inherit;
                font-size: inherit;
                display: inline-block;
                width: 1em;
                height: 1em;
                stroke-width: 0;
                stroke: currentColor;
                fill: currentColor;
            }
        </style>
        <svg viewBox="0 0 24 24">
            <use href$="/lantmateriet-map/assets/icons/icons.svg#[[name]]"></use>
        </svg>
        `
    }

    static get properties() {
        return {
            name: {
                type: String
            }
        }
    }
}

window.customElements.define('app-icon', AppIcon)