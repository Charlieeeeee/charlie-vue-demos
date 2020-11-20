<template>
  <div class="observable-page">
    <span>charlie</span>
    <van-switch v-model="checked" />
    <span>george</span>
    <div>
      <van-button type="primary" @click="handleClick">change</van-button>
    </div>
    <c-content>{{userName}}</c-content>
  </div>
</template>

<script>
import { state, mutations } from "./index";
export default {
  name: "observable",
  computed: {
    userName() {
      return state.userName;
    },
  },
  watch: {
    checked(checked) {
      const res = checked ? "george" : "charlie";
      mutations.setUserName(res);
    },
  },
  data: () => ({
    checked: false,
  }),
  methods: {
    handleClick() {
      this.checked = !this.checked;
    },
  },
};
</script>

<style scoped lang="scss">
.observable-page {
  padding: 100px 0 0 20px;
}
</style>
