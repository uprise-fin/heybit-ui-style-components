import Base, { size, theme } from "../../base";
import { html } from "lit";
import { customElement } from "lit/decorators.js";
import { transitionType } from "../../atom/transition";
export enum type {
  "block" = "block",
  "inline" = "inline",
  "fab" = "fab",
}
/**
 * @fires select 옵션을 선택할때 발생
 * @fires change 값이 변경될때 발생
 * @property theme
 * @property size
 * @property type
 * @property loading
 * @property disabled
 * @property placeholder
 * @slot slot--left - optional, slot--left부분을 커스텀할때 사용
 * @slot slot--right - optional, slot--right부분을 커스텀할때 사용
 * @slot 내용 컨텐츠 영역
 * @csspart label
 * @csspart list
 */

@customElement("hb-button")
export class HbButton extends Base {
  static override get styles() {
    return [require("../../../styles/organism/button/index.scss").default];
  }
  type: type;
  size: size=size.large;
  loading = false;
  disabled = false;
  placeholder = ''
  theme: theme = theme.primary;


  static get properties() {
    return {
      theme: { type: String, Reflect: true },
      size: { type: String, Reflect: true },
      type: { type: String, Reflect: true },
      placeholder: { type: String, Reflect: true },
      loading: { type: Boolean, Reflect: true },
      disabled: { type: Boolean, Reflect: true },
    };
  }

  render() {
    return html`
      <slot name="slot--left" part="slot--left" class="hb-button__slot hb-button__slot--left"></slot>
      <div class="hb-button__label">
        ${
          this.loading ? html`
          <hb-transition class="hb-button__label__transition" type=${transitionType.fade} ?show=${this.loading}>
            <hb-spinner theme=${this.theme} size=${this.size}></hb-spinner>
          </hb-transition> 
          ` : html`
          <hb-transition class="hb-button__label__transition" type=${transitionType.fade} ?show=${!this.loading}>
            <slot part="label" placeholder=${this.placeholder}></slot>
          </hb-transition> 
          `
        }
        
        
      </div>
      <slot name="slot--right" part="slot--right" class="hb-button__slot hb-button__slot--right"></slot>
    `
  }
  async customConnectedCallback() {
    this.tabIndex = 0;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "hb-button": HbButton;
  }
}
 