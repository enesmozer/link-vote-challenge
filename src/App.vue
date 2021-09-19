<script>
import Header from "@/components/Header.vue";
export default {
  components: {
    Header,
  },
};
</script>
<template>
  <div id="app">
    <Header logo="src/assets/logo.png"></Header>
    <router-view class="page" />
  </div>
</template>

<style lang="scss">
@import "./assets/styles/app.scss";
.page {
  @apply flex;
  @apply items-center;
  @apply w-screen;
  @apply flex-col;
  height: calc(theme("height.screen") - theme("spacing.20"));
}
</style>
