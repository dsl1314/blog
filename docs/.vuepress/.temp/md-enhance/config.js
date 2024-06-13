import { defineClientConfig } from "vuepress/client";
import CodeTabs from "D:/fileplace/private/coding/webWorkplace/blog/node_modules/vuepress-plugin-md-enhance/lib/client/components/CodeTabs.js";
import { hasGlobalComponent } from "D:/fileplace/private/coding/webWorkplace/blog/node_modules/@vuepress/helper/lib/client/index.js";
import { CodeGroup, CodeGroupItem } from "D:/fileplace/private/coding/webWorkplace/blog/node_modules/vuepress-plugin-md-enhance/lib/client/compact/index.js";
import "D:/fileplace/private/coding/webWorkplace/blog/node_modules/vuepress-plugin-md-enhance/lib/client/styles/footnote.scss";
import { useHintContainers } from "D:/fileplace/private/coding/webWorkplace/blog/node_modules/vuepress-plugin-md-enhance/lib/client/composables/useHintContainers.js";
import "D:/fileplace/private/coding/webWorkplace/blog/node_modules/vuepress-plugin-md-enhance/lib/client/styles/hint/index.scss";
import "D:/fileplace/private/coding/webWorkplace/blog/node_modules/katex/dist/katex.min.css";
import "D:/fileplace/private/coding/webWorkplace/blog/node_modules/vuepress-plugin-md-enhance/lib/client/styles/katex.scss";
import Tabs from "D:/fileplace/private/coding/webWorkplace/blog/node_modules/vuepress-plugin-md-enhance/lib/client/components/Tabs.js";
import "D:/fileplace/private/coding/webWorkplace/blog/node_modules/vuepress-plugin-md-enhance/lib/client/styles/tasklist.scss";

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
