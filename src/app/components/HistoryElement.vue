<script setup lang="ts">
import { register } from 'swiper/element-bundle';
import type HistoryCardModel from '../models/HistoryCardModel';

defineProps({
  id: {
    type: String,
    required: true
  },
  data: {
    type: Array<HistoryCardModel>,
    required: true
  },
  duration: {
    type: Number,
    default: 10000
  }
});

register();
</script>

<template>
  <div class="anchor" :id="id"></div>
  <div class="history-container">
    <h1>SEJARAH SEKOLAH</h1>
    <div>
      <swiper-container
        :loop="true"
        :slides-per-view="1"
        :autoplay="{ delay: duration }"
        :pagination="{}"
        grab-cursor="true"
      >
        <swiper-slide v-for="(item, index) in data" :key="index">
          <div class="history-card-container">
            <img :src="item.image" alt="image" />
            <br />
            <div class="history-card">
              <h2>{{ item.title }}:</h2>
              <div class="history-card-story">
                <p
                  v-for="(description_item, description_index) in item.description"
                  class="fs-normal lh-normal fw-400 m-0"
                  :key="description_index"
                >
                  {{ description_item }}
                </p>
              </div>
            </div>
          </div>
        </swiper-slide>
      </swiper-container>
    </div>
  </div>
</template>

<style scoped>
.anchor {
  transform: translateY(-30px);
}
.history-container {
  font-family: 'Poppins', sans-serif;
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 1;
  padding: 5rem 0rem;
  background-color: white;
  box-shadow: 0px 0px 4px 5px rgba(0, 0, 0, 0.25);
  --swiper-pagination-color: #e94a4a;
}

.history-container > h1 {
  font-size: 1.3rem;
  margin: 0;
  text-align: center;
}

.history-card-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 5rem 1.5rem;
}

.history-card-container > div > h2 {
  padding: 0.5rem;
  display: inline;
  font-size: 0.8rem;
  background-color: #e94a4a;
  color: white;
  border-radius: 0.5rem;
}

.history-card-container > div > div {
  gap: 1rem;
}

.history-card-container > div > div > p {
  font-size: 0.8rem;
}

.history-card-container > img {
  width: 100%;
  border-radius: 0.5rem;
}

.history-card {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.history-card > h2 {
  font-style: normal;
  line-height: normal;
  font-weight: 700;
  margin: 0;
}

.history-card-story {
  height: 10rem;
  display: flex;
  flex-direction: column;
  overflow: scroll;
}

@media screen and (min-width: 768px) {
  .history-card-container {
    align-items: start;
    flex-direction: row-reverse;
    gap: 0.5rem;
  }
  .history-card-container > img {
    flex: 1;
    width: 50%;
    box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.4);
  }
  .history-card {
    flex: 1;
  }

  .history-card-container > div > h2 {
    width: fit-content;
  }

  .history-card-story {
    height: auto;
  }

  .history-card-container > div > div > p {
    font-size: 0.9rem;
  }
  .history-card-container {
    padding: 3rem;
  }

  .history-card-story {
    overflow: hidden;
  }
}

@media screen and (min-width: 1024px) {
  .history-container {
    padding: 5rem;
  }
  .history-card-container > div > h2 {
    font-size: 0.9rem;
  }
  .history-card-container > div > div > p {
    font-size: 1rem;
  }
  .history-card-container {
    gap: 1rem;
  }
}

@media screen and (min-width: 1440px) {
  .history-container {
    padding: 10rem 5rem;
  }
  .history-card-container {
    padding: 5rem;
  }
  .history-container > h1 {
    font-size: 1.5rem;
  }
  .history-card-container > div > h2 {
    font-size: 1rem;
  }
  .history-card-container > div > div > p {
    font-size: 1.2rem;
  }
  .history-card-container {
    gap: 2rem;
  }
}

@media screen and (min-width: 2560px) {
  .history-container {
    padding: 10rem;
  }
  .history-container > h1 {
    font-size: 2.5rem;
  }
  .history-card-container {
    padding: 7rem;
  }
  .history-card-container > div > h2 {
    font-size: 1.5rem;
  }
  .history-card-container > div > div > p {
    font-size: 1.8rem;
  }
  .history-card-container {
    gap: 3rem;
  }
}
</style>
