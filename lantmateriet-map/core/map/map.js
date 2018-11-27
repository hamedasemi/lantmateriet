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

        L.tileLayer('http://{s}.tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>' }).addTo(map)

        let yourUserDefinedLayerNameGoesHere;

        map.on('zoomend', (data) => {
            console.log('zoom', data.target._zoom)

            if (7 <= data.target._zoom && data.target._zoom <= 14) {
                if (!map.hasLayer(yourUserDefinedLayerNameGoesHere)) {
                    fetch(new Request('lantmateriet-map/core/map/data/municipalities.json'))
                        .then(response => {
                            if (response.status === 200) {
                                return response.json()
                            } else {
                                throw new Error('Something went wrong on api server!')
                            }
                        })
                        .then(response => {
                            yourUserDefinedLayerNameGoesHere = L.geoJSON(response, {
                            }).addTo(map)



                        }).catch(error => {
                            console.error(error)
                        })
                } else {

                }
            } else {
                map.removeLayer(yourUserDefinedLayerNameGoesHere)
            }
        })
        window.dispatchEvent(new Event('resize'))
    }

    static get properties() {
        return {}
    }
}

window.customElements.define('app-map', AppMap)
