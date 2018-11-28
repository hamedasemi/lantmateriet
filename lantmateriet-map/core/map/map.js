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


        var map = L.map(this, {
            zoomControl: false,
            maxBounds: L.latLngBounds(L.latLng(45, 67), L.latLng(72, -35)),
            maxBoundsViscosity: 1.0
        }).setView([61.6794500443896, 16.375], 5)

        L.control.zoom({
            position: 'bottomright'
        }).addTo(map)

        L.tileLayer('http://{s}.tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png', {
            minZoom: 5, maxZoom: 18, attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(map)


        let landscapesLayer = {};
        let municipalitiesLayer = {};
        let countryLayer = {};

        fetch(new Request('lantmateriet-map/core/map/data/country.json'))
            .then(response => {
                if (response.status === 200) {
                    return response.json()
                } else {
                    throw new Error('Something went wrong on api server!')
                }
            })
            .then(response => {
                countryLayer = L.geoJSON(response, {
                    style: {
                        fillColor: "Gray",
                        color: "white"
                    }
                }).addTo(map)



            }).catch(error => {
                console.error(error)
            })

        map.on('zoom', (data) => {
            console.log('zoom', data.target._zoom)



            if (1 < data.target._zoom && data.target._zoom <= 5) {
                if (!map.hasLayer(countryLayer)) {
                    fetch(new Request('lantmateriet-map/core/map/data/country.json'))
                        .then(response => {
                            if (response.status === 200) {
                                return response.json()
                            } else {
                                throw new Error('Something went wrong on api server!')
                            }
                        })
                        .then(response => {
                            countryLayer = L.geoJSON(response, {
                                style: {
                                    fillColor: "Gray",
                                    color: "white"
                                }
                            }).addTo(map)



                        }).catch(error => {
                            console.error(error)
                        })
                }
                map.removeLayer(landscapesLayer)
                map.removeLayer(municipalitiesLayer)
            } else if (5 < data.target._zoom && data.target._zoom <= 7) {
                if (!map.hasLayer(landscapesLayer)) {
                    fetch(new Request('lantmateriet-map/core/map/data/landscapes.json'))
                        .then(response => {
                            if (response.status === 200) {
                                return response.json()
                            } else {
                                throw new Error('Something went wrong on api server!')
                            }
                        })
                        .then(response => {
                            landscapesLayer = L.geoJSON(response, {
                                style: {
                                    fillColor: "Gold",
                                    color: "White"
                                }
                            }).addTo(map)



                        }).catch(error => {
                            console.error(error)
                        })
                }
                map.removeLayer(countryLayer)
                map.removeLayer(municipalitiesLayer)
            } else if (7 < data.target._zoom && data.target._zoom <= 18) {
                if (!map.hasLayer(municipalitiesLayer)) {
                    fetch(new Request('lantmateriet-map/core/map/data/municipalities.json'))
                        .then(response => {
                            if (response.status === 200) {
                                return response.json()
                            } else {
                                throw new Error('Something went wrong on api server!')
                            }
                        })
                        .then(response => {
                            municipalitiesLayer = L.geoJSON(response, {
                                style: {
                                    fillColor: "DeepSkyBlue",
                                    color: "white"
                                }
                            }).addTo(map)



                        }).catch(error => {
                            console.error(error)
                        })
                }
                map.removeLayer(countryLayer)
                map.removeLayer(landscapesLayer)

            } else {
                map.removeLayer(landscapesLayer)
                map.removeLayer(municipalitiesLayer)
                map.removeLayer(countryLayer)
            }
        })
        window.dispatchEvent(new Event('resize'))
    }

    static get properties() {
        return {}
    }
}

window.customElements.define('app-map', AppMap)
