import PageNotFound from "../../../src/components/PageNotFound.vue";
import { shallowMount } from "@vue/test-utils";

describe("pageNotFound.vue", () => {
  it("is a local Vue instance", () => {
    const wrapper = shallowMount(PageNotFound);
    expect(wrapper.isVueInstance).toBeTruthy();
  });

  it("contains the text", () => {
    const wrapper = shallowMount(PageNotFound);
    expect(wrapper.html()).toContain(" Oops we cannot find the page !!!");
  });
});
