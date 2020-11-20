<template>
  <div class="provide-inject">
      <Child />
  </div>
</template>

<script>
import { Vue, Component, Provide } from 'vue-property-decorator'
import Child from '@/components/Child.tsx'

@Component({
    components: {
        Child
    }
})
export default class ProvideInject extends Vue {
    @Provide() foo = 'foo';
}
</script>

<style>

</style>