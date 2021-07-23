export const test = {
  namespaced: true, //getters, mutations, actions 에 모듈명을 넣게 함 ['모듈명/이름']
  state: {
    count: 0,
  },
  getters: {
    getUser: (state) => state.user.id,
  },
  mutations: {
    SET_COUNT: (state, payload) => {
      state.user = payload;
    },
  },
  actions: {
    setCount: (context, payload) => {
      context.commit("SET_COUNT", payload);
    },
  },
};
