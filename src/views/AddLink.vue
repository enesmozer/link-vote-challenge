<script>
import Arrow from "@/assets/arrow.svg";
import { ValidationProvider, ValidationObserver, extend } from "vee-validate";
import { required, alpha, regex } from "vee-validate/dist/rules";
extend("alpha", alpha);
extend("regex", regex);

extend("required", {
  ...required,
  message: "This field is required",
});
extend("regex", {
  ...regex,
  message: "Please enter a valid url.",
});
export default {
  components: {
    Arrow,
    ValidationProvider,
    ValidationObserver,
  },
  data() {
    return {
      name: "",
      url: "",
    };
  },
  methods: {
    onSubmit() {
      this.$refs.form.validate().then((success) => {
        if (!success) {
          return;
        }
        const newLink = {
          id: Math.random().toString(36).substring(2),
          name: this.name,
          url: `(${this.url})`,
          point: 0,
          updatedAt: Date.now(),
        };
        const links = JSON.parse(localStorage.getItem("links"));
        if (links) {
          links.push(newLink);
          localStorage.removeItem("links");
          localStorage.setItem("links", JSON.stringify(links.reverse()));
        } else {
          localStorage.setItem("links", JSON.stringify([newLink]));
        }
        this.$notify({
          group: "addLink",
          title: `${this.name} added`,
          type: "success",
          duration: 2000,
        });
        this.name = this.url = "";

        this.$nextTick(() => {
          this.$refs.form.reset();
        });
      });
    },
  },
};
</script>
<template>
  <div class="add-link">
    <router-link to="/" class="add-link-back">
      <Arrow class="left-arrow" /> Return to list
    </router-link>
    <div class="add-link-title">Add New Link</div>
    <ValidationObserver ref="form">
      <form class="add-link-form" @submit.prevent="onSubmit">
        <ValidationProvider
          name="name"
          rules="required|alpha"
          class="add-link-form-item"
          v-slot="{ errors }"
        >
          <p class="add-link-form-label">Link Name</p>
          <input
            class="add-link-form-input"
            v-model="name"
            placeholder="e.g. Alphabet"
          />
          <div class="error">{{ errors[0] }}</div>
        </ValidationProvider>
        <ValidationProvider
          name="url"
          :rules="{
            regex:
              /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/,
          }"
          class="add-link-form-item"
          v-slot="{ errors }"
        >
          <p class="add-link-form-label">Link URL:</p>
          <input
            class="add-link-form-input"
            v-model="url"
            placeholder="e.g. http://abc.xyz"
          />
          <div class="error">{{ errors[0] }}</div>
        </ValidationProvider>
        <button class="add-link-form-submit" type="submit">Add</button>
      </form>
    </ValidationObserver>
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
      @apply w-6;
      @apply h-6;
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
    @apply relative;
    &-item {
      @apply mt-8;
      @apply block;
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
    &-submit {
      @apply bg-black;
      @apply text-white;
      @apply rounded-3xl;
      @apply w-36;
      @apply h-12;
      @apply absolute;
      @apply right-0;
      @apply mt-6;
    }
    .error {
      @apply text-red-600;
    }
  }
}
</style>
