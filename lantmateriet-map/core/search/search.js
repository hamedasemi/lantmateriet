import { html, PolymerElement } from '../../../node_modules/@polymer/polymer/polymer-element.js';
import { } from '../../../node_modules/@polymer/polymer/lib/elements/dom-repeat.js';
import { } from '../../../node_modules/@polymer/polymer/lib/elements/dom-if.js';

export default class AppSearch extends PolymerElement {

    static get template() {
        return html`
            <style include="shared-style">

                :host {
                    display: block;
                    grid-area: search;
                    position: relative;
                    margin-top: 4rem;
                    margin-bottom: 4rem;
                }

                input {
                    font-size: 2.4rem;
                    padding: 2rem;
                    width: 100%;
                    border: 1px solid;
                    border-radius: .4rem;
                    font-size: inherit;
                    outline: none;
                }

                svg {
                    position: absolute;
                    right: 1.2em;
                    top: 0.9em;
                    width: 3rem;
                    height: 3rem;
                }

            </style>
            
            <input type="text" placeholder="Sök på område" on-input="input">
            <dom-repeat items="[[autocompleteSuggestions]]">
                <template>
                    <div>[[item]]</div>
                </template>
            </dom-repeat>
                        
            <svg viewBox="0 0 23 23">
                <path fill="#333" fill-rule="nonzero" d="M22.65 20.95l-5.67-5.694a9.067 9.067 0 0 0 2.257-5.97C19.237 4.166 14.922 0 9.618 0 4.315 0 0 4.166 0 9.286c0 5.12 4.315 9.286 9.618 9.286 1.992 0 3.889-.58 5.511-1.68l5.713 5.737c.239.239.56.371.904.371.326 0 .635-.12.87-.338a1.183 1.183 0 0 0 .034-1.713zM9.618 2.421c3.92 0 7.11 3.08 7.11 6.864 0 3.785-3.19 6.864-7.11 6.864-3.92 0-7.109-3.079-7.109-6.864 0-3.785 3.19-6.864 7.11-6.864z"/>
            </svg>

                
            <slot></slot>
        `
    }

    ready() {
        super.ready()

    }

    static get properties() {
        return {
            autocompleteSuggestions: {
                type: Array
            }
        }
    }

    input(e) {
        if(e.target.value.length >= 3) {
            this.dispatchEvent(new CustomEvent('app-search', { bubbles: true, composed: true, detail: { value: event.target.value } }))
            this.dispatchEvent(new CustomEvent('app-search-autocomplete', { bubbles: true, composed: true, detail: { value: event.target.value } }))
        }
    }
}

window.customElements.define('app-search', AppSearch)
