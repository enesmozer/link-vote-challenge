<script>
import Logo from "../assets/logo.svg";
export default {
  name: "Header",
  props: {
    logo: String,
  },
  components: {
    Logo,
  },
};
</script>
<template>
  <header class="header">
    <div class="header-main">
      <Logo class="header-logo" />
      <div class="header-title">
        <b>Link</b><span>Vote</span
        ><span style="font-weight: 500">Challange</span>
      </div>
    </div>
    <div class="divider"></div>
  </header>
</template>
<style scoped lang="scss">
.header {
  @apply w-11/12;
  @apply h-20;
  @apply relative;
  @apply flex;
  @apply flex-col;
  @apply justify-end;
  @apply left-1/2;
  @apply transform;
  @apply -translate-x-1/2;
  &-main {
    @apply flex;
    @apply items-center;
  }
  &-title {
    @apply absolute;
    @apply right-0;
    @apply text-2xl;
  }
  .divider {
    @apply w-full;
    @apply h-px;
    @apply bg-gray-400;
    @apply mt-3;
  }
}
</style>
