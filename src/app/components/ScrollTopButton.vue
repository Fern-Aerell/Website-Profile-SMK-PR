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
    width: 4rem;
}

.scroll-top-button-image:hover {
    cursor: pointer;
}

@media screen and (min-width: 375px) {
    .scroll-top-button-image {
        right: 0.5rem;
        bottom: 0.5rem;
        width: 4.5rem;
    }
}
</style>