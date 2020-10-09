import Search from "@/views/Search.vue";
import {  shallowMount } from "@vue/test-utils";

describe('search.vue', () => {
let searchWrapper;
  beforeEach(() => {
    const localVue = createLocalVue();
    localVue.use(VueRouter);

    searchWrapper = shallowMount(app, {
        localVue,
        router,
    });
});
afterEach(() => {
  searchWrapper.destroy();
});
  it('accepts the search value', () => {
    searchWrapper = shallowMount(Search);

    wrapper.find('input').element.value = 'bulldog';
    wrapper.find('input').trigger('input');

    wrapper.find('button').trigger('click');

    expect(wrapper.vm.searchString).toBe('bulldog')
  })

  it('displays the random image', async () => {
    const wrapper = shallowMount(Search);

    await wrapper.setData({searchString: 'bulldog'})
    wrapper.find('button').trigger('click');
    
    await wrapper.setData({ imageUrl: 'https://images.dog.ceo/breeds/bulldog-boston/n02096585_1775.jpg'})
    expect(wrapper.contains('.image')).toBe(true)
 
  })
})