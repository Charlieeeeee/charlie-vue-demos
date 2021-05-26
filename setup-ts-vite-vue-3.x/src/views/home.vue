<template>
<section>
  <hello-world :msg="'charlies vue app'" />
  -- home --
  {{$foo}}
  <my-component :my-prop="'my-prop'"></my-component>
  <button-counter></button-counter>
  <button-counter></button-counter>
  <button-counter></button-counter>
</section>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import HelloWorld from '/@/components/HelloWorld.vue'
  export default defineComponent({
    name: 'Home',
    components: {
      HelloWorld
    }
  });
</script>

<style>

</style>