(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{658:function(n,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return g}));var s=a(19),e=a.n(s),o=a(0),c=a(1),p=a.n(c),l=a(46);function r(n,t){var a=Object.keys(n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(n);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),a.push.apply(a,s)}return a}function i(n){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){e()(n,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(a,t))}))}return n}var u=function(){return Object(o.jsx)(l.t,{text:"basic usage"})},d=function(){return Object(o.jsx)(l.t,{text:"customize usage",onCopySuccess:"Copied！",children:Object(o.jsx)(l.k,{type:"primary",children:"Click！"})})};function m(n){return Object(o.jsx)(n.tag,i(i({},n.attributes),{},{dangerouslySetInnerHTML:{__html:n.html}}))}function h(n){return Object(o.jsx)(m,{tag:"section",html:n.html,attributes:{className:"zandoc-react-markdown"}})}function k(n){return Object(o.jsx)(m,{tag:"style",html:n.style})}class y extends c.Component{constructor(...n){super(...n),e()(this,"state",{showCode:!1}),e()(this,"toggle",()=>{this.setState({showCode:!this.state.showCode})})}render(){var n=this.state.showCode,t=this.props,a=t.title,s=t.src,e=t.children;return Object(o.jsxs)("div",{className:"zandoc-react-demo",children:[Object(o.jsx)("div",{className:"zandoc-react-demo__preview",children:e}),Object(o.jsxs)("div",{className:"zandoc-react-demo__bottom",onClick:this.toggle,children:[Object(o.jsx)("div",{className:"zandoc-react-demo__title",children:Object(o.jsx)("p",{children:a||""})}),Object(o.jsx)("i",{className:"zenticon zenticon-caret-up zandoc-react-demo__toggle ".concat(n?"zandoc-react-demo__toggle-on":"zandoc-react-demo__toggle-off")})]}),n&&Object(o.jsx)("pre",{className:"zandoc-react-demo__code",children:Object(o.jsx)(m,{tag:"code",html:s,attributes:{className:"language-jsx"}})})]})}}class g extends c.Component{componentDidMount(){var n=location.hash;if(n){var t=document.querySelector('a[href="'.concat(n,'"]'));t&&Object(l.nc)(document.documentElement,0,function n(t,a){for(;t;)return t.offsetTop&&"static"!==getComputedStyle(t).position&&(a+=t.offsetTop),n(t.parentNode,a);return a}(t,-9))}}render(){return p.a.createElement("div",{className:"zandoc-react-container",key:null},p.a.createElement(k,{style:""}),p.a.createElement(h,{html:'<h2 class="anchor-heading"><a href="#copybutton">¶</a><a href="javascript:void(0)" id="copybutton" class="anchor-point"></a>CopyButton</h2>\n<p>Copy button will copy the specified text to the system clipboard when clicked.</p>\n<h3 class="anchor-heading"><a href="#guides">¶</a><a href="javascript:void(0)" id="guides" class="anchor-point"></a>Guides</h3>\n<ul>\n<li>When you need to copy some text, you can use this component.</li>\n<li>This component may fail in some older version browsers since it doesn\'t rely on Flash.</li>\n</ul>\n<h3 class="anchor-heading"><a href="#demos">¶</a><a href="javascript:void(0)" id="demos" class="anchor-point"></a>Demos</h3>'}),p.a.createElement(y,{title:"Basic usage",id:"Demobasic",src:'<span class="token keyword module">import</span> <span class="token punctuation">{</span> <span class="token maybe-class-name">CopyButton</span> <span class="token punctuation">}</span> <span class="token keyword module">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\n<span class="token maybe-class-name">ReactDOM</span><span class="token punctuation">.</span><span class="token method function property-access">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">CopyButton</span></span> <span class="token attr-name">text</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>basic usage<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'},p.a.createElement(u)),p.a.createElement(y,{title:"Customize usage",id:"Democustomize",src:'<span class="token keyword module">import</span> <span class="token punctuation">{</span> <span class="token maybe-class-name">CopyButton</span><span class="token punctuation">,</span> <span class="token maybe-class-name">Button</span> <span class="token punctuation">}</span> <span class="token keyword module">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\n<span class="token maybe-class-name">ReactDOM</span><span class="token punctuation">.</span><span class="token method function property-access">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">CopyButton</span></span> <span class="token attr-name">text</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>customize usage<span class="token punctuation">"</span></span> <span class="token attr-name">onCopySuccess</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Copied！<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token maybe-class-name">Click！</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">CopyButton</span></span><span class="token punctuation">></span></span>\n  <span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'},p.a.createElement(d)),p.a.createElement(h,{html:'<h3 class="anchor-heading"><a href="#api">¶</a><a href="javascript:void(0)" id="api" class="anchor-point"></a>API</h3>\n<table class="table">\n<thead>\n<tr>\n<th>Property</th>\n<th>Description</th>\n<th>Type</th>\n<th>Default</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>text</td>\n<td>The next need to be copied</td>\n<td><code>string</code>\n \n|\n \n<code>() => string</code></td>\n<td></td>\n</tr>\n<tr>\n<td>onCopySuccess</td>\n<td>The callback function that is triggered when copy successful. If this property is string, it will show in \n<code>Notify.info</code>\n.</td>\n<td>function \n|\n string</td>\n<td><code>\'Copied\'</code></td>\n</tr>\n<tr>\n<td>onCopyError</td>\n<td>The callback function that is triggered when copy failed. If this property is string, it will show in \n<code>Notify.error</code>\n.</td>\n<td>function \n|\n string</td>\n<td><code>\'Copy failed\'</code></td>\n</tr>\n</tbody>\n</table>'}))}}}}]);