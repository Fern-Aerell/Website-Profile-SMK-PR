<script setup lang="ts">
defineProps({
  title: {
    type: String,
    required: true
  },
  icon: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  }
});
</script>

<template>
  <div class="major-card-container">
    <img :src="icon" alt="icon" />
    <h1>{{ title }}</h1>
    <div>
      <p>{{ description }}</p>
    </div>
  </div>
</template>

<style scoped>
.major-card-container {
  font-family: 'Poppins', sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  width: auto;
  padding: 1.5rem;
  gap: 0.5rem;
  background-color: #d9d9d9;
  border-radius: 1rem;
  box-shadow: 5px 5px 4px 0px rgba(0, 0, 0, 0.25) inset;
}

.major-card-container > h1 {
  font-size: 1rem;
  font-style: normal;
  line-height: normal;
  margin: 0;
}

.major-card-container > div {
  text-overflow: ellipsis;
  overflow: hidden;
}

.major-card-container > div > p {
  font-size: 0.8rem;
  font-style: normal;
  line-height: normal;
  font-weight: 400;
  margin: 0;
}

.major-card-container > img {
  width: 5rem;
}

@media screen and (min-width: 768px) {
  .major-card-container {
    width: 17rem;
    height: 11.5rem;
    justify-content: start;
  }

  .major-card-container > img {
    position: absolute;
    top: -1.5rem;
    right: -1rem;
    transform: rotate(5deg);
  }

  .major-card-container > h1 {
    font-size: 1rem;
  }

  .major-card-container > div > p {
    font-size: 0.9rem;
  }
}

@media screen and (min-width: 1024px) {
  .major-card-container > img {
    width: 5rem;
  }
  .major-card-container {
    height: 13.5rem;
  }
  .major-card-container > h1 {
    font-size: 1.1rem;
  }

  .major-card-container > div > p {
    font-size: 1rem;
  }
}

@media screen and (min-width: 1440px) {
  .major-card-container > img {
    width: 5.5rem;
    top: -1.5rem;
    right: -1rem;
  }
  .major-card-container {
    width: 20rem;
    height: 15.5rem;

    padding: 2rem;
  }
  .major-card-container > h1 {
    font-size: 1.3rem;
  }

  .major-card-container > div > p {
    font-size: 1.2rem;
  }
}

@media screen and (min-width: 2560px) {
  .major-card-container > img {
    width: 7rem;
    top: -2rem;
    right: -1.5rem;
  }
  .major-card-container {
    width: 25rem;
    height: 21rem;
  }
  .major-card-container > h1 {
    font-size: 1.7rem;
  }

  .major-card-container > div > p {
    font-size: 1.5rem;
  }
}
</style>
