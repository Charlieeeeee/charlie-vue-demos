export default {
  install (Vue) {
    Vue.mixin({
      created () {
        console.log('global hook created')
      }
    })
  }
}