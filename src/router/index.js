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
    path: "/postList",
    name: "PostList",
    component: () => import("../views/PostList.vue"),
  },
  {
    path: "/postForm",
    name: "PostForm",
    component: () => import("../views/PostForm.vue"),
  },
  {
    path: "/postDetail/:id",
    name: "PostDetail",
    component: () => import("../views/PostDetail.vue"),
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
