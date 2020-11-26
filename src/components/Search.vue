<template>
  <div class="container">
    <div class="searchInput">
      <input
        type="text"
        list="names"
        placeholder="Type Breed name slowly..."
        v-model="searchString"
      />
      <div class="dropdown" v-if="flag">
        <datalist id="names">
          <option v-for="(dog, name) in $store.state.allBreeds" :key="dog.id">{{
            name
          }}</option>
        </datalist>
      </div>
      <button class="btn btn-primary btn-sm" @click="findBreed()">Find</button>
    </div>
    <div v-if="sub[this.message]" class="subBreed">
      <p v-for="(dog, index) in sub[this.message]" :key="dog.id">
        <b>Type &nbsp;{{ index + 1 }} : {{ dog }}</b>
      </p>
    </div>
    <div class="dogImages">
      <div class="random">
        <img v-if="imageUrl" v-bind:src="imageUrl" />
      </div>
      <br />
      <div class="pics">
        <span v-for="url in fewImages" :key="url.id">
          <img v-bind:src="url" />
        </span>
      </div>
    </div>
    <!-- <div class="row">
      <div class="col-5 wf">
        <div class="imageContainer">
          <img v-if="imageUrl" v-bind:src="imageUrl" />
        </div>
      </div>

      <div class="col-7 wf">
        <div class="few">
          <span v-for="url in fewImages" :key="url.id">
            <img v-bind:src="url" />
          </span>
        </div>
      </div> -->
    <!-- </div> -->
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
// import { getSubList, getDogImage } from "../dog.service";
//import {  getDogImage } from "../dog.service";
export default {
  name: "Search",
  data() {
    return {
      searchString: "",
      sub: [],
      message: "message",
      flag: false,
      fewImages: [],
      
    };
  },
  created() {
    //this.$store.dispatch("getAllBreedContent");
    this.getAllBreedContent();
    //this.all=this.allBreads;
  },
  computed: {
    ...mapGetters({
      imageUrl: "getRandomImageUrl",
     // allBreads: "getAllBreeds"
    })
  },
  watch: {
    searchString(value) {
      if (value.length > 0) {
        this.flag = true;
      } else {
        this.flag = false;
      }
    }
  },
  methods: {
    ...mapActions(["getRandomImage", "getAllBreedContent"]),

    findBreed() {
      //console.log(this.all);
      if (
        this.searchString.length > 0 &&
        this.flag == true  && 
        this.$store.state.allBreeds[this.searchString]
        //this.all.includes(this.searchString)
        //(this.all.indexOf(this.searchString) !== -1)
        //this.all[this.searchString]
      ) {
       // console.log("here");
        this.$store.dispatch("getRandomImage", this.searchString);

        // getSubList(this.searchString).then(res => {
        //   this.sub = res.data;
        //});

        // getDogImage(this.searchString, 10).then(res => {
        //   this.fewImages = res.data.message;
        // });
      } else {
        alert("Please provide the search input correctly");
      }
    }
  }
};
</script>
<style scoped>
.imageContainer {
  max-width: 400px;
  max-height: 400px;
  margin: 0 auto;
}
@media only screen and (max-width: 600px) {
  .imageContainer {
    display: none;
  }
}
@media only screen and (max-width: 600px) {
  .few img {
    width: 100%;
  }
}
.random img {
  width: 75%;
  height: 400px;
  padding-bottom: 5%;
}
.pics img {
  padding: 10px;
  width: 140px;
  height: 180px;
  /* padding-bottom: 10%; */
}
.searchInput {
  margin: 5%;
}
p {
  color: black;
}
</style>
