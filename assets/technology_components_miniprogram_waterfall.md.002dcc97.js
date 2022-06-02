var f=Object.defineProperty;var d=Object.getOwnPropertySymbols;var y=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable;var k=(s,e,a)=>e in s?f(s,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):s[e]=a,_=(s,e)=>{for(var a in e||(e={}))y.call(e,a)&&k(s,a,e[a]);if(d)for(var a of d(e))v.call(e,a)&&k(s,a,e[a]);return s};import{_ as w,c as C,e as m,w as u,b as n,d as t,r as g,o as B,V as F}from"./app.4d2006aa.js";const V={name:"component-doc",components:{"render-demo-0":function(){const{createTextVNode:s,resolveComponent:e,withCtx:a,createVNode:o,openBlock:i,createElementBlock:r}=F,c=s("Small"),p=s("Middle"),x=s("Large"),b=s("Disabled");function h(M,S){const l=e("lx-button");return i(),r("div",null,[o(l,{style:{color:"red"}},{default:a(()=>[c]),_:1}),o(l,{type:"size"},{default:a(()=>[p]),_:1}),o(l,null,{default:a(()=>[x]),_:1}),o(l,{disabled:""},{default:a(()=>[b]),_:1})])}return _({render:h},{})}()}},A='{"title":"waterfall","description":"","frontmatter":{},"headers":[],"relativePath":"technology/components/miniprogram/waterfall.md"}',E=n("h1",{id:"waterfall",tabindex:"-1"},[t("waterfall "),n("a",{class:"header-anchor",href:"#waterfall","aria-hidden":"true"},"#")],-1),N=n("div",null,"\u5E38\u7528\u7684\u64CD\u4F5C\u6309\u94AE",-1),D=n("div",null,[t("\u4F7F\u7528"),n("code",null,"type"),t("\uFF0C"),n("code",null,"plain"),t("\uFF0C"),n("code",null,"round"),t("\u6765\u5B9A\u4E49 Button \u7684\u6837\u5F0F")],-1),$=n("div",{class:"language-vue line-numbers-mode"},[n("pre",null,[n("code",null,[t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("lx-button")]),t(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"color"),n("span",{class:"token punctuation"},":"),t(" red")]),n("span",{class:"token punctuation"},'"')])]),n("span",{class:"token punctuation"},">")]),t("Small"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("lx-button")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("lx-button")]),t(),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("size"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("Middle"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("lx-button")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("lx-button")]),n("span",{class:"token punctuation"},">")]),t("Large"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("lx-button")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("lx-button")]),t(),n("span",{class:"token attr-name"},"disabled"),n("span",{class:"token punctuation"},">")]),t("Disabled"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("lx-button")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("style")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token style"},[n("span",{class:"token language-css"},[t(`
  `),n("span",{class:"token selector"},"lx-button"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token property"},"margin"),n("span",{class:"token punctuation"},":"),t(" 0 20px"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("style")]),n("span",{class:"token punctuation"},">")]),t(`

`)])])],-1);function z(s,e,a,o,i,r){const c=g("render-demo-0"),p=g("demo");return B(),C("div",null,[E,N,m(p,{sourceCode:`
<template>
  <lx-button style="color: red">Small</lx-button>
  <lx-button type="size">Middle</lx-button>
  <lx-button>Large</lx-button>
  <lx-button disabled>Disabled</lx-button>
</template>

<style>
  lx-button {
    margin: 0 20px;
  }
</style>

`},{description:u(()=>[D]),highlight:u(()=>[$]),default:u(()=>[m(c)]),_:1})])}var P=w(V,[["render",z]]);export{A as __pageData,P as default};
