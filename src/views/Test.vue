<template>
  <div>
    <button v-on:click="show = !show">
      Toggle
    </button>
    <transition name="fade">
      <div v-if="show">
        <h1>MARKDOWN TEST</h1>
        <textarea v-model="md_text" @input="changeKeyword"></textarea>
        <textarea v-model="preview_text"></textarea>
        <div v-html="preview_text"></div>
        <button @click="h1">H1</button>
      </div>
    </transition>
  </div>
</template>
<script>
import { computed, ref } from "vue";
import marked from "marked";
export default {
  setup() {
    const show = ref(true);
    const md_text = ref("");
    const preview_text = computed(() => {
      return marked(md_text.value);
    });
    const changeKeyword = (e) => {
      md_text.value = e.target.value;
    };
    const h1 = () => {
      md_text.value += "# ";
    };
    return {
      show,
      md_text,
      preview_text,
      changeKeyword,
      h1,
    };
  },
};
</script>
<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
