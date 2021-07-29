<template>
  <nav class="py-3 bg-light border-bottom">
    <div class="container d-flex flex-wrap">
      <ul class="nav me-auto">
        <router-link class="navbar-brand" :to="{ name: 'Home' }">Home</router-link>
        <router-link class="navbar-brand" :to="{ name: 'About' }">About</router-link>
        <router-link class="navbar-brand" :to="{ name: 'PostList' }">Post</router-link>
        <router-link class="navbar-brand" :to="{ name: 'Test' }">Test</router-link>
      </ul>
      <ul v-if="!user.id" class="nav">
        <router-link class="btn btn-outline-primary mx-3" :to="{ name: 'Login' }">로그인</router-link>
        <router-link class="btn btn-outline-primary mx-3" :to="{ name: 'Register' }">회원가입</router-link>
      </ul>
      <ul v-else class="nav">
        <div class="btn btn-outline-primary mx-3">{{ user.email }} // {{ user.nick }}</div>
        <div class="btn btn-outline-primary mx-3" @click="logout">로그아웃</div>
      </ul>
    </div>
  </nav>
</template>

<script>
import { computed } from "@vue/runtime-core";
import { useStore } from "vuex";
export default {
  name: "TheNav",
  setup() {
    const store = useStore();
    const user = computed(() => store.getters["auth/getUser"]);
    const logout = async () => {
      await store.dispatch("auth/logout");
    };
    return {
      user,
      logout,
    };
  },
};
</script>
