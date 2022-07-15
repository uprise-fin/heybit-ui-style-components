import '!style-loader!css-loader!sass-loader!../src/styles/index.scss';
import '!style-loader!css-loader!../node_modules/pretendard/dist/web/static/pretendard.css';
// import { setCustomElementsManifest } from '@storybook/web-components';
import {colorPalette} from '../src/components/atom/variable';
import {SystemColor, ServiceColor} from '../src/components/atom/variable/type';
export const parameters = {
  colorPicker: {
    palettes: [
      {
        name: 'system color',
        palette: Object.entries(colorPalette).reduce((a, [k, v]) => {
          if (!SystemColor[k]) return a;
          const ov = Object.keys(v).reduce(
            (va, vv) =>
              isNaN(vv)
                ? va
                : {
                    ...va,
                    [`${k}--${vv}`]: v[vv],
                  },
            {},
          );
          return {
            ...a,
            ...ov,
          };
        }, {}),
      },
      {
        name: 'service color',
        palette: Object.entries(colorPalette).reduce((a, [k, v]) => {
          if (!ServiceColor[k]) return a;
          const ov = Object.keys(v).reduce(
            (va, vv) =>
              isNaN(vv)
                ? va
                : {
                    ...va,
                    [`${k}--${vv}`]: v[vv],
                  },
            {},
          );
          return {
            ...a,
            ...ov,
          };
        }, {}),
      },
    ],
  },
};
// import customElementsManifest from '../custom-elements.json';

// setCustomElementsManifest(customElementsManifest);

// // TODO: Remove support of 0.x CustomElementManifest format in 7.0
// // import customElements from '../custom-elements-experimental.json';
// // setCustomElements(customElements);

// export const parameters = {
//   a11y: {
//     config: {},
//     options: {
//       checks: { 'color-contrast': { options: { noScroll: true } } },
//       restoreScroll: true,
//     },
//   },
//   docs: {
//     iframeHeight: '200px',
//   },
// };

// export const globalTypes = {
//   locale: {
//     name: 'Locale',
//     description: 'Internationalization locale',
//     defaultValue: 'en',
//     toolbar: {
//       icon: 'globe',
//       items: [
//         { value: 'en', right: '🇺🇸', title: 'English' },
//         { value: 'es', right: '🇪🇸', title: 'Español' },
//         { value: 'fr', right: '🇫🇷', title: 'Français' },
//         { value: 'zh', right: '🇨🇳', title: '中文' },
//         { value: 'kr', right: '🇰🇷', title: '한국어' },
//       ],
//     },
//   },
// };
