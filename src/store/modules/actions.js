import { getRandomDogImage} from '../../dog.service';

const actions = {

    async getRandomImage({commit}, dogName){
        return getRandomDogImage(dogName)
        .then((res) => {commit('SET_RANDOM', res.data)})                  
        .catch((error) => console.log(`There was a problem getting the images: ${error.message}`))
    }
};

export default actions;