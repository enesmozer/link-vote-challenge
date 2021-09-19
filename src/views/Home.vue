<template>
  <div class="home">
    <router-link to="/list" class="submit-link">
      <div class="submit-link-icon"><PlusIcon class="icon" /></div>
      <div class="submit-link-text">SUBMIT A LINK</div>
    </router-link>
    <div class="divider"></div>
  </div>
</template>

<script>
import PlusIcon from "@/assets/plus.svg";
export default {
  name: "Home",
  components: {
    PlusIcon,
  },
};
</script>
<style lang="scss" scoped>
.home {
  .submit-link {
    @apply w-72;
    @apply h-24;
    @apply flex;
    @apply items-center;
    @apply bg-gray-100;
    @apply text-xl;
    @apply mt-4;
    @apply rounded;
    &-icon {
      @apply bg-gray-300;
      @apply w-20;
      @apply h-16;
      @apply text-center;
      @apply rounded;
      @apply flex;
      @apply justify-center;
      @apply items-center;
      @apply text-7xl;
      @apply ml-2;
      @apply mr-8;
      @apply border-2;
      @apply border-solid;
      @apply border-gray-400;
      .icon {
        @apply w-12;
        @apply h-12;
      }
    }
  }
  .divider {
    @apply w-80;
    @apply h-1;
    @apply bg-gray-400;
    @apply mt-3;
  }
}
</style>
