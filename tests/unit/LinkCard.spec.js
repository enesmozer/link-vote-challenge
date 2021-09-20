import Vue from "vue";
import LinkCard from "@/components/LinkCard";
import { expect } from "chai";

describe("LinkCard.vue", () => {
  it("should link links", () => {
    const container = document.createElement("div");
    const linkCardComponent = Vue.extend(LinkCard);
    const name = "Vue.js";
    const url = "(https://vuejs.org/)";
    const point = 5;

    const vm = new linkCardComponent({
      propsData: {
        name,
        url,
        point,
      },
    });
    vm.$mount(container);

    expect(vm.name).contains(name);
    expect(vm.url).contains(url);
    expect(vm.point).equal(5);
    expect(vm.$el.querySelector(".link-card-info-name").textContent).equal(
      name
    );
    expect(vm.$el.querySelector(".link-card-info-url").textContent).equal(url);
    expect(
      Number(vm.$el.querySelector(".link-card-points .point").textContent)
    ).equal(point);
  });
});
