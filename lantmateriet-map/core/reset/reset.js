import { html, PolymerElement } from '../../../node_modules/@polymer/polymer/polymer-element.js'

export default class AppReset extends PolymerElement {

    static get is() { return 'app-reset' }

    static get template() {
        return html`
            <style include="shared-style">
                :host {
                    
                }

            </style>
            <app-button on-click="click">Återställ filtrering</app-button>
        `
    }

    static get properties() {
        return {}
    }

    click() {
        this.dispatchEvent(new CustomEvent('app-reset', { bubbles: true, composed: true, detail: {} }))
    }

}

window.customElements.define(AppReset.is, AppReset)
