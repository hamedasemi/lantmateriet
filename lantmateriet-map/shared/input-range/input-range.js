import { html, PolymerElement } from '../../../node_modules/@polymer/polymer/polymer-element.js'

export default class AppInputRange extends PolymerElement {

    static get template() {
        return html`
            <style include="shared-style">
                :host {
                    display: block;
                    width: 100%;
                    height: 2.4rem;
                    user-select: none;
                    position: relative;
                    margin-bottom: 1.1rem;
                }

                [track] {
                    position: relative;
                    width: 100%;
                    height: 100%;
                }

                [_track] {
                    position: absolute;
                    background: #b1b1b1;
                    width: 100%;
                    height: .5rem;
                    top: 0;
                    right: 0;
                    bottom: 0;
                    left:0;
                    margin: auto;
                }
                
                [_highlight] {
                    position: absolute;
                    background: #5c5c5c;
                    width: 100%;
                    height: .5rem;
                    top: 0;
                    right: 0;
                    bottom: 0;
                    left:0;
                    margin: auto;
                }

                [min-handle], [max-handle] {
                    pointer-events: none;
                    background-color: var(--basic-color);
                    box-shadow: 0 .2rem .5rem 0 rgba(0, 0, 0, 0.5);
                    position: absolute;
                    width: 2.4rem;
                    height: 2.4rem;
                    border-radius: 50%;
                    top: 0;
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
                }
            </style>

            <div track on-touchstart="mousedown" on-mousedown="mousedown">
                <div _track></div>
                <div highlight>
                    <div _highlight></div>
                </div>
                <div min-handle></div>
                <div max-handle></div>
            </div>
        `
    }

    static get properties() {
        return {
            min: {
                type: Number
            },
            max: {
                type: Number
            },
            name: {
                type: String
            }
        }
    }

    mousedown(e) {
        this.minHandle = this.shadowRoot.querySelector('[min-handle]')
        this.maxHandle = this.shadowRoot.querySelector('[max-handle]')
        this.highlight = this.shadowRoot.querySelector('[highlight]')
        this.mousemove(e)
        if (e.touches) {
            this.addEventListener('touchmove', this.mousemove)
            this.addEventListener('touchend', this.mouseup)
        } else {
            this.addEventListener('mousemove', this.mousemove)
            this.addEventListener('mouseup', this.mouseup)
        }

    }

    mousemove(e) {
        let offsetX
        if (e.touches) {
            offsetX = (e.touches[0].pageX - e.touches[0].target.offsetLeft) - (this.maxHandle.clientWidth / 2)
        } else {
            offsetX = e.offsetX - (this.maxHandle.clientWidth / 2)
        }

        if (offsetX < 0) {
            offsetX = 0
        } else if (offsetX > this.clientWidth - this.maxHandle.clientWidth) {
            offsetX = this.clientWidth - this.maxHandle.clientWidth
        }

        if (Math.abs(this.minHandle.offsetLeft - offsetX) <= Math.abs(this.maxHandle.offsetLeft - offsetX)) {
            this.minValue = offsetX + (this.minHandle.clientWidth / 2)
            this.highlight.style.left = offsetX + "px"
            this.highlight.style.width = Math.abs(offsetX - this.maxHandle.offsetLeft - this.maxHandle.clientWidth) + "px"
            this.minHandle.style.left = offsetX + "px"
            this.minValue = Math.round(((this.minValue - (this.minHandle.clientWidth / 2)) / this.clientWidth) * this.max)
            this.dispatchEvent(new CustomEvent('app-input-range-min', { bubbles: true, composed: true, detail: { name: this.name, value: this.minValue } }))
        } else {
            this.maxValue = offsetX + (this.maxHandle.clientWidth / 2)
            this.highlight.style.width = Math.abs(offsetX - this.minHandle.offsetLeft + this.minHandle.clientWidth) + "px"
            this.maxHandle.style.left = offsetX + "px"
            this.maxValue = Math.round(((this.maxValue + (this.minHandle.clientWidth / 2)) / this.clientWidth) * this.max)
            this.dispatchEvent(new CustomEvent('app-input-range-max', { bubbles: true, composed: true, detail: { name: this.name, value: this.maxValue } }))
        }

    }

    mouseup() {
        this.removeEventListener('mousemove', this.mousemove)
        this.removeEventListener('mouseup', this.mouseup)
    }
}

window.customElements.define('app-input-range', AppInputRange)
