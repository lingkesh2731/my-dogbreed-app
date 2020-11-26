//import {getAllBreeds,getDogImage,getRandomDogImage,getSubDogImage} from '../../../src/dog.service'

import store from "../../../src/store/index";
import sampleStore from "../../../src/store/index";
import {getAllBreeds,getDogImage,getSubDogImage,getRandomDogImage} from '../../../src/dog.service.js';
jest.mock("../../../src/dog.service.js")

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
  it('sets the subimage', () => {
      const state = {
          imageUrl : []
       }
       const imageUrlLocal = [
          "https://images.dog.ceo/breeds/african/n02116738_10081.jpg",
          "https://images.dog.ceo/breeds/african/n02116738_10493.jpg",
          "https://images.dog.ceo/breeds/african/n02116738_1739.jpg",
      ]
      sampleStore.mutations.SET_SUBIMAGES(state,imageUrlLocal)
      expect(state.imageUrl).toBe(imageUrlLocal);
  })
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

  describe("Actions", () => {
    it("calls the SET_ALLBREEDA mutations", async() => {
      let commit = jest.fn();
      const dogs = {
        data: {
          message:{
            affenoinscher: [],
            african: [],
            australian: ["shepherd"],
            boxer: [],
            bulldog: ["boston", "english", "french"]
          }
        }
      }
      getAllBreeds.mockResolvedValue(dogs);
      await store.actions.getAllBreedContent({commit});
      expect(commit).toHaveBeenCalledWith("SET_ALLBREEDS", dogs.data.message);
    })
    it("calls the SET_IMAGES mutation", async() => {
      let commit = jest.fn();
      let payload = {
        name: "african",
        count: 20,
      }
      const dogs = {
        data: {
          message: [
            "https://images.dog.ceo/breeds/african/n02116738_10081.jpg",
            "https://images.dog.ceo/breeds/african/n02116738_10493.jpg",
            "https://images.dog.ceo/breeds/african/n02116738_1739.jpg"
          ]
         }
      }
      getDogImage.mockResolvedValue(dogs);
      await store.actions.getDogImages({commit},{payload});
      expect(commit).toHaveBeenCalledWith("SET_IMAGES", dogs.data.message);
    })
    it("calls the SET_SUBIMAGES mutation", async() => {
      let commit = jest.fn();
      let payload = {
        parent : "african",
        chile: "",
        count: 20
      }
      const dogs = {
        data: {
          message: [
            "https://images.dog.ceo/breeds/african/n02116738_10081.jpg",
            "https://images.dog.ceo/breeds/african/n02116738_10493.jpg",
            "https://images.dog.ceo/breeds/african/n02116738_1739.jpg"
          ]
         }
      }
      getSubDogImage.mockResolvedValue(dogs);
      await store.actions.getSubDogImages({commit},{payload});
      expect(commit).toHaveBeenCalledWith("SET_SUBIMAGES", dogs.data.message);
    })

    it("calls the SET_RANDOM mutation", async() => {
      let commit = jest.fn();
      const dogs = {
        data: {
          message: [
            "https://images.dog.ceo/breeds/african/n02116738_1739.jpg"
          ]
         }
      }
      getRandomDogImage.mockResolvedValue(dogs);
      await store.actions.getRandomImage({commit});
      expect(commit).toHaveBeenCalledWith("SET_RANDOM", dogs.data.message);
    })
  })
});
