import Vue from "vue";
import VueRouter from "vue-router";
import BoardView from "../views/BoardView";
import RecipeDetail from "../views/RecipeDetail.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "board-view",
    component: BoardView
  },
  {
    path:"/recipe/:id",
    name:"recipe-detail",
    component:RecipeDetail,
    props:true
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
