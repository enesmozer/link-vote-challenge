<script>
import Arrow from "@/assets/arrow.svg";
export default {
  components: {
    Arrow,
  },
  data() {
    return {
      name: "",
      url: "",
    };
  },
};
</script>
<template>
  <div class="add-link">
    <router-link to="/" class="add-link-back">
      <Arrow class="left-arrow" /> Return to list
    </router-link>
    <div class="add-link-title">Add New Link</div>
    <div class="add-link-form">
      <div class="add-link-form-item">
        <p class="add-link-form-label">Link Name</p>
        <input
          class="add-link-form-input"
          v-model="name"
          placeholder="e.g. Alphabet"
        />
      </div>
      <div class="add-link-form-item">
        <p class="add-link-form-label">Link URL:</p>
        <input
          class="add-link-form-input"
          v-model="url"
          placeholder="e.g. http://abc.xyz"
        />
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.add-link {
  &-back {
    @apply flex;
    @apply items-center;
    @apply justify-around;
    @apply w-32;
    @apply mt-4;
    transform: translatex(-79%);
    .left-arrow {
      @apply transform;
      @apply -rotate-90;
    }
  }
  &-title {
    @apply text-3xl;
    @apply font-bold;
    @apply mt-12;
    transform: translateX(-35%);
  }
  &-form {
    @apply mt-12;
    @apply ml-10;
    &-item {
      @apply mt-8;
    }
    &-label {
      @apply font-light;
    }
    &-input {
      @apply border-2;
      @apply border-solid;
      @apply mt-1;
      @apply h-10;
      @apply w-96;
      @apply rounded;
    }
  }
}
</style>
