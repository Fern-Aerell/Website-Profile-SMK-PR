<script setup lang="ts">
defineProps({
  id: {
    type: String,
    required: true
  }
});
</script>

<template>
  <div class="anchor" :id="id"></div>
  <div class="register-container">
    <h1>PPDB</h1>
    <h3>Penerimaan Peserta Didik Baru</h3>
    <h2>SMK PEKANBARU RAVENGERS</h2>
    <p>tahun pelajaran 2024/2025</p>
    <br>
    <button disabled >Belum Dibuka</button>
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
  align-items: start;
  z-index: 1;
  padding: 15rem 1rem;
  background-color: whitesmoke;
}

.register-container > h1 {
  font-size: 2.5rem;
  margin: 0;
}

.register-container > h3 {
  font-size: 1rem;
  margin: 0;
}

.register-container > h2 {
  font-size: 1rem;
  margin: 0;
}

.register-container > p {
  font-size: 0.9rem;
  margin: 0;
}

.register-container > button {
  background-color: #e94a4a;
  color: white;
  font-size: 0.9rem;
  font-weight: 600;
  padding: 0.5rem 2rem;
  width: 100%;
  border: none;
  border-radius: 0.5rem;
  box-shadow: 2px 3px 3px #fd806133}

.register-container > button:disabled {
  background-color: #c25656;
  color: #dddddd;
}

@media screen and (min-width: 768px) {
  .register-container {
    align-items: center;
  }

  .register-container > h1 {
    font-size: 2.7rem;
  }

  .register-container > h3 {
    font-size: 1.2rem;
  }

  .register-container > h2 {
    font-size: 1.2rem;
  }

  .register-container > p {
    font-size: 1.2rem;
  }

  .register-container > button {
    font-size: 1rem;
    width: fit-content;
  }
}

@media screen and (min-width: 1440px) {
  .register-container > h1 {
    font-size: 3rem;
  }

  .register-container > h3 {
    font-size: 1.5rem;
  }

  .register-container > h2 {
    font-size: 1.5rem;
  }

  .register-container > p {
    font-size: 1.3rem;
  }
}

@media screen and (min-width: 2560px) {
  .register-container > h1 {
    font-size: 4rem;
  }

  .register-container > h3 {
    font-size: 2rem;
  }

  .register-container > h2 {
    font-size: 2rem;
  }

  .register-container > p {
    font-size: 2rem;
  }

  .register-container > button {
    font-size: 1.6rem;
    padding: 1rem 3rem;
  }
}
</style>
