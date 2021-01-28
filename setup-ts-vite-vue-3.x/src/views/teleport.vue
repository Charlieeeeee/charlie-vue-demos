<template>
  <div class="teleport">
    <v-title />
    <button @click="toHome">toHome</button>
    <teleport to="#endofbody">
      <h3>{{msg}}</h3>
    </teleport>
  </div>
</template>

<script>
import { getCurrentInstance, reactive, toRefs } from 'vue'
export default {
  name: 'Teleport',
  custom: 'teleport',
  setup () {
    // 获取当前实例, 可以解构获取路由信息, 以及路由对象
    const { ctx } = getCurrentInstance();
    const { $root: { $route }, $router } = ctx;
    console.log($route)
    const toHome = () => {
      $router.push({
        path: '/',
        query: {
          name: 'charlie'
        }
      })
    }
    const state = reactive({
      msg: 'I am teleport in end of body;',
      toHome
    })
    // throw new Error('err in teleport')
    console.log(ctx.foo)
    return toRefs(state);
  }
}
</script>

<style lang="scss" scoped>

</style>