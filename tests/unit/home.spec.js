
import {  shallowMount } from "@vue/test-utils";
import Home from "@/views/Home.vue";


describe("Home.vue", () => {
  it("Shows the title of the page", () => {
    //const msg = "new message";
    const wrapper = shallowMount(Home)
    //   propsData: { msg }
    // });
   // expect(wrapper.text()).toMatch(msg);
   expect(wrapper.html()).toMatch("My Dog World")
  });



  // it('redirect to search component', () => {
  //   const wrapper = mount(App);
  //   wrapper.vm.$router.push('/');

  //   wrapper.find('.search').trigger('click');
  //   expect(wrapper.vm.$route.path).toBe('/search');
  // })

  //  it("Gets the list of all breeds", (done) => {
  //  // moxios(domain).get('/api/breed/list/all').reply(200, { message: [] })
  //  const allBreeds = ["affenpinscher","african","airedale","akita"]

  //  moxios.stubRequest(`/api/breed/list/all`, {
  //   status: 200,
  //   response: allBreeds
  // })

  // const onFulfilled = sinon.spy()
  // getAllBreeds().then(onFulfilled)

  // moxios.wait(() => {
  //   expect(onFulfilled.getCall(0).args[0].data).toBe(expectedPosts)
  //   done()
  // })
 
});

