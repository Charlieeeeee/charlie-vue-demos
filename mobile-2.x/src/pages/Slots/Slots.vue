<template>
  <div class="Slots-page">
    <blog-post>
      <template v-slot:header>
        <h1>About Me</h1>
      </template>

      <p>Here's some page content, which will be included in vm.$slots.default, because it's not inside a named slot.</p>

      <template v-slot:footer>
        <p>Copyright 2016 Evan You</p>
      </template>

      <p>If I have some content down here, it will also be included in vm.$slots.default.</p>.
    </blog-post>
  </div>
</template>

<script>
import Vue from 'vue';
Vue.component('blog-post', {
  render: function (createElement) {
    var header = this.$slots.header
    var body   = this.$slots.default
    var footer = this.$slots.footer
    console.log(header)
    return createElement('div', [
      createElement('header', header),
      createElement('main', body),
      createElement('footer', footer)
    ])
  }
})
export default {
    name:"Slots"
}
</script>

<style scoped lang="scss">
.Slots-page{

}
</style>
