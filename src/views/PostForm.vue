<template>
  <div class="container mt-5">
    <form>
      <div class="row justify-content-center">
        <div class="col-8">
          <input v-model="title" type="text" class="form-control fs-3" placeholder="제목을 입력하세요" v-focus />
        </div>
        <div class="col-10 mt-5">
          <textarea v-model="content" class="form-control fs-3" placeholder="내용을 입력하세요" style="height: 400px; resize:none"></textarea>
        </div>
        <div class="col-3 btn btn-primary mt-5" @click="submit">제출하기</div>
      </div>
    </form>
  </div>
</template>
<script>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { $createPost } from "../service/post";
import Swal from "sweetalert2";
export default {
  name: "PostForm",
  setup() {
    const router = useRouter();
    const title = ref("");
    const content = ref("");
    const submit = () => {
      if (!title.value) {
        Swal.fire({
          title: "제목을 입력하세요",
          icon: "error",
          timer: 800,
        });
        return;
      }
      if (!content.value) {
        Swal.fire({
          title: "내용을 입력하세요",
          icon: "error",
          timer: 800,
        });
        return;
      }
      Swal.fire({
        title: "제출하시겠습니까?",
        icon: "question",
        showCancelButton: true,
        cancelButtonColor: "red",
      }).then(async (result) => {
        if (result.isConfirmed) {
          await $createPost({ title: title.value, content: content.value });
          router.push({ name: "PostList" });
        }
      });
    };
    return {
      title,
      content,
      submit,
    };
  },
};
</script>
