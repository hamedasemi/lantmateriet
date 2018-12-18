import { html, PolymerElement } from '../../../node_modules/@polymer/polymer/polymer-element.js';
import { } from '../../../node_modules/@polymer/polymer/lib/elements/dom-if.js'

export default class AppDetails extends PolymerElement {

    static get template() {
        return html`
            <style include="shared-style">

                :host {
                    display: flex;
                    flex-direction: column;
                    grid-area: details;
                    position: relative;
                    z-index: 10000;
                    height: 100%;
                }

                app-toggle {
                    position: absolute;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    right: 100%;
                    top: 17.7rem;
                    width: 8rem;
                    height: 8rem;
                    background: var(--accent-color);
                    color: white;
                    border-top-left-radius: .4rem;
                    border-bottom-left-radius: .4rem;
                }

                svg {
                    height: 50%;
                    width: 50%;
                    fill: currentColor;
                    transform: rotateZ(-90deg);
                    margin-bottom: .5rem;
                }

                :host([mode]) svg {
                    transform: rotateZ(90deg);
                }

                div {
                    height: 100%;
                    width: 100%;
                    position: relative;
                    overflow: hidden;
                    display: flex;
                    flex-direction: column;
                }

                [app-details-toggle] div {
                    background: red;
                    padding: 0;
                    overflow: hidden;
                }

                main {
                    overflow: auto;
                    display: block;
                    padding: 2rem 0;
                    display: flex;
                    flex-shrink: 0;
                    flex-direction: column;
                    height: 100%;                    
                }

                div-plan, div-detail {
                  padding: 1rem 5rem 2rem 4rem;
                  line-height: 1.25;
                }

                span-expandable {                  
                  width: 100%;
                  border-bottom: 2px #dfe1e6 solid;   
                }

                span-expandable:first-of-type {
                  border-top: 2px #dfe1e6 solid;
                }

                span-expand {
                  padding: 2rem 6rem 2rem 4rem;
                  width: 100%;
                  display: block;
                }

                div-button a {
                  margin: 0 auto;
                  display: block;
                  border-radius: 4px;
                  box-shadow: 0 1px 4px 1px rgba(0, 0, 0, 0.5);
                  background-color: #ffffff;
                  padding: 2rem;
                  text-align: center;
                  cursor: pointer;
                  font-size: 2rem;
                  color: #333;
                  text-decoration: none;
                }

                div-button {
                  margin: 0 4rem;
                  padding: 1rem;
                }

                div-button:last-of-type {
                  padding-bottom: 4rem;
                  border-bottom: 2px #dfe1e6 solid;

                }

                p {
                  color: #5c5c5c;
                }

                h1, h2 {
                  color: #333333;
                  font-weight: normal;
                  padding: 1rem 0;
                }

                span-expandable p {
                  line-height: 1.25;
                  padding: 0 6rem 2rem 4rem;
                }

                span-expandable svg {
                  transform: rotateZ(-0deg);
                  float: right;
                  margin: 1rem 2rem;
                  width: 4rem;
                  height: 4rem;
                  flex-shrink: 0;
                  pointer-events: none;
                  color: var(--basic-color);
                  fill: currentColor;
                }

            </style>

            <dom-if if="[[data]]">
                <template>
                    <app-toggle on-click="toggle">
                        <dom-if if="[[!mode]]">
                        <template>
                            <svg viewBox="0 0 60 35">
                            <path d="M57.236 6.4a3.236 3.236 0 0 0 0-4.582 3.2 3.2 0 0 0-4.509 0L29.091 25.455 5.455 1.818a3.2 3.2 0 0 0-4.564 0A3.164 3.164 0 0 0 0 4.11 3.2 3.2 0 0 0 .945 6.4l28.146 28.145L57.236 6.4z"/>

                            </svg>
                            <span>Dölj</span>
                    </template>
                        </dom-if>
                        <dom-if if="[[mode]]">
                        <template>
                            <svg viewBox="0 0 60 35">
                            <path d="M57.236 6.4a3.236 3.236 0 0 0 0-4.582 3.2 3.2 0 0 0-4.509 0L29.091 25.455 5.455 1.818a3.2 3.2 0 0 0-4.564 0A3.164 3.164 0 0 0 0 4.11 3.2 3.2 0 0 0 .945 6.4l28.146 28.145L57.236 6.4z"/>

                            </svg>
                            <span>Visa</span>
                            </template>
                        </dom-if>



                    </app-toggle>
                    <div>
                        <main>    
                        <div-plan> 
                          <h2>Tillhörande dokument</h2>
                          </div-plan>
                          <div-button>
                            <a target="_blank" href="https://www.tyreso.se/download/18.30e89035160c7b7e3044aa2c/1522233342947/267_Omr%C3%A5de%20vid%20Videv%C3%A4gen_1_Plankarta.pdf">Plankarta 1 av 2 </a>
                          </div-button> 
                          <div-button>
                            <a target="_blank" href="https://www.tyreso.se/download/18.30e89035160c7b7e3044aa2d/1522233343368/267_Omr%C3%A5de%20vid%20Videv%C3%A4gen_2_Plankarta.pdf">Plankarta 2 av 2</a>
                          </div-button> 
                          <div-button>
                            <a target="_blank" href="https://www.tyreso.se/download/18.30e89035160c7b7e3044aa2f/1522233343305/267_Omr%C3%A5de%20vid%20Videv%C3%A4gen_Planbeskrivning.PDF">Se planbeskrivning </a>
                          </div-button>  
                          <div-button>
                            <a target="_blank" href="https://www.tyreso.se/download/18.30e89035160c7b7e3044aa2e/1522233343340/267_Omr%C3%A5de%20vid%20Videv%C3%A4gen_Genomf%C3%B6randebeskrivning.PDF">Genomförandebeskrivning </a>
                          </div-button> 
                          
                          

                            <div-plan>
                              <h2>Planbestämmelser</h2>
                              <p>Följande gäller inom områden med nedanstående beteckningar. Endast angiven användning och utformning är tillåten. Bestämmelser utan beteckning gäller inom hela området.</p>
                            </div-plan>

                            <dom-if if="[[data.a1]]">
                              <template>
                              <span-expandable >
                              <svg viewBox="0 0 60 35">
                                <path fill="#333" fill-rule="evenodd" d="M57.236 6.4a3.236 3.236 0 0 0 0-4.582 3.2 3.2 0 0 0-4.509 0L29.091 25.455 5.455 1.818a3.2 3.2 0 0 0-4.564 0A3.164 3.164 0 0 0 0 4.11 3.2 3.2 0 0 0 .945 6.4l28.146 28.145L57.236 6.4z"/>
                              </svg>
                              <span-expand on-click="expand" data-item="a1">Grundkarta</span-expand>
                              
                              <dom-if if="[[a1]]">
                                <template>
                                  <p>[[data.a1]]</p>
                                </template>
                              </dom-if>
                            </span-expandable> 
                              </template>
                            </dom-if>
                            
                            
                            <dom-if if="[[data.description]]">
                              <template>
                              <span-expandable>
                              <svg viewBox="0 0 60 35">
                                <path fill="#333" fill-rule="evenodd" d="M57.236 6.4a3.236 3.236 0 0 0 0-4.582 3.2 3.2 0 0 0-4.509 0L29.091 25.455 5.455 1.818a3.2 3.2 0 0 0-4.564 0A3.164 3.164 0 0 0 0 4.11 3.2 3.2 0 0 0 .945 6.4l28.146 28.145L57.236 6.4z"/>
                              </svg>
                              <span-expand on-click="expand" data-item="description">Beskrivning</span-expand>
                              <dom-if if="[[description]]">
                                <template>
                                  <p>[[data.description]]</p>
                                </template>
                              </dom-if>
                            </span-expandable>
                              </template>
                            </dom-if>
                            

                            <dom-if if="[[data.e1]]">
                              <template>
                              <span-expandable>
                              <svg viewBox="0 0 60 35">
                                <path fill="#333" fill-rule="evenodd" d="M57.236 6.4a3.236 3.236 0 0 0 0-4.582 3.2 3.2 0 0 0-4.509 0L29.091 25.455 5.455 1.818a3.2 3.2 0 0 0-4.564 0A3.164 3.164 0 0 0 0 4.11 3.2 3.2 0 0 0 .945 6.4l28.146 28.145L57.236 6.4z"/>
                              </svg>
                              <span-expand on-click="expand" data-item="e1">Utnyttjandegrad/fastighetsindelning</span-expand>
                              <dom-if if="[[e1]]">
                                <template>
                                  <p>[[data.e1]]</p>
                                </template>
                              </dom-if>
                            </span-expandable>
                              </template>
                            </dom-if>
                            

                            <dom-if if="[[data.e2]]">
                              <template>
                              <span-expandable>
                                <svg viewBox="0 0 60 35">
                                <path fill="#333" fill-rule="evenodd" d="M57.236 6.4a3.236 3.236 0 0 0 0-4.582 3.2 3.2 0 0 0-4.509 0L29.091 25.455 5.455 1.818a3.2 3.2 0 0 0-4.564 0A3.164 3.164 0 0 0 0 4.11 3.2 3.2 0 0 0 .945 6.4l28.146 28.145L57.236 6.4z"/>
                              </svg>
                              <span-expand on-click="expand" data-item="e2">Begränsning av marken bebyggande</span-expand>
                              <dom-if if="[[e2]]">
                                <template>
                                  <p>[[data.e2]]</p>
                                </template>
                              </dom-if>
                            </span-expandable>
                              </template>
                            </dom-if>
          
                            <dom-if if="[[data.e3]]">
                              <template>
                              <span-expandable>
                              <svg viewBox="0 0 60 35">
                                <path fill="#333" fill-rule="evenodd" d="M57.236 6.4a3.236 3.236 0 0 0 0-4.582 3.2 3.2 0 0 0-4.509 0L29.091 25.455 5.455 1.818a3.2 3.2 0 0 0-4.564 0A3.164 3.164 0 0 0 0 4.11 3.2 3.2 0 0 0 .945 6.4l28.146 28.145L57.236 6.4z"/>
                              </svg>
                                <span-expand on-click="expand" data-item="e3">Placering, utformning, utförande </span-expand>
                                <dom-if if="[[e3]]">
                                  <template>
                                    <p>[[data.e3]]</p>
                                  </template>
                                </dom-if>
                              </span-expandable>
                              </template>
                            </dom-if>
                            

                            <dom-if if="[[data.e4]]">
                              <template>
                              <span-expandable>
                              <svg viewBox="0 0 60 35">
                                <path fill="#333" fill-rule="evenodd" d="M57.236 6.4a3.236 3.236 0 0 0 0-4.582 3.2 3.2 0 0 0-4.509 0L29.091 25.455 5.455 1.818a3.2 3.2 0 0 0-4.564 0A3.164 3.164 0 0 0 0 4.11 3.2 3.2 0 0 0 .945 6.4l28.146 28.145L57.236 6.4z"/>
                              </svg>
                              <span-expand on-click="expand" data-item="e4">Administrativ bestämmelser </span-expand>
                              <dom-if if="[[e4]]">
                                <template>
                                  <p>[[data.e4]]</p>
                                </template>
                              </dom-if>
                            </span-expandable>
                              </template>
                            </dom-if>
                            

                            <div-detail>
                              <p>Detaljplan för</p>
                              <h1>[[data.b1]], [[data.name]]</h1><br>
                            </div-detail>
                        </main>
                    </div>
                </template>
            </dom-if>

        `
    }

