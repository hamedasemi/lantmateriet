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
            </style>

            min: [[min]] max: [[max]]
            
            <div track on-mousedown="mousedown">
                <div min-handle on-mousedown="minHandleMousedown"></div>
                <div max-handle on-mousedown="maxHandleMousedown"></div>
            </div>
        `
    }

    static get properties() {
        return {
        }
    }

    minHandleMousedown() {
        // console.log('minmousedown')
        // this.addEventListener('mousemove', this.minMousemove)
        // this.addEventListener('mouseup', this.minMouseup)

        // this.minHandle = this.shadowRoot.querySelector('[min-handle]')
    }
    
    maxHandleMousedown() {
        // console.log('maxmousedown')
        // this.addEventListener('mousemove', this.maxMousemove)
        // this.addEventListener('mouseup', this.maxMouseup)
        
        // this.maxHandle = this.shadowRoot.querySelector('[max-handle]')
    }

    // minMousemove(e) {
    //     console.log('minmousemove', e.offsetX)
    //     this.minHandle.style.pointerEvents = "none"
    //     this.minHandle.style.left = e.offsetX - 12 + "px"
    // }

    // maxMousemove(e) {
    //     console.log('maxmousemove', e.offsetX)
    //     this.maxHandle.style.pointerEvents = "none"
    //     this.maxHandle.style.left = e.offsetX - 12 + "px"
    // }

    // minMouseup() {
    //     console.log('minmouseup')
    //     this.removeEventListener('mousemove', this.minMousemove)
    //     this.removeEventListener('mouseup', this.minMouseup)
    //     this.minHandle.style.pointerEvents = "auto"
    // }

    // maxMouseup() {
    //     console.log('maxmouseup')
    //     this.removeEventListener('mousemove', this.maxMousemove)
    //     this.removeEventListener('mouseup', this.maxMouseup)
    //     this.maxHandle.style.pointerEvents = "auto"
    // }

    mousedown(e) {
        this.track = this
        this.minHandle = this.shadowRoot.querySelector('[min-handle]')
        this.maxHandle = this.shadowRoot.querySelector('[max-handle]')
        this.mousemove(e)
        this.addEventListener('mousemove', this.mousemove)
        this.addEventListener('mouseup', this.mouseup)
    }

    mousemove(e) {
        let offsetX = e.offsetX - 12
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
