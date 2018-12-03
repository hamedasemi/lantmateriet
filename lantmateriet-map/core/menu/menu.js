import { html, PolymerElement } from '../../../node_modules/@polymer/polymer/polymer-element.js';

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
                    /*box-shadow: 0px 0px 12px -5px;*/
                }
                
                app-toggle {
                    position: absolute;
                    /*box-shadow: 5px 0px 7px -6px;*/
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    left: 100%;
                    top: 77px;
                    width: 60px;
                    height: 60px;
                    background: orange;
                    color: white;
                    border-top-right-radius: 4px;
                    border-bottom-right-radius: 4px;
                }
                svg {
                    height: 50%;
                    width: 50%;
                    fill: white;

                }
                div {
                    height: 100%;
                    width: 100%;
                    position: relative;
                    overflow: hidden;
                    display: flex;
                    flex-direction: column;
                }

                [app-menu-toggle] div {
                    background: red;
                    padding: 0;
                    overflow: hidden;
                }

                main {
                    overflow: auto;
                    display: block;
                    height: 100vh;
                    padding: 24px;
                }


                
            </style>
            <app-toggle on-click="toggle">
                <svg viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                    <!-- <path d="M9.984 6l6 6-6 6-1.406-1.406 4.594-4.594-4.594-4.594z"></path> -->
                    <path d="M15.422 7.406l-4.594 4.594 4.594 4.594-1.406 1.406-6-6 6-6z"></path>

                </svg>
                
                <span>Dölj</span>
            </app-toggle>
            <div>
                <main>
                    <slot></slot>
                </main>
            </div>
           
        `
    }

    ready() {
        super.ready()
    }

    toggle() {
        this.dispatchEvent(new CustomEvent('app-menu-toggle', { bubbles: true, composed: true, detail: {} }))
    }

    static get properties() {
        return {}
    }
}

window.customElements.define('app-menu', AppMenu)
