import { createRouter, createWebHistory } from "vue-router";
import { store } from "../store/store";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/Home.vue"),
    meta: {
      transitionName: "",
      requiredAuth: false,
    },
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/About.vue"),
    meta: {
      transitionName: "",
      requiredAuth: false,
    },
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/Login.vue"),
    meta: {
      transitionName: "scale",
      requiredAuth: false,
    },
  },
  {
    path: "/register",
    name: "Register",
    component: () => import("../views/Register.vue"),
    meta: {
      transitionName: "scale",
      requiredAuth: false,
    },
  },
  {
    path: "/postList",
    name: "PostList",
    component: () => import("../views/PostList.vue"),
    meta: {
      transitionName: "",
      requiredAuth: false,
    },
  },
  {
    path: "/postList2",
    name: "PostList2",
    component: () => import("../views/PostList2.vue"),
    meta: {
      transitionName: "",
      requiredAuth: false,
    },
  },
  {
    path: "/postForm",
    name: "PostForm",
    component: () => import("../views/PostForm.vue"),
    meta: {
      transitionName: "scale",
    },
  },
  {
    path: "/postDetail/:id",
    name: "PostDetail",
    component: () => import("../views/PostDetail.vue"),
    meta: {
      transitionName: "",
      requiredAuth: false,
    },
  },
  {
    path: "/test",
    name: "Test",
    component: () => import("../views/Test.vue"),
    meta: {
      transitionName: "",
      requiredAuth: true,
    },
  },
  {
    // 404page
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: () => import("../views/NotFound.vue"),
    meta: {
      transitionName: "",
      requiredAuth: false,
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach(async (to, from, next) => {
  if (to.meta.requiredAuth) {
    let user = store.getters["auth/getUser"];
    if (!user || user.id === 0) {
      await store.dispatch("auth/getUser");
      user = store.getters["auth/getUser"];
      if (!user || user.id === 0) {
        return next({ path: "/login" });
      } else {
        return next();
      }
    }
  }
  return next();
});

export default router;
