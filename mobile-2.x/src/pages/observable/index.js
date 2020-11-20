import Vue from 'vue';

// 通过Vue.observable创建一个可响应的对象
const state = Vue.observable({
  userName: 'charlie'
});

// 定义 mutations, 修改属性
const mutations = {
  setUserName(userName) {
    state.userName = userName;
  }
};

export {
  state,
  mutations
};
