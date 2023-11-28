<script setup lang="ts">
import { ref } from 'vue';

defineProps(
  {
    location: {
      type: String,
      required: true
    },
    zoom: {
      type: Number,
      required: true
    }
  }
);

const name = ref('');
const message = ref('');

function send() {
  const url = `https://api.whatsapp.com/send?phone=6282268695747&text=Halo%20saya%20${name.value}%2C%20${message.value}`;
  window.open(url, '_blank');
}

</script>

<template>
  <div class="contact-container">
    <div class="contact-form">
      <h1>Kontak Kami</h1>
      <form @submit.prevent="send" autocomplete="on">
        <div>
          <label for="name">Nama</label>
          <input type="text" name="name" id="name" v-model="name" required />
        </div>
        <div>
          <label for="message">Pesan</label>
          <textarea name="message" id="message" cols="0" rows="0" v-model="message" required></textarea>
        </div>
        <button type="submit">KIRIM VIA WHATSAPP</button>
      </form>
    </div>
    <div class="mapouter">
      <h1>LOKASI</h1>
      <br>
      <div class="gmap_canvas">
        <iframe
          class="gmap_iframe"
          width="100%"
          frameborder="0"
          scrolling="no"
          marginheight="0"
          marginwidth="0"
          :src="`https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=${location}&amp;t=&amp;z=${zoom}&amp;ie=UTF8&amp;iwloc=B&amp;output=embed`"
        ></iframe>
      </div>
    </div>
  </div>
</template>

<style scoped>
.contact-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  overflow: hidden;
  z-index: 2;
  flex-direction: column;
}

.contact-form {
  padding: 5rem 0;
  gap: 1rem;
  background: linear-gradient(209deg, #75ff93 0%, #97d6b4 99.02%);
  box-shadow: -16px 0px 4px 0px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: 'Poppins', sans-serif;
  flex: 1;
  z-index: 2;
}

.contact-form > h1 {
  font-size: 1.3rem;
  margin: 0;
  text-align: center;
}

.contact-form > form {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.contact-form > form > div {
  display: flex;
  flex-direction: column;
}

.contact-form > form > div > label {
  font-weight: 400;
}

.contact-form > form > div > input {
  padding: 0.5rem;
  font-size: 1rem;
  border-radius: 0.7rem;
}

.contact-form > form > div > textarea {
  height: 10rem;
  padding: 0.5rem;
  font-size: 1rem;
  resize: none;
  border-radius: 1rem;
}

.contact-form > form {
  width: 85vw;
  gap: 1rem;
}

button {
  font-weight: 700;
  padding: 0.7rem;
  font-size: 1rem;
  cursor: pointer;
  background-color: #393939;
  color: white;
  border-radius: 1rem;
}

button:hover {
  filter: brightness(70%);
}

button:active {
  filter: brightness(150%);
}

.mapouter {
  position: relative;
  height: 20rem;
  padding: 2rem 1rem;
  background-color: aliceblue;
  flex: 2;
  display: flex;
  flex-direction: column;
}

.mapouter > h1 {
  font-size: 1.3rem;
  font-family: 'Poppins', sans-serif;
  margin: 0;
  text-align: center;
}

.gmap_canvas {
  height: 20rem;
  background: none !important;
  border-radius: 1rem;
  overflow: hidden;
}
.gmap_iframe {
  height: 20rem !important;
  border-radius: 1rem;
}

@media screen and (min-width: 768px) {
  .contact-container {
    flex-direction: row;
  }
  .contact-form > form {

    width: 85%;
  }
  .contact-form {
    flex: 1;
    width: 50%;
  }
  .mapouter {
    flex: 1;
    width: 50%;
    height: auto;
    justify-content: center;
    padding: 0rem;
  }
  
  .gmap_canvas {

    height: 100%;
    border-radius: 0rem;
  }
  .gmap_iframe {

    height: 100% !important;
    border-radius: 0rem;
  }

  .mapouter > h1, .mapouter > br {

    display: none;
  }
}

@media screen and (min-width: 1440px) {
  .contact-form {
    flex: 1;
  }

  .mapouter {
    flex: 2;
  }

  .contact-form > h1 {
    font-size: 1.5rem;
  }

  .contact-form > form {
    width: 70%;
  }
}

@media screen and (min-width: 2560px) {
  .contact-form > h1 {
    font-size: 2rem;
  }

  .form-label {
    font-size: 1.7rem;
  }

  button {

    font-size: 1.5rem;
    padding: 1rem;
  }

  .contact-form > form > div > input {

    padding: 1rem;
    font-size: 1.5rem;
  }

  .contact-form > form > div > textarea {

    height: 15rem;
    padding: 1rem;
    font-size: 1.5rem;
  }
}

</style>
