<template>
  <div class="container">
      <div class="searchInput">
    
          <input type="text"  list="names" placeholder="Type Breed name slowly..." v-model="searchString"  />
          <datalist id="names" v-if="flag">
            <option v-for="(dog, name) in allBreads" :key="dog.id" >{{name}}</option>
          </datalist>
          <button class="btn btn-primary btn-sm" @click="findBreed()"> Find</button>
      </div>
          <div v-if="sub[this.message]" class="subBreed">
              <p v-for="(dog,index) in sub[this.message]" :key="dog.id"><b>Type &nbsp;{{index+1}} : {{dog}}</b></p>
          </div>
        <div class="row">
          <div class="col-5 wf">
            <div class="imageContainer" >   
            <img v-if="imageUrl" v-bind:src="imageUrl">
            </div>
          </div>
           
          <div class="col-7 wf" > 
            <div class="few">
                <span  v-for="url in fewImages" :key="url.id">
                   <img  v-bind:src="url" />
                </span>
            </div>
          </div>
         </div>
  </div>
</template>

<script>
import { debounce } from "lodash";
import { mapActions, mapGetters } from 'vuex';
import { getSubList,getDogImage} from "../dog.service";
export default {
  name: 'Search',

  data() {
    return{ 
    searchString: "",
    sub: [],
    message: "message",  
    flag: false,
    fewImages: [],
    }
  },

  created(){  
    this.getAll();
  },
  
  computed: {
    ...mapGetters({
     imageUrl: "getRandomImageUrl",
     allBreads: "getAllBreeds",
   
     }),
  },
  
  watch: {
     searchString: debounce(function (value) {
       if(value.length > 0){
         this.flag = true;
         console.log(value);
       }
       else{
         this.flag = false;
         
       }
      },1500),
    
  },
  methods: {
    ...mapActions(["getRandomImage","getAllBreedContent"]),
    
     getAll(){
       this.$store.dispatch('getAllBreedContent');
    },
    findBreed(){  
      
      if(this.searchString.length > 0 && this.flag == true && this.allBreads[this.searchString]){
        this.$store.dispatch('getRandomImage',this.searchString);
       
        getSubList(this.searchString).then( res => {
        this.sub=res.data;
          });
        getDogImage(this.searchString,10).then(res => {
          this.fewImages = res.data.message;
        });
       }
      else{
        alert("Please provide the search input correctly")
      }    
      },  
  },
};
</script>
<style scoped>
.imageContainer{
max-width: 400px;
max-height: 400px;
margin: 0 auto;
}
.imageContainer img{
  width: 100%;
  height: 400px; 
 padding-bottom: 10%;
}
.searchInput{
  margin: 5%;
}
.few{
width:auto;
height: auto;
margin:5px; 
}
.few img{
padding: 10px;
width:130px;
height: 180px;
padding-bottom: 10%;
}
p{
  color: black;
}

</style>
