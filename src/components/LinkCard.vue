<script>
import Arrow from "@/assets/arrow.svg";
export default {
  props: {
    point: Number,
    name: String,
    url: String,
  },
  components: {
    Arrow,
  },
};
</script>
<template>
  <div class="link-card">
    <div class="link-card-points">
      <div class="point">{{ point }}</div>
      <div class="point-text">POINTS</div>
    </div>
    <div class="link-card-info">
      <div class="link-card-info-name">{{ name }}</div>
      <div class="link-card-info-url">({{ url }})</div>
      <div class="link-card-info-vote">
        <div class="vote"><Arrow class="vote-icon" />Up Vote</div>
        <div class="vote"><Arrow class="vote-icon down" />Down Vote</div>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.link-card {
  @apply w-80;
  @apply h-20;
  @apply flex;
  @apply items-center;
  @apply text-xl;
  @apply mt-4;
  @apply rounded;
  &-points {
    @apply bg-gray-300;
    @apply w-20;
    @apply h-full;
    @apply text-center;
    @apply rounded;
    @apply flex;
    @apply justify-center;
    @apply items-center;
    @apply flex-col;
    @apply text-base;
    @apply ml-2;
    @apply mr-4;
    @apply border-2;
    @apply border-solid;
    @apply border-gray-400;
    .point {
      @apply font-bold;
      @apply text-xl;
    }
  }
  &-info {
    @apply h-full;
    @apply relative;
    &-name {
      @apply text-base;
      @apply font-bold;
    }
    &-url {
      @apply text-sm;
      @apply font-light;
    }
    &-vote {
      @apply flex;
      @apply justify-between;
      @apply text-xs;
      @apply font-light;
      @apply absolute;
      @apply bottom-0;
      @apply w-full;
      .vote {
        @apply flex;
        @apply items-center;
        @apply justify-center;
        &-icon {
          @apply w-3;
          @apply h-3;
          &.down {
            @apply transform;
            @apply rotate-180;
          }
        }
      }
    }
  }
}
</style>