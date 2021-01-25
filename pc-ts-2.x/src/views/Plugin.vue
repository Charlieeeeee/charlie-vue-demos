<template>
  <section class="plugin">
    <h2>{{title}}</h2>
    name: <input type="text" v-model="name"><br>
    pwd: <input type="text" v-model="pwd"><br>
    <button @click="handleSubmit">submit</button>
  </section>
</template>

<script lang="ts">
import { Vue, Component }  from 'vue-property-decorator';

interface IRule {
  validator(param: any):boolean;
  message: string;
}
interface IRules {
  [key: string]: IRule
}
@Component
export default class Plugin extends Vue{
  title = "charlie's account"
  name: string = "";
  pwd: string = "";
  rules: IRules = {
    name: {
      validator: value => value.length > 0,
      message: 'name is required'
    },
    pwd: {
      validator: value => value.length > 0,
      message: 'pwd is required'
    },
  };

  checkFormIsValid () {
    for (let key in this.rules) {
      if (!this.rules[key].validator(this[key])) {
        this.$message.error(this.rules[key].message);
        return false;
      }
    }
    return true;
  }
  handleSubmit () {
    if(this.checkFormIsValid()){
      this.$message.success('successful!');
    }
  }
}
</script>

<style scoped lang="scss">

</style>