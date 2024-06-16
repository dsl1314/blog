
import { useCopyCode } from 'E:/2024/blog/node_modules/@vuepress-plume/plugin-shikiji/lib/client/composables/copy-code.js'

export default {
  
  setup() {
    useCopyCode({
      selector: __CC_SELECTOR__,
      duration: __CC_DURATION__,
    })
  },
}
