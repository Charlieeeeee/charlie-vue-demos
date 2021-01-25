<template>
<section>
  <hello-world :msg="'charlies vue app'" />
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