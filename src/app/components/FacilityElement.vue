<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue';
import type FacilityModel from '../models/FacilityModel';

const props = defineProps(
    {
        id: String,
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

const index = ref(0);
const timeForNextIndex = props.duration;
let timeOutId: number | null | undefined = null;

onMounted(() => {
    const fcb = (document.querySelector('.facility-content-body') as HTMLElement);
    const fch_h1 = (document.querySelector('.facility-content-header > h1') as HTMLElement);
    const fch_h2 = (document.querySelector('.facility-content-header > h2') as HTMLElement);

    async function hideAnimation() {
        fcb.classList.remove('animate__slideInRight');
        fcb.classList.add('animate__slideOutRight');
        fch_h1.classList.remove('animate__slideInRight');
        fch_h1.classList.add('animate__slideOutRight');
        fch_h2.classList.remove('animate__slideInRight');
        fch_h2.classList.add('animate__slideOutRight');
    }

    async function showAnimation() {
        fcb.classList.remove('animate__slideOutRight');
        fcb.classList.add('animate__slideInRight');
        fch_h1.classList.remove('animate__slideOutRight');
        fch_h1.classList.add('animate__slideInRight');
        fch_h2.classList.remove('animate__slideOutRight');
        fch_h2.classList.add('animate__slideInRight');
    }

    function nextIndex() {
        if (index.value < props.data.length - 1) {
            index.value++;
        } else {
            index.value = 0;
        }
    }

    function handleAnimationEnd(event: AnimationEvent) {
        const animationName = event.animationName;

        switch (animationName) {
            case 'slideOutRight':
                nextIndex();
                showAnimation();
                break;
            case 'slideInRight':
            default:
                if (timeOutId) clearTimeout(timeOutId);
                timeOutId = setTimeout(() => hideAnimation(), timeForNextIndex);
                break;
        }
    }

    fcb.addEventListener('animationend', handleAnimationEnd);

    showAnimation();
});

onUnmounted(() => {
    if (timeOutId) clearTimeout(timeOutId);
});

</script>

<template>
    <div :id="id" class="anchor"></div>
    <div class="facility-container" :style="{backgroundImage: `url(${data[index].image})`}">
        <div class="facility-content-body animate__animated">
            <p>{{ data[index].description }}</p>
        </div>
        <div class="facility-content-header">
            <h1 class="animate__animated">{{ title }}</h1>
            <h2 class="animate__animated">{{ data[index].name }}</h2>
        </div>
    </div>
</template>

<style scoped>
.anchor {
    visibility: hidden;
    position: absolute;
    transform: translateY(-3.5rem);
}

@keyframes facility-container-anim {
    from {
        background-position: left;
    }
    to {
        background-position: right;
    }
}
.facility-container {
    position: relative;
    height: 33rem;
    z-index: 1;
    background-size: cover;
    background-repeat: no-repeat;
    animation-name: facility-container-anim;
    animation-duration: 100s;
    animation-fill-mode: forwards;
    transition-duration: 3s;
    overflow: hidden;
    display: flex;
    justify-content: end;
}

.facility-content-header {
    margin-top: 1rem;
    font-family: 'Poppins', sans-serif;
    display: flex;
    flex-direction: column;
    align-items: end;
    position: absolute;
    overflow: hidden;
}

.facility-content-header > h1 {
    width: 15rem;
    padding: 0.5rem;
    font-size: 1rem;
    color: black;
    background-color: white;
    border-top-left-radius: 0.5rem;
    border-bottom-left-radius: 0.5rem;
    animation-delay: 300ms;
    margin: 0;
}

.facility-content-header > h2 {
    width: 13rem;
    padding: 0.5rem;
    font-size: 1rem;
    color: white;
    background-color: #4AA6E9;
    border-bottom-left-radius: 0.5rem;
    animation-delay: 400ms;
    margin: 0;
}

.facility-content-body {
    padding: 1rem;
    margin: 1rem 1rem;
    margin-top: 20rem;
    gap: 3rem;
    background: linear-gradient(209deg, rgba(69, 69, 69, 90%) 0%, rgba(43, 43, 43, 80%) 99.02%);
    border-radius: 1rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}

.facility-content-body > p {
    font-size: 0.9rem;
    color: white;
    font-family: 'Inter', sans-serif;
    font-style: normal;
    line-height: normal;
    font-weight: 500;
    margin: 0;
    flex: 1;
}
</style>