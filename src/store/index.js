//import { reject } from "core-js/fn/promise";
import {
  getAllBreeds,
  getDogImage,
  getRandomDogImage,
  getSubDogImage
} from "../dog.service";

const state = {
  allBreeds: [],
  imageUrl: [],
  randomImageUrl: ""
};
const mutations = {
  SET_ALLBREEDS(state, allBreeds) {
    state.allBreeds = allBreeds;
  },

  SET_IMAGES(state, imageUrl) {
    state.imageUrl = imageUrl;
  },

  SET_SUBIMAGES(state, imageUrl) {
    state.imageUrl = imageUrl;
  },

  SET_RANDOM(state, randomImageUrl) {
    state.randomImageUrl = randomImageUrl;
  }
};
const actions = {
  async getAllBreedContent(state) {
    const all = await getAllBreeds();
    const allContent = all.data["message"];
    state.commit("SET_ALLBREEDS", allContent);
  },

  async getDogImages(state, payload) {
    const tot = await getDogImage(payload.name, payload.count);
    const images = tot.data["message"];
    state.commit("SET_IMAGES", images);
  },

  async getSubDogImages(state, payload) {
    const tot = await getSubDogImage(
      payload.parent,
      payload.child,
      payload.count
    );
    const images = tot.data["message"];
    state.commit("SET_SUBIMAGES", images);
  },
  async getRandomImage(state, dogName) {
    const img = await getRandomDogImage(dogName);
    const random = img.data["message"];
    state.commit("SET_RANDOM", random);
  }
  // async getRandomImage(state, dogName) {
  //   let random;
  //    await getRandomDogImage(dogName).then(data => {
  //      this.random= data.data.message;
  //    }).catch((error) => {
  //     alert(error.message);
  //      //reject(error.response.data.errors);
  // });
  // state.commit("SET_RANDOM", random);
  // }
};
const getters = {
  getRandomImageUrl: state => state.randomImageUrl,
  getAllBreeds: state => state.allBreeds,
  getImageUrl: state => state.imageUrl
};

export default {
  state,
  actions,
  mutations,
  getters
};
