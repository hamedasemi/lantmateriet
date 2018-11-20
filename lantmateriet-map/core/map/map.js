import { html, PolymerElement } from '../../node_modules/@polymer/polymer/polymer-element.js';

export default class AppMap extends PolymerElement {

    static get template() {
        return html`
            <style include="shared-style">

                :host {
                    display: block;
                    grid-area: map;
                    width: 100%;
                    height: 100%;
                }

            </style>

            <slot></slot>
        `
    }

    ready() {
        super.ready()

        var map = L.map(this).setView([51.505, -0.09], 13);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' }).addTo(map)

        L.marker([51.505, -0.09]).addTo(map)
            .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')

        window.dispatchEvent(new Event('resize'))

    }

    static get properties() {
        return {}
    }
}

window.customElements.define('app-map', AppMap)
