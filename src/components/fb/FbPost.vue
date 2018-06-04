<template>
  <div class="bg-light border-secondary my-2 p-3 rounded" id="fb-post-component">
    <header class="d-block mb-2">
      <img :src="profilePictureUrl" class="border-light border d-inline float-left img-circle mr-2 rounded-circle" height="40px" width="auto" />
      <div class="small">
        <div>{{ author }}</div>
        <div>{{ timestamp }}</div>
      </div>
    </header>
    <slot name="content"></slot>
    <slot></slot>
  </div>
</template>

<script lang="ts">
  import { Component, Prop } from "vue-property-decorator";
  import Vue from "vue";

  @Component({ name: "fb-post" })
  export default class FbPostComponent
  extends Vue {

    @Prop({ required: true })
    public profilePictureUrl: string;

    @Prop()
    public timestamp: string
        = new Date().toUTCString();

    @Prop({ required: true })
    public author: string;

    public constructor() {
      super();
    }

  }
</script>

<style lang="css" scoped>
  #fb-post {

  }
</style>
