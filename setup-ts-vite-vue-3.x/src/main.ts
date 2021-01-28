import { createApp } from 'vue'
import router from '/@/router'
import App from '/@/App.vue'
import VTitle from './components/title.vue'
import './index.css'

const app = createApp(App);
console.log(app)
// 9.
// 注册一个名为my-component的组件
app.component('my-component', {
  template: `<div style="color: red;">my-component</div>`,
  created () {
    console.log('here is my-component')
  }
})
// 检索注册的组件(始终返回构造函数)
const MyComponent = app.component('my-component')
console.log('MyComponent: ',MyComponent)

// 10.
// 定义一个名为 button-counter 的新全局组件
app.component('button-counter', {
  data() {
    return {
      count: 0
    }
  },
  template: `
    <button @click="count++">
      You clicked me {{ count }} times.
    </button>`
})

// 11.
app.component('v-title', VTitle)

app.use(router)
// 1.
const vm = app.mount('#app')
console.log('root component:', vm)

// 2.
app.config.errorHandler = (err, vm, info) => {
  console.log(err);
  console.log(vm, info);
  console.log(info);
  // 处理错误
  // `info` 是 Vue 特定的错误信息，比如错误所在的生命周期钩子
}

// 3.
app.config.warnHandler = function(msg, vm, trace) {
  // `trace` 是组件的继承关系追踪
}

// 4.
// 之后(Vue 3.x)
app.config.globalProperties.foo = 'bar'

// 5.
// 任何以“ion-”开头的元素都将被识别为自定义元素
app.config.isCustomElement = tag => tag.startsWith('ion-')
console.log(app.config.isCustomElement('ion-div'))

// 6.
app.config.optionMergeStrategies.custom = (parent, child, vm) => {
  console.log(parent, child)
  return parent || child
}

// 7.
app.mixin({
  custom: 'mixin',
  created() {
    console.log('here:', this.$options.name,this.$options.custom)
  }
})

// 8.
// app.config.performance = true;

