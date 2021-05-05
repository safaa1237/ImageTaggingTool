import VueRouter from "vue-router";
import Tagging from "./views/Tagging";

const router = new VueRouter({
  routes: [
    {
      path: "/tagging",
      component: Tagging,
    },
  ],
});

export default router;
