import { $getUser, $logout } from "../../service/auth";

export const auth = {
  namespaced: true, //getters, mutations, actions 에 모듈명을 넣게 함 ['모듈명/이름']
  state: {
    user: {
      id: 0,
      email: "",
      nick: "",
    },
  },
  getters: {
    getUser: (state) => {
      return state.user;
    },
  },
  mutations: {
    SET_USER: (state, payload) => {
      const user = {
        id: payload.id,
        email: payload.email,
        nick: payload.nick,
      };
      state.user = user;
    },
  },
  actions: {
    getUser: async ({ commit }) => {
      const response = await $getUser().catch((err) => {
        console.log(err);
      });
      if (response && response.data) {
        commit("SET_USER", response.data);
      }
    },
    logout: async ({ commit }) => {
      await $logout();
      const resetUser = {
        id: 0,
        email: "",
        nick: "",
      };
      commit("SET_USER", resetUser);
    },
  },
};
