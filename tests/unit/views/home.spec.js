import { shallowMount,createLocalVue } from "@vue/test-utils";
import Home from "../../../src/views/home.vue";
import Vuex from 'vuex';
import VueRouter from 'vue-router';

describe('Home.vue', () => {
    let homeWrapper;
    let mockStore;
    const router = new VueRouter();

    beforeEach(() => {
        const localVue = createLocalVue();
        localVue.use(Vuex);
        mockStore = {
            state: {
                allBreeds: [],
                imageUrl: [],
            },
            dispatch: jest.fn(),
            actions : {
            getAllBreedContent: jest.fn(),
            getDogImages: jest.fn(),
            getSubDogImages: jest.fn(),
            }, 
          };
          
        homeWrapper = shallowMount(Home, {
            mocks: { $store: mockStore,},
            computed: {
                allBreads: () => 'getAllBreeds',
                imageUrl: () => 'getImageUrl',
            },
            data: () => ({
                selectedBreed: "bulldog",
                subBreedname: "",
                flag: false,
                dog: [],
            }),
            localVue,
            router,
        });
    });
    afterEach(() => {
        homeWrapper.destroy();
    });

     it('is a local Vue instance', () => {
        expect(homeWrapper.isVueInstance).toBeTruthy();
    });

    it("Shows the title of the page", () => {
        expect(homeWrapper.text()).toMatch("My Dog World")
    });
    
    // it('gets all breeds when component is created', () =>{
        
    //     homeWrapper.setMethods({ getAll: jest.fn(), })
    //     expect(homeWrapper.vm.getAll).toHaveBeenCalled();
    // })

    it(' checks weather the home component is loaded to check created hook', () => {
        expect(Home).toBeTruthy();
    })

    it('gets all breed from store', () => {
        //const getAll = jest.fn();
        homeWrapper.vm.getAll();
        expect(homeWrapper.vm.getAll).toBeCalled();

    })



});


//   // it('redirect to search component', () => {
//   //   const wrapper = mount(App);
//   //   wrapper.vm.$router.push('/');

//   //   wrapper.find('.search').trigger('click');
//   //   expect(wrapper.vm.$route.path).toBe('/search');
//   // })

//   //  it("Gets the list of all breeds", (done) => {
//   //  // moxios(domain).get('/api/breed/list/all').reply(200, { message: [] })
//   //  const allBreeds = ["affenpinscher","african","airedale","akita"]

//   //  moxios.stubRequest(`/api/breed/list/all`, {
//   //   status: 200,
//   //   response: allBreeds
//   // })

//   // const onFulfilled = sinon.spy()
//   // getAllBreeds().then(onFulfilled)

//   // moxios.wait(() => {
//   //   expect(onFulfilled.getCall(0).args[0].data).toBe(expectedPosts)
//   //   done()
//   // })
 
// describe("Testing of Image component", () => {
//     it("render image component with default value", () => {
//       const wrapper = shallow(<Image />);
//       expect(wrapper).toBeTruthy();
//       expect(wrapper.find("img").length).toEqual(1);
//     });


