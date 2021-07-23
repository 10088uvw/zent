(self.webpackChunkzent_docs=self.webpackChunkzent_docs||[]).push([[7029],{47029:(n,a,s)=>{"use strict";s.r(a),s.d(a,{default:()=>b});var t=s(73450),o=s(27378),p=s(57318),e=s(23860),c=s(99496),l=s(96681),r=s(24246);function u(n,a){var s=Object.keys(n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(n);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(n,a).enumerable}))),s.push.apply(s,t)}return s}function i(n){for(var a=1;a<arguments.length;a++){var s=null!=arguments[a]?arguments[a]:{};a%2?u(Object(s),!0).forEach((function(a){(0,t.Z)(n,a,s[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(s)):u(Object(s)).forEach((function(a){Object.defineProperty(n,a,Object.getOwnPropertyDescriptor(s,a))}))}return n}var d=function(){class n extends o.Component{constructor(...n){super(...n),(0,t.Z)(this,"state",{bodyPortalVisible:!1,purePortalVisible:!1}),(0,t.Z)(this,"togglePurePortal",(()=>this.setState({purePortalVisible:!this.state.purePortalVisible}))),(0,t.Z)(this,"showBodyPortal",(()=>this.setState({bodyPortalVisible:!0}))),(0,t.Z)(this,"hideBodyPortal",(()=>this.setState({bodyPortalVisible:!1})))}render(){return(0,r.jsxs)("div",{className:"zent-doc-portal-container",children:[(0,r.jsx)("div",{className:"zent-doc-portal-mount-node",children:"这里是原来就有的内容"}),(0,r.jsx)(e.h,{selector:".zent-doc-portal-mount-node",children:(0,r.jsx)("div",{className:"zent-doc-portal-content",children:"这里是 Portal 动态插入的内容"})}),(0,r.jsx)("div",{className:"zent-doc-pure-portal-mount-node",children:"content to be overwritten"}),this.state.purePortalVisible?(0,r.jsx)(c.M,{selector:".zent-doc-pure-portal-mount-node",children:(0,r.jsx)("div",{className:"zent-doc-portal-content",children:"这里是 PurePortal 动态插入的内容, 覆盖容器内原有内容"})}):null,(0,r.jsx)(l.z,{onClick:this.togglePurePortal,children:"Toggle PurePortal"}),(0,r.jsx)(l.z,{onClick:this.showBodyPortal,children:"添加带遮罩的Portal到body"}),(0,r.jsx)(e.h,{visible:this.state.bodyPortalVisible,onClose:this.hideBodyPortal,className:"layer",style:{background:"rgba(0, 0, 0, 0.2)"},useLayerForClickAway:!0,closeOnClickOutside:!0,closeOnESC:!0,blockPageScroll:!0,children:(0,r.jsx)("div",{className:"zent-doc-portal-content",style:{position:"absolute",left:"50%",top:"50%",transform:"translate3d(-50%, -50%, 0)",border:"1px solid #d3d3d3",borderRadius:"3px",padding:"50px",background:"white"},children:"默认插入到body最后，并设置为拥有遮罩用于关闭"})})]})}}return(0,r.jsx)(n,{})};function k(n){return(0,r.jsx)(n.tag,i(i({},n.attributes),{},{dangerouslySetInnerHTML:{__html:n.html}}))}function h(n){return(0,r.jsx)(k,{tag:"section",html:n.html,attributes:{className:"zandoc-react-markdown"}})}function g(n){return(0,r.jsx)(k,{tag:"style",html:n.style})}function m(n,a){for(;n;)return n.offsetTop&&"static"!==getComputedStyle(n).position&&(a+=n.offsetTop),m(n.parentNode,a);return a}class y extends o.Component{constructor(...n){super(...n),(0,t.Z)(this,"state",{showCode:!1}),(0,t.Z)(this,"toggle",(()=>{this.setState({showCode:!this.state.showCode})}))}render(){var n=this.state.showCode,a=this.props,s=a.title,t=a.src,o=a.children;return(0,r.jsxs)("div",{className:"zandoc-react-demo",children:[(0,r.jsx)("div",{className:"zandoc-react-demo__preview",children:o}),(0,r.jsxs)("div",{className:"zandoc-react-demo__bottom",onClick:this.toggle,children:[(0,r.jsx)("div",{className:"zandoc-react-demo__title",children:(0,r.jsx)("p",{children:s||""})}),(0,r.jsx)("i",{className:"zenticon zenticon-caret-up zandoc-react-demo__toggle ".concat(n?"zandoc-react-demo__toggle-on":"zandoc-react-demo__toggle-off")})]}),n&&(0,r.jsx)("pre",{className:"zandoc-react-demo__code",children:(0,r.jsx)(k,{tag:"code",html:t,attributes:{className:"language-jsx"}})})]})}}class b extends o.Component{componentDidMount(){var n=location.hash;if(n){var a=document.querySelector('a[href="'.concat(n,'"]'));a&&(0,p.l)(document.documentElement,0,m(a,-9))}}render(){return o.createElement("div",{className:"zandoc-react-container"},o.createElement(g,{style:""}),o.createElement(h,{html:'<h2 class="anchor-heading"><a href="#portal-chuan-song-men">¶</a><a href="javascript:void(0)" id="portal-chuan-song-men" class="anchor-point"></a>Portal 传送门</h2>\n<p>传送门组件。</p>\n<h3 class="anchor-heading"><a href="#shi-yong-chang-jing">¶</a><a href="javascript:void(0)" id="shi-yong-chang-jing" class="anchor-point"></a>使用场景</h3>\n<p>这个组件不提供样式，但它是所有弹层组件的基石。使用 <code>Portal</code> 的好处是不需要自己管理动态插入的节点，防止内存泄露。</p>\n<h3 class="anchor-heading"><a href="#dai-ma-yan-shi">¶</a><a href="javascript:void(0)" id="dai-ma-yan-shi" class="anchor-point"></a>代码演示</h3>'}),o.createElement(y,{title:"基本用法，第二行是 `Portal` 插入的，可以在浏览器里审查元素观察Html结构",id:"Demobasic",src:'<span class="token keyword module">import</span> <span class="token imports"><span class="token punctuation">{</span> <span class="token maybe-class-name">Portal</span><span class="token punctuation">,</span> <span class="token maybe-class-name">Button</span><span class="token punctuation">,</span> <span class="token maybe-class-name">PurePortal</span> <span class="token punctuation">}</span></span> <span class="token keyword module">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\n<span class="token comment">// const WrappedPortal = Portal.withNonScrollable(Portal.withESCToClose(Portal));</span>\n\n<span class="token keyword">class</span> <span class="token class-name">PortalBasic</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span>\n  state <span class="token operator">=</span> <span class="token punctuation">{</span>\n    bodyPortalVisible<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n    purePortalVisible<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n  <span class="token function-variable function">togglePurePortal</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token arrow operator">=></span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token method function property-access">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> purePortalVisible<span class="token operator">:</span> <span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token property-access">state</span><span class="token punctuation">.</span><span class="token property-access">purePortalVisible</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token function-variable function">showBodyPortal</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token arrow operator">=></span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token method function property-access">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> bodyPortalVisible<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token function-variable function">hideBodyPortal</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token arrow operator">=></span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token method function property-access">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> bodyPortalVisible<span class="token operator">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword control-flow">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>zent-doc-portal-container<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>zent-doc-portal-mount-node<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>这里是原来就有的内容<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Portal</span></span> <span class="token attr-name">selector</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>.zent-doc-portal-mount-node<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>zent-doc-portal-content<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>这里是 <span class="token maybe-class-name">Portal</span> 动态插入的内容<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Portal</span></span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>zent-doc-pure-portal-mount-node<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n          content to be overwritten\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n        <span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token property-access">state</span><span class="token punctuation">.</span><span class="token property-access">purePortalVisible</span> <span class="token operator">?</span> <span class="token punctuation">(</span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">PurePortal</span></span> <span class="token attr-name">selector</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>.zent-doc-pure-portal-mount-node<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>zent-doc-portal-content<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n              这里是 <span class="token maybe-class-name">PurePortal</span> 动态插入的内容<span class="token punctuation">,</span> 覆盖容器内原有内容\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">PurePortal</span></span><span class="token punctuation">></span></span>\n        <span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token keyword null nil">null</span><span class="token punctuation">}</span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token property-access">togglePurePortal</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token maybe-class-name">Toggle</span> <span class="token maybe-class-name">PurePortal</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token property-access">showBodyPortal</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>添加带遮罩的Portal到body<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Portal</span></span>\n          <span class="token attr-name">visible</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token property-access">state</span><span class="token punctuation">.</span><span class="token property-access">bodyPortalVisible</span><span class="token punctuation">}</span></span>\n          <span class="token attr-name">onClose</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token property-access">hideBodyPortal</span><span class="token punctuation">}</span></span>\n          <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>layer<span class="token punctuation">"</span></span>\n          <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> background<span class="token operator">:</span> <span class="token string">\'rgba(0, 0, 0, 0.2)\'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span>\n          <span class="token attr-name">useLayerForClickAway</span>\n          <span class="token attr-name">closeOnClickOutside</span>\n          <span class="token attr-name">closeOnESC</span>\n          <span class="token attr-name">blockPageScroll</span>\n        <span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span>\n            <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>zent-doc-portal-content<span class="token punctuation">"</span></span>\n            <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>\n              position<span class="token operator">:</span> <span class="token string">\'absolute\'</span><span class="token punctuation">,</span>\n              left<span class="token operator">:</span> <span class="token string">\'50%\'</span><span class="token punctuation">,</span>\n              top<span class="token operator">:</span> <span class="token string">\'50%\'</span><span class="token punctuation">,</span>\n              transform<span class="token operator">:</span> <span class="token string">\'translate3d(-50%, -50%, 0)\'</span><span class="token punctuation">,</span>\n              border<span class="token operator">:</span> <span class="token string">\'1px solid #d3d3d3\'</span><span class="token punctuation">,</span>\n              borderRadius<span class="token operator">:</span> <span class="token string">\'3px\'</span><span class="token punctuation">,</span>\n              padding<span class="token operator">:</span> <span class="token string">\'50px\'</span><span class="token punctuation">,</span>\n              background<span class="token operator">:</span> <span class="token string">\'white\'</span><span class="token punctuation">,</span>\n            <span class="token punctuation">}</span><span class="token punctuation">}</span></span>\n          <span class="token punctuation">></span></span>\n            默认插入到body最后，并设置为拥有遮罩用于关闭\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Portal</span></span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token maybe-class-name">ReactDOM</span><span class="token punctuation">.</span><span class="token method function property-access">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">PortalBasic</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'},o.createElement(d)),o.createElement(h,{html:'<h3 class="anchor-heading"><a href="#api">¶</a><a href="javascript:void(0)" id="api" class="anchor-point"></a>API</h3>\n<table class="table">\n<thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>类型</th>\n<th>是否必须</th>\n<th>默认值</th>\n<th>备选值</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>children</td>\n<td>只支持一个child</td>\n<td>string</td>\n<td>否</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>selector</td>\n<td>渲染child的DOM节点</td>\n<td>string or DOM Element</td>\n<td>否</td>\n<td><code>\'body\'</code></td>\n<td>合法的CSS selector或者某个DOM节点</td>\n</tr>\n<tr>\n<td>visible</td>\n<td>是否渲染child</td>\n<td>bool</td>\n<td>否</td>\n<td><code>true</code></td>\n<td></td>\n</tr>\n<tr>\n<td>layer</td>\n<td>遮罩的标签名</td>\n<td>string</td>\n<td>否</td>\n<td><code>div</code></td>\n<td></td>\n</tr>\n<tr>\n<td>useLayerForClickAway</td>\n<td>是否使用遮罩来触发 \n<code>Portal</code>\n 关闭</td>\n<td>bool</td>\n<td>否</td>\n<td><code>false</code></td>\n<td></td>\n</tr>\n<tr>\n<td>onLayerReady</td>\n<td>遮罩准备好时的hook</td>\n<td>(node: HTMLElement) => void</td>\n<td>否</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>closeOnClickOutside</td>\n<td>点击到 \n<code>Portal</code>\n 外部时关闭</td>\n<td>function</td>\n<td>否</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>closeOnESC</td>\n<td>按下 ESC 键时关闭</td>\n<td>bool</td>\n<td>否</td>\n<td><code>false</code></td>\n<td></td>\n</tr>\n<tr>\n<td>onClose</td>\n<td>关闭时回调函数</td>\n<td>(e: Event) => void</td>\n<td>否</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>blockPageScroll</td>\n<td>打开时禁止页面滚动</td>\n<td>bool</td>\n<td>否</td>\n<td><code>false</code></td>\n<td></td>\n</tr>\n<tr>\n<td>className</td>\n<td>遮罩的className</td>\n<td>string</td>\n<td>否</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>style</td>\n<td>遮罩的style</td>\n<td>object</td>\n<td>否</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>css</td>\n<td>(已废弃, 请使用style)额外的css样式. 例如, \n<code>{ \'margin-left\': \'10px\' }</code></td>\n<td>object</td>\n<td>否</td>\n<td><code>{}</code></td>\n<td></td>\n</tr>\n</tbody>\n</table>\n<p><code>Portal</code> 实例上有一个 <code>contains</code> 方法可以用来判断一个 DOM 节点是否是它的子节点，这个方法对嵌套的 <code>Portal</code> 内的子节点一样有效。 </p>\n<h3 class="anchor-heading"><a href="#zu-jian-yuan-li">¶</a><a href="javascript:void(0)" id="zu-jian-yuan-li" class="anchor-point"></a>组件原理</h3>\n<ul>\n<li>组件的主要功能是把其 <code>child</code> 插入到一个给定的 DOM node中, 并且在组件被 <code>unmount</code> 的时候将其 <code>child</code> 属性对应的 DOM 节点删除.</li>\n<li>任意 props 被修改后会触发一定程度的重绘, <code>children</code>, <code>selector</code>被修改会导致组件 <code>unmount</code> 再 <code>mount</code>；其它props被修改仅更新现有 DOM node 的属性.</li>\n</ul>\n<h2 class="anchor-heading"><a href="#pureportal-fu-gai-shi-chuan-song-men">¶</a><a href="javascript:void(0)" id="pureportal-fu-gai-shi-chuan-song-men" class="anchor-point"></a>PurePortal 覆盖式传送门</h2>\n<p>覆盖式传送门组件。</p>\n<h3 class="anchor-heading"><a href="#shi-yong-chang-jing">¶</a><a href="javascript:void(0)" id="shi-yong-chang-jing" class="anchor-point"></a>使用场景</h3>\n<p>纯粹的Portal，行为同 React 16 的Portal相同，会将容器中的所有内容覆盖掉。</p>\n<h3 class="anchor-heading"><a href="#pureportal-api">¶</a><a href="javascript:void(0)" id="pureportal-api" class="anchor-point"></a>PurePortal-API</h3>\n<table class="table">\n<thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>类型</th>\n<th>是否必须</th>\n<th>默认值</th>\n<th>备选值</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>children</td>\n<td>只支持一个child</td>\n<td>string</td>\n<td>否</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>selector</td>\n<td>渲染 child 的 DOM 节点</td>\n<td>string or DOM Element</td>\n<td>是</td>\n<td><code>\'body\'</code></td>\n<td>合法的CSS selector 或者某个 DOM 节点</td>\n</tr>\n<tr>\n<td>append</td>\n<td>是否在将内容添加到容器中，如果是 false 会覆盖容器的内容</td>\n<td>bool</td>\n<td>否</td>\n<td>false</td>\n<td></td>\n</tr>\n</tbody>\n</table>'}))}}}}]);