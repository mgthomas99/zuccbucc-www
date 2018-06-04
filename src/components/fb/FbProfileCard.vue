<template>
  <div id="fb-profile-card-component">
    <router-link focusable="false" to="home">
      <img :src="profilePictureUrl" class="mb-3 w-75" height="auto" />
    </router-link>
    <h4 class="my-0">{{ name }}</h4>
    <h6 class="my-0 text-muted">@{{ handle }}</h6>
  </div>
</template>

<script lang="ts">
  import { Component, Prop } from "vue-property-decorator";
  import Vue from "vue";

  @Component({ name: "fb-profile-card" })
  export default class FbProfileCardComponent
  extends Vue {

    @Prop({ required: true })
    public profilePictureUrl: string;

    @Prop({ required: true })
    public name: string;

    @Prop({ required: true })
    public handle: string;

    public constructor() {
      super();
    }

  }
</script>

<style lang="css" scoped>
  #fb-profile-card-component {

  }
</style>
