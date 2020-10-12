<template>
    <div class="container">
         <span  v-for="url in img" :key="url.message">
           <img v-if="img" v-bind:src="url" />
         </span>
         <br/>
        <button class="btn btn-primary" @click="moreImages()" >More</button>
    </div>
    
</template>
<script>
export default {
    name: 'photos',
    props: {
        img: Array
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