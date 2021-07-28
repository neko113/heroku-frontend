import { createStore } from "vuex";
import persistedstate from "vuex-persistedstate";
import { auth } from "./modules/auth";

export const store = createStore({
  modules: {
    auth,
  },
  //persistedstate는 특정 모듈에 대해서 새로고침해도 값이 초기화되지 않음
  plugins: [
    persistedstate({
      paths: ["auth"],
    }),
  ],
});
