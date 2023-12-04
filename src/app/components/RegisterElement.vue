<script setup lang="ts">

defineProps({
  id: {
      type: String,
      required: true
  },
});

</script>

<template>
  <div class="anchor" :id="id"></div>
  <div class="register-container">
    <h1>Pendaftaran Belum Dibuka</h1>
    <p>Silakan tunggu pendaftaran dibuka</p>
  </div>
</template>

<style scoped>
.anchor {
  transform: translateY(-220px);
}
.register-container {
  font-family: 'Poppins', sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1;
  padding: 15rem 1rem;
  background-color: whitesmoke;
}

h1 {
  font-size: 1rem;
  margin: 0;
  text-align: center;
}

p {
  font-size: 0.7rem;
  margin: 0;
  text-align: center;
}

@media screen and (min-width: 768px) {

  h1 {

    font-size: 1.3rem;
  }

  p {

    font-size: 0.8rem;
  }
  
}

@media screen and (min-width: 1440px) {
  h1 {

    font-size: 1.5rem;
  }

  p {

    font-size: 1rem;
  }
}

@media screen and (min-width: 2560px) {
  h1 {

    font-size: 2rem;
  }

  p {

    font-size: 1.2rem;
  }
}
</style>