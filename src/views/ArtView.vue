<script setup lang="ts">
  import ArtItem from "@/components/ArtItem.vue";
  import { myArts } from "@/data/art";
</script>

<template>
  <div class="gallery">
    <ArtItem
      v-for="a in myArts"
      :art=a
    />
  </div>
</template>

<style scoped>
  .gallery {
    display : flex;
    flex-wrap: wrap;
    grid-gap: 1rem;
    width : 100%;
    height : fit-content;
    margin : 2rem;

  }

  .gallery .art_item {
    flex : 1 1 20rem;
  }

</style>