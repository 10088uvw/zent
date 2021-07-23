(self.webpackChunkzent_docs=self.webpackChunkzent_docs||[]).push([[7528],{27528:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>l});var r=n(73450),o=n(27378),a=n(57318),c=n(24246);function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function h(e){return(0,c.jsx)(e.tag,i(i({},e.attributes),{},{dangerouslySetInnerHTML:{__html:e.html}}))}function p(e){return(0,c.jsx)(h,{tag:"section",html:e.html,attributes:{className:"zandoc-react-markdown"}})}function d(e){return(0,c.jsx)(h,{tag:"style",html:e.style})}function u(e,t){for(;e;)return e.offsetTop&&"static"!==getComputedStyle(e).position&&(t+=e.offsetTop),u(e.parentNode,t);return t}class l extends o.Component{componentDidMount(){var e=location.hash;if(e){var t=document.querySelector('a[href="'.concat(e,'"]'));t&&(0,a.l)(document.documentElement,0,u(t,-9))}}render(){return o.createElement("div",{className:"zandoc-react-container"},o.createElement(d,{style:""}),o.createElement(p,{html:'<h2 class="anchor-heading"><a href="#zent-2-1-0-sheng-ji-zhi-nan">¶</a><a href="javascript:void(0)" id="zent-2-1-0-sheng-ji-zhi-nan" class="anchor-point"></a>Zent 2.1.0 升级指南</h2>\n<p>这个版本主要升级了 React 版本到 15.5.x。</p>\n<h3 class="anchor-heading"><a href="#react-sheng-ji-dao-15-5-x">¶</a><a href="javascript:void(0)" id="react-sheng-ji-dao-15-5-x" class="anchor-point"></a>React 升级到 15.5.x</h3>\n<p>从 2.1.0 开始 Zent 的开发都是基于 React 15.5.x，和老版本的 React 一起使用时可能会在开发时出现 warning。</p>\n<p>详细的 React 升级方案请看<a href="https://facebook.github.io/react/blog/2017/04/07/react-v15.5.0.html">官方的说明文档</a>。</p>\n<p>推荐使用 Facebook 提供的 <a href="https://github.com/reactjs/react-codemod">codemod</a> 来自动化迁移工作。</p>\n<h3 class="anchor-heading"><a href="#button-mo-ren-de-type-bian-geng">¶</a><a href="javascript:void(0)" id="button-mo-ren-de-type-bian-geng" class="anchor-point"></a>Button 默认的 <code>type</code> 变更</h3>\n<p>Button 提供了一个 <code>htmlType</code> 属性，这个属性在 2.1.0 之前是没有默认值的，行为和原生的 button 一致，会在 form 里触发 submit。</p>\n<p>在 2.1.0 版本开始，<code>htmlType</code> 设置了默认值为 <code>"button"</code>，所以原来在表单里依赖 submit 行为的地方需要加上 <code>htmlType="submit"</code>。</p>'}))}}}}]);