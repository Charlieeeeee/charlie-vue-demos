<template>
  <div class="about">
    <h1>This is an about page</h1>
    <p>{{firstName}}</p>
    <p>{{lastName}}</p>
    <p>{{fullName}}</p>
    <button @click="changeName">changeName</button>
    <p>interest: {{interest}} in About</p>
    <p>sex: {{SEX[sex]}} in About</p>
    <User v-model="interest" :sex.sync="sex"/>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Watch } from 'vue-property-decorator';
import User from '@/components/User.vue'
import { Esex } from '@/utils/declarations'

/**
 * vue-property-decorator 装饰器
 * @Component
 * @Watch
 * @prop
 * @Model
 * @Emit
*/
@Component({
  components: {
    User
  }
})
export default class About extends Vue{
  firstName: String = 'Charlie';
  lastName: String = 'Chan';
  interest: String = 'basketball';
  SEX: any = Esex;
  sex: Number = 0;


  get fullName () : String {
    return this.firstName + ' ' + this.lastName
  }

  set fullName (val: String) {
    if(this.fullName === val) return;

    console.log('set name:', val.replace(' ',''))
    const arr = val.split(' ')
    this.firstName = arr[0]
    this.lastName = arr[1]
  }

  changeName (): void {
    this.fullName = '陈 礼超';
  }

  @Watch('firstName')
  watchFist (newVal: String, oldVal: String) {
    console.log('newVal: ',newVal)
    console.log('oldVal: ',oldVal)
  }

  created () : void {
    console.log('component About created!')
    this.$watch('fullName',(newVal, oldVal) => {
      console.log('newVal and oldVal in $watch', newVal, oldVal)
    })
  }
}
</script>