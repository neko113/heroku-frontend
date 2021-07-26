<template>
  <div class="container-fluid p-5">
    <div class="row mt-5">
      <!-- TAG LIST -->
      <div class="col-md-2">
        <div>태그 목록</div>
        <hr />
      </div>
      <div class="col-md-1"></div>
      <!-- POST LIST -->
      <div class="col-md-6">
        <div ref="scrollComponent">
          <div :key="i" v-for="(post, i) in postList">
            <div>
              <router-link :to="{ name: 'PostDetail', params: { id: post.id } }">
                <h2>
                  <strong>{{ post.title }}</strong>
                </h2>
              </router-link>
              <div>&nbsp;&nbsp;{{ post.description }}</div>
              <div class="text-end">{{ formattedDate(post.createdAt) }}</div>
              <hr class="my-5" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { onMounted, onUnmounted, ref } from "vue";
import { $getPostList } from "../service/post";
import moment from "moment";
export default {
  name: "PostList2",
  setup() {
    const postList = ref([]);
    const tag = ref("");
    const page = ref(1);
    const lastpage = ref(1);
    const scrollComponent = ref(null);
    const load = async () => {
      const arr = [];
      if (tag.value) {
        arr.push(`tag=${tag.value}`);
      }
      if (page.value) {
        arr.push(`page=${page.value}`);
      }
      const response = await $getPostList(arr.join("&"));
      postList.value = page.value === 1 ? response.data.postList : [...postList.value, ...response.data.postList];
      lastpage.value = response.data.lastpage;
    };
    const formattedDate = (createdAt) => {
      return moment(createdAt).format("YYYY-MM-DD HH:MM");
    };

    const handleScroll = () => {
      let element = scrollComponent.value;
      if (element.getBoundingClientRect().bottom - 200 < window.innerHeight) {
        page.value += 1;
        load();
      }
    };
    onMounted(() => {
      load();
      window.addEventListener("scroll", handleScroll);
    });
    onUnmounted(() => {
      window.removeEventListener("scroll", handleScroll);
    });
    return {
      load,
      page,
      lastpage,
      postList,
      formattedDate,
      scrollComponent,
    };
  },
};
</script>

<style scoped>
a {
  text-decoration: none;
  color: black;
}
</style>
