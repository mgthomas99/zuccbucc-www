<template>
  <div id="faucet-page-component">
    <span>Faucet</span>
  </div>
</template>

<script lang="ts">
  import { Component } from "vue-property-decorator";
  import Vue from "vue";

  @Component({ name: "faucet-page" })
  export default class FaucetPageComponent
  extends Vue {

    public constructor() {
      super();
    }

  }
</script>

<style lang="css" scoped>
  #faucet-page {

  }
</style>
