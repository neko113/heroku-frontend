<template>
  <div class="text-center">
    <router-link :to="{ name: 'PostForm' }" class="btn btn-outline-primary mt-5 mx-3">작성하기</router-link>
    <router-link :to="{ name: 'PostList2' }" class="btn btn-outline-primary mt-5">리스트 모드</router-link>
    <div class="mx-5 my-5">
      <table class="table table-hover align-middle text-center">
        <thead>
          <tr>
            <th width="20%">순서</th>
            <th width="40%">제목</th>
            <th width="40%">작성일</th>
          </tr>
        </thead>
        <tbody>
          <tr :key="i" v-for="(post, i) in postList">
            <td>{{ parseInt(post.id / 10) }}</td>
            <td>
              <router-link :to="{ name: 'PostDetail', params: { id: post.id } }">{{ post.title }}</router-link>
            </td>
            <td @click="test">{{ formattedDate(post.createdAt) }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
import { onMounted, ref } from "vue";
import { $getPostList } from "../service/post";
import moment from "moment";

export default {
  name: "PostList",
  setup() {
    const postList = ref([]);
    const load = async () => {
      const response = await $getPostList();
      postList.value = response.data.postList;
    };
    const formattedDate = (createdAt) => {
      return moment(createdAt).format("YYYY-MM-DD HH:MM");
    };
    onMounted(() => load());
    return {
      postList,
      formattedDate,
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
