import Vue from "vue";
import { expect } from "chai";
import sinon from "sinon";
import LinkCard from "@/components/LinkCard";

describe("LinkCard.vue", () => {
  let vm = null;
  let spy = null;
  let name = "";
  let url = "";
  let point = 0;
  beforeEach(() => {
    const container = document.createElement("div");
    const linkCardComponent = Vue.extend(LinkCard);
    name = "Vue.js";
    url = "(https://vuejs.org/)";
    point = 5;
    vm = new linkCardComponent({
      propsData: {
        name,
        url,
        point,
      },
    });
    vm.$mount(container);
    spy = sinon.spy(vm, "$emit");
  });
  it("should link links", () => {
    expect(vm.name).contains(name);
    expect(vm.url).contains(url);
    expect(vm.point).equal(point);
    expect(vm.$el.querySelector(".link-card-info-name").textContent).equal(
      name
    );
    expect(vm.$el.querySelector(".link-card-info-url").textContent).equal(url);
    expect(
      Number(vm.$el.querySelector(".link-card-points .point").textContent)
    ).equal(point);
  });
  it("should emit event when delete clicked", () => {
    vm.$el.querySelector(".link-card-delete").click();
    expect(spy.called).equal(true);
    const [eventName] = spy.args[0];
    expect(eventName).equal("delete");
  });
  it("should emit event when up vote clicked", () => {
    vm.$el.querySelector(".vote.up").click();
    expect(spy.called).equal(true);
    const [eventName] = spy.args[0];
    expect(eventName).equal("upVote");
  });
  it("should emit event when down vote clicked", () => {
    vm.$el.querySelector(".vote.down").click();
    expect(spy.called).equal(true);
    const [eventName] = spy.args[0];
    expect(eventName).equal("downVote");
  });
});
