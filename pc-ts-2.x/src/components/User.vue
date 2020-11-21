<template>
  <div class="user">
      <p>interest: {{interest}} in User</p>
      <p>sex: {{SEX[sex]}} in User</p>
      <p><el-button type="primary" @click="toggle">toggle</el-button></p>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Model, Emit, PropSync } from 'vue-property-decorator'
import { Esex } from '@/utils/declarations'

@Component
export default class User extends Vue {
    @Model('toggleInterest', { type: String }) interest!: String;
    @PropSync('sex', { type: Number }) syncedSex!: Number;

    SEX: any = Esex;

    @Emit('toggleInterest')
    toggle (e: any) : String {
        this.syncedSex = +(!this.syncedSex)
        return this.syncedSex ? 'basketball' : 'violin'
    }
}
</script>

<style>

</style>