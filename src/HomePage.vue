<template>
  <div id="home-page-component">
    <img class="w-100" src="www/banner.jpg" height="auto" />
    <fb-post v-for="post of posts" :key="post.id"
        profile-picture-url="www/logo2.png"
        author="Zuccbucc"
        :timestamp="post.timestamp"
        :title="post.title">
      <p>{{ post.content }}</p>
    </fb-post>
  </div>
</template>

<script lang="ts">
  import { Component } from "vue-property-decorator";
  import Vue from "vue";

  import FacebookPostComponent from "./components/fb/FbPost.vue";

  @Component({
    components: { "fb-post": FacebookPostComponent },
    name: "home-page"
  })
  export default class HomePageComponent
  extends Vue {

    public constructor() {
      super();
    }

    public get posts(): any[] {
      return require("./posts.json");
    }

  }
</script>
