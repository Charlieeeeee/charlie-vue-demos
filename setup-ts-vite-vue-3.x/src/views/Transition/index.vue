<template>
  <div class="p-10">
    <!-- 先自己做一版 -->
    <!-- 验证猜想：离开动画结束后，下一帧，就v-show="false" 或者v-if="false" -->
    <div class="primary-btn mb-10" @click="toggleShowC">toggle</div>
    <!-- <div class="primary-btn mb-10" @click="toggleShow">toggle</div> -->
    <div :class="['w-10 h-10 bg-red-700', className]" v-show="show" ref="box"></div>
    <!-- <Transition>
      <div class="w-10 h-10 bg-red-700" v-show="show" ref="box"></div>
    </Transition> -->
  </div>
</template>

<script setup lang="ts">
const show = ref(false)
const box = ref<null | HTMLElement>(null)
const className = ref('')
/**
 * enter-from-c
 * enter-to-c
 * enter-active-c
 * 
 * leave-from-c
 * leave-to-c
 * leave-active-c
 */

function toggleShowC () {
  if (show.value) { // 当前是v-show="true"
    className.value = 'leave-from-c leave-active-c'
    window.requestAnimationFrame(() => {
      className.value = 'leave-to-c leave-active-c';
      (box.value as HTMLElement).addEventListener('transitionend', function leaveEnd() {
        className.value = '';
        (box.value as HTMLElement).removeEventListener('transitionend', leaveEnd)
        show.value = false
      })
    })
  } else { // 当前是v-show="false"
    className.value = 'enter-from-c enter-active-c'
    show.value = true
    window.requestAnimationFrame(() => {
      className.value = 'enter-to-c enter-active-c';
      (box.value as HTMLElement).addEventListener('transitionend', function enterEnd() {
        className.value = '';
        (box.value as HTMLElement).removeEventListener('transitionend', enterEnd)
      })
    })
  }
}

function toggleShow () {
  show.value = !show.value
}
</script>

<style scoped lang="scss">
.enter-active-c, .leave-active-c {
  transition: all .5s;
}

.enter-from-c, .leave-to-c {
  transform: translateX(-100px);
}

.enter-to-c, .leave-from-c {
  transform: translateX(0px);
}

// .v-enter-active, .v-leave-active {
//   transition: all .5s;
// }

// .v-enter-from, .v-leave-to {
//   transform: translateX(-20px);
// }

// .v-enter-to, .v-leave-from {
//   transform: translateX(0px);
// }
</style>