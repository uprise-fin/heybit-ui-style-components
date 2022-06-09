import { html } from "lit";
import { customElement } from "lit/decorators.js";
import { getElement } from "../../../utils";
import { transitionType } from "../../atom/transition";
import Base from "../../base";

export enum open  {
  'false' = 'false',
  'true' = 'true',
}
export enum buttonAlign  {
  'vertical' = 'vertical',
  'horizon' = 'horizon',
}
export interface Dialog {
  header?: Header
  content: Content[]
  footer?: Footer
}
interface Header {
  text?: Font;
  image?: Image;
}
type Content = Sentence[] | Description | Custom;
type Custom = string;
interface Footer {
  buttons: {
    button: Button[]
    align: 'vertical' | 'horizon';
  }
  anchor?: Anchor
}
interface Button {
  text: Font;
  backgroundColor: string;
}
interface Anchor extends Font {
  decoration: 'underline'
}
interface Sentence extends Font {
  height: number;
  br?: true;
}
interface Description extends Font {
  icon?: string;
  padding: [number, number, number, number];
  height: number;
}
interface Font {
  color: string;
  text: string;
  size: number;
  weight: number;
  align: position;
}
interface Image {
  width: number;
  align: position;
}
enum position {
  center = 'center',
  left = 'left',
  right = 'right',
}
/**
 * @property open 온 오프
 * @property persistent
 * @property hideCloseBtn
 * @slot icon - optional, 헤더
 * @slot title - optional, 헤더
 * @slot content - optional, 내용
 * @slot buttons - optional, 푸터
 * @slot anchor - optional, 푸터
 * @csspart container
 * @csspart icon
 * @csspart title
 * @csspart content
 * @csspart buttons
 * @csspart anchor
 */

@customElement("hb-dialog")
export class HbDialog extends Base {
  static override get styles() {
    return [require("../../../styles/template/dialog/index.scss").default];
  }
  async customConnectedCallback() {
    this.wrapEl = await getElement<HTMLDivElement>(this.shadowRoot, "wrap");
    this.wrapEl!.onanimationend = (event: AnimationEvent) => this.onAnimationEnd(event);
  }
  disconnectedCallback() {
    this.wrapEl.onanimationend = () => null
  }
  wrapEl?: HTMLDivElement
  open = false
  persistent = false;
  hideCloseBtn = false;
  buttonAlign = buttonAlign.horizon
  // get open() {
  //   return this._open;
  // }
  // set open(val: boolean) {
  //   if (this._open !== val) {
  //     this._open = val
  //     this.onToggle(val)
  //   }
  // }
   

  // @property()
  // value!: string;
  static get properties() {
    return {
      open: { type: Boolean, Reflect: true },
      persistent: { type: Boolean, Reflect: true },
      hideCloseBtn: { type: Boolean, Reflect: true },
      buttonAlign: { type: String, Reflect: true },
    };
  }

  render() {
    return html`
      <hb-transition ?show=${this.open} id="dialog-transition" type=${transitionType.fade}>
        <div class="hb-dialog__wrap" id="wrap" @click=${this.adapterOnClose}>
          <!-- <hb-delay delay="100" name="show" value=${this.open}> -->
          <!-- <hb-transition type=${transitionType.zoom}> -->
          <hb-transition ?show=${this.open} type=${transitionType.zoom}>
          <!-- <hb-transition ?show=${this.open} type=${transitionType.zoom} style="animation-delay:100ms;"> -->
            <div class="hb-dialog__container" part="container" @click=${this.stopPropagation}>
              ${
                this.hideCloseBtn ? '' : html`
                <button
                  @click=${this.onClose}
                  type="button"
                  class="hb-dialog__close-btn"
                  part="close-btn"
                  id="close-btn"
                ><hb-icon icon="ic-system-close-24-black.svg" size="small"></hb-icon></button>`
              }
              <div class="hb-dialog__head">
                <slot name="icon" part="icon" class="hb-dialog__head__icon"></slot>
                <slot name="title" part="title" class="hb-dialog__head__title"></slot>
              </div>
              <div class="hb-dialog__body">
                <slot name="content" part="content" class="hb-dialog__body__content"></slot>
              </div>
              <div class="hb-dialog__foot">
                <slot name="button" part="button" class="hb-dialog__foot__button ${this.buttonAlign}"></slot>
                <slot name="anchor" part="anchor" class="hb-dialog__foot__anchor"></slot>
              </div>
            </div>
          </hb-transition>
          <!-- </hb-delay> -->
        </div>
      </hb-transition>
    
    `
  }
  onAnimationEnd(event: AnimationEvent) {
    this.classList.remove(event.animationName);
  }
  onToggle(val: boolean) {
    if (!val) this.removeAttribute('open')
    const obj: Obj<string[]> = {
      true: ['open', 'show'],
      false: ['hide']
    }
    this.classList.add(...obj[val + ''])
    this.classList.remove(...obj[!val + ''])
  }

  onClose() {
    this.open = false
  }

  adapterOnClose(e: Event) {
    e.stopImmediatePropagation()
    if (this.persistent) return this.classList.add("shake")

    this.onClose()
  } 
}

declare global {
  interface HTMLElementTagNameMap {
    "hb-dialog": HbDialog;
  }
}
// import CustomElement from "../custom-elements";
// const NAME = "hb-dialog";
// customElements.get(NAME) ||
//   customElements.define(
//     NAME,
//     class extends CustomElement {
//       template = require(`./${NAME}.hbs`);
//       css = require(`./${NAME}.scss`).default;
//       properties = {
//         id: {
//           closeBtn: "close-btn",
//           wrap: "wrap",
//         },
//       };
//       constructor() {
//         super();
//       }
//       connectedCallback(): void {
//         super.connectedCallback();
//         this.isWrapEl.onanimationstart = () => this.onAnimationStart();
//         this.isWrapEl.onanimationend = () => this.onAnimationEnd();
//         this.isCloseBtnEl.onclick = () => this.onHide();
//       }
//       get isCloseBtnEl() {
//         return this.shadowRoot.getElementById(
//           this.isProperties.id.closeBtn
//         ) as HTMLButtonElement;
//       }
//       get isWrapEl() {
//         return this.shadowRoot.getElementById(
//           this.isProperties.id.wrap
//         ) as HTMLButtonElement;
//       }

//       onHide() {
//         this.classList.add(this.isProperties.classList.animation);
//         super.onHide();
//       }
//     }
//   );
