<script setup lang="ts"></script>

<template>
  <div class="footer-element">
    <div>
      <slot name="top"></slot>
    </div>
    <slot name="bottom"></slot>
  </div>
</template>

<style scoped>
.footer-element {
  z-index: 2;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  background-color: white;
  box-shadow: 0px 0px 4px 5px rgba(0, 0, 0, 0.25);
}

.footer-element div {
  gap: 3rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
}
@media screen and (min-width: 2560px) {
  .footer-element {
    padding: 5rem;
  }
}
</style>
