<template>
  <div class="reactivity">
    <button @click="change">change</button> <br>
    {{count}}
  </div>
</template>

<script>
import { isProxy, isReactive, isReadonly, markRaw, reactive, readonly, shallowReactive, watchEffect, shallowReadonly } from 'vue'
export default {
  setup () {
    const change = () => {
      original.count ++; // 改变original会影响copy的副本
      // copy.count ++; //Set operation on key "count" failed: target is readonly.
      shallowState.foo = 'new foo'
      shallowState.nested.bar = 'new bar'
    }
    const original = reactive({
      count: 0,
      change
    })
    const copy = readonly(original)
    watchEffect(() => {
      console.log('original',original.count)
    })
    watchEffect(() => {
      console.log('copy',copy.count)
    })

    console.log('isProxy', isProxy(original), isProxy(copy), isProxy({}))
    console.log('isReactive', isReactive(original), isReactive(copy), isReactive({}))
    console.log('isReadonly', isReadonly(original), isReadonly(copy))

    const foo = markRaw({})
    const reactive2raw = markRaw(reactive({})) // reactive了以后就不能被markRaw了
    console.log('foo isReactive',isReactive(reactive(foo))) // markRaw了以后就不能被reactive了
    console.log('reactive2raw isReactive',isReactive(reactive2raw))
    // 嵌套在其他响应式对象中时也可以使用
    const bar = reactive({ foo })
    console.log('bar.foo isReactive', isReactive(bar.foo))
    const shallowState = shallowReactive({
      foo: 'foo',
      nested: {
        bar: 'bar'
      }
    })
    watchEffect(() => {
      console.log('shallowState',shallowState.foo)
    })
    watchEffect(() => {
      console.log('shallowState',shallowState.nested.bar)
    })
    console.log('shallowState isReactive',isReactive(shallowState))
    console.log('shallowState.nested isReactive',isReactive(shallowState.nested))
    const shallowReadonlyState = shallowReadonly({
      foo: 'foo',
      nested: {
        bar: 'bar'
      }
    })
    console.log('shallowReadonlyState isReadonly', isReadonly(shallowReadonlyState))
    console.log('shallowReadonlyState.nested isReadonly', isReadonly(shallowReadonlyState.nested))
    return original
  }
}
</script>

<style lang="scss" scoped>

</style>