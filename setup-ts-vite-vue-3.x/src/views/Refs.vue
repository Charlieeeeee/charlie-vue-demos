<template>
  <div class="Refs">
    <button @click="change">change</button> <br>
    countRef: {{countRef}} <br>
    <input v-model="text" />

  </div>
</template>

<script>
import { ref, unref, customRef, shallowRef, isReactive } from 'vue'

function useDebouncedRef(value, delay = 200) {
  let timeout
  return customRef((track, trigger) => {
    return {
      get() {
        track()
        return value
      },
      set(newValue) {
        clearTimeout(timeout)
        timeout = setTimeout(() => {
          value = newValue
          trigger()
        }, delay)
      }
    }
  })
}
export default {
  setup () {
    const change = () => {
      countRef.value++
      console.log(countRef.value) // 1
    }
    const countRef = ref(1);
    console.log(countRef.value)
    console.log(unref(countRef))

    const _shallowRef = shallowRef({
      foo: 'foo'
    })
    const _ref = ref({
      bar: 'bar'
    })
    console.log('_shallowRef.value',_shallowRef.value)
    console.log('_shallowRef.value.foo.value',_shallowRef.value.foo.value)
    console.log('_ref.value',_ref.value)
    console.log('_ref.value.bar.value',_ref.value.bar.value)
    console.log('_shallowRef isReactive',isReactive(_shallowRef))
    return {
      change,
      countRef,
      text: useDebouncedRef('hello')
    }
  }
}
</script>

<style lang="scss" scoped>
.Refs{

}
</style>