    ready() {
        super.ready()
    }

    toggle() {
        this.mode = !this.mode
        this.dispatchEvent(new CustomEvent('app-details-toggle', { bubbles: true, composed: true, detail: {} }))
    }

    expand(e) {
      console.log('toggle', e, this.a1);
      const item = event.target.dataset.item;
      console.log(item);

      switch (item) {
        case 'a1':
          this.a1 = !this.a1;
          break;
        case 'b1':
          this.b1 = !this.b1;
          break;
        case 'description':
          this.description = !this.description;
          break;
        case 'e1':
          this.e1 = !this.e1;
          break;
        case 'e2':
          this.e2 = !this.e2;
          break;
        case 'e3':
          this.e3 = !this.e3;
          break;
        case 'e4':
          this.e4 = !this.e4;
          break;
        default:
      }

      // this.a1 = !this.a1;

      // this.toggleClass('show', this.show, this.$.toggle);
    }

    static get properties() {
        return {
            mode: {
                type: Boolean,
                value: true,
                reflectToAttribute: true
            },
            a1: {
              type: Boolean,
              value: false,
              reflectToAttribute: true
            },
            b1: {
              type: Boolean,
              value: false,
              reflectToAttribute: true
            },
            description: {
              type: Boolean,
              value: false,
              reflectToAttribute: true
            },
            e1: {
              type: Boolean,
              value: false,
              reflectToAttribute: true
            },
            e2: {
              type: Boolean,
              value: false,
              reflectToAttribute: true
            },
            e3: {
              type: Boolean,
              value: false,
              reflectToAttribute: true
            },
            e4: {
              type: Boolean,
              value: false,
              reflectToAttribute: true
            },
            data: {
                type: Object,
                value: {}
            }
        }
    }
}

window.customElements.define('app-details', AppDetails)
