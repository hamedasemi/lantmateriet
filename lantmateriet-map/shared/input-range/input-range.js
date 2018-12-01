import { html, PolymerElement } from '../../../node_modules/@polymer/polymer/polymer-element.js'

export default class AppInputRange extends PolymerElement {

    static get template() {
        return html`
            <style include="shared-style">
                :host {
                    display: block;
                    width: 100%;
                    height: 100%;
                }

                [track] {
                    position: relative;
                    background: gray;
                    width: 100%;
                    height: 100%;
                }
                [min-handle] {
                    pointer-events: none;
                    position: absolute;
                    background: red;
                    width: 8px;
                    height: 100%;
                    top: 0;
                    left: 0;
                    z-index: 10;
                }
                [max-handle] {
                    pointer-events: none;
                    position: absolute;
                    top: 0;
                    right: 0;
                    background: green;
                    width: 8px;
                    height: 100%;
                    z-index: 10;
                }
            </style>

            <hr>

            min: [[min]] max: [[max]]

            <div track on-mousedown="mousedown">
                <div min-handle ></div>
                <div max-handle on-mousedown="maxHandleMousedown"></div>
            </div>
        `
    }

    static get properties() {
        return {
        }
    }

    mousedown(e) {
        this.track = this
        this.minHandle = this.shadowRoot.querySelector('[min-handle]')
        this.maxHandle = this.shadowRoot.querySelector('[max-handle]')
        this.mousemove(e)
        this.addEventListener('mousemove', this.mousemove)
        this.addEventListener('mouseup', this.mouseup)
    }

    mousemove(e) {
        let offsetX = e.offsetX
        if (Math.abs(this.minHandle.offsetLeft - offsetX) <= Math.abs(this.maxHandle.offsetLeft - offsetX)) {
            this.min = offsetX
            this.minHandle.style.left = offsetX + "px"
        } else {
            this.max = offsetX
            this.maxHandle.style.left = offsetX + "px"
        }

    }

    mouseup() {
        this.removeEventListener('mousemove', this.mousemove)
        this.removeEventListener('mouseup', this.mouseup)
    }
}

window.customElements.define('app-input-range', AppInputRange)
