import comp from "E:/2024/blog/docs/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{\"home\":true,\"heroImage\":\"/avatar.jpg\",\"config\":[{\"type\":\"banner\",\"banner\":\"https://file.mo7.cc/api/public/bz\",\"bannerMask\":{\"light\":0.1,\"dark\":0.3},\"hero\":{\"name\":\"myBlog\",\"tagline\":\"Today's efforts, tomorrow's gains.\",\"text\":\"今天的努力，明天的收获。\",\"actions\":[{\"text\":\"我的博客\",\"link\":\"/blog/\",\"theme\":\"brand\"},{\"text\":\"Gitee\",\"link\":\"https://gitee.com/he-du\",\"theme\":\"alt\"}]}}],\"head\":[[\"script\",{\"id\":\"check-dark-mode\"},\";(function () {const um= localStorage.getItem('vuepress-theme-appearance') || 'auto';const sm = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;if (um === 'dark' || (um !== 'light' && sm)) {document.documentElement.classList.add('dark');}})();\"],[\"script\",{\"id\":\"check-mac-os\"},\"document.documentElement.classList.toggle('mac', /Mac|iPhone|iPod|iPad/i.test(navigator.platform))\"]]},\"headers\":[],\"readingTime\":{\"minutes\":0.27,\"words\":54},\"filePathRelative\":\"README.md\",\"categoryList\":[]}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
