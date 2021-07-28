export const auth = {
  namespaced: true, //getters, mutations, actions 에 모듈명을 넣게 함 ['모듈명/이름']
  state: {
    userProfile: {
      id: 0,
      email: "",
      nick: "",
    },
  },
  getters: {
    getUserProfile: (state) => {
      return state.userProfile;
    },
  },
  mutations: {
    SET_USER_PROFILE: (state, payload) => {
      const userProfile = {
        id: payload.id,
        email: payload.email,
        nick: payload.nick,
      };
      state.userProfile = userProfile;
    },
  },
  // actions: {
  //   setUserProfile: async ({ commit }) => {
  //     const response = await $getUserProfile().catch((err) => {
  //       console.log(err);
  //     });
  //     if (response && response.data) {
  //       commit("SET_USER_PROFILE", response.data);
  //     }
  //   },
  // },
};
