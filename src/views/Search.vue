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
          <div class="col-4 wf">
            <div class="imageContainer" v-if="searchString">   
            <img v-if="imageUrl" v-bind:src="imageUrl">
            </div>
          </div>
           
          <div class="col-8 wf" > 
            <div class="few">
                <span  v-for="url in fewImages.message" :key="url.id">
                   <img  v-bind:src="url" />
                </span>
            </div>
          </div>
         </div>
  </div>
</template>

<script>
import { debounce } from "lodash";
import { getAllBreeds,} from "../dog.service";
import { dogActions } from '../store/modules/action-types.const'
//getRandomDogImage ,getSubList ,getDogImage
export default {
  name: 'Search',
  data() {
    return{
    allBreads: [],
    searchString: "",
    imageUrl: "",
    sub: [],
    message: "message",  
    flag: false,
    fewImages: []
    }
  },
  created(){  
    this.getAll();
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
     getAll(){
      getAllBreeds().then(res => {
        this.allBreads=res.data.message;
      })
    },
    findBreed(){  
      if(this.searchString.length > 0 && this.flag == true && this.allBreads[this.searchString]){
          this.imageUrl= this.$store.dispatch(dogActions.getRandomImage,this.searchString)
          console.log(this.imageUrl);
      //   getRandomDogImage(this.searchString).then(res => {
      //   this.imageUrl=res.data.message;
      //  }); 
       
      //   getSubList(this.searchString).then( res => {
      //   this.sub=res.data;
      //     });
      //   getDogImage(this.searchString,10).then(res => {
      //   this.fewImages=res.data;
      // });
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
max-width: 300px;
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
