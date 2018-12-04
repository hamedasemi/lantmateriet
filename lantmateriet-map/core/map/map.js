import { html, PolymerElement } from '../../../node_modules/@polymer/polymer/polymer-element.js';

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
            // maxBounds: L.latLngBounds(L.latLng(45, 67), L.latLng(72, -35)),
            // maxBoundsViscosity: 1.0
        }).setView([61.6794500443896, 16.375], 5)

        this.map = map
        L.control.zoom({
            position: 'bottomright'
        }).addTo(map)

        L.tileLayer('http://{s}.tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png', {
            minZoom: 5, maxZoom: 18, attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(map)


        this.landscapesLayer = {};
        this.municipalitiesLayer = {};
        this.countryLayer = {};

        fetch(new Request('lantmateriet-map/core/map/data/country.json'))
            .then(response => {
                if (response.status === 200) {
                    return response.json()
                } else {
                    throw new Error('Something went wrong on api server!')
                }
            })
            .then(response => {
                this.countryLayer = L.geoJSON(response, {
                    style: {
                        fillColor: "orange",
                        color: "orange"
                    }
                }).addTo(map)



            }).catch(error => {
                console.error(error)
            })

        map.on('zoomend', (data) => {
            console.log('zoom', data.target._zoom)



            if (1 < data.target._zoom && data.target._zoom <= 5) {
                if (!map.hasLayer(this.countryLayer)) {
                    fetch(new Request('lantmateriet-map/core/map/data/country.json'))
                        .then(response => {
                            if (response.status === 200) {
                                return response.json()
                            } else {
                                throw new Error('Something went wrong on api server!')
                            }
                        })
                        .then(response => {
                            this.countryLayer = L.geoJSON(response, {
                                style: {
                                    fillColor: "orange",
                                    color: "orange"
                                }
                            }).addTo(map)



                        }).catch(error => {
                            console.error(error)
                        })
                }
                map.removeLayer(this.landscapesLayer)
                map.removeLayer(this.municipalitiesLayer)
            } else if (5 < data.target._zoom && data.target._zoom <= 7) {
                if (!map.hasLayer(this.landscapesLayer)) {
                    fetch(new Request('lantmateriet-map/core/map/data/landscapes.json'))
                        .then(response => {
                            if (response.status === 200) {
                                return response.json()
                            } else {
                                throw new Error('Something went wrong on api server!')
                            }
                        })
                        .then(response => {
                            this.landscapesLayer = L.geoJSON(response, {
                                style: {
                                    fillColor: "orange",
                                    color: "orange"
                                }
                            }).addTo(map)



                        }).catch(error => {
                            console.error(error)
                        })
                }
                map.removeLayer(this.countryLayer)
                map.removeLayer(this.municipalitiesLayer)
            } else if (7 < data.target._zoom && data.target._zoom <= 18) {
                if (!map.hasLayer(this.municipalitiesLayer)) {
                    fetch(new Request('lantmateriet-map/core/map/data/municipalities.json'))
                        .then(response => {
                            if (response.status === 200) {
                                return response.json()
                            } else {
                                throw new Error('Something went wrong on api server!')
                            }
                        })
                        .then(response => {
                            this.municipalitiesLayer = L.geoJSON(response, {
                                style: {
                                    fillColor: "orange",
                                    color: "orange"
                                }
                            }).addTo(map)



                        }).catch(error => {
                            console.error(error)
                        })
                }
                map.removeLayer(this.countryLayer)
                map.removeLayer(this.landscapesLayer)

            } else {
                map.removeLayer(this.landscapesLayer)
                map.removeLayer(this.municipalitiesLayer)
                map.removeLayer(this.countryLayer)
            }
        })
        window.dispatchEvent(new Event('resize'))
    }

    static get properties() {
        return {
            address: {
                type: Array,
                observer: 'addressObserver'
            }
        }
    }
    addressObserver() {
        if (this.address) {
            if (!this.map.hasLayer(this.detailsLayer)) {
                L.marker(this.address).addTo(this.map)
                this.map.setView(this.address, 17)
                setTimeout(() => {
                    this.detailsLayer = L.geoJSON(this.dataGeoJson, {
                        style: {
                            fillColor: "orange",
                            color: "orange"
                        },
                        onEachFeature: (feature, layer) => {
                            console.log(feature)
                            if(feature.properties.description === 'Vidjan 3') {
                                layer.setStyle({
                                    fillColor: 'red',
                                })
                            }
                        }
                    }).addTo(this.map)
                }, 1000);
            }
            this.map.removeLayer(this.landscapesLayer)
            this.map.removeLayer(this.municipalitiesLayer)
            this.map.removeLayer(this.countryLayer)
        }
    }
}

window.customElements.define('app-map', AppMap)
