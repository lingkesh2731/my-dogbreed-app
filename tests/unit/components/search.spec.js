import Search from "../../../src/components/Search.vue";
import Vuex from "vuex";
import { shallowMount, createLocalVue } from "@vue/test-utils";
import VueRouter from "vue-router";
import * as data from '../testing_data';
//import { getSubList } from "../testing_data";
//import {getSubList, getDogImage } from '../testing_data'
import { getSubList, getDogImage } from "../../../src/dog.service";
// import axios from 'axios';
// import {  getDogImage } from "../../../src/dog.service";

// const method = require("../../../src/dog.service");
jest.mock("../../../src/dog.service");
jest.spyOn(window, "alert").mockReturnValue();
// jest.mock("../../../src/dog.service");
// jest.mock('axios');
//import { routes } from '@/router/index';

describe("search.vue", () => {
  let searchWrapper;
  let mockStore;
  const router = new VueRouter();

  beforeEach(() => {
    const localVue = createLocalVue();
    localVue.use(Vuex);
    localVue.use(VueRouter);

    mockStore = {
      state: {
        allBreeds: data.allBreeds,
        imageUrl: [],
        randomImageUrl: ""
      },

      dispatch: jest.fn(),
      actions: {
        getRandomImage: jest.fn(),
        //getRandomImageUrl: jest.fn(),
        getAllBreedContent: jest.fn()
      }
    };
    searchWrapper = shallowMount(Search, {
      mocks: {
        $store: mockStore
      },
      computed: {
        imageUrl: () => "getRandomImageUrl",
        allBreads: () => ['bulldog','african']
        // allBreads: () => "getAllBreeds"
      },
      data: () => ({
        searchString: "",
        sub: [],
        flag: false,
        fewImages: []
      }),
      localVue,
      router
    });
  });
  afterEach(() => {
    searchWrapper.destroy();
  });

  it("is a local Vue instance", () => {
    expect(searchWrapper.isVueInstance).toBeTruthy();
  });

  it("since component is loaded getAll method will be called", () => {
    searchWrapper.vm.getAll = jest.fn();
    searchWrapper.vm.getAll();
    expect(searchWrapper.vm.getAll).toBeCalled();
  });
  it("accepts the search value", () => {
    searchWrapper.find("input").element.value = "bulldog";
    searchWrapper.find("input").trigger("input");
    searchWrapper.find("button").trigger("click");
    expect(searchWrapper.vm.searchString).toBe("bulldog");
  });

  it("renders the dropdown", async () => {
    searchWrapper.find("input").element.value = "bull";
    searchWrapper.find("input").trigger("input");
    searchWrapper.setData({ flag: true });
    await searchWrapper.vm.$forceUpdate();
    // console.log(searchWrapper.vm.flag)
    // console.log(searchWrapper.find('div').html());
    expect(searchWrapper.find(".dropdown").exists()).toBe(true);
  });

  it("does not render dropdown if selected breed is empty", async () => {
    searchWrapper.setData({ searchString: "" });
    searchWrapper.vm.$options.watch.searchString.call(searchWrapper.vm, "");
    expect(searchWrapper.vm.flag).toBe(false);
    await searchWrapper.vm.$forceUpdate();
    expect(searchWrapper.find(".dropdown").exists()).toBe(false);
  });

  it("at button click it calls findbreed method", () => {
    searchWrapper.vm.findBreed = jest.fn();
    searchWrapper.setData({ searchString: "boxer" });
    searchWrapper.find("button").trigger("click");
    expect(searchWrapper.vm.findBreed).toBeCalled();
  });

  describe("In findBreed method", () => {
    beforeEach(() => {
      //searchWrapper.vm.findBreed = jest.fn();
      searchWrapper.setData({ searchString: "bulldog" });
      searchWrapper.setData({ flag: true });
      searchWrapper.setData({ all: ['bulldog','african'] });
      // const allBreedsLocal = {
      //   affenoinscher: [],
      //   african: [],
      //   australian: ["shepherd"],
      //   boxer: [],
      //   bulldog: ["boston", "english", "french"]
      // };
      // searchWrapper.vm.$options.computed.allBreads.call(allBreedsLocal)
    });
    it('calls every method inside findbreed', async () => {
      searchWrapper.vm.findBreed();
      const name = searchWrapper.vm.searchString;
      expect(searchWrapper.vm.$store.dispatch).toHaveBeenCalledWith('getRandomImage', name)
      // const subbreed = ["boston", "english", "french"];
      // getSubList.mockReturnValue({
      //   res: {
      //     data: ["boston", "english", "french"],
      //   }
      // })
      // console.log(res.data);
      //getSubList.mockImplementation(() => promise);
      //searchWrapper.vm.findBreed();
      //await promise;
     
      //expect(getSubList(name)).toHaveBeenCalled;
      // return getSubList(name).then(res => {
      //   expect(res.data).toEqual(subbreed);
        // expect(getSubList(name).then(function (){
        //   expect(res.data).toEqual(subbreed);
        //}))
  //  });
//     const imageUrl = [
//       "https://images.dog.ceo/breeds/african/n02116738_10081.jpg",
//       "https://images.dog.ceo/breeds/african/n02116738_10493.jpg",
//       "https://images.dog.ceo/breeds/african/n02116738_1739.jpg"
//     ];
//     getDogImage.mockReturnValue({
//       res: {
//         data: {
//           message: [
//             "https://images.dog.ceo/breeds/african/n02116738_10081.jpg",
//             "https://images.dog.ceo/breeds/african/n02116738_10493.jpg",
//             "https://images.dog.ceo/breeds/african/n02116738_1739.jpg"
//           ]
//         }
//       },
//     });
//     expect(getDogImage(name,10)).toHaveBeenCalled;
//     // getDogImage(name, 10).then(res => {
//     //   expect(res.data.message).toEqual(imageUrl);
//     //})
  
  
 });
}) 
 
});
