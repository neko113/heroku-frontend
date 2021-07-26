<template>
  <div class="container-fluid">
    <div class="row">
      <!-- POST -->
      <div class="col-md-6">
        <div class="row">
          <form>
            <div class="mt-3">
              <textarea v-model="title" placeholder="제목을 입력하세요" v-focus style="scroll: none height:10px"></textarea>
            </div>
            <div class="mt-3">
              <textarea v-model="content" placeholder="내용을 입력하세요" style="height: 400px"></textarea>
            </div>
          </form>
        </div>
        <div class="row">
          <div id="fix-box" class="col-md-6 p-3 fixed-bottom">
            <div class="row justify-content-between ">
              <div class="col-4 text-start">
                <router-link :to="{ name: 'PostList' }" class="btn btn-secondary"> <i class="fas fa-arrow-left"></i> 나가기</router-link>
              </div>
              <div class="col-4 text-end">
                <div class="btn btn-secondary" @click="submit">제출하기</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- POST MIRROR -->
      <div class="col-md-6 bg-light">
        <div class="mt-3">
          <textarea v-model="title" class="bg-light" readonly></textarea>
        </div>
        <div class="mt-3">
          <textarea v-model="content" class="bg-light" style="height: 400px" readonly></textarea>
        </div>
      </div>
    </div>
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
        confirmButtonColor: "blue",
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

<style scoped>
textarea {
  resize: none;
  border: none;
  outline: none;
  width: 100%;
}
#fix-box {
  box-shadow: rgba(0, 0, 0, 0.45) 0px -15px 15px -15px;
}
</style>
