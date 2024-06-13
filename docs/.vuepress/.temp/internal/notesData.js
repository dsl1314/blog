
export const notesData = {}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateNotesData) {
    __VUE_HMR_RUNTIME__.updateNotesData(notesData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ notesData }) => {
    __VUE_HMR_RUNTIME__.updateNotesData(notesData)
  })
}
