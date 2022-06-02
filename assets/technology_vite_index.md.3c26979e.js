import{_ as n,c as s,o as a,a as p}from"./app.4d2006aa.js";const y='{"title":"vite.config.js\u6587\u4EF6\u914D\u7F6E\u89E3\u6790","description":"","frontmatter":{},"headers":[],"relativePath":"technology/vite/index.md"}',t={},e=p(`<h1 id="vite-config-js\u6587\u4EF6\u914D\u7F6E\u89E3\u6790" tabindex="-1">vite.config.js\u6587\u4EF6\u914D\u7F6E\u89E3\u6790 <a class="header-anchor" href="#vite-config-js\u6587\u4EF6\u914D\u7F6E\u89E3\u6790" aria-hidden="true">#</a></h1><div class="language-js line-numbers-mode"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vite&quot;</span><span class="token punctuation">;</span>  <span class="token comment">// \u5E2E\u624B\u51FD\u6570\uFF0C\u8FD9\u6837\u4E0D\u7528 jsdoc \u6CE8\u89E3\u4E5F\u53EF\u4EE5\u83B7\u53D6\u7C7B\u578B\u63D0\u793A</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> resolve <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;path&quot;</span><span class="token punctuation">;</span> <span class="token comment">// \u4E3B\u8981\u7528\u4E8Ealias\u6587\u4EF6\u8DEF\u5F84\u522B\u540D</span>
<span class="token keyword">import</span> react <span class="token keyword">from</span> <span class="token string">&#39;@vitejs/plugin-react&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> legacy <span class="token keyword">from</span> <span class="token string">&#39;@vitejs/plugin-legacy&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> defineConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vite&#39;</span> <span class="token comment">// \u5E2E\u624B\u51FD\u6570\uFF0C\u8FD9\u6837\u4E0D\u7528 jsdoc \u6CE8\u89E3\u4E5F\u53EF\u4EE5\u83B7\u53D6\u7C7B\u578B\u63D0\u793A</span>

<span class="token comment">// https://vitejs.dev/config/</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
 <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token comment">//\u914D\u7F6E\u9700\u8981\u4F7F\u7528\u7684\u63D2\u4EF6\u5217\u8868</span>
  <span class="token function">vue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token comment">// \u5C06vue\u6DFB\u52A0\u8FDB\u53BB</span>
  <span class="token function">viteMockServe</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
   <span class="token literal-property property">mockPath</span><span class="token operator">:</span> <span class="token string">&quot;./src/server/mock&quot;</span><span class="token punctuation">,</span>
   <span class="token literal-property property">localEnabled</span><span class="token operator">:</span> localEnabled<span class="token punctuation">,</span> <span class="token comment">// \u5F00\u53D1\u6253\u5305\u5F00\u5173 true\u65F6\u6253\u5F00mock  false\u5173\u95EDmock</span>
   <span class="token literal-property property">prodEnabled</span><span class="token operator">:</span> prodEnabled<span class="token punctuation">,</span><span class="token comment">//prodEnabled, // \u751F\u4EA7\u6253\u5305\u5F00\u5173</span>
   <span class="token comment">// \u8FD9\u6837\u53EF\u4EE5\u63A7\u5236\u5173\u95EDmock\u7684\u65F6\u5019\u4E0D\u8BA9mock\u6253\u5305\u5230\u6700\u7EC8\u4EE3\u7801\u5185</span>
   <span class="token literal-property property">injectCode</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
    import { setupProdMockServer } from &#39;./mockProdServer&#39;;
    setupProdMockServer();
   </span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
   <span class="token literal-property property">logger</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">//\u662F\u5426\u5728\u63A7\u5236\u53F0\u663E\u793A\u8BF7\u6C42\u65E5\u5FD7</span>
   <span class="token literal-property property">supportTs</span><span class="token operator">:</span><span class="token boolean">false</span> <span class="token comment">//\u6253\u5F00\u540E\uFF0C\u53EF\u4EE5\u8BFB\u53D6 ts \u6587\u4EF6\u6A21\u5757 \u6253\u5F00\u540E\u5C06\u65E0\u6CD5\u76D1\u89C6 .js \u6587\u4EF6</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
 <span class="token punctuation">]</span><span class="token punctuation">,</span>

 <span class="token comment">// \u5F3A\u5236\u9884\u6784\u5EFA\u63D2\u4EF6\u5305</span>
 <span class="token literal-property property">optimizeDeps</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">entries</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token comment">//\u68C0\u6D4B\u9700\u8981\u9884\u6784\u5EFA\u7684\u4F9D\u8D56\u9879</span>
  <span class="token literal-property property">include</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;axios&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token comment">//\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u4E0D\u5728 node_modules \u4E2D\u7684\uFF0C\u94FE\u63A5\u7684\u5305\u4E0D\u4F1A\u9884\u6784\u5EFA</span>
  <span class="token literal-property property">exclude</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token string">&#39;your-package-name&#39;</span><span class="token punctuation">]</span> <span class="token comment">//\u6392\u9664\u5728\u4F18\u5316\u4E4B\u5916</span>
 <span class="token punctuation">}</span><span class="token punctuation">,</span>

 <span class="token comment">//\u9759\u6001\u8D44\u6E90\u670D\u52A1\u7684\u6587\u4EF6\u5939</span>
 <span class="token literal-property property">publicDir</span><span class="token operator">:</span> <span class="token string">&quot;public&quot;</span><span class="token punctuation">,</span>
 <span class="token literal-property property">base</span><span class="token operator">:</span> <span class="token string">&#39;./&#39;</span><span class="token punctuation">,</span>
 <span class="token literal-property property">assetsInclude</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span><span class="token comment">//\u9759\u6001\u8D44\u6E90\u5904\u7406</span>
 <span class="token literal-property property">logLevel</span><span class="token operator">:</span> <span class="token string">&quot;info&quot;</span><span class="token punctuation">,</span><span class="token comment">//\u63A7\u5236\u53F0\u8F93\u51FA\u7684\u7EA7\u522B info \u3001warn\u3001error\u3001silent</span>
 <span class="token literal-property property">clearScreen</span><span class="token operator">:</span><span class="token boolean">true</span><span class="token punctuation">,</span><span class="token comment">// \u8BBE\u4E3Afalse \u53EF\u4EE5\u907F\u514D vite \u6E05\u5C4F\u800C\u9519\u8FC7\u5728\u7EC8\u7AEF\u4E2D\u6253\u5370\u67D0\u4E9B\u5173\u952E\u4FE1\u606F</span>

 <span class="token literal-property property">resolve</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">alias</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token comment">//\u914D\u7F6E\u522B\u540D</span>
   <span class="token punctuation">{</span> <span class="token literal-property property">find</span><span class="token operator">:</span> <span class="token string">&#39;@&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">replacement</span><span class="token operator">:</span> <span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;src&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">}</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token comment">// \u60C5\u666F\u5BFC\u51FA package.json \u914D\u7F6E\u4E2D\u7684exports\u5B57\u6BB5</span>
  <span class="token literal-property property">conditions</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token comment">// \u5BFC\u5165\u65F6\u60F3\u8981\u7701\u7565\u7684\u6269\u5C55\u540D\u5217\u8868</span>
  <span class="token comment">// \u4E0D\u5EFA\u8BAE\u4F7F\u7528 .vue \u5F71\u54CDIDE\u548C\u7C7B\u578B\u652F\u6301</span>
  <span class="token literal-property property">extensions</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token string">&#39;.mjs&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;.js&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;.ts&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;.jsx&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;.tsx&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;.json&#39;</span><span class="token punctuation">]</span>
 <span class="token punctuation">}</span><span class="token punctuation">,</span>

 <span class="token comment">// css</span>
 <span class="token literal-property property">css</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">modules</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token comment">// \u914D\u7F6E css modules \u7684\u884C\u4E3A</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">postcss</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token comment">// postCss \u914D\u7F6E</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">//\u6307\u5B9A\u4F20\u9012\u7ED9 css \u9884\u5904\u7406\u5668\u7684\u9009\u9879</span>
  <span class="token literal-property property">preprocessorOptions</span><span class="token operator">:</span><span class="token punctuation">{</span>
   <span class="token literal-property property">scss</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">additionalData</span><span class="token operator">:</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">$injectedColor:orange;</span><span class="token template-punctuation string">\`</span></span>
   <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
 <span class="token punctuation">}</span><span class="token punctuation">,</span>

 <span class="token literal-property property">json</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">namedExports</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">//\u662F\u5426\u652F\u6301\u4ECE .json \u6587\u4EF6\u4E2D\u8FDB\u884C\u6309\u540D\u5BFC\u5165</span>
  <span class="token literal-property property">stringify</span><span class="token operator">:</span><span class="token boolean">false</span> <span class="token comment">//\u82E5\u8BBE\u7F6E\u4E3A true \u5BFC\u5165\u7684json\u4F1A\u88AB\u8F6C\u4E3A export default JSON.parse(&quot;..&quot;) \u4F1A\u6BD4\u8F6C\u8BD1\u6210\u5BF9\u8C61\u5B57\u9762\u91CF\u6027\u80FD\u66F4\u597D</span>

 <span class="token punctuation">}</span><span class="token punctuation">,</span>
 <span class="token comment">//\u7EE7\u627F\u81EA esbuild \u8F6C\u6362\u9009\u9879\uFF0C\u6700\u5E38\u89C1\u7684\u7528\u4F8B\u662F\u81EA\u5B9A\u4E49 JSX</span>
 <span class="token literal-property property">esbuild</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">jsxFactory</span><span class="token operator">:</span> <span class="token string">&quot;h&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">jsxFragment</span><span class="token operator">:</span> <span class="token string">&quot;Fragment&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">jsxInject</span><span class="token operator">:</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">import Vue from &#39;vue&#39;</span><span class="token template-punctuation string">\`</span></span>
 <span class="token punctuation">}</span><span class="token punctuation">,</span>

 <span class="token comment">//\u672C\u5730\u8FD0\u884C\u914D\u7F6E\uFF0C\u4EE5\u53CA\u53CD\u5411\u4EE3\u7406\u914D\u7F6E</span>
 <span class="token literal-property property">server</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">host</span><span class="token operator">:</span> <span class="token string">&quot;localhost&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">https</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span><span class="token comment">//\u662F\u5426\u542F\u7528 http 2</span>
  <span class="token literal-property property">cors</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span><span class="token comment">//\u4E3A\u5F00\u53D1\u670D\u52A1\u5668\u914D\u7F6E CORS , \u9ED8\u8BA4\u542F\u7528\u5E76\u5141\u8BB8\u4EFB\u4F55\u6E90</span>
  <span class="token literal-property property">open</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span><span class="token comment">//\u670D\u52A1\u542F\u52A8\u65F6\u81EA\u52A8\u5728\u6D4F\u89C8\u5668\u4E2D\u6253\u5F00\u5E94\u7528</span>
  <span class="token literal-property property">port</span><span class="token operator">:</span> <span class="token string">&quot;9000&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">strictPort</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">//\u8BBE\u4E3Atrue\u65F6\u7AEF\u53E3\u88AB\u5360\u7528\u5219\u76F4\u63A5\u9000\u51FA\uFF0C\u4E0D\u4F1A\u5C1D\u8BD5\u4E0B\u4E00\u4E2A\u53EF\u7528\u7AEF\u53E3</span>
  <span class="token literal-property property">force</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span><span class="token comment">//\u662F\u5426\u5F3A\u5236\u4F9D\u8D56\u9884\u6784\u5EFA</span>
  <span class="token literal-property property">hmr</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span><span class="token comment">//\u7981\u7528\u6216\u914D\u7F6E HMR \u8FDE\u63A5</span>
  <span class="token literal-property property">watch</span><span class="token operator">:</span> <span class="token punctuation">{</span>
   <span class="token comment">// \u4F20\u9012\u7ED9 chockidar \u7684\u6587\u4EF6\u7CFB\u7EDF\u76D1\u89C6\u5668\u9009\u9879</span>
   <span class="token literal-property property">ignored</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token string">&quot;!**/node_modules/your-package-name/**&quot;</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token comment">// \u53CD\u5411\u4EE3\u7406\u914D\u7F6E\uFF0C\u6CE8\u610Frewrite\u5199\u6CD5</span>
  <span class="token literal-property property">proxy</span><span class="token operator">:</span> <span class="token punctuation">{</span>
   <span class="token string-property property">&#39;/api&#39;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">target</span><span class="token operator">:</span> <span class="token string">&quot;https://xxxx.com/&quot;</span><span class="token punctuation">,</span><span class="token comment">//\u4EE3\u7406\u63A5\u53E3</span>
    <span class="token literal-property property">changeOrigin</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token function-variable function">rewrite</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">path</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> path<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^\\/api</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">)</span>
   <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
 <span class="token punctuation">}</span><span class="token punctuation">,</span>

 <span class="token comment">//\u6253\u5305\u914D\u7F6E</span>
 <span class="token literal-property property">build</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">target</span><span class="token operator">:</span> <span class="token string">&quot;modules&quot;</span><span class="token punctuation">,</span> <span class="token comment">//\u6D4F\u89C8\u5668\u517C\u5BB9\u6027  &quot;esnext&quot;|&quot;modules&quot;</span>
  <span class="token literal-property property">outDir</span><span class="token operator">:</span> <span class="token string">&quot;dist&quot;</span><span class="token punctuation">,</span><span class="token comment">//\u6307\u5B9A\u8F93\u51FA\u8DEF\u5F84</span>
  <span class="token literal-property property">assetsDir</span><span class="token operator">:</span> <span class="token string">&quot;assets&quot;</span><span class="token punctuation">,</span> <span class="token comment">//\u751F\u6210\u9759\u6001\u8D44\u6E90\u7684\u5B58\u653E\u8DEF\u5F84</span>
  <span class="token literal-property property">assetsInlineLimit</span><span class="token operator">:</span> <span class="token number">4096</span><span class="token punctuation">,</span><span class="token comment">//\u5C0F\u4E8E\u6B64\u9608\u503C\u7684\u5BFC\u5165\u6216\u5F15\u7528\u8D44\u6E90\u5C06\u5185\u8054\u4E3A base64 \u7F16\u7801\uFF0C\u4EE5\u907F\u514D\u989D\u5916\u7684 http \u8BF7\u6C42\u3002\u8BBE\u7F6E\u4E3A 0 \u53EF\u4EE5\u5B8C\u5168\u7981\u7528\u6B64\u9879</span>
  <span class="token literal-property property">cssCodeSplit</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">//\u542F\u7528/\u7981\u7528 CSS \u4EE3\u7801\u62C6\u5206</span>
  <span class="token literal-property property">sourcemap</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span><span class="token comment">//\u6784\u5EFA\u540E\u662F\u5426\u751F\u6210 source map \u6587\u4EF6</span>
  <span class="token literal-property property">rollupOptions</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token comment">//\u81EA\u5B9A\u4E49\u5E95\u5C42\u7684 Rollup \u6253\u5305\u914D\u7F6E</span>

  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">commonjsOptions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token comment">//@rollup/plugin-commonjs \u63D2\u4EF6\u7684\u9009\u9879</span>

  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">//\u6784\u5EFA\u7684\u5E93</span>
  <span class="token literal-property property">lib</span><span class="token operator">:</span> <span class="token punctuation">{</span>

  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">manifest</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span><span class="token comment">//\u5F53\u8BBE\u7F6E\u4E3A true\uFF0C\u6784\u5EFA\u540E\u5C06\u4F1A\u751F\u6210 manifest.json \u6587\u4EF6.\u8BBE\u7F6E\u4E3A false \u53EF\u4EE5\u7981\u7528\u6700\u5C0F\u5316\u6DF7\u6DC6\uFF0C\u6216\u662F\u7528\u6765\u6307\u5B9A\u4F7F\u7528\u54EA\u79CD\u6DF7\u6DC6\u5668</span>
  <span class="token literal-property property">minify</span><span class="token operator">:</span> <span class="token string">&quot;terser&quot;</span><span class="token punctuation">,</span><span class="token comment">// boolean | &#39;terser&#39; | &#39;esbuild&#39;.terser \u6784\u5EFA\u540E\u6587\u4EF6\u4F53\u79EF\u66F4\u5C0F</span>
  <span class="token literal-property property">terserOptions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token comment">//\u4F20\u9012\u7ED9 Terser \u7684\u66F4\u591A minify \u9009\u9879\u3002</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">write</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span><span class="token comment">//\u8BBE\u7F6E\u4E3A false \u6765\u7981\u7528\u5C06\u6784\u5EFA\u540E\u7684\u6587\u4EF6\u5199\u5165\u78C1\u76D8</span>
  <span class="token literal-property property">emptyOutDir</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span><span class="token comment">//\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u82E5 outDir \u5728 root \u76EE\u5F55\u4E0B\uFF0C\u5219 Vite \u4F1A\u5728\u6784\u5EFA\u65F6\u6E05\u7A7A\u8BE5\u76EE\u5F55\u3002</span>
  <span class="token literal-property property">brotliSize</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span><span class="token comment">//\u542F\u7528/\u7981\u7528 brotli \u538B\u7F29\u5927\u5C0F\u62A5\u544A</span>
  <span class="token literal-property property">chunkSizeWarningLimit</span><span class="token operator">:</span> <span class="token number">500</span> <span class="token comment">//chunk \u5927\u5C0F\u8B66\u544A\u7684\u9650\u5236</span>

 <span class="token punctuation">}</span><span class="token punctuation">,</span>

 <span class="token literal-property property">ssr</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">external</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// \u5217\u51FA\u7684\u662F\u8981\u4E3A SSR \u5F3A\u5236\u5916\u90E8\u5316\u7684\u4F9D\u8D56</span>
  <span class="token literal-property property">noExternal</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token comment">//\u5217\u51FA\u7684\u662F\u9632\u6B62\u88AB SSR \u5916\u90E8\u5316\u4F9D\u8D56\u9879</span>
 <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br><span class="line-number">118</span><br><span class="line-number">119</span><br><span class="line-number">120</span><br><span class="line-number">121</span><br><span class="line-number">122</span><br><span class="line-number">123</span><br><span class="line-number">124</span><br><span class="line-number">125</span><br><span class="line-number">126</span><br><span class="line-number">127</span><br><span class="line-number">128</span><br><span class="line-number">129</span><br><span class="line-number">130</span><br><span class="line-number">131</span><br><span class="line-number">132</span><br><span class="line-number">133</span><br><span class="line-number">134</span><br><span class="line-number">135</span><br><span class="line-number">136</span><br><span class="line-number">137</span><br></div></div>`,2),o=[e];function r(l,c,u,i,k,m){return a(),s("div",null,o)}var g=n(t,[["render",r]]);export{y as __pageData,g as default};
