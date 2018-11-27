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

        var map = L.map(this).setView([61.6794500443896, 16.375], 5)

        map.on('zoom', (data) => {
            console.log('zoom', data.target._zoom)
        })

        L.tileLayer('http://{s}.tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>' }).addTo(map)

        fetch(new Request('lantmateriet-map/core/map/data/municipalities.json'))
            .then(response => {
                if (response.status === 200) {
                    return response.json();
                } else {
                    throw new Error('Something went wrong on api server!');
                }
            })
            .then(response => {
                L.geoJSON(response, {
                }).addTo(map);

                window.dispatchEvent(new Event('resize'))

            }).catch(error => {
                console.error(error);
            });
    }

    static get properties() {
        return {}
    }
}

window.customElements.define('app-map', AppMap)
