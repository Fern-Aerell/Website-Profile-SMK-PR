<script setup lang="ts">

defineProps({
  title: {
    required: true,
    type: String
  },
  list: {
    required: true,
    type: Array<String>
  }
});

</script>

<template>
  <div class="footer-list">
    <h1>{{ title }}</h1>
    <ul>
      <li v-for="(item, index) in list" :key="index">{{ item }}</li>
    </ul>
  </div>
</template>

<style scoped>
.footer-list > h1 {
  font-family: 'Poppins', sans-serif;
  font-size: 0.9rem;
  margin: 0;
  font-weight: 600;
}

.footer-list > ul {
  padding-left: 1.3rem;
  margin: 0;
  font-weight: 400;
}

.footer-list > ul > li {
  font-size: 0.9rem;
}

@media screen and (min-width: 2560px) {
  .footer-list > h1 {
    font-size: 1.5rem;
  }

  .footer-list > ul {
    padding-left: 2rem;
  }

  .footer-list > ul > li {
    font-size: 1.4rem;
  }
}
</style>
