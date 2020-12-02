<template>
  <div class="top-tab-bar">
      <swiper ref="mySwiper" :options="swiperOptions">
        <swiper-slide v-for="(tab, index) in options.tabs" :key="tab.value">
            <div class="tab" @click="handleClick(index)">
                <div :class="{'tab-inside':true, 'flex-center': true, 'active-tab': activeTab === index}" >
                    {{tab.text}}
                </div>
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
                slidesPerView: 3,
                slideToClickedSlide: true,
            },
            activeTab: 0
        }
    },
    watch: {
        'options.activeIndex': function (newVal) {
            this.activeTab = newVal
            this.swiper.slideTo(newVal)
        }
    },
    computed: {
        swiper() {
            return this.$refs.mySwiper.$swiper
        }
    },
    methods: {
        handleClick (index) {
            this.activeTab = index
            this.$emit('changeTab', index)
        }
    }
}
</script>

<style scoped lang="scss">
.top-tab-bar{
    height: 100px;
    background: brown;
    white-space: nowrap;
    overflow-y: hidden;
    overflow-x: auto;

    .tab{
        height: 100px;

        .tab-inside{
            width: 90%;
            height: 90%;
            margin: 0 auto;
            margin-top: 10px;
            background: #CCCC99;
            font-size: 24px;
            border-top-right-radius: 20px;
            border-top-left-radius: 20px;
        }

        .active-tab{
            background: #fff;
        }
    }
}
</style>