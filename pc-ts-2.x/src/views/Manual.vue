<template>
  <div class="manual">
  <div class="side-nav-bar">
    <el-menu
      :default-active="defaultActive"
      class="el-menu-vertical-demo"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <template v-for="(item) in manaulRoutes">
        <el-menu-item :index="item.path" :key="item.path">
          <span @click="handleLinkTo(item.path)">
            {{item.path}}
          </span>
        </el-menu-item>
      </template>
    </el-menu>
  </div>
  <div class="content">
    <router-view />
  </div>
</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { routes } from '@/router'
import { RouteConfig } from "vue-router";

@Component
export default class Manual extends Vue {
  get manaulRoutes (): Array<RouteConfig> {
    return (routes as Array<RouteConfig>).find(route => route.path === '/manual').children
  }

  get defaultActive() {
    return this.$route.path.replace('/manual/','')
  }

  created() {
    if(this.$route.path === '/manual'){
      this.$router.replace({
        path: '/manual/interface'
      })
    }
  }

  handleLinkTo (path: string): void {
    path = `/manual/${path}`
    if( path === this.$route.path ) return ;
    this.$router.push({path: path})
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