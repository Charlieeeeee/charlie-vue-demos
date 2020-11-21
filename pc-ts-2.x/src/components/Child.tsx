// import { CreateElement } from 'vue'
import { Vue, Component, Inject } from 'vue-property-decorator';
import GrandChild from '@/components/GrandChild.vue'

@Component({
  components: {
    GrandChild
  }
})
export default class Child extends Vue {
  // bar: String = 'bar';
  @Inject() readonly foo!: String;

  protected render () {
    return <div class="child">
      foo in Child: { this.foo }
      <GrandChild/> {/* 此处待解决 */}
    </div>
  }
}