<template>
  <div class="home">
    <!-- <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" /> -->
    <h3>Todolist</h3>
    <h4>待完成</h4>
    <ul class="list-group">
      <template v-for="(item, index) in list">
        <li
          class="list-group-item d-flex justify-content-between"
          v-if="!item.checked"
          :key="'item' + index"
        >
          <div class="form-group form-check mb-0">
            <input
              @click="() => (item.checked = !item.checked)"
              type="checkbox"
              v-model="item.checked"
              class="form-check-input"
              :ref="'checkbox' + index"
              :id="'checkbox' + index"
            />
            <label
              class="form-check-label ml-1"
              style="min-width: 40px;"
              v-if="!item.canEdit"
              @dblclick="showEdit(item)"
              >{{ item.name }}</label
            >
            <input
              type="text"
              v-else
              class="form-control"
              :id="'changeName' + index"
              v-model="item.name"
              @blur="changeName(item)"
            />
          </div>
          <div>
            <button
              type="button"
              class="close"
              aria-label="关闭"
              @click="remove(index)"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
        </li>
      </template>
    </ul>
    <h4
      :class="{
        'mt-5': finishedList.length > 0
      }"
    >
      已完成
    </h4>
    <ul class="list-group">
      <template v-for="(item, index) in finishedList">
        <li class="list-group-item" v-if="item.checked" :key="index">
          <div class="form-group form-check mb-0">
            <input
              type="checkbox"
              :checked="true"
              class="form-check-input"
              :id="'finished' + item.name"
              disabled
            />
            <label class="form-check-label" :for="index + item.name">{{
              item.name
            }}</label>
          </div>
        </li>
      </template>
    </ul>
    <input
      type="text"
      class="form-control mt-5"
      v-model="value"
      placeholder="add task"
    />
    <button
      type="button"
      class="btn mt-2 btn-primary btn-lg btn-block"
      @click="add"
    >
      确定添加
    </button>
  </div>
</template>

<script>
import { defineComponent, reactive, toRefs, computed } from "vue";
// import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src

export default defineComponent({
  name: "Home",
  // components: {
  //   HelloWorld,
  // },
  /**
   *
   */
  setup() {
    const add = () => {
      state.list.push({
        name: state.value,
        checked: false,
        canEdit: false
      });
      state.value = "";
    };
    const remove = index => {
      console.log("remove", index);
      state.list.splice(index, 1);
    };
    const showEdit = item => {
      item.canEdit = true;
    };
    const changeName = item => {
      item.canEdit = false;
    };
    const state = reactive({
      value: "",
      list: [
        {
          name: "1",
          checked: false,
          canEdit: false
        },
        {
          name: "2",
          checked: false,
          canEdit: false
        },
        {
          name: "3",
          checked: false,
          canEdit: false
        }
      ],
      finishedList: computed(() => state.list.filter(item => item.checked)),
      add,
      remove,
      showEdit,
      changeName
    });
    return toRefs(state);
  }
});
</script>

<style lang="scss" scoped>
.home {
  width: 60%;
}
</style>
