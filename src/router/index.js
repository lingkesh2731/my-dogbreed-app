import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

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
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Search.vue")
  },
  {
    path: "*",
    name: "PageNotFound",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/PageNotFound.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
