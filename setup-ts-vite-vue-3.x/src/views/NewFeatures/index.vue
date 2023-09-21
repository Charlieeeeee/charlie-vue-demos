<template>
  <div class="box">
    <div v-for="i in 4" :key="i" :style="{
      '--i': i + 1,
      // color: `rgba(255, 255, 255, calc(0.1 * ${i + 1}))`
    }" class="item">{{ i }}</div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.box {
  .item {
    color: rgba(255, 255, 255, calc(0.1 * var(--i)));
    background: var(--black);
  }
}
</style>