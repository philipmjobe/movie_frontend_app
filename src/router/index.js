import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import editMovie from "../views/moviesEdit.vue";
import showMovie from "../views/moviesShow.vue";
import createMovie from "../views/moviesNew.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  { path: "/movies/:id/edit", name: "editMovie", component: editMovie },
  { path: "/movies/:id", name: "showMovie", component: showMovie },
  { path: "/createmovie", name: "createMovie", component: createMovie },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
