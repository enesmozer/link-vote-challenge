<script>
import Arrow from "@/assets/arrow.svg";
import DeleteIcon from "@/assets/delete.svg";
export default {
  props: {
    name: String,
    url: String,
    point: Number,
  },
  components: {
    Arrow,
    DeleteIcon,
  },
};
</script>
<template>
  <div class="links">
    <div class="link-card">
      <div class="link-card-points">
        <div class="point">{{ point }}</div>
        <div class="point-text">POINTS</div>
      </div>
      <DeleteIcon class="link-card-delete" @click="$emit('delete')" />
      <div class="link-card-info">
        <div class="link-card-info-name">{{ name }}</div>
        <div class="link-card-info-url">{{ url }}</div>
        <div class="link-card-info-vote">
          <div class="vote" @click="$emit('upVote')">
            <Arrow class="vote-icon" />Up Vote
          </div>
          <div class="vote" @click="$emit('downVote')">
            <Arrow class="vote-icon down" />Down Vote
          </div>
        </div>
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
  @apply relative;
  @apply cursor-pointer;
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
  &-delete {
    @apply absolute;
    @apply right-0;
    @apply top-0;
    @apply invisible;
  }
  &:hover &-delete {
    @apply visible;
  }
  &-info {
    @apply h-full;
    width: calc(100% - 7rem);
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
