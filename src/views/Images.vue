<template>
    <div class="container">
         <span  v-for="url in imgUrl" :key="url.id">
           <img class="images" v-bind:src="url" />
         </span>
         <br/>
        <button class="btn btn-primary" @click="moreImages()" >More</button>
    </div>
    
</template>
<script>
export default {
    name: 'photos',
    props: {
        imgUrl: Array
    },
    methods: {
        moreImages(){
            this.$emit("clickHandleEvents",20)
        }
    }
}
</script>

<style scoped>
.container{
    max-width: 1960px;
    width: 100%;
    overflow: hidden; 
    position: relative;
}
.container img{
    padding: 10px;
    width : 250px;
    height : 200px;
    
}
button{
    float: center;
}
</style>