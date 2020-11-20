<template>
  <div class="developer">
      name: {{developer.name}}; age: {{developer.age}}; gender: {{SEX[developer.sex]}}
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { Esex, Ideveloper } from '@/utils/declarations'
import 'reflect-metadata';

@Component
export default class Developer extends Vue {
    SEX: any = Esex;
    @Prop() developer!:Ideveloper;
}
</script>

<style lang="scss">

</style>