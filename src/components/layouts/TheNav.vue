<template>
  <nav class="py-3 bg-light border-bottom">
    <div class="container d-flex flex-wrap">
      <ul class="nav me-auto">
        <router-link class="navbar-brand" :to="{ name: 'Home' }">Home</router-link>
        <router-link class="navbar-brand" :to="{ name: 'About' }">About</router-link>
        <router-link class="navbar-brand" :to="{ name: 'PostList' }">Post</router-link>
        <router-link class="navbar-brand" :to="{ name: 'Test' }">Test</router-link>
      </ul>
      <ul class="nav">
        <router-link class="btn btn-outline-primary mx-3" :to="{ name: 'Home' }">Home</router-link>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "TheNav",
  setup() {
    return {};
  },
};
</script>
