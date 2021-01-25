<template>
  <div class="picture">
    <div class="side-nav-bar">
      <el-menu
        default-active="0"
        class="el-menu-vertical-demo"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b">
        <el-menu-item v-for="(item, index) in data" :index="`${index}`" :key="item.name">
          <span @click="handleClick(index)">
            {{item.name}}
          </span>
        </el-menu-item>
      </el-menu>
    </div>
      <div class="pic" v-if="isShow">
        <template v-for="(item, index) in pics">
          <img :src="item" alt="" :key="index">
        </template>
      </div>
      <el-backtop>
      </el-backtop>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Watch} from 'vue-property-decorator';
import picData from '@/data';
interface IData {
  name: string;
  url: string;
  amount: number;
}

@Component
export default class Picture extends Vue {
  pics: string[];
  isShow: boolean= true;

  data: IData[] = picData;

  created() {
    this.getPics(0);
  }

  getPics(newIndex) {
    const url = this.data[newIndex].url;
    const amount = this.data[newIndex].amount;
    console.log(url)
    this.pics = Array(amount).fill(1).map((item,index)=>`${url}${index+1}.jpg`);
  }

  handleClick(index: number): void {
    this.isShow = false;
    this.getPics(index);
    this.isShow = true;
    // this.activeIndex = index;
  }
}
</script>

<style lang="scss" scoped>
.picture {
    .side-nav-bar{
        position: fixed;
        width: 150px;
        height: calc(100vh - 61px);
        left: 0;
        top: 61px;
        overflow: auto;
        // background: red;
        // padding: 5px;
    }

    .pic{
      width: calc(100vw - 150px);
      margin-left: 150px;
      img{
        display: block;
        margin: 0 auto;
        max-width: calc(100vw - 150px);
        // max-height: calc(100vh - 61px);
      }
    }
}
</style>