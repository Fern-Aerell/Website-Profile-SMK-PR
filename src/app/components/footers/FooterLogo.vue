<script setup lang="ts">

defineProps({
  logo: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  subtitle: {
    type: String,
    required: true
  }
});

</script>

<template>
  <div class="footer-logo">
    <div>
      <img :src="logo" alt="logo" />
      <h1>{{ title }}</h1>
    </div>
    <p>{{ subtitle }}</p>
  </div>
</template>

<style scoped>
.footer-logo {
  font-family: 'Poppins', sans-serif;
  width: 15rem;
}

.footer-logo > div {
  gap: 0.3rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

.footer-logo > div > img {
  width: 4.5rem;
}

.footer-logo > div > h1 {
  font-size: 1.2rem;
  line-height: 1.3rem;
  font-weight: 700;
  margin: 0;
}

.footer-logo > p {
  font-size: 0.9rem;
  padding-left: 0.4rem;
  margin: 0;
}

@media screen and (min-width: 2560px) {
  .footer-logo {
    width: 19rem;
  }

  .footer-logo > div {
    gap: 0.5rem;
  }

  .footer-logo > div > img {
    width: 6rem;
  }

  .footer-logo > div > h1 {
    font-size: 1.9rem;
    line-height: 1.8rem;
  }

  .footer-logo > p {
    font-size: 1.4rem;
    padding-left: 0.5rem;
  }
}
</style>
