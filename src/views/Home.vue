""<template>
  <div class="home">
    <div class="cointainer">
      <div class="allbreed">
        <h1>My Dog World</h1>
        <label for="breeds">AllBreeds</label>
        <select v-model="selectedBreed" @change="lookup()">
          <option v-for="(dog, name) in $store.state.allBreeds" :key="dog.name">{{
            name
          }}</option>
        </select>

        <div class="subBreed" v-if="flag">
          <label for="selectedBreed">SubBreed</label>
          <select v-model="subBreedname">
            <option v-for="sub in dog" :key="sub.id">{{ sub }}</option>
          </select>
        </div>
        <br />
        <div class="text-center">
          <button class="btn btn-primary btn-sm" @click="getImage()">
            Select
          </button>
        </div>
        <br />
      </div>
    </div>
    <div class="row">
      <div v-if="status">
        <DogImages :imgUrl="imageUrl" @clickHandleEvents="handleEvents" />
      </div>
      <div class="puppy" v-if="status == false">
        <img :src="this.dogImage" />
      </div>
    </div>
  </div>
</template>

<script>
import DogImages from "./DogImages";
import { mapActions, mapGetters} from "vuex";
 
export default {
  name: "Home",
  components: {
    DogImages
  },
  data() {
    return {
      selectedBreed: "bulldog",
      subBreedname: "",
      flag: false,
      dog: [],
      count: 20,
      status: false,
      dogImage: "images/puppy.png",
      allBreeds: []

    };
  },
  created() {
    //this.$store.dispatch("getAllBreedContent");
    this.getAllBreedContent();
  },
  computed: {
    ...mapGetters({
      //allBreeds: "getAllBreeds",
      imageUrl: "getImageUrl"
    })
  },

  methods: {
    ...mapActions(["getAllBreedContent", "getDogImages", "getSubDogImages"]),

    lookup() {
      
      console.log(this.selectedBreed);
      this.dog = this.$store.state.allBreeds[this.selectedBreed];
      let len = this.dog.length;
      if (len > 0) {
        this.flag = true;
        this.count = 20;
      } else {
        this.flag = false;
        this.subBreedname = "";
        this.count = 20;
      }
    },
    getImage() {
        if (this.selectedBreed && this.flag == false) {
        this.$store.dispatch("getDogImages", {
          name: this.selectedBreed,
          count: this.count
        });
        this.status = true;
      } else if (this.subBreedname && this.flag == true) {
        this.$store.dispatch("getSubDogImages", {
          parent: this.selectedBreed,
          child: this.subBreedname,
          count: this.count
        });
        this.status = true;
       } else {
        alert("Provide the correct input");
      }
   },
    handleEvents() {
      this.count += 20;
      this.getImage();
    }
  }
};
</script>
<style scoped>
.home {
  background-color: white;
}
.puppy {
  max-width: 1200px;
  margin: 0 auto;
}
.puppy img {
  width: 93%;
  padding-bottom: 10%;
  background-size: cover;
}
h1 {
  color: brown;
}
label {
  color: brown;
}
</style>
