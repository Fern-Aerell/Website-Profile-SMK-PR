<template>
  <div>
    <h1>{{ greeting }}</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  data() {
    return {
      greeting: 'Hello from Vue 3 with TypeScript!'
    };
  }
});
</script>