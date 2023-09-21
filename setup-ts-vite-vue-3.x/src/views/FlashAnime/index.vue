<template>
  <div class="container">
    <!-- 加载中 || (加载完毕 && 有数据)  -->
    <div class="card" v-if="isLoading || (loaded && data)">
      <div :class="['image', loadCls]">
        <img v-if="data" :src="data?.img" alt="" class="">
      </div>
      <div class="content">
        <h4 :class="loadCls">{{ data?.title }}</h4>
        <div :class="['desc', loadCls]">{{ data?.desc }}</div>
      </div>
    </div>
    <!-- 不在加载中 && 加载完 && 没数据 -->
    <div class="flex flex-col items-center content-center" v-if="!isLoading && loaded && !data">
      <div class="mb-5">
        {{ errorMsg }}
      </div>
      <div class="primary-btn" @click="queryData">重新加载</div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface IData {
  img: string
  title: string
  desc: string
}
const data = ref<null | IData>(null)
const isLoading = ref(false)
const loaded = ref(false)
const loadCls = computed(() => isLoading.value ? 'loading' : '')

const errorMsg = ref('')
queryData()
async function queryData() {
  isLoading.value = true
  const res = await getData().catch((err) => err)
  if (res.success) {
    data.value = res.result
  } else {
    errorMsg.value = res.errorMsg
  }
  isLoading.value = false
  loaded.value = true
}

function getData() {
  const success = true
  const errorMsg = '网络异常'
  return new Promise<{
    success: boolean
    result: IData | null
    errorMsg: string
  }>((resolve) => {
    setTimeout(() => {
      if (success) {
        resolve({
          success,
          errorMsg,
          result: {
            img: 'https://img2.baidu.com/it/u=3202947311,1179654885&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1678208400&t=7a5d0b27831761d18e943b12aad28b91',
            title: 'Coding Start Up',
            desc: 'How are you?How are you?How are you?How are you?How are you?How are you?How are you?'
          }
        })
      } else {
        resolve({
          success,
          errorMsg,
          result: null
        })
      }
    }, 3000)
  })
}
</script>

<style scoped lang="scss">
.container {
  min-height: 100vh;
  background-color: #f6f6f6;
  display: flex;
  align-items: center;
  justify-content: center;
  --loading-grey: #ededed;


  .card, .skeleton {
    width: 320px;
    background-color: #fff;
    border-radius: 6px;
    overflow: hidden;
    box-shadow: 0px 4px 6px rgba(0,0,0,.12);

    @keyframes flash {
      to {
        background-position-x: -20%;
      }
    }

    .image {
      height: 200px;

      img { 
        display: block;
        width: 100%;
        height: inherit;
        object-fit: cover;
      }
    }

    .content {
      padding: 2rem 1.8rem;

      h4 {
        margin: 0 0 1rem;
        min-height: 1.6rem;
        border-radius: 4px;
        animation-delay: .05s;
        font-size: 1.5rem;
      }

      .desc {
        min-height: 4rem;
        border-radius: 4px;
        animation-delay: .06s;
      }
    }

    .loading {
      background: linear-gradient(
        100deg,
        rgba(255, 255, 255, 0) 40%,
        rgba(255, 255, 255, .5) 50%,
        rgba(255, 255, 255, 0) 60%,
      ) var(--loading-grey);
      background-size: 200% 100%;
      background-position-x: 120%;
      animation: 1s flash  ease-in-out infinite;
    }
  }
}
</style>