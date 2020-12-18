(window.webpackJsonp=window.webpackJsonp||[]).push([[81],{681:function(n,s,a){"use strict";a.r(s),a.d(s,"default",(function(){return g}));var t=a(19),e=a.n(t),o=a(0),p=a(1),c=a.n(p),l=a(46);function r(n,s){var a=Object.keys(n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(n);s&&(t=t.filter((function(s){return Object.getOwnPropertyDescriptor(n,s).enumerable}))),a.push.apply(a,t)}return a}function i(n){for(var s=1;s<arguments.length;s++){var a=null!=arguments[s]?arguments[s]:{};s%2?r(Object(a),!0).forEach((function(s){e()(n,s,a[s])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(s){Object.defineProperty(n,s,Object.getOwnPropertyDescriptor(a,s))}))}return n}var u=function(){class n extends c.a.Component{constructor(...n){super(...n),e()(this,"state",{list:[1,2,3,4,5,6,7,8,9,10]})}loadMore(n){var s=this.state.list,a=s.slice(s.length-10).map(n=>n+10);setTimeout(()=>{this.setState({list:[...s,...a]}),n&&n()},500)}render(){var n=this.state.list;return Object(o.jsx)(l.fb,{className:"infinite-scroller-demo",hasMore:!0,loadMore:this.loadMore.bind(this),children:n.map(n=>Object(o.jsx)(l.m,{children:n},n))})}}return Object(o.jsx)(n,{})};function d(n){return Object(o.jsx)(n.tag,i(i({},n.attributes),{},{dangerouslySetInnerHTML:{__html:n.html}}))}function k(n){return Object(o.jsx)(d,{tag:"section",html:n.html,attributes:{className:"zandoc-react-markdown"}})}function m(n){return Object(o.jsx)(d,{tag:"style",html:n.style})}class h extends p.Component{constructor(...n){super(...n),e()(this,"state",{showCode:!1}),e()(this,"toggle",()=>{this.setState({showCode:!this.state.showCode})})}render(){var n=this.state.showCode,s=this.props,a=s.title,t=s.src,e=s.children;return Object(o.jsxs)("div",{className:"zandoc-react-demo",children:[Object(o.jsx)("div",{className:"zandoc-react-demo__preview",children:e}),Object(o.jsxs)("div",{className:"zandoc-react-demo__bottom",onClick:this.toggle,children:[Object(o.jsx)("div",{className:"zandoc-react-demo__title",children:Object(o.jsx)("p",{children:a||""})}),Object(o.jsx)("i",{className:"zenticon zenticon-caret-up zandoc-react-demo__toggle ".concat(n?"zandoc-react-demo__toggle-on":"zandoc-react-demo__toggle-off")})]}),n&&Object(o.jsx)("pre",{className:"zandoc-react-demo__code",children:Object(o.jsx)(d,{tag:"code",html:t,attributes:{className:"language-jsx"}})})]})}}class g extends p.Component{componentDidMount(){var n=location.hash;if(n){var s=document.querySelector('a[href="'.concat(n,'"]'));s&&Object(l.nc)(document.documentElement,0,function n(s,a){for(;s;)return s.offsetTop&&"static"!==getComputedStyle(s).position&&(a+=s.offsetTop),n(s.parentNode,a);return a}(s,-9))}}render(){return c.a.createElement("div",{className:"zandoc-react-container",key:null},c.a.createElement(m,{style:".infinite-scroller-demo {\n\theight: 300px;\n}"}),c.a.createElement(k,{html:'<h2 class="anchor-heading"><a href="#infinitescroller">¶</a><a href="javascript:void(0)" id="infinitescroller" class="anchor-point"></a>InfiniteScroller</h2>\n<p>Infinite scrolling widget</p>\n<h3 class="anchor-heading"><a href="#guides">¶</a><a href="javascript:void(0)" id="guides" class="anchor-point"></a>Guides</h3>\n<ul>\n<li>Lazy load long list</li>\n</ul>\n<h3 class="anchor-heading"><a href="#demos">¶</a><a href="javascript:void(0)" id="demos" class="anchor-point"></a>Demos</h3>'}),c.a.createElement(h,{title:"Basic usage",id:"Demobasic",src:'<span class="token keyword module">import</span> <span class="token punctuation">{</span> <span class="token maybe-class-name">InfiniteScroller</span><span class="token punctuation">,</span> <span class="token maybe-class-name">Card</span> <span class="token punctuation">}</span> <span class="token keyword module">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">Simple</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  state <span class="token operator">=</span> <span class="token punctuation">{</span>\n    list<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n  <span class="token function">loadMore</span><span class="token punctuation">(</span><span class="token parameter">closeLoading</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> <span class="token punctuation">{</span> list <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token property-access">state</span><span class="token punctuation">;</span>\n    <span class="token keyword">const</span> latestList <span class="token operator">=</span> list<span class="token punctuation">.</span><span class="token method function property-access">slice</span><span class="token punctuation">(</span>list<span class="token punctuation">.</span><span class="token property-access">length</span> <span class="token operator">-</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">const</span> newList <span class="token operator">=</span> latestList<span class="token punctuation">.</span><span class="token method function property-access">map</span><span class="token punctuation">(</span><span class="token parameter">item</span> <span class="token arrow operator">=></span> item <span class="token operator">+</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token arrow operator">=></span> <span class="token punctuation">{</span>\n      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token method function property-access">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n        list<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token spread operator">...</span>list<span class="token punctuation">,</span> <span class="token spread operator">...</span>newList<span class="token punctuation">]</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n      closeLoading <span class="token operator">&amp;&amp;</span> <span class="token function">closeLoading</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">500</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> <span class="token punctuation">{</span> list <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token property-access">state</span><span class="token punctuation">;</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">InfiniteScroller</span></span>\n        <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>infinite-scroller-demo<span class="token punctuation">"</span></span>\n        <span class="token attr-name">hasMore</span>\n        <span class="token attr-name">loadMore</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token method function property-access">loadMore</span><span class="token punctuation">.</span><span class="token method function property-access">bind</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span>\n      <span class="token punctuation">></span></span>\n        <span class="token punctuation">{</span>list<span class="token punctuation">.</span><span class="token method function property-access">map</span><span class="token punctuation">(</span><span class="token parameter">item</span> <span class="token arrow operator">=></span> <span class="token punctuation">(</span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Card</span></span> <span class="token attr-name">key</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>item<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token punctuation">{</span>item<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Card</span></span><span class="token punctuation">></span></span>\n        <span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">}</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">InfiniteScroller</span></span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token maybe-class-name">ReactDOM</span><span class="token punctuation">.</span><span class="token method function property-access">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Simple</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'},c.a.createElement(u)),c.a.createElement(k,{html:'<h3 class="anchor-heading"><a href="#api">¶</a><a href="javascript:void(0)" id="api" class="anchor-point"></a>API</h3>\n<table class="table">\n<thead>\n<tr>\n<th>Property</th>\n<th>Description</th>\n<th>Type</th>\n<th>Default</th>\n<th>Alternative</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>hasMore</td>\n<td>More data to load</td>\n<td><code>boolean</code></td>\n<td><code>false</code></td>\n<td><code>true</code></td>\n</tr>\n<tr>\n<td>loadMore</td>\n<td>Callback to load more data</td>\n<td><code>(() => Promise&#x3C;unknown>) | ((stopLoading?: () => void) => void)</code></td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>skipLoadOnMount</td>\n<td>Don\'t trigger a loading on mount</td>\n<td><code>boolean</code></td>\n<td><code>false</code></td>\n<td><code>true</code></td>\n</tr>\n<tr>\n<td>useWindow</td>\n<td>Use \n<code>window</code>\n as scrolling container</td>\n<td><code>boolean</code></td>\n<td><code>false</code></td>\n<td><code>true</code></td>\n</tr>\n<tr>\n<td>loader</td>\n<td>Loading content</td>\n<td><code>ReactNode</code></td>\n<td><code>BlockLoading</code></td>\n<td></td>\n</tr>\n<tr>\n<td>className</td>\n<td>Custom class name</td>\n<td><code>string</code></td>\n<td></td>\n<td></td>\n</tr>\n</tbody>\n</table>\n<h3 class="anchor-heading"><a href="#loadmore">¶</a><a href="javascript:void(0)" id="loadmore" class="anchor-point"></a>loadMore</h3>\n<ul>\n<li>Return a <code>Promise</code> to stop loading when request is done</li>\n<li>Or you can call <code>stopLoading</code> passed as the first argument to <code>loadMore</code></li>\n</ul>'}))}}}}]);