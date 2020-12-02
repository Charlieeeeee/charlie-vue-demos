<template>
  <div class="manual">
  <div class="side-nav-bar">
    <el-menu
      default-active="Interface"
      class="el-menu-vertical-demo"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-menu-item index="Interface">
        <span @click="handleLinkTo('/manual/interface')">
          接口
        </span>
      </el-menu-item>
      <el-menu-item index="2">
        导航二
      </el-menu-item>
      <el-menu-item index="3">
        导航三
      </el-menu-item>
      <el-menu-item index="4">
        导航四
      </el-menu-item>
    </el-menu>
  </div>
  <div class="content">
    <router-view />
  </div>
</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
// import { routes } from '@/router'
import { RouteConfig } from "vue-router";

@Component
export default class Manual extends Vue {
  // get manaulRoutes (): Array<RouteConfig> {
  //   return (routes as Array<RouteConfig>).find(route => route.path === '/manual').children
  // }

  // created (): void {
  //   console.log(this.manaulRoutes)
  // }

  handleLinkTo (path: string): void {
    if( path === this['$route'].path ) return ;
    this['$router'].push({path})
  }
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