<script>
import JwPagination from "jw-vue-pagination";
import PlusIcon from "@/assets/plus.svg";
import LinkCard from "@/components/LinkCard.vue";
export default {
  name: "Home",
  components: {
    PlusIcon,
    LinkCard,
    JwPagination,
  },
  data() {
    return {
      links: [],
      pagedLinks: [],
      sortType: "",
    };
  },
  methods: {
    deleteLink(item) {
      const links = JSON.parse(localStorage.getItem("links"));
      if (links.some((link) => link.id === item.id)) {
        localStorage.removeItem("links");
        localStorage.setItem(
          "links",
          JSON.stringify(links.filter((link) => link.id !== item.id))
        );
        this.$notify({
          group: "addLink",
          title: `${item.name} removed`,
          type: "success",
          duration: 2000,
        });
      }
      this.links = links.filter((link) => link.id !== item.id);
    },
    vote(id, isUp) {
      const links = JSON.parse(localStorage.getItem("links"));
      const idx = links.findIndex((link) => link.id === id);
      if (idx >= 0) {
        links[idx].point = isUp
          ? (links[idx].point += 1)
          : (links[idx].point -= 1);
        links[idx].updatedAt = Date.now();
      }
      localStorage.removeItem("links");
      localStorage.setItem("links", JSON.stringify(links));
      this.links = links;
      this.sort(this.sortType);
    },
    onChangePage(pageOfItems) {
      this.pagedLinks =
        pageOfItems.length >= 10 ? pageOfItems.slice(0, 5) : pageOfItems;
    },
    sort(type) {
      if (type === "most") {
        this.links.sort((a, b) => {
          if (a.point === b.point) {
            return b.updatedAt - a.updatedAt;
          }
          return b.point - a.point;
        });
      } else if (type === "less") {
        this.links.sort((a, b) => {
          if (a.point === b.point) {
            return b.updatedAt - a.updatedAt;
          }
          return a.point - b.point;
        });
      }
      localStorage.removeItem("links");
      localStorage.setItem("links", JSON.stringify(this.links));
    },
  },
  created() {
    this.links = JSON.parse(localStorage.getItem("links"));
  },
};
</script>
<template v-cloak>
  <div class="home">
    <router-link to="/add" class="submit-link">
      <div class="submit-link-icon"><PlusIcon class="icon" /></div>
      <div class="submit-link-text">SUBMIT A LINK</div>
    </router-link>
    <div class="divider"></div>
    <select class="sorting" @change="sort(sortType)" v-model="sortType">
      <option value="" disabled selected hidden>Order By</option>
      <option value="most">Most Voted ( Z -> A)</option>
      <option value="less">Less Voted ( A -> Z)</option>
    </select>
    <div class="card" v-for="link in pagedLinks" :key="link.id">
      <LinkCard
        :name="link.name"
        :url="link.url"
        :point="link.point"
        @upVote="vote(link.id, true)"
        @downVote="vote(link.id, false)"
        @delete="deleteLink(link)"
      ></LinkCard>
    </div>
    <jw-pagination
      class="pagination"
      :items="links"
      @changePage="onChangePage"
      :pageSize="5"
    ></jw-pagination>
  </div>
</template>
<style lang="scss" scoped>
[v-cloak] {
  display: none;
}
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
  .sorting {
    @apply border-2;
    @apply border-solid;
    @apply border-gray-400;
    @apply rounded;
    @apply mt-4;
    @apply transform;
    @apply -translate-x-1/2;
    @apply -mr-8;
  }
  .pagination {
    margin-top: 1.5rem !important;
  }
}
</style>
