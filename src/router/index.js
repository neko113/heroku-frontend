import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/Home.vue"),
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/About.vue"),
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/Login.vue"),
    meta: {
      transitionName: "scale",
    },
  },
  {
    path: "/register",
    name: "Register",
    component: () => import("../views/Register.vue"),
    meta: {
      transitionName: "scale",
    },
  },
  {
    path: "/postList",
    name: "PostList",
    component: () => import("../views/PostList.vue"),
  },
  {
    path: "/postList2",
    name: "PostList2",
    component: () => import("../views/PostList2.vue"),
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
  },
  {
    path: "/test",
    name: "Test",
    component: () => import("../views/Test.vue"),
  },
  {
    // 404page
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: () => import("../views/NotFound.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
