<template>
  <div class="container mt-5" style="width: 500px;">
    <form @submit.prevent="login" class="card bg-light">
      <div class="card-header text-center text-white bg-primary">
        <h1>PLEASE LOG IN</h1>
      </div>
      <div class="card-body">
        <div class="mb-3">
          <label for="email" class="form-label">Email address</label>
          <input type="email" class="form-control" id="email" v-model="email" />
        </div>
        <div class="mb-3">
          <label for="password" class="form-label">Password</label>
          <input type="password" class="form-control" id="password1" v-model="password" />
        </div>
      </div>

      <div class="d-grid gap-2 col-6 mx-auto mb-3">
        <button type="submit" class="btn btn-primary float-end">LOGIN</button>
      </div>
    </form>
  </div>
</template>

<script>
import Swal from "sweetalert2";
import { $login } from "../service/auth";
import { ref } from "vue";
import { useRouter } from "vue-router";
export default {
  setup() {
    const router = useRouter();
    const email = ref("");
    const password = ref("");
    const login = () => {
      if (!email.value) {
        Swal.fire({
          title: "이메일을 입력해주세요",
          icon: "error",
          timer: 800,
        });
        return;
      }
      if (!password.value) {
        Swal.fire({
          title: "비밀번호를 입력해주세요",
          icon: "error",
          timer: 800,
        });
        return;
      }
      $login({ email: email.value, password: password.value }).then(async (res) => {
        if (res.data.error) {
          Swal.fire({
            title: res.data.error,
            icon: "error",
            timer: 800,
          });
        } else {
          Swal.fire({
            title: "로그인에 성공했습니다",
            icon: "success",
            timer: 800,
          }).then(() => {
            router.push({ name: "Home" });
          });
        }
      });
    };
    return {
      email,
      password,
      login,
    };
  },
};
</script>
