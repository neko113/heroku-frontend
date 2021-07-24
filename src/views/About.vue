<template>
  <div>
    <form @submit.prevent="submit()">
      <div>
        <label for="email">nick</label>
        <input type="text" id="email" v-model="nick" v-focus />
      </div>
      <div>
        <label for="password">age</label>
        <input type="number" id="password1" v-model="age" />
      </div>
      <div>
        <button type="submit"><i class="fas fa-check-circle"></i></button>
      </div>
    </form>
    <table>
      <thead>
        <tr>
          <th>닉네임</th>
          <th>나이</th>
        </tr>
      </thead>
      <tbody>
        <tr :key="i" v-for="(user, i) in userList">
          <td>{{ user.nick }}</td>
          <td>{{ user.age }}</td>
        </tr>
      </tbody>
    </table>
    <div @click="load">다시</div>
  </div>
</template>
<script>
import { onMounted, ref } from "vue";
import { $get_api, $post_api } from "../service/test";
export default {
  name: "About",
  setup() {
    const userList = ref([]);
    const nick = ref("");
    const age = ref(0);
    const load = async () => {
      const response = await $get_api();
      userList.value = response.data.userList;
    };
    const submit = async () => {
      await $post_api({ nick: nick.value, age: age.value });
    };
    onMounted(() => load());
    return {
      userList,
      load,
      nick,
      age,
      submit,
    };
  },
};
</script>
