import {html} from 'lit';
import {customElement} from 'lit/decorators.js';
import {Base} from '@/components/base';
import {HbSkeletonType} from './type';

@customElement('hb-skeleton')
export class HbSkeleton extends Base {
  static get styles() {
    return [require('./style.scss').default];
  }

  type: HbSkeletonType;

  static get properties() {
    return {
      type: {type: String, Reflect: true},
    };
  }

  get skeletonLength() {
    if ([HbSkeletonType.card, HbSkeletonType.dropMenuTop].includes(this.type))
      return 3;
    if ([HbSkeletonType.dropMenuBottom].includes(this.type)) return 2;
    return 1;
  }

  // render() {
  //   return Array(this.length).fill(null).map((_,i) => html`
  //     <div class="hb-skeleton__wall" part=${`cell-${i+1}`}></div>
  //   `)

  // }

  render() {
    return Array(this.skeletonLength)
      .fill(null)
      .map(() => html`<hb-loading></hb-loading> `);
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'hb-skeleton': HbSkeleton;
  }
}
