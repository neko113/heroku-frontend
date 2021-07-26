<template>
  <div>
    <TheNav />
    <router-view />
  </div>
</template>

<script>
import TheNav from "@/components/layouts/TheNav";
export default {
  components: { TheNav },
};
</script>
