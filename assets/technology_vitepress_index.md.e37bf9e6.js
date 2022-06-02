import{_ as s,c as n,o as a,a as e}from"./app.4d2006aa.js";const k='{"title":"vitepress","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u53C2\u8003\u6587\u6863","slug":"\u53C2\u8003\u6587\u6863"},{"level":2,"title":"\u8D77\u6E90","slug":"\u8D77\u6E90"},{"level":2,"title":"\u9879\u76EE\u5B89\u88C5 + \u914D\u7F6E","slug":"\u9879\u76EE\u5B89\u88C5-\u914D\u7F6E"},{"level":2,"title":"\u76EE\u5F55\u7ED3\u6784","slug":"\u76EE\u5F55\u7ED3\u6784"},{"level":2,"title":"\u4F7F\u7528\u4E3B\u9898 vitepress-theme-demoblock","slug":"\u4F7F\u7528\u4E3B\u9898-vitepress-theme-demoblock"},{"level":2,"title":"\u81EA\u5B9A\u4E49\u6837\u5F0F","slug":"\u81EA\u5B9A\u4E49\u6837\u5F0F"},{"level":2,"title":"\u5728 .md \u4E2D\u4F7F\u7528 vue","slug":"\u5728-md-\u4E2D\u4F7F\u7528-vue"},{"level":2,"title":"\u5728 .md \u4E2D\u4F7F\u7528 TSX/JSX","slug":"\u5728-md-\u4E2D\u4F7F\u7528-tsx-jsx"},{"level":2,"title":"\u96C6\u6210\u7EC4\u4EF6\u5E93","slug":"\u96C6\u6210\u7EC4\u4EF6\u5E93"},{"level":2,"title":"\u90E8\u7F72\u5230Github Pages","slug":"\u90E8\u7F72\u5230github-pages"}],"relativePath":"technology/vitepress/index.md"}',p={},t=e(`<h1 id="vitepress" tabindex="-1">vitepress <a class="header-anchor" href="#vitepress" aria-hidden="true">#</a></h1><h2 id="\u53C2\u8003\u6587\u6863" tabindex="-1">\u53C2\u8003\u6587\u6863 <a class="header-anchor" href="#\u53C2\u8003\u6587\u6863" aria-hidden="true">#</a></h2><p>\u5B98\u7F51\uFF1A <a href="https://vitejs.cn/vitepress/" target="_blank" rel="noopener noreferrer">https://vitejs.cn/vitepress/</a></p><h2 id="\u8D77\u6E90" tabindex="-1">\u8D77\u6E90 <a class="header-anchor" href="#\u8D77\u6E90" aria-hidden="true">#</a></h2><p>\u5B83\u7684\u524D\u8EAB\u5C31\u662F <code>vuePress</code> \uFF0C\u4F46\u76F8\u6BD4 <code>vuePress</code> \uFF0C <code>vitePress </code>\u7684\u901F\u5EA6\u4F1A\u5FEB\u5F88\u591A\u3002\u4E3B\u8981\u56E0\u4E3A <code>vuePress</code> \u662F\u57FA\u4E8E <code>Webpack</code> \u7684\uFF0C\u800C <code>vitePress</code> \u662F\u57FA\u4E8E Vite \u7684\u3002</p><h2 id="\u9879\u76EE\u5B89\u88C5-\u914D\u7F6E" tabindex="-1">\u9879\u76EE\u5B89\u88C5 + \u914D\u7F6E <a class="header-anchor" href="#\u9879\u76EE\u5B89\u88C5-\u914D\u7F6E" aria-hidden="true">#</a></h2><ol><li>\u521B\u5EFA\u5E76\u8FDB\u5165\u4E00\u4E2A\u76EE\u5F55</li></ol><div class="language-bash line-numbers-mode"><pre><code>$ <span class="token function">mkdir</span> vitepress-starter <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">cd</span> vitepress-starter
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><ol start="2"><li>\u521D\u59CB\u5316</li></ol><div class="language-bash line-numbers-mode"><pre><code>$ <span class="token function">yarn</span> init
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><ol start="3"><li>\u672C\u5730\u5B89\u88C5 VitePress</li></ol><div class="language-bash line-numbers-mode"><pre><code>$ <span class="token function">yarn</span> <span class="token function">add</span> --dev vitepress
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><ol start="4"><li>\u521B\u5EFA\u4F60\u7B2C\u4E00\u7BC7\u6587\u6863</li></ol><div class="language-bash line-numbers-mode"><pre><code>$ <span class="token function">mkdir</span> docs <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">echo</span> <span class="token string">&#39;# Hello VitePress&#39;</span> <span class="token operator">&gt;</span> docs/index.md
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><ol start="5"><li>\u5728 package.json.\u6DFB\u52A0\u4E00\u4E9Bscript</li></ol><div class="language-bash line-numbers-mode"><pre><code><span class="token punctuation">{</span>
  <span class="token string">&quot;scripts&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
    <span class="token string">&quot;docs:dev&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;vitepress dev docs&quot;</span>,
    <span class="token string">&quot;docs:build&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;vitepress build docs&quot;</span>,
    <span class="token string">&quot;docs:serve&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;vitepress serve docs&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><ol start="6"><li>\u5728\u672C\u5730\u670D\u52A1\u5668\u4E0A\u542F\u52A8\u6587\u6863\u7AD9\u70B9</li></ol><div class="language-bash line-numbers-mode"><pre><code>$ <span class="token function">yarn</span> docs:dev
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>VitePress \u4F1A\u5728 http://localhost:3000\u542F\u52A8\u4E00\u4E2A\u70ED\u91CD\u8F7D\u7684\u5F00\u53D1\u670D\u52A1\u5668\u3002</p><h2 id="\u76EE\u5F55\u7ED3\u6784" tabindex="-1">\u76EE\u5F55\u7ED3\u6784 <a class="header-anchor" href="#\u76EE\u5F55\u7ED3\u6784" aria-hidden="true">#</a></h2><p>Notes: docs\u4E0B\u7684\u76EE\u5F55\u7ED3\u6784\u5373\u8DEF\u7531</p><div class="language-json line-numbers-mode"><pre><code>\u251C\u2500\u2500 docs
\u2502   \u251C\u2500\u2500 public (\u53EF\u9009\u7684)
\u2502   \u251C\u2500\u2500 .vitepress (\u53EF\u9009\u7684)
\u2502   \u2502   \u251C\u2500\u2500 theme (\u53EF\u9009\u7684)
\u2502   \u2502   \u2502   \u251C\u2500\u2500 custom.styl
\u2502   \u2502   \u2502   \u2514\u2500\u2500 index.ts
\u2502   \u2502   \u251C\u2500\u2500 config.js (\u53EF\u9009\u7684)
\u2502   \u251C\u2500\u2500 about (\u53EF\u9009\u7684)
\u2502   \u2502   \u2514\u2500\u2500 index.md
\u2502   \u251C\u2500\u2500 life (\u53EF\u9009\u7684)
\u2502   \u2502   \u2514\u2500\u2500 index.md
\u2502   \u251C\u2500\u2500 technology (\u53EF\u9009\u7684)
\u2502   \u2502   \u2514\u2500\u2500 components
\u2502   \u2502   \u2514\u2500\u2500 css
\u2502   \u2502   \u2514\u2500\u2500 html
\u2502   \u2502   \u2514\u2500\u2500 \xB7\xB7\xB7
\u2514\u2500\u2500 package.json
\u2514\u2500\u2500 vite.config.ts
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><h2 id="\u4F7F\u7528\u4E3B\u9898-vitepress-theme-demoblock" tabindex="-1">\u4F7F\u7528\u4E3B\u9898 <code>vitepress-theme-demoblock</code> <a class="header-anchor" href="#\u4F7F\u7528\u4E3B\u9898-vitepress-theme-demoblock" aria-hidden="true">#</a></h2><ol><li>\u5B89\u88C5\u4E3B\u9898\u63D2\u4EF6</li></ol><div class="language-bash line-numbers-mode"><pre><code><span class="token function">yarn</span> <span class="token function">add</span> -D vitepress-theme-demoblock
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><ol start="2"><li>css\u9884\u5904\u7406\u5668\u3002 markdown \u4E2D\u7684 vue \u4EE3\u7801\u5305\u542B\u7684 style \u5185\u5BB9\uFF0C\u4F1A\u88AB\u7EC4\u5408\u6210\u4E00\u4E2A style \u7EDF\u4E00\u5904\u7406\uFF0C\u5982\u679C\u9700\u8981\u4F7F\u7528 css \u9884\u5904\u7406\u5668\uFF0C\u9700\u8981\u63D0\u524D\u6307\u5B9A\u5E76\u4E14\u624B\u52A8\u5B89\u88C5\u4F7F\u7528\u7684 css \u9884\u5904\u7406\u5668\u3002</li></ol><div class="language-bash line-numbers-mode"><pre><code><span class="token function">yarn</span> <span class="token function">add</span> <span class="token function">less</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><div class="language-js line-numbers-mode"><pre><code><span class="token literal-property property">markdown</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">config</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">md</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> demoBlockPlugin <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;vitepress-theme-demoblock&#39;</span><span class="token punctuation">)</span>
    md<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>demoBlockPlugin<span class="token punctuation">,</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">cssPreprocessor</span><span class="token operator">:</span> <span class="token string">&#39;less&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><ol start="3"><li>\u4F7F\u7528\u4E3B\u9898 .vitepress/theme/index.js \u4E2D\u4F7F\u7528 vitepress-theme-demoblock \u4E3B\u9898\uFF0C\u5E76\u6CE8\u518C\u7EC4\u4EF6(\u5305\u542B\u4E3B\u9898\u4E2D\u9ED8\u8BA4\u7684\u7EC4\u4EF6)\u3002</li></ol><div class="language-js line-numbers-mode"><pre><code><span class="token keyword">import</span> theme <span class="token keyword">from</span> <span class="token string">&#39;vitepress/dist/client/theme-default&#39;</span>
<span class="token keyword">import</span> <span class="token string">&#39;vitepress-theme-demoblock/theme/styles/index.css&#39;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> registerComponents <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./register-components&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token operator">...</span>theme<span class="token punctuation">,</span>
  <span class="token function">enhanceApp</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> app<span class="token punctuation">,</span> router<span class="token punctuation">,</span> siteData <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">registerComponents</span><span class="token punctuation">(</span>app<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><ol start="4"><li>vitepress-rc package.json \u914D\u7F6E\u547D\u4EE4 scripts\uFF0Cvitepress-rc \u7528\u6765\u6CE8\u518C\u7EC4\u4EF6(--docsDir \u6307\u5B9A docs \u76EE\u5F55\uFF0C--componentsDir \u6307\u5B9A\u7EC4\u4EF6\u6CE8\u518C\u76EE\u5F55)</li></ol><div class="language-js line-numbers-mode"><pre><code><span class="token string-property property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token string-property property">&quot;register:components&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vitepress-rc&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="\u81EA\u5B9A\u4E49\u6837\u5F0F" tabindex="-1">\u81EA\u5B9A\u4E49\u6837\u5F0F <a class="header-anchor" href="#\u81EA\u5B9A\u4E49\u6837\u5F0F" aria-hidden="true">#</a></h2><ol><li>\u5B89\u88C5\u63D2\u4EF6\u3002</li></ol><div class="language-bash line-numbers-mode"><pre><code><span class="token function">npm</span> i -D stylus stylus-loader
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><ol start="2"><li><code>.vitepress</code> \u6587\u4EF6\u5939\u4E0B\u65B0\u5EFA <code>custom.styl</code> \u6587\u4EF6</li><li>\u5728 <code>index.ts</code> \u5F15\u5165<code>custom.styl</code></li></ol><div class="language-js line-numbers-mode"><pre><code><span class="token keyword">import</span> <span class="token string">&#39;./custom.styl&#39;</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><ol start="4"><li>\u63A5\u4E0B\u6765\uFF0C\u5728 <code>custom.styl</code> \u4E2D\u7F16\u5199\u4F60\u60F3\u8981\u7684 <code>css</code> \u4EE3\u7801\u3002</li></ol><h2 id="\u5728-md-\u4E2D\u4F7F\u7528-vue" tabindex="-1">\u5728 <code>.md</code> \u4E2D\u4F7F\u7528 <code>vue</code> <a class="header-anchor" href="#\u5728-md-\u4E2D\u4F7F\u7528-vue" aria-hidden="true">#</a></h2><p>\u53C2\u8003\uFF1A<a href="https://vitejs.cn/vitepress/guide/using-vue.html#escaping" target="_blank" rel="noopener noreferrer">https://vitejs.cn/vitepress/guide/using-vue.html#escaping</a></p><ol><li>\u5B89\u88C5</li></ol><div class="language-bash line-numbers-mode"><pre><code><span class="token function">yarn</span> <span class="token function">add</span> --dev @vitejs/plugin-vue
<span class="token function">yarn</span> <span class="token function">add</span> vue
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><ol start="2"><li>\u5728\u6587\u4EF6\u4E2D\u7F16\u5199 <code>vue</code> \u6587\u4EF6</li></ol><div class="language-md line-numbers-mode"><pre><code><span class="token title important"><span class="token punctuation">#</span> demo</span>
:::demo vue\u4F7F\u7528

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>demo<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> onMounted <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
:::
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><h2 id="\u5728-md-\u4E2D\u4F7F\u7528-tsx-jsx" tabindex="-1">\u5728 <code>.md</code> \u4E2D\u4F7F\u7528 <code>TSX/JSX</code> <a class="header-anchor" href="#\u5728-md-\u4E2D\u4F7F\u7528-tsx-jsx" aria-hidden="true">#</a></h2><ol><li>\u5B89\u88C5</li></ol><div class="language-bash line-numbers-mode"><pre><code><span class="token function">yarn</span> <span class="token function">add</span> --dev @vitejs/plugin-vue-jsx
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><ol start="2"><li>\u5728\u9879\u76EE\u6839\u76EE\u5F55\u4E0B\u914D\u7F6E<code>vite.config.ts</code></li></ol><div class="language-ts line-numbers-mode"><pre><code><span class="token comment">// vite.config.ts</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> defineConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vite&#39;</span>
<span class="token keyword">import</span> vueJsx <span class="token keyword">from</span> <span class="token string">&#39;@vitejs/plugin-vue-jsx&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  plugins<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token function">vueJsx</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>


</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h2 id="\u96C6\u6210\u7EC4\u4EF6\u5E93" tabindex="-1">\u96C6\u6210\u7EC4\u4EF6\u5E93 <a class="header-anchor" href="#\u96C6\u6210\u7EC4\u4EF6\u5E93" aria-hidden="true">#</a></h2><p>\u5F85\u8865\u5145</p><h2 id="\u90E8\u7F72\u5230github-pages" tabindex="-1">\u90E8\u7F72\u5230Github Pages <a class="header-anchor" href="#\u90E8\u7F72\u5230github-pages" aria-hidden="true">#</a></h2><p>\u53C2\u8003\u6587\u6863\uFF1A <a href="https://vitejs.cn/vitepress/guide/deploy.html" target="_blank" rel="noopener noreferrer">https://vitejs.cn/vitepress/guide/deploy.html</a> Notes: \u7AD9\u70B9\u4F1A\u90E8\u7F72\u5728 <code>config.js</code> \u6587\u4EF6\u4E2D\u7684 <code>base URL</code>, base \u9ED8\u8BA4\u4E3A <code>/</code> , \u8981\u683C\u5916\u6CE8\u610F\u8BE5\u8DEF\u5F84\uFF0C\u5982\u679C\u8DEF\u5F84\u4E0D\u6B63\u786E\u4F1A\u5E94\u8BE5\u90E8\u7F72\u3002\u5982\u679C\u4F60\u8BA1\u5212\u5C06\u7AD9\u70B9\u90E8\u7F72\u5230\u5B50\u8DEF\u5F84\uFF08\u4F8B\u5982GitHub\u9875\u9762\uFF09\uFF0C\u5219\u9700\u8981\u8BBE\u7F6E\u8FD9\u4E2A\u9009\u9879\u3002\u6BD4\u5982\uFF0C\u4F60\u8BA1\u5212\u5C06\u7AD9\u70B9\u90E8\u7F72\u5230 <code>https://foo.github.io/&lt;REPO&gt;/</code> ,\u90A3\u4E48\u4F60\u9700\u8981\u8BBE\u7F6Ebase\u4E3A <code>/&lt;REPO&gt;/</code> \u3002\u6CE8\u610F\uFF0Cbase\u9700\u8981\u4EE5/\u5F00\u59CB\u5E76\u4EE5/\u7ED3\u5C3E\u3002</p><div class="language-js line-numbers-mode"><pre><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">base</span><span class="token operator">:</span> <span class="token string">&#39;/&lt;REPO&gt;/&#39;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ol><li>\u521B\u5EFAshell\u811A\u672C\uFF0C \u628A\u6253\u5305\u597D\u7684\u6587\u4EF6\uFF0C\u5373dist\u6587\u4EF6\u5939\u4E0B\u7684\u6240\u6709\u6587\u4EF6\uFF0Cpush\u5230gh-pages\u5206\u652F</li></ol><div class="language-bash line-numbers-mode"><pre><code><span class="token shebang important">#!/usr/bin/env sh</span>

<span class="token comment"># \u5FFD\u7565\u9519\u8BEF</span>
<span class="token builtin class-name">set</span> -e

<span class="token comment"># \u6784\u5EFA</span>
<span class="token function">npm</span> run docs:build

<span class="token comment"># \u8FDB\u5165\u5F85\u53D1\u5E03\u7684\u76EE\u5F55</span>
<span class="token builtin class-name">cd</span> docs/.vitepress/dist

<span class="token comment"># \u5982\u679C\u662F\u53D1\u5E03\u5230\u81EA\u5B9A\u4E49\u57DF\u540D</span>
<span class="token comment"># echo &#39;www.example.com&#39; &gt; CNAME</span>

<span class="token function">git</span> init
<span class="token function">git</span> <span class="token function">add</span> -A
<span class="token function">git</span> commit -m <span class="token string">&#39;deploy&#39;</span>

<span class="token comment"># \u5982\u679C\u90E8\u7F72\u5230 https://&lt;USERNAME&gt;.github.io</span>
<span class="token comment"># git push -f git@github.com:&lt;USERNAME&gt;/&lt;USERNAME&gt;.github.io.git master</span>

<span class="token comment"># \u5982\u679C\u662F\u90E8\u7F72\u5230 https://&lt;USERNAME&gt;.github.io/&lt;REPO&gt;</span>
<span class="token comment"># git push -f git@github.com:&lt;USERNAME&gt;/&lt;REPO&gt;.git master:gh-pages</span>

<span class="token comment"># \u628A\u4E0A\u9762\u7684 &lt;USERNAME&gt; \u6362\u6210\u4F60\u81EA\u5DF1\u7684 Github \u7528\u6237\u540D\uFF0C&lt;REPO&gt; \u6362\u6210\u4ED3\u5E93\u540D\uFF0C\u6BD4\u5982\u6211\u8FD9\u91CC\u5C31\u662F\uFF1A</span>
<span class="token function">git</span> push -f git@github.com:anlyyao/vitepress-blog.git master:gh-pages

<span class="token builtin class-name">cd</span> -
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br></div></div><ol start="2"><li>git\u4ED3\u5E93\u914D\u7F6E\uFF08\u8BE5\u6B65\u9AA4\u5747\u5728Git\u4ED3\u5E93\u5B8C\u6210\uFF09</li></ol><blockquote><p>a. \u8FDB\u5165\u4ED3\u5E93 b. \u6253\u5F00setting c. \u8FDB\u5165 <code>Pages</code>, <code>Source</code> \u4E2D\u7684 <code>Branch</code> \u8BBE\u7F6E\u4E3A <code>gh-pages</code> d. \u6700\u540E\u90E8\u7F72\u7684\u7AD9\u70B9\u4E3A\uFF1A <code>https://anlyyao.github.io/vitepress-blog/</code> e. \u5982\u679C\u8981\u4F7F\u7528\u81EA\u5DF1\u7684\u57DF\u540D\uFF0C\u5728 <code>Custom domain</code> \u90E8\u5206\u8BBE\u7F6E</p></blockquote><ol start="3"><li>\u501F\u52A9 <code>github action</code>\u63D0\u4EA4\u81EA\u52A8\u53D1\u5E03\u5230gh-pages\u5206\u652F</li></ol><div class="language-bash line-numbers-mode"><pre><code>name: Build and Deploy
on:
  push:
    branches: main
jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout \u{1F6CE}\uFE0F
        uses: actions/checkout@v3

      - name: Install and Build \u{1F527} <span class="token comment"># This example project is built using npm and outputs the result to the &#39;build&#39; folder. Replace with the commands required to build your project, or remove this step entirely if your site is pre-built.</span>
        run: <span class="token operator">|</span>
          <span class="token function">yarn</span> <span class="token function">install</span>
          <span class="token function">yarn</span> run build
      - name: Deploy \u{1F680}
        uses: JamesIves/github-pages-deploy-action@v4.3.3
        with:
          GITHUB_TOKEN: <span class="token variable">\${{ secrets.GITHUB_TOKEN }</span><span class="token punctuation">}</span>
          BRANCH: gh-pages <span class="token comment"># The branch the action should deploy to.</span>
          FOLDER: docs/.vitepress/dist <span class="token comment"># The folder the action should deploy.</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div>`,60),l=[t];function o(c,r,i,u,d,b){return a(),n("div",null,l)}var g=s(p,[["render",o]]);export{k as __pageData,g as default};
