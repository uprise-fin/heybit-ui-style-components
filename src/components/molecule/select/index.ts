import { HbTransitionType } from '@/components/atom/transition/type';
import { Size } from '@/components/atom/variable/type';
import { Base } from '@/components/base';
import { HbIconName } from '@/components/atom/icon/type';
import { HbList } from '@/components/atom/list';
import { HbListOption } from '@/components/atom/list/type';
import { HbInput } from '@/components/molecule/input';
import { getElement } from '@/utils';
import { html } from 'lit';
import { customElement } from 'lit/decorators.js';

/**
 * @fires event 값이 변경될때 발생
 * @property attributeSync true 시 value값이 arrtibute 싱크됨
 * @property fixed true 시 overflow에서 넘어감
 * @property value 기본 값
 * @property options Options[] 옵션
 * @property search 서치 온오프
 * @slot icon - optional, icon부분을 커스텀할때 사용
 * @slot caret - optional, caret부분을 커스텀할때 사용
 * @slot option - required, select의 옵션 엘리먼트
 * @csspart label
 * @csspart list
 */

@customElement('hb-select')
export class HbSelect extends Base {
  static get styles() {
    return [require('./style.scss').default];
  }

  inputEl?: HTMLInputElement;

  parentQuery?: string;

  parentEl?: HTMLElement;

  attributeSync = false;

  fixed = false;

  search = false;

  open = false;

  top: number;

  left: number;

  width: number;

  maxHeight: number;

  value = '';

  options: HbListOption[] = [];

  emptyText = '검색결과가 없습니다.';

  hasFocus = false;

  inputValue = '';

  resolve: (value?: unknown) => void = () => {};

  static get properties() {
    return {
      open: { type: Boolean, Reflect: true },
      search: { type: Boolean, Reflect: true },
      attributeSync: { type: Boolean, Reflect: true },
      fixed: { type: Boolean, Reflect: true },
      top: { type: Number, Reflect: true },
      left: { type: Number, Reflect: true },
      width: { type: Number, Reflect: true },
      maxHeight: { type: Number, Reflect: true },
      value: { type: String, Reflect: true },
      options: { type: Array, Reflect: true },
      emptyText: { type: String, Reflect: true },
      inputValue: { type: String, Reflect: true },
      parentQuery: { type: String, Reflect: true },
      hasFocus: { type: Boolean, Reflect: true }
    };
  }

  get list() {
    return this.options?.filter((x) => x.label.includes(this.inputValue)) || [];
  }

  get scrollEventListener() {
    if (this.parentQuery) return this.parentEl;
    return window;
  }

  render() {
    return html`
      <select
        class="hb-select__el"
        @change=${this.onSelect}
        ?disabled=${!this.list || !this.list.length}
      >
        ${this.list && this.list.length
          ? this.list.map((x) => html` <option value=${x.value}>${x.label}</option> `)
          : html`<option>${this.emptyText}</option>`}
      </select>
      <span class="hb-select__icon-wrap">
        <hb-icon
          class="hb-select__icon-wrap__el"
          icon=${HbIconName['system/outline/arrow-dropdown']}
          size=${Size.small}
        ></hb-icon>
      </span>
    `;
  }

  onSelect(ev: Event) {
    ev.stopImmediatePropagation();
    const { target } = ev;
    if (!(target instanceof HTMLSelectElement)) return;
    const { value } = target;
    if (this.attributeSync) this.setAttribute('value', value!);
    this.value = value!;
    this.inputValue = '';
    // this.dispatchEvent(new CustomEvent('event', evt));
    this.onEvent(new CustomEvent('event'));
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'hb-select': HbSelect;
  }
}
