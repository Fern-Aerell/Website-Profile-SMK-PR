<script setup lang="ts">
import model_image_webp from '@/main/images/anime_models/model_man_01.webp';
import shadow_image_webp from '@/main/images/anime_models/model_man_01_shadow.webp';

defineProps({
  id: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  text: {
    type: String,
    required: true
  },
  list: {
    type: Array<String>,
    required: true
  }
});
</script>

<template>
  <div class="anchor" :id="id"></div>
  <div class="visionandmission-container">
    <div class="visionandmission-model-container">
      <img
        id="visionandmission_model"
        class="visionandmission-model-shadow"
        :src="shadow_image_webp"
        alt="shadow"
      />
      <img
        id="visionandmission_model"
        class="visionandmission-model"
        :src="model_image_webp"
        alt="model"
      />
    </div>
    <div class="visionandmission-content-container">
      <h1>{{ title }}</h1>
      <div class="vision-container">
        <h2>VISI</h2>
        <p>"{{ text }}"</p>
      </div>
      <div class="misson-container">
        <h2>MISI</h2>
        <ol>
          <li v-for="(item, index) in list" :key="index">{{ item }}</li>
        </ol>
      </div>
    </div>
  </div>
</template>

<style scoped>
.anchor {
  transform: translateY(-110px);
}
.visionandmission-container {
  font-family: 'Poppins', sans-serif;
  display: flex;
  flex-direction: row;
  overflow: hidden;
  padding: 3rem 0;
  background: linear-gradient(209deg, #fd0 0%, #fd0 99.02%);
}
.visionandmission-content-container {
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 6rem 2rem;
  gap: 3rem;
}

.visionandmission-content-container > h1 {
  font-size: 1.5rem;
  color: rgb(255, 255, 255);
  text-shadow: 1px 1px 5px rgba(0, 0, 0, 0.6);
  text-align: center;
  margin: 0;
  line-height: normal;
  font-style: normal;
}

.vision-container {
  padding: 1rem;
  background-color: white;
  border-radius: 0.5rem;
  box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.15);
}

.vision-container > h2 {
  font-size: 1rem;
  margin: 0;
  line-height: normal;
  font-style: normal;
  font-weight: 700;
}

.vision-container > p {
  font-size: 0.8rem;
  margin: 0;
  line-height: normal;
  font-style: normal;
  font-weight: 400;
}

.misson-container {
  padding: 1rem;
  background-color: white;
  border-radius: 0.5rem;
  box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.15);
}

.misson-container > ol {
  padding-left: 1.2rem;
  margin: 0;
  line-height: normal;
  font-style: normal;
  font-weight: 400;
}

.misson-container > h2 {
  font-size: 1rem;
  margin: 0;
  line-height: normal;
  font-style: normal;
  font-weight: 700;
}

.misson-container > ol > li {
  font-size: 0.8rem;
}

@keyframes idle-anim-model {
  0% {
    transform: rotate(0deg) translateX(0px);
  }
  50% {
    transform: rotate(-3deg) translateX(-20px);
  }
  100% {
    transform: rotate(0deg) translateX(0px);
  }
}

.visionandmission-model {
  width: 19rem;
  right: 10vh;
  bottom: -0.5rem;
  animation-name: idle-anim-model;
  animation-duration: 10s;
  animation-iteration-count: infinite;
  position: absolute;
}

.visionandmission-model-shadow {
  width: 19rem;
  right: -2vw;
  bottom: -1rem;
  animation-name: idle-anim-model;
  animation-duration: 10s;
  animation-delay: 1s;
  animation-iteration-count: infinite;
  position: absolute;
}

.visionandmission-model-container {
  position: relative;
  display: none;
}

@media screen and (min-width: 768px) {
  .visionandmission-model {
    width: 22rem;
    right: -2vw;
  }

  .visionandmission-model-shadow {
    width: 22rem;
    right: -8vw;
  }
  .visionandmission-container {
    padding: 0;
    background: none;
    background-color: whitesmoke;
  }
  .visionandmission-content-container > h1 {
    font-size: 1.5rem;
    color: rgb(0, 0, 0);
    text-shadow: none;
  }
  .visionandmission-model-container {
    z-index: 0;
    flex: 1;
    display: inline;

    background: linear-gradient(209deg, #fd0 0%, #fd0 99.02%);
    clip-path: polygon(0 0, 100% 0, 95% 100%, 0% 100%);
  }

  .vision-container > h2 {
    font-size: 1.1rem;
  }

  .vision-container > p {
    font-size: 0.9rem;
  }

  .misson-container > h2 {
    font-size: 1.1rem;
  }

  .misson-container > ol > li {
    font-size: 0.9rem;
  }
}

@media screen and (min-width: 1024px) {
  .visionandmission-model-container {
    flex: 1;
  }

  .visionandmission-content-container {
    flex: 1.5;
  }

  .visionandmission-model {
    width: 20rem;
    right: 2vw;
  }

  .visionandmission-model-shadow {
    width: 20rem;
    right: -2vw;
  }

  .vision-container > h2 {
    font-size: 1.2rem;
  }

  .vision-container > p {
    font-size: 1rem;
  }

  .misson-container > h2 {
    font-size: 1.2rem;
  }

  .misson-container > ol > li {
    font-size: 1rem;
  }
}

@media screen and (min-width: 1440px) {
  .visionandmission-content-container {
    flex: 2;
  }
  .visionandmission-model {
    width: 24rem;
    right: 5vw;
  }

  .visionandmission-model-shadow {
    width: 24rem;
    right: 2vw;
  }

  .vision-container > h2 {
    font-size: 1.4rem;
  }

  .vision-container > p {
    font-size: 1.2rem;
  }

  .misson-container > h2 {
    font-size: 1.4rem;
  }

  .misson-container > ol > li {
    font-size: 1.2rem;
  }
}

@media screen and (min-width: 2560px) {
  .visionandmission-model {
    width: 28rem;
    right: 8.5vw;
  }

  .visionandmission-model-shadow {
    width: 28rem;
    right: 6vw;
  }
  .visionandmission-content-container > h1 {
    font-size: 2.5rem;
  }

  .vision-container > h2 {
    font-size: 2rem;
  }

  .vision-container > p {
    font-size: 1.7rem;
  }

  .misson-container > ol {
    padding-left: 3rem;
  }

  .misson-container > h2 {
    font-size: 2rem;
  }

  .misson-container > ol > li {
    font-size: 1.7rem;
  }
}
</style>
