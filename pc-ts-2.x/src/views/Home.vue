<template>
  <div class="home">
    <div class="toggle-btn"  @click="handleToggle">{{message}}</div>
    <HelloWorld v-if="showHelloWorld" v-bind="info" @on-emit="obtainEvent"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src

interface Info {
  name: string | number;
  age: number;
  msg: string;
  sex?: number;
}

@Component({
  components: {
    HelloWorld
  }
})
export default class Home extends Vue {
  // 初始数据可以直接声明为实例的 property
  message: string = 'toggle';
  info: Info = {
    name: 'charlie',
    age: 24,
    msg: 'Welcome to Your Vue.js + TypeScript App'
  };
  showHelloWorld: boolean = false;

  handleToggle (): void {
    this.showHelloWorld = !this.showHelloWorld;
  }

  obtainEvent (param: string): void {
    console.log('here is Home.vue and this is', param)
  }
}
</script>

<style lang="scss" scoped>
.toggle-btn{
  width: 100px;
  padding: 4px 10px;
  border: solid 1px grey;
  margin: 0 auto;
  cursor: pointer;
}
</style>