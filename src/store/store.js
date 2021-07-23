import { createStore } from "vuex";
import persistedstate from "vuex-persistedstate";
import { test } from "./modules/test";

export const store = createStore({
  modules: {
    test,
  },
  //persistedstate는 특정 모듈에 대해서 새로고침해도 값이 초기화되지 않음
  plugins: [
    persistedstate({
      paths: ["test"],
    }),
  ],
});
