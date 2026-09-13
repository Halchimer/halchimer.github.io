<script setup lang="ts">
import type { Art } from '@/data/art';
import Tooltip from './Tooltip.vue';

    defineProps<{
        art : Art
    }>()
</script>

<template>
    <div class="art_item">
        <img 
            v-if="art.media_type === 'image'" 
            :src="art.media" :alt="art.slug" 
            class="art_image art_media"
        />
        <video 
            v-if="art.media_type === 'video'"
            :src="art.media"
            class="art_video art_media"
        >
        </video>
        <Tooltip :text="art.name??''" />
    </div>
</template>

<style scoped>
    .art_item .art_media {
        width : 100%;
    }
</style>
