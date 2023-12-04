<script setup lang="ts">
defineProps({
  year: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  license: {
    type: String,
    required: true
  }
});
</script>

<template>
  <div class="footer-copyright">
    <p>&copy;{{ year }}. {{ name }}. {{ license }}.</p>
  </div>
</template>

<style scoped>
.footer-copyright {
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding-top: 3rem;
}

.footer-copyright > p {
  font-size: 0.65rem;
}

@media screen and (min-width: 1440px) {
  .footer-copyright > p {
    font-size: 0.8rem;
  }
}

@media screen and (min-width: 2560px) {
  .footer-copyright {
    padding-top: 6rem;
  }
  .footer-copyright > p {
    font-size: 1.3rem;
  }
}
</style>
