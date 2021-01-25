<template>
  <div class="basic-type">
      类类型
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import './lib/ClassType';
/*-----------------------------分割线-----------------------------------*/
class Greeter {
    greeting: string;

    constructor(message: string) {
        this.greeting = message;
    }

    greet(name:string) {
        return "Hello " + name + ", " + this.greeting;
    }
}
/*-----------------------------分割线-----------------------------------*/
@Component
export default class ClassType extends Vue {

}
</script>

<style>

</style>