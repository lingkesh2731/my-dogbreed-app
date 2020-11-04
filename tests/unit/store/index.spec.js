//import {getAllBreeds,getDogImage,getRandomDogImage,getSubDogImage} from '../../../src/dog.service'

import sampleStore from "../../../src/store/index";

const method = require("../../../src/dog.service");
jest.mock("../../../src/dog.service", () => ({
  getAllBreeds: jest.fn(),
  getDogImage: jest.fn(),
  getSubList: jest.fn()
}));

describe("Mutations ", () => {
  it("Sets the allBreeds", () => {
    const state = {
      allBreeds: []
    };
    //state.commit=jest.fn();
    const allBreedsLocal = {
      affenoinscher: [],
      african: [],
      australian: ["shepherd"],
      boxer: [],
      bulldog: ["boston", "english", "french"]
    };
    sampleStore.mutations.SET_ALLBREEDS(state, allBreedsLocal);
    expect(state.allBreeds).toBe(allBreedsLocal);
  });
  it("sets the imageUrl", () => {
    const state = {
      imageUrl: []
    };
    const imageUrlLocal = [
      "https://images.dog.ceo/breeds/african/n02116738_10081.jpg",
      "https://images.dog.ceo/breeds/african/n02116738_10493.jpg",
      "https://images.dog.ceo/breeds/african/n02116738_1739.jpg"
    ];
    sampleStore.mutations.SET_IMAGES(state, imageUrlLocal);
    expect(state.imageUrl).toBe(imageUrlLocal);
  });
  // it('sets the subimage', () => {
  //     const state = {
  //         imageUrl : []
  //      }
  //      const imageUrlLocal = [
  //         "https://images.dog.ceo/breeds/african/n02116738_10081.jpg",
  //         "https://images.dog.ceo/breeds/african/n02116738_10493.jpg",
  //         "https://images.dog.ceo/breeds/african/n02116738_1739.jpg",
  //     ]
  //     sampleStore.mutations.SET_SUBIMAGES(state,imageUrlLocal)
  //     expect(state.imageUrl).toBe(imageUrlLocal);
  // })
  it("sets the randomImageUrl", () => {
    const state = {
      randomImageUrl: ""
    };
    const imageUrlLocal =
      "https://images.dog.ceo/breeds/african/n02116738_4382.jpg";
    sampleStore.mutations.SET_RANDOM(state, imageUrlLocal);
    expect(state.randomImageUrl).toBe(imageUrlLocal);
  });

  describe("Getters", () => {
    it("gets the getAllBreeds,getRandomImageUrl,getImageUrl", () => {
      const allBreeds = {
        affenoinscher: [],
        african: [],
        australian: ["shepherd"],
        boxer: [],
        bulldog: ["boston", "english", "french"]
      };
      const imageUrl = [
        "https://images.dog.ceo/breeds/african/n02116738_10081.jpg",
        "https://images.dog.ceo/breeds/african/n02116738_10493.jpg",
        "https://images.dog.ceo/breeds/african/n02116738_1739.jpg"
      ];
      const randomImageUrl =
        "https://images.dog.ceo/breeds/african/n02116738_4382.jpg";
      const state = { allBreeds, imageUrl, randomImageUrl };
      const returnedAllBreeds = sampleStore.getters.getAllBreeds(state);
      // console.log(result);
      expect(returnedAllBreeds).toEqual(allBreeds);
      const returnedImages = sampleStore.getters.getImageUrl(state);
      expect(returnedImages).toEqual(imageUrl);

      const returnedRandom = sampleStore.getters.getRandomImageUrl(state);
      expect(returnedRandom).toEqual(randomImageUrl);
    });
  });

  // describe("Actions", () => {
  //   beforeEach(() => {});
  //   it("calls the SET_ALLBREEDS mutation", async () => {
  //     // const context = {
  //     //     commit: jest.fn()
  //     // }

  //     // const state = {
  //     //     allBreeds : [],
  //     //     // commit: jest.fn()
  //     //  }
  //     // const allContent = Promise.resolve();
  //     // method.getAllBreeds.mockImplementation(() => allContent)
  //    // sampleStore.actions.getAllBreedContent(state);
  //     // await allContent
  //     // expect().toHaveBeenCalledWith('SET_ALLBREEDS',allContent)

  //     // const commit= jest.fn();
  //     // const promise= {message :{
  //     //     "affenoinscher": [],
  //     //     "african": [],
  //     //     "australian": ["shepherd"],
  //     //     "boxer": [],
  //     //     "bulldog": ["boston", "english", "french"],
  //     // }}

  //     // method.getAllBreeds.mockImplementation(() => promise)
  //     // await sampleStore.actions.getAllBreedContent({commit},{getAllBreeds})
  //     // expect(commit).toHaveBeenCalledWith('SET_ALLBREEDS', true)
  //   });
  //});
});
