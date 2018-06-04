<template>
  <div class="align-middle p-2" id="title-bar-component">
    <div class="d-inline">
      <img src="www/header.png" height="32px" width="auto" />
    </div>
    <div class="float-right">
      <router-link v-for="route of routes" :key="route.name"
          :to="route.name"
          v-if="route.meta&&route.meta.icon"
          class="bg-transparent border-none mx-2 p-0">
        <img :src="route.meta.icon" height="24px" width="auto" />
      </router-link>
    </div>
  </div>
</template>

<script lang="ts">
  import { Component } from "vue-property-decorator";
  import { RouteConfig } from "vue-router";
  import Vue from "vue";

  import { routes } from "./route/index";

  @Component({ name: "title-bar" })
  export default class TitleBarComponent
  extends Vue {

    public constructor() {
      super();
    }

    public get routes(): RouteConfig[] {
      // For some reason, the `v-for` reverses the array.
      return ([] as RouteConfig[]).concat(routes).reverse();
    }

  }
</script>

<style lang="scss">
  @import "./theme.scss";

  #title-bar-component {
    background: $fb-title-bar-background;
  }
</style>
