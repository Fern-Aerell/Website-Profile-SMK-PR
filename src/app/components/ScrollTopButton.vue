<script setup lang="ts">

import { onMounted, onUnmounted, ref } from 'vue';

import arrow_up_circle_image_webp from "../../../public/assets/images/icons/arrow_up_circle.webp";

const scrollTopButtonToggle = ref(false);

function scroll() {
    const scrollY = window.scrollY;
    scrollTopButtonToggle.value = scrollY > 1000;
};

onMounted(() => {
    window.addEventListener("scroll", scroll);
});

onUnmounted(() => {
    window.removeEventListener("scroll", scroll);
});

</script>

<template>
    <a v-if="scrollTopButtonToggle" href="#home"><img class="scroll-top-button-image animate__animated" :src="arrow_up_circle_image_webp" alt="scroll top icon"></a>
</template>

<style scoped>
.scroll-top-button-image {
    position: fixed;
    z-index: 3;
    right: 0.5rem;
    bottom: 0.5rem;
    width: 3.5rem;
}

.scroll-top-button-image:hover {
    cursor: pointer;
}

@media screen and (min-width: 375px) {
    .scroll-top-button-image {
        width: 4.5rem;
    }
}

@media screen and (min-width: 768px) {
    .scroll-top-button-image {
        right: 1rem;
        bottom: 1rem;
    }
}

@media screen and (min-width: 1440px) {
    .scroll-top-button-image {
        right: 1.5rem;
        bottom: 1.5rem;
        width: 5rem;
    }
}

@media screen and (min-width: 2560px) {
    .scroll-top-button-image {
        right: 2rem;
        bottom: 2rem;
        width: 7rem;
    }
}
</style>