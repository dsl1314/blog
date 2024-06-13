export const blogPostData = JSON.parse("[{\"path\":\"/article/33297xi4/\",\"title\":\"JVM学习\",\"categoryList\":[{\"type\":10000,\"name\":\"面试\"}],\"createTime\":\"2024/06/13 13:04:10\",\"lang\":\"zh-CN\"}]");

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateBlogData) {
    __VUE_HMR_RUNTIME__.updateBlogData(blogPostData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ blogPostData }) => {
    __VUE_HMR_RUNTIME__.updateBlogData(blogPostData)
  })
}
