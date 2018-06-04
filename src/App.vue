<template>
  <div class="h-100 w-100" id="app">
    <title-bar class="px-norm"></title-bar>
    <main class="px-norm">
      <aside class="float-left h-100 mt-4 w-25">
        <section class="mb-3">
          <fb-profile-card profile-picture-url="www/logo2.png" name="Zuccbucc" handle="zuccbucccore"></fb-profile-card>
        </section>
        <section class="my-3 text-justify">
          <p>
            Zuccbucc is a privacy-oriented, GPU-mineable coin that uses the
            Cryptonight V7 PoW algorithm.
          </p>
        </section>
        <section class="my-3">
          <nav>
            <router-link v-for="item of routes" :key="item.path"
                :class="{ 'bg-light' : item.name === route.name }"
                :to="item.path"
                class="cursor-pointer d-block my-1 px-2 rounded text-black"
                focusable="false">
              <span>{{ item.name | titlecase }}</span>
            </router-link>
          </nav>
        </section>
        <section class="my-3">
          <span class="d-block">As seen on <a href="https://bitcointalk.org/index.php?topic=3761715.0" target="_blank">BitcoinTalk</a>!</span>
        </section>
        <section class="my-3">
          <table class="d-inline small table">
            <tr class="m-0 p-0">
              <th class="pr-2 p-0">Algorithm</th>
              <td class="p-0">Cryptonight V7 (PoW)</td>
            </tr>
            <tr class="m-0 p-0">
              <th class="pr-2 p-0">Block Time</th>
              <td class="p-0">2 minutes</td>
            </tr>
            <tr class="m-0 p-0">
              <th class="pr-2 p-0">Block Reward</th>
              <td class="p-0">35 ZCC, gradually decreasing with tail emission</td>
            </tr>
            <tr class="m-0 p-0">
              <th class="pr-2 p-0">Total Supply</th>
              <td class="p-0">18,000,000 ZCC</td>
            </tr>
            <tr class="m-0 p-0">
              <th class="pr-2 p-0">Premine</th>
              <td class="p-0">Unspecified quantity</td>
            </tr>
          </table>
        </section>
      </aside>
      <main class="px-2" style="margin-left:25%;">
        <router-view class="m-0 p-0"></router-view>
      </main>
      <aside class="border-left border-light float-right p-2 -contact-pages">
        <section class="mb-2">
          <h6 class="text-secondary">CONTACT PAGES</h6>
          <nav>
            <!-- Uncomment this when a facebook page is made -->
            <!-- <a href="https://twitter.com/zuccbucccore">
              <img src="www/icon/facebook.png" height="auto" width="32px" />
            </a> -->
            <a href="https://twitter.com/zuccbucccore">
              <img src="www/icon/twitter.png" height="auto" width="32px" />
            </a>
            <a href="https://discordapp.com/invite/g6xbFrt">
              <img src="www/icon/discord.png" height="auto" width="32px" />
            </a>
            <a href="https://t.me/joinchat/IwHrLEWkWBRCDCEBvdKXfA">
              <img src="www/icon/telegram.png" height="auto" width="32px" />
            </a>
            <a href="https://www.reddit.com/r/Zuccbuccofficial">
              <img src="www/icon/reddit.png" height="auto" width="32px" />
            </a>
          </nav>
        </section>
      </aside>
    </main>
  </div>
</template>

<script lang="ts">
  import { Component } from "vue-property-decorator";
  import { RouteConfig } from "vue-router";
  import * as request from "request";
  import Vue from "vue";
  import "bootstrap";

  import { routes } from "./route/index";
  import FbProfileCardComponent from "./components/fb/FbProfileCard.vue";
  import TitleBarComponent from "./TitleBar.vue";

  @Component({
    components: {
      "fb-profile-card": FbProfileCardComponent,
      "title-bar": TitleBarComponent
    },
    filters: {
      titlecase: (<any> require("title-" + "case"))
    },
    name: "app"
  })
  export default class AppComponent
  extends Vue {

    private routes: RouteConfig[]
        = routes;

    public constructor() {
      super();
    }

    public get route(): RouteConfig {
      return this.$route;
    }

  }
</script>

<style lang="scss" scoped>
  @import "./../node_modules/bootstrap/dist/css/bootstrap.css";
  @import "./global.css";
  @import "./theme.scss";

  $-contact-pages-width : 10%;

  #app {
    background: $fb-background;
  }

  title-bar {
    position: absolute;
    width: 100%;
    left: 0;
    top: 0;
  }

  .px-norm {
    padding-left: 18% !important;
    padding-right: 30% !important;
  }

  .-contact-pages {
    position: absolute;
    right: 0;
    top: 50px;
    width: $-contact-pages-width;
  }
</style>
