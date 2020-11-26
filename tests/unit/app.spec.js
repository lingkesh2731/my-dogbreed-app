import { shallowMount, createLocalVue, RouterLinkStub } from "@vue/test-utils";
import VueRouter from "vue-router";
import app from "@/App.vue";
import { routes } from '../../src/router/index';

describe("In App component", () => {
  let appWrapper;
  const router = new VueRouter({ routes });

  beforeEach(() => {
    const localVue = createLocalVue();
    localVue.use(VueRouter);

    appWrapper = shallowMount(app, {
      localVue,
      router,
      stubs: {
        RouterLink: RouterLinkStub
      }
    });
  });
  afterEach(() => {
    appWrapper.destroy();
  });

  it("is a local Vue instance", () => {
    expect(appWrapper.isVueInstance).toBeTruthy();
  });

  it("renders the correct markup", () => {
    expect(appWrapper.html()).toContain('<div id="app">');
  });

  // it('renders correct url parameter', () => {
  //     expect(appWrapper.find(RouterLinkStub).props().to).toStrictEqual(search);
  //     expect(appWrapper.find(RouterLinkStub).text()).toBe(Search);
  // })
});
