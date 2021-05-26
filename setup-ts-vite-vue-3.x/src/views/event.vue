<template>
  <div class="event">
    <event-child @notify="getNotification"></event-child>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import EventChild from '/@/components/EventChild.vue'
export default defineComponent({
  name: "Event",
  components: {
    EventChild
  },
  setup () {
    const getNotification = (name) => {
      console.log('notification from', name)
    }

    return {
      getNotification
    }
  }
})
</script>

<style scoped lang="scss">

</style>