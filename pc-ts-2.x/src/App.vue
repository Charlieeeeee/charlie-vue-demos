<template>
  <div id="app">
    <el-menu
      :default-active="defaultActiveName"
      class="el-menu-top"
      mode="horizontal"
      @select="handleSelect"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <template v-for="route in routes">
        <el-menu-item :index="route.name" :key="route.name">
          <span @click="handleLinkTo(route.path)">
            {{route.meta.title}}
          </span>
        </el-menu-item>
      </template>
    </el-menu>
    <div class="router-view">
      <router-view />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { RouteConfig } from "vue-router";
import { routes } from '@/router'

@Component
export default class App extends Vue {
  get routes (): Array<RouteConfig> {
    return routes.slice(1)
  }

  get defaultActiveName (): string | undefined {
    /**
     * 直接从location.hash里获取path可以防止页面导航闪变一下, 具体什么原因呢?
     * 说明this['$route'].path 获取是在首次渲染之后发生的.
     * 这是为什么呢?
     * 看来还是需要阅读源码呀
    */
    const path: string = location.hash.replace(/^#(\/\w+)(\?.*|\/\w+(\?.*|$)|$)/,'$1');
    console.log(path)
    const name = routes!.find((route:RouteConfig):Boolean => route.path === path).name
    return name
  }

  handleLinkTo (path: string): void {
    if( path === this['$route'].path ) return;
    this['$router'].push({path})
  }

  handleSelect (key: Number, keyPath: Array<String>): void {
    // console.log(key, keyPath)
  }

}
</script>
<style lang="scss" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  .router-view{
    margin-top: 61px;
  }
}
</style>

<style lang="scss">
.el-menu-top{
  position: fixed!important;
  width: 100%;
  left: 0;
  top: 0;
}
</style>
