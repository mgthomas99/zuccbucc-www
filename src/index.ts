import VueRouter from "vue-router";
import Vue from "vue";

import { router } from "./route/index";
import AppComponent from "./App.vue";

Vue.use(VueRouter);
export default new Vue({
    el: "#app",
    components: { AppComponent },
    render: h => h(AppComponent),
    router
});
