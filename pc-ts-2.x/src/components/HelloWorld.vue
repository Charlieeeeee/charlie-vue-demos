<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>{{ name }}</h2>
    <h2>{{ age }}</h2>
    <h2>{{ SEX[sex] }}</h2>
    <button @click="emitEvent">emit event</button>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Emit } from "vue-property-decorator";
import 'reflect-metadata';
import { Esex } from '@/utils'

@Component
export default class HelloWorld extends Vue {
  SEX: any = Esex;

  @Prop() private name!: string;
  @Prop() private age!: number;
  @Prop() private msg!: string;
  @Prop({ type: Number, default: 1 }) private sex?: string;

  @Emit('on-emit')
  emitEvent () {
    return 'param from emit in HelloWorld.vue'
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
