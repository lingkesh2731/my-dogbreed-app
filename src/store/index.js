import Vue from "vue";
import Vuex from "vuex";
import {getAllBreeds,getDogImage,getRandomDogImage,getSubDogImage} from '../dog.service';

Vue.use(Vuex);

export default new Vuex.Store({
  
  state: {
    allBreeds: [],
    imageUrl: [],
    randomImageUrl: "",
  },
  mutations: {

      SET_ALLBREEDS(state, allBreeds){
        state.allBreeds = allBreeds;
    },

      SET_IMAGES(state, imageUrl){
        state.imageUrl = imageUrl;
    },

    SET_SUBIMAGES(state,imageUrl){
      state.imageUrl = imageUrl;
    },

      SET_RANDOM(state, randomImageUrl){
        state.randomImageUrl = randomImageUrl; 
      },
  },
  actions: {

    async getAllBreedContent( state ){
      const all=await getAllBreeds()
        const allContent=all.data['message'];
      state.commit('SET_ALLBREEDS',allContent)
    },

    async getDogImages( state,payload){
      const tot=await getDogImage(payload.name , payload.count);
      const images=tot.data['message'];
      state.commit('SET_IMAGES',images)
  },
  async getSubDogImages( state,payload){
    const tot=await getSubDogImage(payload.parent, payload.child, payload.count);
    const images=tot.data['message'];
    state.commit('SET_SUBIMAGES',images)
},
    async getRandomImage(state,dogName) {
        const i= await getRandomDogImage(dogName);
        const random=i.data['message'];
        state.commit('SET_RANDOM', random);
      }
  },

  modules: {} ,
  getters: {
    getRandomImageUrl: state => state.randomImageUrl,
    getAllBreeds: state => state.allBreeds,
    getImageUrl: state => state.imageUrl,
  }
});
