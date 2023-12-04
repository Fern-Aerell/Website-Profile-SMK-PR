<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue';
import type FacilityModel from '../models/FacilityModel';

defineProps(
    {
        title: {
            type: String,
            required: true
        },
        data: {
            type: Array<FacilityModel>,
            required: true
        },
        duration: {
            type: Number,
            default: 10000
        }
    }
);

onMounted(() => {});

onUnmounted(() => {});

</script>

<template>
    <div class="facility-container">
        <swiper-container :loop="true" :slides-per-view="1" :autoplay="{delay: duration}" :effect="'fade'" :pagination="{}">
            <swiper-slide v-for="(item, index) in data" :key="index">
                <div class="facility-background-image" :style="{backgroundImage: `url(${item.image})`}">
                    <div class="facility-content-container">
                        <div class="facility-content-body">
                            <p>{{ item.description }}</p>
                        </div>
                        <div class="facility-content-head">
                            <h1>{{ title }}</h1>
                            <h2>{{ item.name }}</h2>
                        </div>
                    </div>
                </div>
            </swiper-slide>
        </swiper-container>
    </div>
</template>

<style scoped>
.facility-container {
    --swiper-pagination-color: #4AA6E9;
}
.facility-background-image {
    height: 90vh;
    background-size: cover;
    background-repeat: no-repeat;
}
.facility-content-container {
    display: flex;
    height: 100%;
    justify-content: end;
}
.facility-content-head {
    position: absolute;
    top: 5rem;
    display: flex;
    flex-direction: column;
    align-items: end;
}
.facility-content-head > h1 {
    color: black;
    margin: 0;
    background-color: white;
    padding: 0.5rem 1rem;
    border-top-left-radius: 1rem;
    border-bottom-left-radius: 1rem;
    width: 48.5rem;
}
.facility-content-head > h2 {
    color: white;
    margin: 0;
    background-color: #4AA6E9;
    padding: 0.5rem 1rem;
    border-bottom-left-radius: 1rem;
    width: 42.5rem;
}
.facility-content-body {
    background-color: rgba(0, 0, 0, 0.7);
    height: 100%;
    width: 30%;
    display: flex;
    align-items: center;
    padding: 4rem;
    clip-path: polygon(5% 0, 100% 0, 100% 100%, 0% 100%);
}
.facility-content-body > p {
    color: white;
    font-size: 1.5rem;
}
</style>