<template>
    <div class="swiper-container">
      <swiper ref="mySwiper" :options="swiperOptions">
        <swiper-slide v-for="tab in options.tabs" :key="tab.text">
          <div class="slide-item flex-center" :style="{'background': tab.color}">
            {{ tab.text }}
          </div>
        </swiper-slide>
      </swiper>
    </div>
</template>

<script>
export default {
    props: ['options'],
    data () {
        return {
            swiperOptions: {
                width: 300,
                slidesPerView: 1,
                slideToClickedSlide: true,
                on: {
                    // slideChangeTransitionEnd: this.handleChange,
                    slideChangeTransitionStart: this.handleChange,
                    touchEnd: this.handleChange
                }
            },
        }
    },
    watch: {
        'options.activeIndex': function (newVal) {
            this.swiper.slideTo(newVal)
        }
    },
    computed: {
        swiper() {
            return this.$refs.mySwiper.$swiper
        }
    },
    methods: {
      handleChange (swiper) {
          this.$emit('changeSlide', swiper.activeIndex)
          this.$nextTick(()=>{
              if(swiper.isEnd) {
                  // 最后一个只能滑动到容器右边
                  swiper.setTranslate(swiper.translate + (swiper.wrapperEl.clientWidth - swiper.width))
              }
          })
      }
    }
}
</script>

<style lang="scss" scoped>
  .swiper-container{
    height: 800px;

    .slide-item{
      height: 100%;
    }
  }
</style>