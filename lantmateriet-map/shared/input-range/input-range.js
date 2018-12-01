import { html, PolymerElement } from '../../../node_modules/@polymer/polymer/polymer-element.js'

export default class AppInputRange extends PolymerElement {

    static get template() {
        return html`
            <style include="shared-style">
                :host {
                    display: block;
                    width: 100%;
                    height: 100%;
                    user-select: none;
                }

                [track] {
                    position: relative;
                    background: #5c5c5c;
                    width: 100%;
                    height: 100%;
                }

                [min-handle], [max-handle] {
                    pointer-events: none;
                    background-color: #f7f7f7;
                    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.5);
                    position: absolute;
                    width: 24px;
                    height: 24px;
                    border-radius: 50%;
                    top: 0;
                    z-index: 10;
                }

                [min-handle] {
                    left: 0;
                }

                [max-handle] {
                    right: 0;
                }
                [highlight] {
                    pointer-events: none;
                    position: absolute;
                    top: 0;
                    left: 0;
                    height: 100%;
                    width: 100%;
                    background: red;
                }
            </style>

            min: [[min]] max: [[max]]
            
            <div track on-mousedown="mousedown">
                <div highlight></div>
                <div min-handle></div>
                <div max-handle></div>
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
        this.highlight = this.shadowRoot.querySelector('[highlight]')
        this.mousemove(e)
        this.addEventListener('mousemove', this.mousemove)
        this.addEventListener('mouseup', this.mouseup)
    }

    mousemove(e) {
        let offsetX = e.offsetX - 12
        if (Math.abs(this.minHandle.offsetLeft - offsetX) <= Math.abs(this.maxHandle.offsetLeft - offsetX)) {
            this.min = offsetX
            this.highlight.style.left = offsetX + "px"
            console.log(this.track.clientWidth)
            this.highlight.style.width = Math.abs(offsetX - this.maxHandle.offsetLeft - 24) + "px"
            this.minHandle.style.left = offsetX + "px"
        } else {
            this.max = offsetX
            this.highlight.style.width = Math.abs(offsetX - this.minHandle.offsetLeft + 24) + "px"
            this.maxHandle.style.left = offsetX + "px"
        }

    }

    mouseup() {
        this.removeEventListener('mousemove', this.mousemove)
        this.removeEventListener('mouseup', this.mouseup)
    }
}

window.customElements.define('app-input-range', AppInputRange)
