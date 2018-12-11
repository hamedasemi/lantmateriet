import { html, PolymerElement } from '../../../node_modules/@polymer/polymer/polymer-element.js';
import { } from '../../../node_modules/@polymer/polymer/lib/elements/dom-if.js'

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
                    height: 100%;
                    
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
                    width: 8rem;
                    height: 8rem;
                    background: white;
                    color: orange;
                    border-top-right-radius: 4px;
                    border-bottom-right-radius: 4px;
                }
                svg {
                    height: 50%;
                    width: 50%;
                    fill: currentColor;

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
                    padding: 4rem;
                    display: flex;
                    flex-shrink: 0;
                    flex-direction: column;
                    height: 100%;
                }


                
            </style>
            <app-toggle on-click="toggle">
                <dom-if if="[[!mode]]">
                <template>     
                    <svg viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                        <path d="M15.422 7.406l-4.594 4.594 4.594 4.594-1.406 1.406-6-6 6-6z"></path>
                    </svg>
                    <span>Dölj</span>
            </template>     
                </dom-if>
                <dom-if if="[[mode]]">
                <template>     

                    <svg viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                        <path d="M9.984 6l6 6-6 6-1.406-1.406 4.594-4.594-4.594-4.594z"></path>
                    </svg>
                    <span>Visa</span>
                    </template>    
                </dom-if>
                
                
                
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
        this.mode = !this.mode
        this.dispatchEvent(new CustomEvent('app-menu-toggle', { bubbles: true, composed: true, detail: {} }))
    }

    static get properties() {
        return {
            mode: {
                type: Boolean,
                value: false
            }
        }
    }
}

window.customElements.define('app-menu', AppMenu)
