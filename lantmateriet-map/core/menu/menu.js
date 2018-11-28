import { html, PolymerElement } from '../../node_modules/@polymer/polymer/polymer-element.js';

export default class AppMenu extends PolymerElement {

    static get template() {
        return html`
            <style include="shared-style">

                :host {
                    display: flex;
                    flex-direction: column;
                    grid-area: menu;
                    position: relative;
                    
                    z-index: 10000;
                    box-shadow: 0px 0px 12px -5px;
                }

                app-toggle {
                    position: absolute;
                    box-shadow: 5px 0px 7px -6px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    left: 100%;
                    top: 11px;
                    width: 60px;
                    height: 60px;
                    background: white;
                    transform: rotate(-90deg);
                }
                svg {
                    height: 20px;
                    width: 30px;
                }
                div {
                    height: 100%;
                    width: 100%;
                    position: relative;
                    overflow: hidden;
                    display: flex;
                    flex-direction: column;
                }
            </style>
            <app-toggle>
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <path d="M23 14c-0.278 0-0.555-0.116-0.753-0.341l-6.247-7.14-6.247 7.14c-0.364 0.416-0.995 0.458-1.411 0.094s-0.458-0.995-0.094-1.411l7-8c0.19-0.217 0.464-0.341 0.753-0.341s0.563 0.125 0.753 0.341l7 8c0.364 0.416 0.322 1.047-0.094 1.411-0.19 0.166-0.424 0.247-0.658 0.247z"></path>
            </svg>

            </app-toggle>
            <div>
                <slot></slot>
            </div>
           
        `
    }

    ready() {
        super.ready()

    }

    static get properties() {
        return {}
    }
}

window.customElements.define('app-menu', AppMenu)
