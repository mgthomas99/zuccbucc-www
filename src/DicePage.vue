<template>
  <div id="dice-page-component">
    <span>Dice</span>
  </div>
</template>

<script lang="ts">
  import { Component } from "vue-property-decorator";
  import Vue from "vue";

  @Component({ name: "dice-page" })
  export default class DicePageComponent
  extends Vue {

    public constructor() {
      super();
    }

  }
</script>

<style lang="css" scoped>
  #dice-page {

  }
</style>
