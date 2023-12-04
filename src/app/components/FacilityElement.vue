<script setup lang="ts">
import type FacilityModel from '../models/FacilityModel';

defineProps({
  id: {
    type: String,
    required: true
  },
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
});
</script>

<template>
  <div class="anchor" :id="id"></div>
  <div class="facility-container">
    <swiper-container
      :loop="true"
      :slides-per-view="1"
      :autoplay="{ delay: duration }"
      :effect="'fade'"
      :pagination="{}"
      grab-cursor="true"
    >
      <swiper-slide v-for="(item, index) in data" :key="index">
        <div class="facility-background-image" :style="{ backgroundImage: `url(${item.image})` }">
          <div class="facility-content-container">
            <div class="facility-content-head">
              <h1>{{ title }}</h1>
              <h2>{{ item.name }}</h2>
            </div>
            <div class="facility-content-body">
              <img :src="item.image" alt="image" />
              <p>{{ item.description }}</p>
            </div>
          </div>
        </div>
      </swiper-slide>
    </swiper-container>
  </div>
</template>

<style scoped>
.anchor {
  transform: translateY(-110px);
}
.facility-container {
  --swiper-pagination-color: #4aa6e9;
  box-shadow: 0px 0px 4px 5px rgba(0, 0, 0, 0.25);
}
.facility-background-image {
  background-size: cover;
  background-repeat: no-repeat;
}
.facility-content-container {
  display: flex;
  height: 100%;
  flex-direction: column;
}
.facility-content-head {
  top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}
.facility-content-head > h1 {
  color: black;
  margin: 0;
  background-color: white;
  padding: 0.5rem 1rem;
  width: 100%;
  font-size: 1rem;
  text-align: center;
}
.facility-content-head > h2 {
  color: white;
  margin: 0;
  background-color: #4aa6e9;
  padding: 0.5rem 1rem;
  width: 100%;
  font-size: 1rem;
  text-align: center;
}
.facility-content-body {
  background-color: rgba(0, 0, 0, 0.7);
  height: 100%;
  display: flex;
  align-items: center;
  padding: 3rem 1rem;
  flex-direction: column;
  gap: 1rem;
  backdrop-filter: blur(2px);
}
.facility-content-body > img {
  width: 100%;
  border-radius: 0.5rem;
}
.facility-content-body > p {
  color: white;
  margin: 0;
  font-size: 0.9rem;
}
@media screen and (min-width: 768px) {
  .facility-container {
    box-shadow: none;
  }
  .facility-content-body > img {
    display: none;
  }
  .facility-content-body {
    padding: 3rem 2rem;
    flex-direction: column;
    gap: none;
    backdrop-filter: none;
    width: 35%;
    justify-content: center;
    clip-path: polygon(5% 0, 100% 0, 100% 100%, 0% 100%);
    z-index: 1;
  }
  .facility-content-container {
    align-items: end;
  }
  .facility-content-head {
    position: absolute;
    top: 1.5rem;
    z-index: 2;
    width: fit-content;
    align-items: end;
  }
  .facility-content-head > h1 {
    text-align: start;
    border-top-left-radius: 0.5rem;
    border-bottom-left-radius: 0.5rem;
    width: 47vw;
  }
  .facility-content-head > h2 {
    text-align: start;
    border-bottom-left-radius: 0.5rem;
    width: 40vw;
  }
  .facility-background-image {
    height: 33rem;
  }
}
@media screen and (min-width: 1024px) {
  .facility-content-head {
    top: 2rem;
  }
}
@media screen and (min-width: 1440px) {
  .facility-background-image {
    height: 50rem;
  }
  .facility-content-head {
    top: 3rem;
  }
  .facility-content-head > h1 {
    width: 45vw;
    font-size: 1.5rem;
  }
  .facility-content-head > h2 {
    width: 40vw;
    font-size: 1.5rem;
  }
  .facility-content-body > p {
    font-size: 1.5rem;
  }
  .facility-content-body {
    padding: 4rem;
    width: 30%;
  }
}
@media screen and (min-width: 2560px) {
  .facility-background-image {
    height: 60rem;
  }
  .facility-content-head {
    top: 4rem;
  }
  .facility-content-head > h1 {
    font-size: 2rem;
  }
  .facility-content-head > h2 {
    font-size: 2rem;
  }
  .facility-content-body > p {
    font-size: 2rem;
  }
  .facility-content-body {
    padding: 5rem;
  }
}
</style>
