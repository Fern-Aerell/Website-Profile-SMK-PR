<script setup lang="ts">
import type SocialMediaModel from '../models/SocialMediaModel';
import { onMounted, onUnmounted, ref } from 'vue';

import model_image_webp from '../../../public/images/anime_models/model_woman_01.webp';
import model_shadow_image_webp from '../../../public/images/anime_models/model_woman_01_shadow.webp';
import header_bg_image_webp from '../../../public/images/backgrounds/header-bg.webp';
import pencil_image_webp from '../../../public/images/cursors/pencil.webp';

defineProps({
  title: {
    type: String,
    required: true
  },
  moto: {
    type: String,
    required: true
  },
  social_media_data: {
    type: Array<SocialMediaModel>,
    required: true
  }
});

const blackIcon = ref(false);
const header_background_css_syntax = `url(${header_bg_image_webp})`;
const cursor_pencil_css_syntax = `url(${pencil_image_webp}), default`;

function resize() {
  const windowWidth = window.innerWidth;
  blackIcon.value = windowWidth! >= 768;
}

function scroll() {
  const scrollY = window.scrollY;
  (document.querySelector('.model') as HTMLElement).style.bottom = 0 - (scrollY || 0) / 40 + 'rem';
  (document.querySelector('.model-shadow') as HTMLElement).style.bottom =
    -2 - (scrollY || 0) / 60 + 'rem';
}

onMounted(() => {
  resize();
  window.addEventListener('resize', resize);
  window.addEventListener('scroll', scroll);
});

onUnmounted(() => {
  window.removeEventListener('resize', resize);
  window.removeEventListener('scroll', scroll);
});
</script>

<template>
  <div class="header-container">
    <div class="header-content-container animate__animated animate__slideInLeft">
      <div class="header-content">
        <h1>{{ title }}</h1>
        <p>"{{ moto }}"</p>
        <div class="social-media-content">
          <a
            v-for="(item, index) in social_media_data"
            :href="item.link"
            :key="index"
            target="_blank"
          >
            <img :src="blackIcon ? item.black_icon : item.icon" :alt="item.name" />
          </a>
        </div>
      </div>
    </div>
    <div class="model-container animate__animated animate__slideInRight">
      <img
        class="model-shadow model-size"
        :src="model_shadow_image_webp"
        alt="model image shadow"
      />
      <img class="model model-size" :src="model_image_webp" alt="model image" />
    </div>
  </div>
</template>

<style scoped>
.header-container {
  font-family: 'Poppins', sans-serif;
  height: 80vh;
  background: linear-gradient(209deg, #c10202 0%, #ff8484 99.02%);
  overflow: hidden;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.header-content-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1.5rem;
  position: relative;
  z-index: 2;
  height: 100%;
}
.header-content > h1 {
  margin: 0;
  font-style: normal;
  line-height: normal;
  font-weight: 700;
  font-size: 2rem;
  line-height: 2rem;
  color: white;
  text-shadow: 2px 1px 2px rgba(0, 0, 0, 0.6);
}
.header-content > p {
  width: fit-content;
  padding: 0.3rem;
  font-size: 0.6rem;
  color: white;
  background-color: rgba(0, 0, 0, 0.526);
  border-radius: 0.3rem;
  font-style: normal;
  line-height: normal;
  font-weight: 700;
}
.header-content {
  display: flex;
  flex-direction: column;
}
@keyframes model-anim {
  0% {
    transform: translateY(1px);
  }
  50% {
    transform: translateY(5px);
  }
  100% {
    transform: translateY(1px);
  }
}
.model-container {
  flex: 1;
  height: 100%;
}
.model-size {
  width: 35vh;
  animation-name: model-anim;
  animation-duration: 3s;
  animation-iteration-count: infinite;
}
.model {
  z-index: 1;
  right: 0rem;
  bottom: 0rem;
  position: absolute;
}
.model-shadow {
  z-index: 1;
  right: 2rem;
  bottom: -2rem;
  animation-delay: 500ms;
  position: absolute;
}
.model-container {
  animation-delay: 200ms;
}
.social-media-content {
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 2.5rem;
  width: fit-content;
  gap: 0.5rem;
}
.social-media-content > a {
  width: 2rem;
  transition-duration: 100ms;
  cursor: v-bind(cursor_pencil_css_syntax);
}
.social-media-content > a > img {
  width: 100%;
}
.social-media-content > a:hover {
  width: 2.2rem;
}
@media screen and (min-width: 375px) {
  .header-content > p {
    font-size: 0.7rem;
  }
}
@media screen and (min-width: 443px) {
  .header-content > h1 {
    width: 24rem;
  }

  .model {
    right: 6vw;
  }

  .model-shadow {
    right: 10vw;
  }
}
@media screen and (min-width: 768px) {
  .header-container {
    background: whitesmoke;
  }

  .header-content > h1 {
    color: black;
    text-shadow: none;
  }
  .header-content > p {
    font-size: 0.8rem;
    color: black;
    background: none;
    border: 0.2rem solid black;
    margin: 0;
  }
  .header-content-container {
    flex: 1;
    align-items: center;
    cursor: v-bind(cursor_pencil_css_syntax);
  }
  .model-container {
    position: relative;
    background: linear-gradient(209deg, #c10202 0%, #ff8484 99.02%);
    clip-path: polygon(5% 0, 100% 0, 100% 100%, 0% 100%);
  }
  .model-container::before {
    content: '';
    position: absolute;
    border: 3px solid #333;
  }
  .header-container {
    background-image: v-bind(header_background_css_syntax);
    background-repeat: repeat;
    background-size: cover;
    background-blend-mode: overlay;
  }
  .model {
    right: 5vw;
  }
  .model-shadow {
    right: 9vw;
  }
  .header-content {
    gap: 0.5rem;
  }
}

@media screen and (min-width: 1024px) {
  .header-content-container {
    flex: 1.5;
  }
  .header-container {
    background-size: contain;
  }
  .model {
    right: 6vw;
  }
  .model-shadow {
    right: 10vw;
  }
}

@media screen and (min-width: 1440px) {
  .model {
    right: 11vw;
  }
  .model-shadow {
    right: 14vw;
  }
}

@media screen and (min-width: 2560px) {
  .header-container {
    height: 65rem;
  }
  .model-size {
    width: 30rem;
  }
  .model {
    right: 11vw;
  }

  .model-shadow {
    right: 13vw;
  }
  .header-content > h1 {
    font-size: 4rem;
    line-height: 4rem;
  }
  .header-content > p {
    font-size: 1.5rem;
  }

  .social-media-content {
    height: 4.5rem;
  }

  .social-media-content > a {
    width: 3.5rem;
  }

  .social-media-content > a:hover {
    width: 4rem;
  }
}
</style>
