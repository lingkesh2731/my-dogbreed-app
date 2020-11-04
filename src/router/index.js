import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import PageNotFound from "../components/PageNotFound.vue"
import Search from "../components/Search.vue"
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/search",
    name: "Search",
    component: Search
    // component: () =>
    //   import(/* webpackChunkName: "about" */ "../components/Search.vue")
  },
  {
    path: "*",
    name: "PageNotFound",
    component: PageNotFound
    // component: () =>
    //   import(
    //     /* webpackChunkName: "pagenotfound" */ "../components/PageNotFound.vue"
     // )
  }
];

const router = new VueRouter({
  mode: 'history',
  routes
});

export default router;
