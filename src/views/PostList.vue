<template>
  <div class="text-center">
    <div class="btn btn-outline-primary mt-5" @click="createPost">작성하기</div>
    <div class="mx-5 my-5">
      <table class="table table-hover align-middle text-center">
        <thead>
          <tr>
            <th width="20%">순서</th>
            <th width="80%">제목</th>
          </tr>
        </thead>
        <tbody>
          <tr :key="i" v-for="(post, i) in postList">
            <td>{{ i + 1 }}</td>
            <td>{{ post.title }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
import { onMounted, ref } from "vue";
import { getPostList } from "../service/post";
import { useRouter } from "vue-router";
export default {
  name: "PostList",
  setup() {
    const router = useRouter();
    const postList = ref([]);
    const load = async () => {
      const response = await getPostList();
      postList.value = response.data.postList;
    };
    const createPost = async () => {
      router.push({ name: "PostForm" });
    };
    onMounted(() => load());
    return {
      postList,
      createPost,
      load,
    };
  },
};
</script>
