<script setup lang="ts">
import { linkTexts } from '@/data/link_texts';

defineProps<{
    title: string,
    desc: string,
    right: boolean,
    skills? : string[],
    to? : string,
    media? : boolean
}>()

const offset = `${Math.random() * 25}%`;

</script>

<template>
    <div class = "portfolio_item">
        <div class = "portfolio_media" v-if="media">
            <slot></slot>
        </div>

        <div 
            class="portfolio_text"
            :class="{'align_right' : right}"
        >
            <h2>{{ title }}</h2>
            <div class="portfolio_skills">
                <span
                    v-for = "skill in skills"
                >{{ skill }}</span>
            </div>
            <p :class="{'align_right' : right}">{{ desc }}</p> 
            <a :href="to">{{linkTexts[Math.floor(Math.random() * linkTexts.length)]}}</a>
        </div>
    </div>
    <hr></hr>
</template>

<style scoped>
    .portfolio_item {
        width : 50%;
        height : fit-content;
        margin : 0 auto;
        margin-bottom: 1rem;
    }
    .portfolio_item .portfolio_media {
        aspect-ratio: 16/9;
        overflow: hidden;
        width : 100%;
        margin : 0 auto;
    }

    .portfolio_item .portfolio_media :deep(img), 
    .portfolio_item .portfolio_media :deep(video) {
        width: 100%;
        height : 100%;
        object-fit: cover;
    }

    .portfolio_item .portfolio_text {
        width : 50%;
        margin-right : 0;
        margin-left : v-bind(offset);
    }

    .portfolio_item .portfolio_text.align_right {
        margin-left : auto;
        margin-right : v-bind(offset);
    }

    .portfolio_item .portfolio_text h2 {
        text-align: center;
        font-size: auto;
        white-space: nowrap;
    }

    .portfolio_item .portfolio_text .portfolio_skills {
        display : flex;
        justify-content: space-evenly;
        gap : 1rem;
        flex-wrap : nowrap;
        margin-bottom : 1rem;
    }

    .portfolio_item .portfolio_text .portfolio_skills span {
        white-space: nowrap;
        font-style : italic;
        color : grey
    }

    .portfolio_item .portfolio_text a {
        display : block;
        text-align: right;
        color : rgb(0, 255, 0);
        cursor : cell;
    }

    .portfolio_item .portfolio_text.align_right p {
        text-align: right;
    }
    .portfolio_item .portfolio_text.align_right a {
        text-align: left;
    }

    hr {
        margin-bottom : 2rem;
        color : grey;
        opacity : 25%;
    }

</style>
