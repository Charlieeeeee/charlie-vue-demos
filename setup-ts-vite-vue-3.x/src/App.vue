<template>
<section>
  <router-view></router-view>
</section>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  custom: 'App',
  components: {
    HelloWorld
  }
}
</script>
