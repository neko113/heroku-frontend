<template>
  <div class="container-fluid p-5">
    <div class="row mt-5">
      <div class="col-md-3"></div>
      <div class="col-md-6">
        <h1>
          <div>{{ postDetail.title }}</div>
        </h1>
        <div class="text-end"><i class="fas fa-pen mx-3"></i><i class="fas fa-trash" type="button" @click="deletePost"></i></div>
        <div>{{ formattedDate(postDetail.createdAt) }}</div>
        <div class="mt-5">{{ postDetail.content }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted } from "@vue/runtime-core";
import { ref } from "vue";
import { $getPostDetail, $deletePost } from "../service/post";
import { useRoute, useRouter } from "vue-router";
import moment from "moment";
import Swal from "sweetalert2";
export default {
  name: "PostDetail",
  setup() {
    const route = useRoute();
    const router = useRouter();
    const id = route.params.id;
    const postDetail = ref("");
    const load = async () => {
      const response = await $getPostDetail(id);
      postDetail.value = response.data.postDetail;
      console.log(moment("2021-07-26T15:31:17.083Z"));
    };
    const formattedDate = (createdAt) => {
      return moment(createdAt).format("YYYY-MM-DD HH:MM");
    };
    const deletePost = () => {
      Swal.fire({
        title: "제거하시겠습니까?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "blue",
        cancelButtonColor: "red",
      }).then(async (result) => {
        if (result.isConfirmed) {
          await $deletePost(id);
          router.push({ name: "PostList" });
        }
      });
    };
    onMounted(() => load());
    return {
      load,
      postDetail,
      deletePost,
      formattedDate,
    };
  },
};
</script>
