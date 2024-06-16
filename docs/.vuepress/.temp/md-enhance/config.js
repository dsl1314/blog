import { defineClientConfig } from "vuepress/client";
import CodeTabs from "E:/2024/blog/node_modules/vuepress-plugin-md-enhance/lib/client/components/CodeTabs.js";
import { hasGlobalComponent } from "E:/2024/blog/node_modules/@vuepress/helper/lib/client/index.js";
import { CodeGroup, CodeGroupItem } from "E:/2024/blog/node_modules/vuepress-plugin-md-enhance/lib/client/compact/index.js";
import "E:/2024/blog/node_modules/vuepress-plugin-md-enhance/lib/client/styles/footnote.scss";
import { useHintContainers } from "E:/2024/blog/node_modules/vuepress-plugin-md-enhance/lib/client/composables/useHintContainers.js";
import "E:/2024/blog/node_modules/vuepress-plugin-md-enhance/lib/client/styles/hint/index.scss";
import "E:/2024/blog/node_modules/katex/dist/katex.min.css";
import "E:/2024/blog/node_modules/vuepress-plugin-md-enhance/lib/client/styles/katex.scss";
import Tabs from "E:/2024/blog/node_modules/vuepress-plugin-md-enhance/lib/client/components/Tabs.js";
import "E:/2024/blog/node_modules/vuepress-plugin-md-enhance/lib/client/styles/tasklist.scss";

export default defineClientConfig({
  enhance: ({ app }) => {
    app.component("CodeTabs", CodeTabs);
    if(!hasGlobalComponent("CodeGroup", app)) app.component("CodeGroup", CodeGroup);
    if(!hasGlobalComponent("CodeGroupItem", app)) app.component("CodeGroupItem", CodeGroupItem);
    app.component("Tabs", Tabs);
  },
  setup: () => {
useHintContainers();
  }
});
