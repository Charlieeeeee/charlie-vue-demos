<template>
  <div class="grand-child">
      <!-- bar in GrandChild: {{bar}}
      <br /> -->
      foo in GrandChild: {{foo}}
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Inject } from 'vue-property-decorator'
import 'reflect-metadata';

@Component
export default class GrandChild extends Vue {
    // @Prop() bar!: String;
    @Inject() readonly foo!: String;


    created (): void {
        // console.log(this.$props.bar)
    }
}
</script>

<style>

</style>