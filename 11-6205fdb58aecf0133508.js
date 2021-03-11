(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{555:function(e,o,c){"use strict";c.r(o),c.d(o,"default",(function(){return g}));var a=c(20),i=c.n(a),d=c(0),n=c(1),l=c.n(n),r=c(46);function t(e,o){var c=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);o&&(a=a.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),c.push.apply(c,a)}return c}function s(e){for(var o=1;o<arguments.length;o++){var c=null!=arguments[o]?arguments[o]:{};o%2?t(Object(c),!0).forEach((function(o){i()(e,o,c[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(c)):t(Object(c)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(c,o))}))}return e}function h(e){return Object(d.jsx)(e.tag,s(s({},e.attributes),{},{dangerouslySetInnerHTML:{__html:e.html}}))}function p(e){return Object(d.jsx)(h,{tag:"section",html:e.html,attributes:{className:"zandoc-react-markdown"}})}function u(e){return Object(d.jsx)(h,{tag:"style",html:e.style})}n.Component;class g extends n.Component{componentDidMount(){var e=location.hash;if(e){var o=document.querySelector('a[href="'.concat(e,'"]'));o&&Object(r.rc)(document.documentElement,0,function e(o,c){for(;o;)return o.offsetTop&&"static"!==getComputedStyle(o).position&&(c+=o.offsetTop),e(o.parentNode,c);return c}(o,-9))}}render(){return l.a.createElement("div",{className:"zandoc-react-container",key:null},l.a.createElement(u,{style:""}),l.a.createElement(p,{html:'<h1 class="anchor-heading"><a href="#9-0-0-qian-yi-zhi-nan">¶</a><a href="javascript:void(0)" id="9-0-0-qian-yi-zhi-nan" class="anchor-point"></a>9.0.0 迁移指南</h1>\n<h2 class="anchor-heading"><a href="#breaking-changes">¶</a><a href="javascript:void(0)" id="breaking-changes" class="anchor-point"></a>Breaking Changes</h2>\n<h3 class="anchor-heading"><a href="#react-zui-di-ban-ben-sheng-ji-dao-17">¶</a><a href="javascript:void(0)" id="react-zui-di-ban-ben-sheng-ji-dao-17" class="anchor-point"></a>React 最低版本升级到 17</h3>\n<p>不再支持 React &#x3C;= 16 的版本。</p>\n<h3 class="anchor-heading"><a href="#yi-chu-prefix-zhi-chi">¶</a><a href="javascript:void(0)" id="yi-chu-prefix-zhi-chi" class="anchor-point"></a>移除 <code>prefix</code> 支持</h3>\n<p>所有组件都不再支持 <code>prefix</code> 属性。</p>\n<p>这个属性是历史遗留问题，开始于一个远古的 zent 版本，本身设计的目的为了支持样式定制，但其实一点用也没有。如果有在使用这个属性来做样式定制的，请直接使用 zent 提供的主题功能。</p>\n<h3 class="anchor-heading"><a href="#chong-xie-popover-zu-jian">¶</a><a href="javascript:void(0)" id="chong-xie-popover-zu-jian" class="anchor-point"></a>重写 <code>Popover</code> 组件</h3>\n<p>⚠️ 如果希望使用老版本的 <code>Popover</code> 组件，请使用 <code>@zent/compat</code> 这个包。这个包里的 <code>Popover</code> 组件不再迭代，不加新功能，不改 bug。</p>\n<p>老版本的 <code>Popover</code> 因为 React 的限制，会有一个包裹层 <code>zent-popover-wrapper</code>，新版本的 React 支持了 Fragment，所以 <code>Popover</code> 不再需要这个包裹层了。由于这个改动，<code>Popover</code> 上原来用来控制这个包裹层样式的参数都被删除了，包括 <code>width</code>、<code>display</code> 以及 <code>wrapperClassName</code>，这些属性可以直接在 trigger 上自行控制。另外增加了控制弹层样式的 <code>style</code> 属性，原来的 <code>className</code> 行为未变。</p>\n<p>新版 CSS 类名有变化，具体参考上面各版本的详细说明。</p>\n<h4 class="anchor-heading"><a href="#fei-qi-trigger-base-ji-lei">¶</a><a href="javascript:void(0)" id="fei-qi-trigger-base-ji-lei" class="anchor-point"></a>废弃 <code>Trigger.Base</code> 基类</h4>\n<p>请使用 <code>PopoverAnchor</code> 来实现自定义的 trigger，<code>Trigger.Base</code> 不再被支持。</p>\n<h4 class="anchor-heading"><a href="#trigger-click">¶</a><a href="javascript:void(0)" id="trigger-click" class="anchor-point"></a><code>Trigger.Click</code></h4>\n<ul>\n<li><code>autoClose</code> 重命名为 <code>closeOnClickOutside</code>，这个名字更加贴切的描述了这个属性的作用</li>\n<li>删除 <code>isOutSide</code> 参数，这个参数太过于灵活，使用频次也非常低</li>\n<li>新增 <code>toggle</code> 和 <code>getElement</code>，具体说明请参考 <code>Popover</code> 的文档说明</li>\n</ul>\n<h4 class="anchor-heading"><a href="#trigger-hover">¶</a><a href="javascript:void(0)" id="trigger-hover" class="anchor-point"></a><code>Trigger.Hover</code></h4>\n<ul>\n<li>删除 <code>quirk</code> 和 <code>isOutSide</code> 参数</li>\n<li>新增 <code>anchorOnly</code> 和 <code>getElement</code> 参数，其中 <code>anchorOnly</code> 用于替代 <code>quirk</code> 的绝大部分使用场景</li>\n</ul>\n<h4 class="anchor-heading"><a href="#trigger-focus">¶</a><a href="javascript:void(0)" id="trigger-focus" class="anchor-point"></a><code>Trigger.Focus</code></h4>\n<ul>\n<li>新增 <code>getElement</code> 参数</li>\n</ul>\n<h3 class="anchor-heading"><a href="#pop-he-tooltip">¶</a><a href="javascript:void(0)" id="pop-he-tooltip" class="anchor-point"></a><code>Pop</code> 和 <code>Tooltip</code></h3>\n<p><code>Popover</code> 的改动同样适用于 <code>Pop</code> 和 <code>Tooltip</code>，这里不再重复，请参考上文 <code>Popover</code> 的描述以及 <code>Pop</code> 和 <code>Tooltip</code> 各自的文档说明。</p>\n<p>老版本的 <code>Pop</code> 和 <code>Tooltip</code> 已经迁移到 <code>@zent/compat</code>。</p>\n<p>新版 CSS 类名有变化，具体参考上面各版本的详细说明。</p>\n<h3 class="anchor-heading"><a href="#chong-xie-select">¶</a><a href="javascript:void(0)" id="chong-xie-select" class="anchor-point"></a>重写 <code>Select</code></h3>\n<p>老版本的 <code>Select</code> 是一个非受控组件，代码逻辑难以捉摸，这次是从头开始的完全重写，可以认为是两个完全不同的组件，使用说明请参考新版 <code>Select</code> 的文档。新版加入了一些需求很大的功能，比如选项的动态加载等。</p>\n<p>如果希望继续使用老版本的 <code>Select</code> 组件，请使用 <code>@zent/compat</code> 这个包。⚠️ 注意：这个包里的 <code>Select</code> 组件不再迭代新功能，也不再修 bug，只会酌情处理致命的问题。</p>\n<h3 class="anchor-heading"><a href="#chong-xie-datepicker-deng-shi-jian-xuan-ze-zu-jian">¶</a><a href="javascript:void(0)" id="chong-xie-datepicker-deng-shi-jian-xuan-ze-zu-jian" class="anchor-point"></a>重写 <code>DatePicker</code> 等时间选择组件</h3>\n<p>和 <code>Select</code> 类似，这也是完全重写，和老组件没有任何关联，使用说明请参考新版组件的文档。新版本采用了全新的交互、视觉设计，新增了一些新交互的组件，比如 <code>CombinedDateRangePicker</code> 和 <code>CombinedTimeRangePicker</code>。</p>\n<p>如果希望继续使用老版本的时间选择组件，请使用 <code>@zent/compat</code> 这个包。⚠️ 注意：这个包里的时间选择组件不再迭代新功能，也不再修 bug，只会酌情处理致命的问题。</p>\n<h3 class="anchor-heading"><a href="#daterangequickpicker-css-lei-ming-bian-hua">¶</a><a href="javascript:void(0)" id="daterangequickpicker-css-lei-ming-bian-hua" class="anchor-point"></a><code>DateRangeQuickPicker</code> CSS 类名变化</h3>\n<p>新版 CSS 类名有变化，具体参考上面各版本的详细说明。</p>\n<p>实现上使用了新版时间选择组件。</p>\n<h3 class="anchor-heading"><a href="#chong-xie-cascader">¶</a><a href="javascript:void(0)" id="chong-xie-cascader" class="anchor-point"></a>重写 <code>Cascader</code></h3>\n<p>这也是一个从头开始的完全重写，和原组件完全不兼容，使用说明请参考新版组件的文档。新版增加了异步搜索，滚动加载等新功能。</p>\n<p>如果希望继续使用老版本的 <code>Cascader</code>，请使用 <code>@zent/compat</code> 这个包。⚠️ 注意：这个包里的 <code>Cascader</code> 不再迭代新功能，也不再修 bug，只会酌情处理致命的问题。</p>\n<h3 class="anchor-heading"><a href="#nei-zhi-de-form-field-zu-jian">¶</a><a href="javascript:void(0)" id="nei-zhi-de-form-field-zu-jian" class="anchor-point"></a>内置的 <code>Form</code> <code>Field</code> 组件</h3>\n<p>由于 <code>Select</code> 和时间选择组件的重构，这些组件对应的 <code>Field</code> 也做了相应改造，如果希望使用在新 <code>Form</code>（基于 formulr）中使用这些老版本的 <code>Field</code>，请使用 <code>@zent/compat</code> 这个包里的 <code>formulr/form-components</code>。⚠️ 注意：这些 <code>Field</code> 组件不再迭代新功能，也不再修 bug，只会酌情处理致命的问题。</p>\n<h3 class="anchor-heading"><a href="#previewimage">¶</a><a href="javascript:void(0)" id="previewimage" class="anchor-point"></a><code>previewImage</code></h3>\n<p>所有 CSS 类名都加了 <code>zent-image-p-</code> 的前缀，如果有自定义样式不正常请检查类名是否正确。</p>\n<ul>\n<li><code>zent-show-image</code></li>\n<li><code>image-is-zooming</code></li>\n<li><code>image-p-footer-paging</code></li>\n<li><code>show-rotate-btn</code></li>\n<li><code>rotate-action</code></li>\n</ul>\n<h3 class="anchor-heading"><a href="#dialog">¶</a><a href="javascript:void(0)" id="dialog" class="anchor-point"></a><code>Dialog</code></h3>\n<p>对话框组件调整了最大和最小宽、高，并加入了高度自适应滚动的能力。这个改动有可能影响部分手动设置了宽、高的对话框使用场景，以及一些自行模拟 footer 的场景。</p>\n<h3 class="anchor-heading"><a href="#steps">¶</a><a href="javascript:void(0)" id="steps" class="anchor-point"></a><code>Steps</code></h3>\n<p>新版部分 CSS 类名有变化，具体参考上面各版本的详细说明。功能无变化。</p>\n<h3 class="anchor-heading"><a href="#table">¶</a><a href="javascript:void(0)" id="table" class="anchor-point"></a><code>Table</code></h3>\n<p><code>Table</code> 组件迁移到了 <code>@zent/comapt</code> 包里，功能无变化。</p>\n<h3 class="anchor-heading"><a href="#wen-dang">¶</a><a href="javascript:void(0)" id="wen-dang" class="anchor-point"></a>文档</h3>\n<ul>\n<li>删除 <a href="https://github.com/zent-contrib/sku"><code>Sku</code></a> 和 <a href="https://github.com/zent-contrib/design"><code>Design</code></a> 的文档，这两个组件上个版本已经移除，如果需要查看它们的文档请到对应的仓库看。</li>\n</ul>\n<h2 class="anchor-heading"><a href="#xin-gong-neng">¶</a><a href="javascript:void(0)" id="xin-gong-neng" class="anchor-point"></a>新功能</h2>\n<ul>\n<li>新增 <code>Transfer</code> 组件，一个左右布局的选择组件</li>\n<li>新增 <code>Drawer</code> 组件</li>\n<li>主题色支持透明度，同时兼容老版本的主题色（老版主题色不支持透明度），详细配置参考主题色的文档</li>\n<li>其余新功能请参考上面各版本的详细说明</li>\n</ul>\n<h2 class="anchor-heading"><a href="#9-0-0-2020-12-14">¶</a><a href="javascript:void(0)" id="9-0-0-2020-12-14" class="anchor-point"></a>9.0.0(2020-12-14)</h2>\n<ul>\n<li>🦀️ <code>Drawer</code> 在 <code>nomask</code> 模式下，兼容冒泡事件到达时，节点已被移除 DOM 树的场景</li>\n</ul>\n<h2 class="anchor-heading"><a href="#9-0-0-beta-26-2020-12-14">¶</a><a href="javascript:void(0)" id="9-0-0-beta-26-2020-12-14" class="anchor-point"></a>9.0.0-beta.26(2020-12-14)</h2>\n<ul>\n<li>✨ <code>Select</code> 增加 <code>hideCollapsePop</code> 支持多选折叠模式下隐藏展示数据的气泡</li>\n<li>🦀️ 修改 <code>Dialog</code> <code>overflow</code> 样式</li>\n</ul>\n<h2 class="anchor-heading"><a href="#9-0-0-beta-25-2020-12-11">¶</a><a href="javascript:void(0)" id="9-0-0-beta-25-2020-12-11" class="anchor-point"></a>9.0.0-beta.25(2020-12-11)</h2>\n<ul>\n<li>\n<p><code>DatePicker</code></p>\n<ul>\n<li>增加 <code>disabledTimeWithRange</code>、<code>getDisabledDateAndTimeWithRangeProps</code> 等工具函数，用户处理禁用时间或禁用日期</li>\n<li>扩展日期组件 <code>showTime</code> 时的 <code>defaultTime</code> 类型，支持根据日期自定义默认时间</li>\n<li>暗提示文本样式修改</li>\n</ul>\n</li>\n<li>\n<p><code>Popover</code> <code>Pop</code> <code>Tooltip</code> <code>DateRangeQuickPicker</code> 类名修改</p>\n<ul>\n<li>💥 CSS 类名 <code>zent-pop</code> => <code>zent-pop-v2</code></li>\n<li>💥 CSS 类名 <code>zent-tooltip</code> => <code>zent-tooltip-v2</code></li>\n<li>💥 CSS 类名 <code>zent-popover</code> => <code>zent-popover-v2</code></li>\n<li>💥 CSS 类名 <code>zent-date-range-picker</code> => <code>zent-date-range-quick-picker</code></li>\n</ul>\n</li>\n</ul>\n<h2 class="anchor-heading"><a href="#9-0-0-beta-24-2020-12-10">¶</a><a href="javascript:void(0)" id="9-0-0-beta-24-2020-12-10" class="anchor-point"></a>9.0.0-beta.24 (2020-12-10)</h2>\n<ul>\n<li>🦀️ 导出 <code>postcss-plugin-constants.js</code>，<code>@zent/compat</code> 需要用到</li>\n</ul>\n<h2 class="anchor-heading"><a href="#9-0-0-beta-23-2020-12-10">¶</a><a href="javascript:void(0)" id="9-0-0-beta-23-2020-12-10" class="anchor-point"></a>9.0.0-beta.23 (2020-12-10)</h2>\n<ul>\n<li>🦀️ 修复找不到 <code>ResizeObserver</code> 类型的问题</li>\n</ul>\n<h2 class="anchor-heading"><a href="#9-0-0-beta-22-2020-12-10">¶</a><a href="javascript:void(0)" id="9-0-0-beta-22-2020-12-10" class="anchor-point"></a>9.0.0-beta.22 (2020-12-10)</h2>\n<ul>\n<li>💥 使用了新的 jsx transform，不再兼容 17 以下的 React 版本</li>\n<li>💥 主题色兼容老版本，区分 <code>rgb</code> 和 <code>rgba</code> 的场景，降低升级成本</li>\n<li>\n<p><code>Steps</code></p>\n<ul>\n<li>💥 CSS 类名 <code>is-finish</code> => <code>zent-steps-item--finished</code></li>\n<li>💥 CSS 类名 <code>is-current</code> => <code>zent-steps-item--current</code></li>\n<li>💥 CSS 类名 <code>is-clicked</code> => <code>zent-steps-item--clickable</code></li>\n<li>💥 CSS 类名 <code>is-last-finish</code> => <code>zent-steps-item--last-finished</code></li>\n</ul>\n</li>\n<li>✨ 更新 <code>Dialog</code> 样式，调整了最大和最小宽高，并加入了高度自适应滚动的能力</li>\n<li>\n<p><code>Grid</code></p>\n<ul>\n<li>✨ 增加 <code>GridColumnProvider</code> 设置全局列属性</li>\n<li>✨ 列属性中增加了 <code>isValueEmpty</code> 来自定义判断值为空的逻辑</li>\n<li>✨ 支持通过 <code>loadingProps</code> 自定义加载样式</li>\n</ul>\n</li>\n<li>✨ <code>Select</code> 支持通过 <code>disableSearch</code> 禁用搜索能力</li>\n<li>✨ 设置了全局默认文字颜色为 <code>theme-stroke-1</code></li>\n<li>\n<p><code>ClampLines</code></p>\n<ul>\n<li>✨ 增加一种新的保证结果正确的算法，但是性能较差，默认依旧使用二分算法</li>\n<li>🦀️ 修复二分查找算法问题</li>\n<li>🦀️ 修复 <code>Safari</code> 下样式问题</li>\n<li>🦀️ 兼容 <code>Firefox</code> 有问题的 <code>ResizeObserver</code> 实现</li>\n<li>🦀️ 修复一些 Unicode 字符被截断的问题</li>\n</ul>\n</li>\n<li>🦀️ 更新 <code>Input</code> 样式</li>\n<li>🦀️ 更新 <code>Select</code> 样式</li>\n<li>🦀️ 更新 <code>Cascader</code> 样式</li>\n<li>🦀️ 更新 <code>Steps</code> 样式</li>\n<li>🦀️ 修复 <code>Tabs</code> 翻页逻辑</li>\n</ul>\n<h2 class="anchor-heading"><a href="#9-0-0-beta21-2020-12-02">¶</a><a href="javascript:void(0)" id="9-0-0-beta21-2020-12-02" class="anchor-point"></a>9.0.0-beta21 (2020-12-02)</h2>\n<ul>\n<li>\n<p><code>Form</code></p>\n<ul>\n<li>🦀️ 修复 <code>set.value</code> 和 <code>array.value</code> 不正确的触发了对 <code>value</code> 的持续监听</li>\n<li>🦀️ 修复 <code>array.getRawValue</code> 总是返回初始值的问题</li>\n</ul>\n</li>\n</ul>\n<h2 class="anchor-heading"><a href="#9-0-0-beta20-2020-12-02">¶</a><a href="javascript:void(0)" id="9-0-0-beta20-2020-12-02" class="anchor-point"></a>9.0.0-beta20 (2020-12-02)</h2>\n<ul>\n<li>🦀️ 修复 <code>FieldArrayModel</code> 一些情况下下 <code>children</code> 和 <code>value</code> 个数对不上的问题</li>\n<li>🦀️ <code>ModelRef</code> 内部为初始化完成前使用 <code>initialValue</code>，而不抛异常</li>\n</ul>\n<h2 class="anchor-heading"><a href="#9-0-0-beta19-2020-12-01">¶</a><a href="javascript:void(0)" id="9-0-0-beta19-2020-12-01" class="anchor-point"></a>9.0.0-beta19 (2020-12-01)</h2>\n<ul>\n<li>✨ <code>Form</code> <code>FieldArrayModel</code> 增加 <code>get</code> 方法用于获取指定下标的子 model</li>\n<li>🦀️ <code>Grid</code> 的 <code>datasets</code> 类型改为只读数组</li>\n</ul>\n<h2 class="anchor-heading"><a href="#9-0-0-beta18-2020-12-01">¶</a><a href="javascript:void(0)" id="9-0-0-beta18-2020-12-01" class="anchor-point"></a>9.0.0-beta18 (2020-12-01)</h2>\n<ul>\n<li>✨ <code>Affix</code> 支持固定时宽度自适应原位置的容器大小</li>\n<li>✨ <code>ClampLines</code> 支持自适应容器大小</li>\n<li>\n<p><code>Form</code></p>\n<ul>\n<li>✨ 新增 <code>useFormValid</code>, <code>useFieldValid</code> 以及 <code>FieldValid</code> 用于监听是否有校验错误</li>\n<li>✨ <code>set</code>, <code>array</code> 支持深度订阅值的改变</li>\n</ul>\n</li>\n<li>🦀️ 修复 <code>openDialog</code> 返回值的类型</li>\n<li>\n<p><code>DatePicker</code></p>\n<ul>\n<li>🦀️ 修复 <code>disabledTime</code> 校验不及时的问题</li>\n<li>🦀️ 修复 <code>disabledDate</code> 传入包含时间的 <code>min</code>、<code>max</code> 时不生效的问题</li>\n</ul>\n</li>\n<li>🦀️ 修复 <code>Select</code> 搜索结果列表键盘选择错误的问题</li>\n</ul>\n<h2 class="anchor-heading"><a href="#9-0-0-beta17-2020-11-27">¶</a><a href="javascript:void(0)" id="9-0-0-beta17-2020-11-27" class="anchor-point"></a>9.0.0-beta17 (2020-11-27)</h2>\n<ul>\n<li>✨ <code>Tabs</code> 增加 <code>disableLazyMount</code> 参数，但不推荐使用</li>\n<li>🦀️ <code>Breadcrumb.Item</code> <code>name</code> 改为可选</li>\n<li>🦀️ 修复嵌套 <code>Loading</code> 组件的样式问题</li>\n<li>🦀️ 修复 <code>Popover</code> 一个可能的在 <code>unmount</code> 之后还更新状态的问题</li>\n<li>🦀️ 修复 <code>DatePicker</code> <code>disabled</code> 属性不生效的问题</li>\n<li>🦀️ 修复 <code>FormSelectField</code> 默认值不生效的问题</li>\n<li>🦀️ 修复 <code>FormDatePickerField</code> 默认值不生效的问题</li>\n<li>🦀️ 移除 <code>Form</code> 校验上下文中 <code>getFormValue</code> 的范型约束</li>\n<li>🦀️ 修复 <code>useFieldValue</code> 中一个未正确清理订阅的问题</li>\n</ul>\n<h2 class="anchor-heading"><a href="#9-0-0-beta16-2020-11-24">¶</a><a href="javascript:void(0)" id="9-0-0-beta16-2020-11-24" class="anchor-point"></a>9.0.0-beta16 (2020-11-24)</h2>\n<ul>\n<li>✨ <code>Form</code> 增加 <code>willScrollToError</code> 回调，用于需要在滚动到错误前需要做一些额外操作的场景</li>\n<li>🦀️ 修复 <code>Select</code> 通过键盘选择时的问题</li>\n</ul>\n<h2 class="anchor-heading"><a href="#9-0-0-beta15-2020-11-21">¶</a><a href="javascript:void(0)" id="9-0-0-beta15-2020-11-21" class="anchor-point"></a>9.0.0-beta15 (2020-11-21)</h2>\n<ul>\n<li>🦀️ 修复 <code>React@v17</code> 下 <code>Dialog</code> 动画的问题</li>\n<li>🦀️ 修复 <code>DatePicker</code> 背景色问题</li>\n<li>✨ 升级开发依赖：<code>React@v17</code> <code>TypeScript@v4.1</code></li>\n</ul>\n<h2 class="anchor-heading"><a href="#9-0-0-beta14-2020-11-20">¶</a><a href="javascript:void(0)" id="9-0-0-beta14-2020-11-20" class="anchor-point"></a>9.0.0-beta14 (2020-11-20)</h2>\n<ul>\n<li>🦀️ 修复 <code>node-sass</code> 导致的一个问题</li>\n<li>✨ 升级 <code>caniuse-lite</code> 数据库</li>\n</ul>\n<h2 class="anchor-heading"><a href="#9-0-0-beta13-2020-11-19">¶</a><a href="javascript:void(0)" id="9-0-0-beta13-2020-11-19" class="anchor-point"></a>9.0.0-beta13 (2020-11-19)</h2>\n<ul>\n<li>🦀️ 修复 <code>RadioButton</code> 文字不居中的问题</li>\n<li>🦀️ 修复 <code>DatePicker</code> 弹层的 <code>z-index</code> 问题</li>\n<li>🦀️ 修复主题色问题</li>\n<li>📚 增加主题色相关 mixin 和 function 文档</li>\n</ul>\n<h2 class="anchor-heading"><a href="#9-0-0-beta12-2020-11-17">¶</a><a href="javascript:void(0)" id="9-0-0-beta12-2020-11-17" class="anchor-point"></a>9.0.0-beta12 (2020-11-17)</h2>\n<ul>\n<li>✨ <code>FieldSetValue</code> 支持直接传入 model</li>\n<li>🦀️ 修复 <code>DatePicker</code> 样式问题</li>\n<li>🦀️ 修复部分组件 CSS Variable 主题色支持问题</li>\n<li>📚 更新 <code>Cascader</code> 组件 <code>renderValue</code> 的文档描述</li>\n</ul>\n<h2 class="anchor-heading"><a href="#9-0-0-beta11-2020-11-13">¶</a><a href="javascript:void(0)" id="9-0-0-beta11-2020-11-13" class="anchor-point"></a>9.0.0-beta11 (2020-11-13)</h2>\n<ul>\n<li>\n<p><code>Cascader</code></p>\n<ul>\n<li>✨ 支持通过 <code>visible</code> 和 <code>onVisibleChange</code> 外部控制打开/关闭</li>\n<li>✨ 支持通过 <code>renderItemContent</code> 自定义选项内容渲染</li>\n<li>✨ 支持通过 <code>renderList</code> 自定义选项列表渲染</li>\n<li>✨ 支持通过 <code>getItemTooltip</code> 自定义选项 hover 时的提示文案</li>\n</ul>\n</li>\n</ul>\n<h2 class="anchor-heading"><a href="#9-0-0-beta10-2020-11-11">¶</a><a href="javascript:void(0)" id="9-0-0-beta10-2020-11-11" class="anchor-point"></a>9.0.0-beta10 (2020-11-11)</h2>\n<ul>\n<li>🦀️ 修复 <code>CombinedDateRangePicker</code> 和 <code>WeekPicker</code> 的范围样式</li>\n<li>🦀️ 修改 <code>Pop</code> 组件属性 <code>onConfirm</code> 和 <code>onCancel</code> 的类型定义</li>\n<li>🦀️ 调整 <code>Pop</code> 组件 <code>confirm</code> 类型中按钮的样式</li>\n<li>🦀️ 修改 <code>FormNumberInputField</code> 的 <code>props</code> 类型</li>\n</ul>\n<h2 class="anchor-heading"><a href="#9-0-0-beta9-2020-11-10">¶</a><a href="javascript:void(0)" id="9-0-0-beta9-2020-11-10" class="anchor-point"></a>9.0.0-beta9 (2020-11-10)</h2>\n<ul>\n<li>🦀️ 修复 <code>Cascader</code> 多选时选项层级不一致导致的报错</li>\n</ul>\n<h2 class="anchor-heading"><a href="#9-0-0-beta8-2020-11-09">¶</a><a href="javascript:void(0)" id="9-0-0-beta8-2020-11-09" class="anchor-point"></a>9.0.0-beta8 (2020-11-09)</h2>\n<ul>\n<li>🦀️ 视图模式下 <code>normalizeBeforeSubmit</code> 可选</li>\n</ul>\n<h2 class="anchor-heading"><a href="#9-0-0-beta7-2020-11-09">¶</a><a href="javascript:void(0)" id="9-0-0-beta7-2020-11-09" class="anchor-point"></a>9.0.0-beta7 (2020-11-09)</h2>\n<ul>\n<li>[breaking change] 修改 <code>FormSelectField</code> props 的传递方式，所有 <code>Select</code> 的属性都通过 <code>props.props</code> 传递，和其他 <code>Field</code> 一致，受影响的只有 <code>multiple</code> 和 <code>options</code> 两个属性</li>\n<li>✨ <code>Form</code> 视图模式增加 <code>normalizeBeforeSubmit</code> 支持</li>\n<li>🦀️ 修复 model builder <code>normalizeBeforeSubmit</code> 运行时报错的问题</li>\n<li>🦀️ 更新 <code>Radio</code> 样式</li>\n</ul>\n<h2 class="anchor-heading"><a href="#9-0-0-beta6-2020-11-07">¶</a><a href="javascript:void(0)" id="9-0-0-beta6-2020-11-07" class="anchor-point"></a>9.0.0-beta6 (2020-11-07)</h2>\n<ul>\n<li>✨ 新增 <code>eye</code>、<code>closed-eye</code> 图标</li>\n<li>🦀️ 日期选择组件的 <code>value</code> 属性类型优化</li>\n</ul>\n<h2 class="anchor-heading"><a href="#9-0-0-beta5-2020-11-05">¶</a><a href="javascript:void(0)" id="9-0-0-beta5-2020-11-05" class="anchor-point"></a>9.0.0-beta5 (2020-11-05)</h2>\n<ul>\n<li>✨ <code>Cascader</code> 增加自定义渲染(<code>renderTags</code>)多选结果的能力</li>\n</ul>\n<h2 class="anchor-heading"><a href="#9-0-0-beta4-2020-11-05">¶</a><a href="javascript:void(0)" id="9-0-0-beta4-2020-11-05" class="anchor-point"></a>9.0.0-beta4 (2020-11-05)</h2>\n<ul>\n<li>🦀️ <code>utils/scroll</code> 导出方式兼容老版本</li>\n</ul>\n<h2 class="anchor-heading"><a href="#9-0-0-beta3-2020-11-02">¶</a><a href="javascript:void(0)" id="9-0-0-beta3-2020-11-02" class="anchor-point"></a>9.0.0-beta3 (2020-11-02)</h2>\n<ul>\n<li>✨ 新增 <code>Drawer</code> 组件</li>\n<li>✨ <code>Tabs</code> 新增标签栏分页和锚点功能</li>\n<li>✨ <code>@zent/compat</code> 增加老版本的 <code>Pop</code> 和 <code>Tooltip</code> 组件，方便迁移</li>\n<li>✨ 日期区间选择组件支持限制可选范围</li>\n<li>🦀️ 修复周选择组件的样式问题</li>\n<li>🦀️ 修复 <code>Pop</code> 的类型定义</li>\n<li>🦀️ 修复时间选择组件禁用逻辑</li>\n</ul>\n<h2 class="anchor-heading"><a href="#9-0-0-beta2-2020-10-23">¶</a><a href="javascript:void(0)" id="9-0-0-beta2-2020-10-23" class="anchor-point"></a>9.0.0-beta2 (2020-10-23)</h2>\n<ul>\n<li>✨ 导出 <code>EventHandler</code>、<code>SmoothScroll</code> 和 <code>AnimateHeight</code></li>\n<li>📚 增加 <code>v6</code>、<code>v7</code> 使用文档版本选择</li>\n<li>🦀️ 修复 <code>Cascader</code> 组件 <code>multiple</code> 参数的类型定义问题</li>\n<li>🦀️ 修改 <code>DatePicker</code> 组件 <code>valueType</code> 和 <code>onChange</code> 参数的类型定义</li>\n</ul>'}))}}}}]);