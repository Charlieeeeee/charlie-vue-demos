<template>
  <div class="Swiper-page">
    <top-tab-bar :options="options" @changeTab="handleActiveIndexChange"/>
    <cards :options="options" @changeSlide="handleActiveIndexChange"/>
  </div>
</template>

<script>
import TopTabBar from './components/TopTabBar.vue'
import Cards from './components/Cards.vue'

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
        // console.log('index', index)
        this.options.activeIndex = index
      }
    }
  }
}
</script>

<style scoped lang="scss">
.Swiper-page{

}
</style>
