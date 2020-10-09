const mutations = {
    
    
    SET_ALLBREEDS(state, allBreeds){
        state.allBreeds = allBreeds;
    },

    SET_IMAGES(state, imageUrl){
        state.imageUrl = imageUrl;
    },
    
    SET_RANDOM(state, randomImageUrl){
        //console.log(randomImageUrl)
        state.randomImageUrl = randomImageUrl["message"];
        console.log(state.randomImageUrl)
    },
};

export default mutations;