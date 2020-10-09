<template>
    <div class="container">
         <span  v-for="url in img.message" :key="url.message">
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
        img: Object
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
    overflow: hidden; 
    position: relative;
}
.container img{
    padding: 10px;
    width : 200px;
    height : 200px;
}
</style>