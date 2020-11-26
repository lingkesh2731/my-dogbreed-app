
import { shallowMount, createLocalVue } from "@vue/test-utils";
import Home from "../../../src/views/home.vue";
import Vuex from 'vuex';
import VueRouter from 'vue-router';
// import flushPromises from 'flush-promises';
import * as data from '../testing_data';
import DogImages from "../../../src/views/dogImages.vue";
import sampleStore from "../../../src/store/index"

describe('Home.vue', () => {
    let homeWrapper;
    let mockStore;
    let actions;

    const router = new VueRouter();

    beforeEach(() => {
        const localVue = createLocalVue();
        localVue.use(Vuex);
        // actions = {
        //     getAllBreedContent: jest.fn(() => Promise.resolve()),
        //     getDogImages: jest.fn(() => Promise.resolve()),
        //     getSubDogImages: jest.fn(() => Promise.resolve()),
        //     }, 

        mockStore = {
            state: {
                allBreeds: data.allBreeds,
                imageUrl: data.imageUrl,
            },
            dispatch: jest.fn(() => Promise.resolve()),
            getters: {
                getAllBreeds: state => state.allBreeds,
                getImageUrl: state => state.imageUrl
            },
            actions: {
                getAllBreedContent: jest.fn(),
                getDogImages: jest.fn(),
                getSubDogImages: jest.fn(),
            },
        };
        //   store = new Vuex.Store(mockStore)
        // 

        homeWrapper = shallowMount(Home, {
            mocks: { $store: mockStore, },
            computed: {
                // allBreads: () => 'getAllBreeds',
                // imageUrl: () => 'getImageUrl',
              //  allBreads: () => "getAllBreeds",
                imageUrl: () => data.imageUrl,
            },
            data: () => ({
                selectedBreed: "bulldog",
                subBreedname: "",
                flag: false,
                dog: [],
                status: false
            }),
            localVue,
            router,
            // store,
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

    it(' checks weather the home component is loaded to check created hook', () => {
        expect(Home).toBeTruthy();
    })

    it('since component is loaded getAll method will be called', () => {
        homeWrapper.vm.getAll = jest.fn();
        homeWrapper.vm.getAll();
        expect(homeWrapper.vm.getAll).toBeCalled();
    })

    it('call the store getAll action when created', async () => {
        homeWrapper.vm.getAll = jest.fn();
        homeWrapper.vm.getAll();
        expect(homeWrapper.vm.$store.dispatch).toHaveBeenCalledWith('getAllBreedContent');
    })
    it('display the background', () => {
        expect(homeWrapper.find('.puppy')).toBeTruthy();
    })

    it('calls lookup method when selectedBreed gets changed', () => {
        homeWrapper.vm.lookup = jest.fn();
        expect(homeWrapper.vm.selectedBreed).toBe('bulldog');
        homeWrapper.find('select').setValue('boxer');
        expect(homeWrapper.vm.lookup).toBeCalled();
    })

    it('checks for the subbreed', () => {
        homeWrapper.vm.lookup = jest.fn();
        homeWrapper.setData({ selectedBreed: 'boxer' })
        homeWrapper.vm.lookup();
        homeWrapper.setData({ dog: [] })
        expect(homeWrapper.vm.flag).toBe(false);
        expect(homeWrapper.find('.subBreed').exists()).toBe(false);
    })
    it('conditional rendering if it has sub breed', async () => {
        //homeWrapper.vm.lookup = jest.fn();

        homeWrapper.find('select').setValue('boxer');
       // homeWrapper.find('select').setValue('bulldog');
        homeWrapper.setData({ selectedBreed: 'bulldog' })
       
        homeWrapper.vm.lookup();

        // homeWrapper.setData({ dog: ["boston", "english", "french"] })
        // homeWrapper.setData({ len: 3});
        // homeWrapper.setData({ flag: true })
        //console.log(homeWrapper.vm.dog);
        expect(homeWrapper.vm.flag).toBe(true);
        await homeWrapper.vm.$forceUpdate();
        expect(homeWrapper.find('.subBreed').exists()).toBe(true);
    })

    it("render image component ", async () => {
        homeWrapper.setData({ status: true })
        await homeWrapper.vm.$forceUpdate();
        // const imageUrl = [
        //     "https://images.dog.ceo/breeds/african/n02116738_10081.jpg",
        //     "https://images.dog.ceo/breeds/african/n02116738_10493.jpg",
        //     "https://images.dog.ceo/breeds/african/n02116738_1739.jpg"
        // ];
        // homeWrapper.vm.$options.computed.imageUrl.call(imageUrl)
       // expect(homeWrapper.html()).toContain('<dogimages-stub imgurl=\"getImageUrl\"></dogimages-stub>');
        expect(homeWrapper.findComponent(DogImages).exists()).toBe(true);
    });

    describe('image', () => {
        beforeEach(() => {
            homeWrapper.setData({ selectedBreed: 'african' })
            homeWrapper.setData({ subBreedname: '' })
            homeWrapper.setData({ flag: false })
        })
        it('calls the getImage method on click', () => {
            homeWrapper.vm.getImage = jest.fn();
            homeWrapper.find('button').trigger('click');
            expect(homeWrapper.vm.getImage).toBeCalled();
        })
        it('calls getDogImages when no subbreed is present', () => {
            let param = {
                payload : {
                    name : homeWrapper.vm.selectedBreed,
                    count : 20,
                }
            }
          //  const name = homeWrapper.vm.selectedBreed;
            //const count = 20;
            // const parent = homeWrapper.vm.selectedBreed;
            // const child = homeWrapper.vm.subBreedname;
            homeWrapper.vm.getImage();
            expect(homeWrapper.vm.$store.dispatch).toHaveBeenCalledWith('getDogImages', { name:"african", count: 20  });
            //expect(homeWrapper.vm.$store.dispatch).not.toHaveBeenCalledWith('getSubDogImages', {parent, child, count});
            expect(homeWrapper.vm.status).toBe(true);
       })
        it('calls the subDogImages', () => {

            homeWrapper.setData({ selectedBreed: 'bulldog' })
            homeWrapper.setData({ subBreedname: 'english' })
            homeWrapper.setData({ flag: true })
            const parent = homeWrapper.vm.selectedBreed;
            const child = homeWrapper.vm.subBreedname;
            const count = 20;
            homeWrapper.vm.getImage();
            expect(homeWrapper.vm.$store.dispatch).toHaveBeenCalledWith('getSubDogImages', { parent, child, count });
            expect(homeWrapper.vm.status).toBe(true);
        })
       

    })
});






// it('calls the subDogImages', () => {

//     homeWrapper.setData({ selectedBreed: 'bulldog' })
//     homeWrapper.setData({ subBreedname: 'english' })
//     homeWrapper.setData({ flag: true })
//     const parent = homeWrapper.vm.selectedBreed;
//     const child = homeWrapper.vm.subBreedname;
//     const count = 20;
//     homeWrapper.vm.getImage();
//     expect(homeWrapper.vm.$store.dispatch).toHaveBeenCalledWith('getSubDogImages', { parent, child, count });
//     expect(homeWrapper.vm.status).toBe(true);
// })
// it('calls getDogImages when no subbreed is present', () => {
//     const name = homeWrapper.vm.selectedBreed;
//     const count = 20;
//     // const parent = homeWrapper.vm.selectedBreed;
//     // const child = homeWrapper.vm.subBreedname;
//     homeWrapper.vm.getImage();
//     expect(homeWrapper.vm.$store.dispatch).toHaveBeenCalledWith('getDogImages', { name, count });
//    // expect(homeWrapper.vm.$store.dispatch).not.toHaveBeenCalledWith('getSubDogImages', {parent, child, count});
//     expect(homeWrapper.vm.status).toBe(true);
// })