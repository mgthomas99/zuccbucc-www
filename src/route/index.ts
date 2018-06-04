import { RouteConfig } from "vue-router";
import VueRouter from "vue-router";

import AboutPageComponent from "./../AboutPage.vue";
import DicePageComponent from "./../DicePage.vue";
import FaucetPageComponent from "./../FaucetPage.vue";
import HomePageComponent from "./../HomePage.vue";

export const routes: RouteConfig[] = [
  {
    meta: {},
    name: "home",
    path: "/",
    component: HomePageComponent
  },
  {
    meta: {
      icon: "www/icon/help.png"
    },
    name: "about",
    path: "/about",
    component: AboutPageComponent
  },
  {
    meta: {
      icon: "www/icon/dice.png"
    },
    name: "dice",
    path: "/dice",
    component: DicePageComponent
  },
  {
    meta: {
      icon: "www/icon/tap.png"
    },
    name: "faucet",
    path: "/faucet",
    component: FaucetPageComponent
  }
];

export const router = new VueRouter({ routes });
export default router;
