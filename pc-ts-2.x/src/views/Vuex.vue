<template>
  <div class="vuex">
      <Developer v-for="(developer) in developers" :key="developer.name" :developer="developer"/>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import Developer from '@/components/Developer.vue'
import { AboutStore } from '@/store/modules/about'
import { Ideveloper } from '@/utils/declarations'

@Component({
    components: {
        Developer
    }
})
export default class Vuex extends Vue {

    get developers (): Array<Ideveloper> {
        return AboutStore.developers;
    }

    created (): void {
        AboutStore.getDevelopers();
    }
}
</script>

<style>

</style>