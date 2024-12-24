/*! For license information please see components-molecule-img-index-stories.76a7dc2e.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkheybit_ui_styled_components=self.webpackChunkheybit_ui_styled_components||[]).push([[8455],{"./src/components/molecule/img/index.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Template:()=>Template,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var lit__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/lit@2.8.0/node_modules/lit/index.js");__webpack_require__("./src/components/molecule/img/index.ts");const __WEBPACK_DEFAULT_EXPORT__={component:"hb-img"},Template={render:({src,height,width,multiSource,breakPoint,loadingWidth,loadingHeight})=>lit__WEBPACK_IMPORTED_MODULE_0__.dy`
      <hb-img
        style="${width?`width: ${width}px;`:""}${height?`height: ${height}px;`:""}"
        loadingWidth=${loadingWidth}
        loadingHeight=${loadingHeight}
        src=${src}
        multiSource=${multiSource}
        breakPoint=${breakPoint}
      ></hb-img>
      djaklwdjlakwjd
    `,args:{src:"https://storage.googleapis.com/heybit-dev-aiden.appspot.com/banners/web/1651803570_bn-popup-kr-pcw-harvest event-400x490.png",multiSource:0,breakPoint:0,loadingWidth:800,loadingHeight:980,width:800,height:980}};Template.parameters={...Template.parameters,docs:{...Template.parameters?.docs,source:{originalSource:"{\n  render: ({\n    src,\n    height,\n    width,\n    multiSource,\n    breakPoint,\n    loadingWidth,\n    loadingHeight\n  }) => html`\n      <hb-img\n        style=\"${width ? `width: ${width}px;` : ''}${height ? `height: ${height}px;` : ''}\"\n        loadingWidth=${loadingWidth}\n        loadingHeight=${loadingHeight}\n        src=${src}\n        multiSource=${multiSource}\n        breakPoint=${breakPoint}\n      ></hb-img>\n      djaklwdjlakwjd\n    `,\n  args: {\n    src: 'https://storage.googleapis.com/heybit-dev-aiden.appspot.com/banners/web/1651803570_bn-popup-kr-pcw-harvest event-400x490.png',\n    multiSource: 0,\n    breakPoint: 0,\n    loadingWidth: 800,\n    loadingHeight: 980,\n    width: 800,\n    height: 980\n  }\n}",...Template.parameters?.docs?.source}}};const __namedExportsOrder=["Template"]},"./src/components/atom/loading/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{var _class,_components_base__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/base.ts"),lit__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/lit@2.8.0/node_modules/lit/index.js");(0,__webpack_require__("./node_modules/.pnpm/lit@2.8.0/node_modules/lit/decorators.js").Mo)("hb-loading")(_class=class HbLoading extends _components_base__WEBPACK_IMPORTED_MODULE_0__.X{constructor(...args){super(...args),this.loaded=!1,this.delete=!1,this.duration=void 0,this.background=void 0,this.backgroundAccent=void 0}static get styles(){return[__webpack_require__("./src/components/atom/loading/style.scss").Z]}static get properties(){return{loaded:{type:Boolean,Reflect:!0},duration:{type:Number,Reflect:!0},background:{type:String,Reflect:!0},backgroundAccent:{type:String,Reflect:!0},width:{type:String,Reflect:!0},height:{type:String,Reflect:!0}}}async connectedCallback(){await super.connectedCallback(),this.ontransitionend=()=>this.delete?this.remove():this.setAttribute("done","")}render(){return lit__WEBPACK_IMPORTED_MODULE_1__.dy`
      <div
        style=${`--duration:${this.duration||2e3}ms;--background:${this.background||"var(--husc__black--200)"}; --background--accent:${this.backgroundAccent||"var(--husc__white--50)"}`}
        class="hb-loading__wall"
        part="wall"
      ></div>
    `}})},"./src/components/base.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{X:()=>Base});var lit__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/lit@2.8.0/node_modules/lit/index.js");function _classPrivateFieldInitSpec(obj,privateMap,value){!function _checkPrivateRedeclaration(obj,privateCollection){if(privateCollection.has(obj))throw new TypeError("Cannot initialize the same private elements twice on an object")}(obj,privateMap),privateMap.set(obj,value)}function _classPrivateFieldSet(receiver,privateMap,value){return function _classApplyDescriptorSet(receiver,descriptor,value){if(descriptor.set)descriptor.set.call(receiver,value);else{if(!descriptor.writable)throw new TypeError("attempted to set read only private field");descriptor.value=value}}(receiver,_classExtractFieldDescriptor(receiver,privateMap,"set"),value),value}function _classExtractFieldDescriptor(receiver,privateMap,action){if(!privateMap.has(receiver))throw new TypeError("attempted to "+action+" private field on non-instance");return privateMap.get(receiver)}var _tabindex=new WeakMap;class Base extends lit__WEBPACK_IMPORTED_MODULE_0__.oi{constructor(...args){super(...args),this.event=void 0,this.submit=void 0,_classPrivateFieldInitSpec(this,_tabindex,{writable:!0,value:void 0})}get tabindex(){return function _classPrivateFieldGet(receiver,privateMap){return function _classApplyDescriptorGet(receiver,descriptor){return descriptor.get?descriptor.get.call(receiver):descriptor.value}(receiver,_classExtractFieldDescriptor(receiver,privateMap,"get"))}(this,_tabindex)}set tabindex(value){this.tabIndex=+value,_classPrivateFieldSet(this,_tabindex,value),this.setAttribute("tabindex",value)}stopPropagation(ev){ev.stopPropagation()}onEvent(ev){if(ev instanceof CustomEvent)return this.event?this.event(ev):this.dispatchEvent(new CustomEvent("event",ev))}onSubmit(ev){if(ev instanceof CustomEvent)return this.submit?this.submit(ev):this.dispatchEvent(new CustomEvent("submit",ev))}}},"./src/components/molecule/img/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__("./src/components/atom/loading/index.ts");var _class,_components_base__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/base.ts"),lit__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/.pnpm/lit@2.8.0/node_modules/lit/index.js");(0,__webpack_require__("./node_modules/.pnpm/lit@2.8.0/node_modules/lit/decorators.js").Mo)("hb-img")(_class=class HbImg extends _components_base__WEBPACK_IMPORTED_MODULE_1__.X{constructor(...args){super(...args),this.src=void 0,this.alt=void 0,this.loadingWidth=void 0,this.loadingHeight=void 0,this.breakPoint=0,this.multiSource=0,this.pcPrefix="-pc",this.loaded=!1,this.error=!1}static get styles(){return[__webpack_require__("./src/components/molecule/img/style.scss").Z]}static get properties(){return{src:{type:String,reflect:!0},alt:{type:String,reflect:!0},loadingWidth:{type:Number,reflect:!0},loadingHeight:{type:Number,reflect:!0},multiSource:{type:Number,reflect:!0},breakPoint:{type:Number,reflect:!0},pcPrefix:{type:String,reflect:!0},loaded:{type:Boolean,reflect:!0},error:{type:Boolean,reflect:!0}}}get srcExt(){const number=this.src.lastIndexOf(".");return this.src.substring(number)}get srcName(){const number=this.src.lastIndexOf(".");return this.src.substring(0,number)}get set(){return Array(this.multiSource).fill(null)}get srcset(){return this.set.map(((_,i)=>{const j=i+1;return 1===j?`${this.srcName}${this.srcExt} 1x`:`${this.srcName}@${j}x${this.srcExt} ${j}x`})).join(",")}get pcSrcset(){return this.set.map(((_,i)=>{const j=i+1;return 1===j?`${this.srcName}${this.pcPrefix}${this.srcExt} 1x`:`${this.srcName}${this.pcPrefix}@${j}x${this.srcExt} ${j}x`})).join(",")}render(){return lit__WEBPACK_IMPORTED_MODULE_2__.dy`
      <hb-loading
        class="hb-img__loading"
        part="loading"
        ?loaded=${this.loaded||this.error}
        style="width:${this.loadingWidth}px; height:${this.loadingHeight}px;"
      ></hb-loading>
      <picture class="hb-img__picture" part="picture">
        ${this.multiSource>0?this.breakPoint>0?lit__WEBPACK_IMPORTED_MODULE_2__.dy`
                <source media=${`(max-width: ${this.breakPoint-1}px)`} srcset=${this.srcset} />
                <source media=${`(min-width: ${this.breakPoint}px)`} srcset=${this.pcSrcset} />
              `:lit__WEBPACK_IMPORTED_MODULE_2__.dy` <source srcset=${this.srcset} /> `:""}
        <img
          class="hb-img__picture__img"
          part="img"
          src=${this.src}
          alt=${this.alt}
          @error=${this.onError}
          @load=${this.onLoad}
          ?loaded=${this.loaded}
          ?error=${this.error}
        />
      </picture>
    `}onLoad(event){this.loaded=!0,this.dispatchEvent(new Event("load",event))}onError(event){this.error=!0,this.dispatchEvent(new Event("error",event))}})},"./node_modules/.pnpm/lit@2.8.0/node_modules/lit/decorators.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Mo:()=>custom_element_e,Cb:()=>n,SB:()=>state_t});const custom_element_e=e=>n=>"function"==typeof n?((e,n)=>(customElements.define(e,n),n))(e,n):((e,n)=>{const{kind:t,elements:s}=n;return{kind:t,elements:s,finisher(n){customElements.define(e,n)}}})(e,n),i=(i,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(n){n.createProperty(e.key,i)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(n){n.createProperty(e.key,i)}},property_e=(i,e,n)=>{e.constructor.createProperty(n,i)};function n(n){return(t,o)=>void 0!==o?property_e(n,t,o):i(n,t)}function state_t(t){return n({...t,state:!0})}var query_assigned_elements_n;null===(query_assigned_elements_n=window.HTMLSlotElement)||void 0===query_assigned_elements_n||query_assigned_elements_n.prototype.assignedElements},"./src/components/atom/loading/style.scss":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=__webpack_require__("./node_modules/.pnpm/lit@2.8.0/node_modules/lit/index.js").iv`.hb-loading{display:block;font-family:var(--husc__font__family);transition:opacity var(--husc__transition__duration--ms)}:host{display:block;font-family:var(--husc__font__family);transition:opacity var(--husc__transition__duration--ms)}:host([loaded]){opacity:0}.hb-loading[loaded]{opacity:0}:host([done]){display:none}.hb-loading[done]{display:none}.hb-loading__wall{overflow:hidden;position:relative;width:100%;height:100%;border-radius:var(--husc__border__radius);background:var(--background)}.hb-loading__wall::before{content:"";position:absolute;left:-120px;width:120px;height:100%;background:linear-gradient(to right,transparent 0,var(--background--accent) 50.52%,transparent 100%);opacity:.7;animation:skeleton-gradient var(--duration) cubic-bezier(.4,0,.2,1) infinite}@keyframes skeleton-gradient{100%{left:100%}}`},"./src/components/molecule/img/style.scss":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=__webpack_require__("./node_modules/.pnpm/lit@2.8.0/node_modules/lit/index.js").iv`.hb-img{overflow:hidden;display:inline-block;font-size:0}:host{overflow:hidden;display:inline-block;font-size:0}.hb-img__picture__img{display:block;width:100%;height:100%;object-fit:contain;transition:opacity var(--husc__transition__duration--ms)}.hb-img__loading{position:absolute;pointer-events:none}`}}]);
//# sourceMappingURL=components-molecule-img-index-stories.76a7dc2e.iframe.bundle.js.map