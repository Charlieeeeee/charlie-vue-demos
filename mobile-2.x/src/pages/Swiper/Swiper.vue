<template>
  <div class="Swiper-page">
    <top-tab-bar :options="options" @changeTab="handleActiveIndexChange"/>
    <cards :options="options" @changeSlide="handleActiveIndexChange"/>
  </div>
</template>

<script>
import TopTabBar from './components/TopTabBar.vue'
import Cards from './components/Cards.vue'
import { add, subtract, multiplyUtil } from '@/utils'
export default {
  components: {
    TopTabBar,
    Cards
  },
  data() {
    return {
      options: {
        activeIndex: 0,
        tabs: [
          {
              text: '会员特权',
              color: 'red'
          },
          {
              text: '自选权益',
              color: 'blue'
          },
          {
              text: '哈哈哈',
              color: 'cyan'
          },
          {
              text: '呵呵呵',
              color: 'green'
          },
          {
              text: '嘿嘿嘿',
              color: 'purple'
          },
        ],
      }
    }
  },
  methods: {
    handleActiveIndexChange (index) {
      if(this.options.activeIndex !== index){
        this.options.activeIndex = index
      }
    }
  },
  mounted () {
    console.log('1 + 2 = ',add(1, 2))
    console.log('2 - 1 = ', subtract(2, 1))
    console.log('1 * 2 = ', multiplyUtil.multiply(1, 2))
    console.log(this.$store.state.name)
  }
}
</script>

<style scoped lang="scss">
.Swiper-page{

}
</style>
