<template>
  <div class="text-center">
    <router-link :to="{ name: 'PostForm' }" class="btn btn-outline-primary mt-5">작성하기</router-link>
    <div class="mx-5 my-5">
      <table class="table table-hover align-middle text-center">
        <thead>
          <tr>
            <th width="10%">순서</th>
            <th width="50%">제목</th>
            <th width="30%">작성일</th>
            <th width="5%"></th>
            <th width="5%"></th>
          </tr>
        </thead>
        <tbody>
          <tr :key="i" v-for="(post, i) in postList">
            <td>{{ post.id % 10 }}</td>
            <td>
              <router-link :to="{ name: 'PostDetail', params: { id: post.id } }">{{ post.title }}</router-link>
            </td>
            <td @click="test">{{ formattedDate(post.createdAt) }}</td>
            <td>
              <router-link :to="{ name: 'PostForm' }"><i class="fas fa-pen" @click="load"></i></router-link>
            </td>
            <td><i class="fas fa-trash" type="button" @click="deletePost(post.id)"></i></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
import { onMounted, ref } from "vue";
import moment from "moment";
import { $getPostList, $deletePost } from "../service/post";
export default {
  name: "PostList",
  setup() {
    const postList = ref([]);
    const load = async () => {
      const response = await $getPostList();
      postList.value = response.data.postList;
    };
    const formattedDate = (createdAt) => {
      return moment(createdAt).format("YYYY-MM-DD");
    };
    const deletePost = async (id) => {
      console.log(id);
      await $deletePost(id);
      load();
    };
    onMounted(() => load());
    return {
      postList,
      formattedDate,
      deletePost,
      load,
    };
  },
};
</script>

<style>
.fas:hover {
  color: #5050ff;
}
tbody a {
  color: black;
  text-decoration: none;
}
</style>
