// 使用vitepress-theme-demoblock主题，并注册组件(包含主题中默认的组件)。
import theme from 'vitepress/dist/client/theme-default';

// 主题样式
import 'vitepress-theme-demoblock/theme/styles/index.css';

import { registerComponents } from './register-components.js';
/**
 * register-components.js使用脚本自动创建
 * // package.json
 * "scripts": {
    "register:components": "vitepress-rc"
    }
 */

import './custom.styl';

export default {
  ...theme,
  enhanceApp({ app, router, siteData }) {
    registerComponents(app);
  },
};
