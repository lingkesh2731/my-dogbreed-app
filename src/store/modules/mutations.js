const mutations = {
    
    SET_RANDOM(state, randomImageUrl){
        //console.log(randomImageUrl)
        state.randomImageUrl = randomImageUrl["message"];
        console.log(state.randomImageUrl)
    },
};

export default mutations;