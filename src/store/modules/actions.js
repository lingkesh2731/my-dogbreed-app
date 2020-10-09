import {getAllBreeds, getDogImage, getRandomDogImage} from '../../dog.service';

const actions = {

    async getAllBreedContent( {commit} ){
        return getAllBreeds()
        .then((res) =>
            commit('SET_ALLBREEDS', res.data.message))
            .catch((error) => console.log(`There was a problem getting the breeds: ${error.message}`))
        },
    
    async getDogImages( {commit},dogName,count){
        return getDogImage(dogName,count)
        .then((res) => commit('SET_IMAGES', res.data))
        .catch((error) => console.log(`There was a problem getting the images: ${error.message}`))
    },

    async getRandomImage({commit}, dogName){
        return getRandomDogImage(dogName)
        .then((res) => {commit('SET_RANDOM', res.data)})                  
        .catch((error) => console.log(`There was a problem getting the images: ${error.message}`))
    }
};

export default actions;