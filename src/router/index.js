import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    props: true
  },
  {
    path: "/destination/:slug",
    name: "DestinationDetails",
    component: () =>
      import(
        /*webpackChunkName:"DestinationDetails"*/ "../views/DestinationDetails.vue"
      ),
    props: true,
    children: [
      {
        path: ":experienceSlug",
        name: "experienceDetails",
        component: () =>
          import(
            /*webpackChunkName: "ExperienceDetails"*/ "../views/ExperienceDetails.vue"
          ),
        props: true
      }
    ]
  }
];

const router = new VueRouter({
  linkExactActiveClass: "active-route-class",
  mode: "history",
  routes
});

export default router;
