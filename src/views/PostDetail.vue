<template>
  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-8">
        <div class="fs-3 border border-secondary rounded px-2">{{ postDetail.title }}</div>
      </div>
      <div class="col-10 mt-5">
        <div class="fs-3 border border-secondary rounded px-2" style="height: 400px; resize:none">{{ postDetail.content }}</div>
      </div>
    </div>
  </div>
</template>
<script>
import { onMounted } from "@vue/runtime-core";
import { ref } from "vue";
import { $getPostDetail } from "../service/post";
import { useRoute } from "vue-router";
export default {
  name: "PostDetail",
  setup() {
    const route = useRoute();
    const postDetail = ref("");
    const load = async () => {
      const id = route.params.id;
      const response = await $getPostDetail(id);
      postDetail.value = response.data.postDetail;
    };
    onMounted(() => load());
    return {
      load,
      postDetail,
    };
  },
};
</script>
