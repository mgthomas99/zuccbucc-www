<template>
  <div id="about-page-component">
    <p class="text-justify">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
      fermentum tortor tristique nisl condimentum, ut laoreet sapien eleifend.
      Sed quis ultricies ante. Lorem ipsum dolor sit amet, consectetur
      adipiscing elit. Integer et velit laoreet, finibus est sit amet, finibus
      leo. Interdum et malesuada fames ac ante ipsum primis in faucibus. In
      vehicula risus et lorem iaculis, nec consectetur lacus fringilla.
      Suspendisse sollicitudin auctor sem eget facilisis. Nam venenatis tellus
      eros, eget laoreet dolor accumsan eget. Cras maximus, nunc ac tristique
      eleifend, diam risus tempor purus, vitae condimentum tellus dui ut ex.
      Fusce mattis pulvinar finibus. Sed sit amet molestie dui. Maecenas ornare
      lorem in vulputate ultricies. Vivamus volutpat metus sed augue vehicula,
      in interdum dui venenatis.
    </p>
    <p class="text-justify">
      Nulla vulputate lectus ac neque tincidunt posuere. Nulla arcu leo,
      sagittis venenatis lobortis vitae, pulvinar vitae sapien. Ut in venenatis
      metus. Integer feugiat, neque sed elementum dictum, mi neque efficitur
      mauris, in imperdiet magna velit non lorem. Donec tincidunt augue eget
      ligula suscipit viverra. Praesent elementum posuere luctus. Maecenas enim
      neque, feugiat quis enim ac, imperdiet congue mi. Pellentesque ante arcu,
      porta et mi in, ultrices feugiat lacus. Curabitur laoreet mi eu tempus
      blandit.
    </p>
    <p class="text-justify">
      Nunc eleifend elementum blandit. Nam dapibus, metus vitae auctor tempus,
      dolor arcu tincidunt sem, at pellentesque ex libero id orci. Quisque
      placerat luctus dui laoreet posuere. Nam malesuada diam in volutpat
      tempor. Nulla a rhoncus mauris. Pellentesque cursus dolor ac purus rhoncus
      vestibulum. Maecenas rhoncus feugiat tortor, nec semper ligula rutrum sed.
      Sed consectetur tristique nibh sit amet aliquet. Aenean quis sollicitudin
      leo. Nullam quis turpis vel nisl consequat vestibulum et quis purus. Nunc
      porttitor cursus nulla a sodales. Mauris ultrices lectus non nisi
      porttitor auctor. Nullam sit amet sagittis velit, nec placerat justo.
    </p>
  </div>
</template>

<script lang="ts">
  import { Component } from "vue-property-decorator";
  import Vue from "vue";

  @Component({ name: "about-page" })
  export default class AboutPageComponent
  extends Vue {

    public constructor() {
      super();
    }

  }
</script>

<style lang="css" scoped>
  #about-page {

  }
</style>
