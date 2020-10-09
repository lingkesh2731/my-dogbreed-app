""<template>
  <div class="home" >
    <div class="cointainer" >
      
        <div class="allbreed">
           <h1>My Dog World</h1>
          <label for="breeds">AllBreeds</label>
          <select v-model="selectedBreed"  @change="lookup()">
            <option v-for="(dog, name) in allBreads" :key="dog.id" >{{name}}</option>
          </select>

          <div class="subBreed" v-if="flag">
              <label for="selectedBreed">SubBreed</label>
                <select v-model="subBreedname" >
                <option v-for="sub in dog" :key="sub.id">{{sub}}</option>
                </select>
          </div>
          <br/>
          <div class="text-center">
            <button class="btn btn-primary btn-sm" @click="getImage()">Select</button>
          </div>
          <br/>
       </div>
    </div>
    
    <div class="row">
      <div v-if="status">
          <Images :img="this.imageUrl" @clickHandleEvents="handleEvents"/>
      </div>
      <div class="puppy" v-if="status == false">
         <img :src="this.dogImage" />
      </div>
    </div>
  
  </div>
</template>

<script>
import Images from "./Images.vue";
import { getAllBreeds,getDogImage,getSubDogImage } from "../dog.service";
export default {
  name: "Home",
  components:{
    Images,
  },
  data(){
    return{
      allBreads: [],
      selectedBreed: "bulldog",
      subBreedname: "",
      flag: false,
      dog: [],
      imageUrl: [],
      count: 20,
      status: false,
      dogImage:"images/puppy.png",
      
    };
  },
  created(){  
    this.getAll();
  },
  methods: {
    getAll(){
      getAllBreeds().then(res => {
        this.allBreads=res.data.message;
        console.log(this.allBreads);
      })
    },
    lookup(){
        console.log(this.selectedBreed);
        this.dog=this.allBreads[this.selectedBreed]
        let len =this.dog.length;
        if(len > 0){
          this.flag=true;
        }
        else this.flag=false;{
            console.log(len);
            this.subBreedname="";
        }
    },
    getImage(){       
      if(this.subBreedname){
      getSubDogImage(this.selectedBreed,this.subBreedname,this.count).then(res => {
        this.imageUrl=res.data;
        console.log(this.imageUrl);
        this.status=true;
      });
      }
      if(this.selectedBreed){
         getDogImage(this.selectedBreed,this.count).then(res => {
        this.imageUrl=res.data;
        console.log(this.imageUrl);
        this.status=true;
      });
       }
       else{
         alert("Provide the correct input")
       }
    },
    handleEvents(){
      this.count += 20;
      this.getImage();
    }
  }
};
</script>
<style scoped>
.home{
  background-color: black;
}
.puppy{
max-width: 1200px;
margin: 0 auto;
} 
.puppy img{
 width: 93%;
 padding-bottom: 10%;
 background-size: cover;
}
.col-3 {
  background-color: black;
}
a{
 color: antiquewhite;
}
h1{
  color: rgb(238, 229, 229);
}
label{
  color: antiquewhite;
}
</style>
