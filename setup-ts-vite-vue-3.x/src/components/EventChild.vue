<template>
  <div class="event-child">
    event-child
    <button @click="emitEvent">emit</button>
  </div>
</template>

<script>
export default {
  emits: {
    notify: ( name ) => {
      if( name && typeof name === 'string' ){
        console.log('notify success')
        return true;
      } else {
        console.log('notify fail')
        return false;
      }
    }
  },
  setup (props, ctx) {
    console.log(ctx)
    const emitEvent = () => {
      ctx.emit('notify', '')
    }

    return {
      emitEvent
    }
  }
}
</script>

<style lang="scss" scoped>

</style>