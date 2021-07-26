<template>
  <div>
    <TheNav />
    <router-view v-slot="{ Component }">
      <transition :name="transitionName" mode="out-in">
        <component :is="Component"></component>
      </transition>
    </router-view>
  </div>
</template>

<script>
import TheNav from "@/components/layouts/TheNav";
import { useRouter } from "vue-router";
import { ref } from "vue";
export default {
  components: { TheNav },
  setup() {
    const router = useRouter();
    const transitionName = ref("");
    router.beforeEach((to, from, next) => {
      if (to.meta.transitionName) {
        transitionName.value = to.meta.transitionName;
      } else {
        transitionName.value = "";
      }
      next();
    });
    return {
      transitionName,
    };
  },
};
</script>
<style scoped>
.scale-enter-active,
.scale-leave-active {
  transition: all 0.3s ease;
}

.scale-enter-from,
.scale-leave-to {
  opacity: 0;
  transform: scale(0.9);
}
</style>
