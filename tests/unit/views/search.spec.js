import Search from "../../../src/views/Search.vue";
import Vuex from 'vuex';
import { shallowMount, createLocalVue } from '@vue/test-utils';
import VueRouter from 'vue-router';
//import { routes } from '@/router/index';

describe('search.vue', () => {
let searchWrapper;
let mockStore;
const router = new VueRouter();

  beforeEach(() => {
    const localVue = createLocalVue();
    localVue.use(Vuex);
    localVue.use(VueRouter);

    mockStore = {
      state: { 
        imageUrl: [],
        randomImageUrl: ""
      },
    dispatch: jest.fn(),
    getRandomImageUrl: jest.fn(),
    };
    searchWrapper = shallowMount(Search, {
      mocks: {
      $store: mockStore,
      },
      computed:{
      imageUrl: () => 'getRandomImageUrl'
      },
      data: () => ({
        searchString: "",
        sub: [],  
        flag: false,
        fewImages: [],
      }),
      localVue,
      router,
      });
    });
    afterEach(() => {
      searchWrapper.destroy();
    });

  it('is a local Vue instance', () => {
    expect(searchWrapper.isVueInstance).toBeTruthy();
  });

  it('accepts the search value', () => {
    searchWrapper.find('input').element.value = 'bulldog';
    searchWrapper.find('input').trigger('input');
    searchWrapper.find('button').trigger('click');
    expect(searchWrapper.vm.searchString).toBe('bulldog')
  })

  // it('sets the flag to true, if searchString is valid and renders the datalist', () => {
  //   searchWrapper.setData({searchString: 'bulldog' });
  //   searchWrapper.vm.$options.watch.searchString.call(searchWrapper.vm);
  //   await wrapper.vm.$nextTick()
  //   //searchWrapper.setData({flag: true });
  //   //expect(searchWrapper.vm.flag).toBe(true);
  //   // expect(searchWrapper.html()).toContain('<div class="dropdown"></div>');
  // })

  

  // it('displays the random image', async () => {
  //   const wrapper = shallowMount(Search);

  //   await wrapper.setData({searchString: 'bulldog'})
  //   wrapper.find('button').trigger('click');
    
  //   await wrapper.setData({ imageUrl: 'https://images.dog.ceo/breeds/bulldog-boston/n02096585_1775.jpg'})
  //   expect(wrapper.contains('.image')).toBe(true)
 
  // })
});