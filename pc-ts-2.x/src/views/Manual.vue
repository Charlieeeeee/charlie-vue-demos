<template>
  <div class="manual">
  <div class="side-nav-bar">
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-menu-item index="1">
        <i class="el-icon-document"></i>
        <span slot="title">导航一</span>
      </el-menu-item>
      <el-menu-item index="2">
        <i class="el-icon-document"></i>
        <span slot="title">导航二</span>
      </el-menu-item>
      <el-menu-item index="3">
        <i class="el-icon-document"></i>
        <span slot="title">导航三</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-document"></i>
        <span slot="title">导航四</span>
      </el-menu-item>
    </el-menu>
  </div>
  <div class="content"></div>
</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Manual extends Vue {

}
</script>

<style lang="scss">
.manual{
    display: flex;
    .side-nav-bar{
        width: 150px;
    }
    .content{
        flex: 1;
    }
}
</style>