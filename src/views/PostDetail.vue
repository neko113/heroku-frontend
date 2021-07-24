<template>
  <div>{{ num }}</div>
</template>
<script>
import { useRoute } from "vue-router";
export default {
  name: "PostDetail",
  setup() {
    const route = useRoute();
    const num = route.params.id;
    return {
      num,
    };
  },
};
</script>
