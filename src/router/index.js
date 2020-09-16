import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/Home.vue")
  },
  {
    path: "/drag",
    name: "drag",
    component: () => import("../views/drag.vue")
  },
  {
    path: "/dragTable",
    name: "dragTable",
    component: () => import("../views/dragTable.vue")
  },
  {
    path: "/dragElTable",
    name: "dragElTable",
    component: () => import("../views/dragElTable.vue")
  },
  {
    path: "/authTree",
    name: "authTree",
    component: () => import("../views/AuthTree.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
