<script setup lang="ts">
import dehaze_icon_image_webp from '@/main/images/icons/dehaze.webp';
import type NavbarButtonModel from '@/main/ts/models/NavbarButtonModel';
import { onMounted, onUnmounted, ref } from 'vue';

defineProps({
  logo: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  list: {
    type: Array<NavbarButtonModel>,
    required: true
  }
});

const list_menu_toggle_value = ref(false);

function list_menu_value_toggle() {
  set_list_menu_value(!list_menu_toggle_value.value);
}

function set_list_menu_value(value: boolean) {
  const windowWidth = window.innerWidth;
  if (!(windowWidth! >= 768)) {
    list_menu_toggle_value.value = value;
  } else {
    list_menu_toggle_value.value = true;
  }
}

function click(event: MouseEvent) {
  const target = event.target;
  const navbar_list_button_element = document.querySelector(
    '.navbar-list-button-dehaze'
  ) as HTMLElement;
  const navbar_list_button_img_element = document.querySelector(
    '.navbar-list-button-dehaze > img'
  ) as HTMLElement;
  if (target == navbar_list_button_element || target == navbar_list_button_img_element) {
    list_menu_value_toggle();
  } else {
    set_list_menu_value(false);
  }
}

function resize() {
  const windowWidth = window.innerWidth;
  set_list_menu_value(windowWidth! >= 768);
}

onMounted(() => {
  resize();
  window.addEventListener('click', click);
  window.addEventListener('resize', resize);
});

onUnmounted(() => {
  window.removeEventListener('click', click);
  window.removeEventListener('resize', resize);
});
</script>

<template>
  <div class="navbar-container">
    <a href="" class="navbar-logo-title-container">
      <img :src="logo" alt="logo" />
      <h1>{{ title }}</h1>
    </a>
    <div class="navbar-list-button-dehaze">
      <img :src="dehaze_icon_image_webp" alt="dehaze icon" />
    </div>
    <div v-if="list_menu_toggle_value" class="navbar-list-button">
      <a v-for="(item, index) in list" :key="index" :href="item.id">{{ item.name }}</a>
    </div>
  </div>
</template>

<style scoped>
.navbar-container {
  position: fixed;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem;
  background-color: white;
  box-shadow: 0px 6px 5px 0px rgba(0, 0, 0, 0.35);
  top: 0;
  left: 0;
  right: 0;
  z-index: 3;
}
.navbar-logo-title-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.3rem;
  text-decoration: none;
  color: black;
}
.navbar-logo-title-container > img {
  width: 2.5rem;
  transition-duration: 300ms;
}
.navbar-logo-title-container > img:hover {
  transform: rotate(45deg);
}
.navbar-logo-title-container > h1 {
  font-size: 1.5rem;
  margin: 0;
  font-weight: 600;
}

.navbar-list-button-dehaze {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  cursor: pointer;
}
.navbar-list-button-dehaze > img {
  width: 1.5rem;
}
.navbar-list-button {
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 3rem;
  right: 1rem;
  background-color: white;
  border-radius: 0.5rem;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.29);
  z-index: 3;
}
.navbar-list-button > a {
  font-weight: 500;
  padding: 1rem 2rem;
  text-decoration: none;
  color: black;
}

.navbar-list-button > a:hover {
  background-color: whitesmoke;
}

@media screen and (min-width: 768px) {
  .navbar-list-button-dehaze {
    padding: 0;
  }
  .navbar-list-button-dehaze > img {
    display: none;
  }
  .navbar-list-button {
    position: static;
    flex-direction: row;
    border-radius: 0;
    box-shadow: none;
  }
  .navbar-list-button > a {
    font-size: 0.8rem;
    padding: 0.5rem 1rem;
  }
  .navbar-list-button > a:hover {
    background-color: white;
  }
}

@media screen and (min-width: 1440px) {
  .navbar-list-button > a {
    font-size: 1rem;
    padding: 0.5rem 2rem;
  }
}

@media screen and (min-width: 2560px) {
  .navbar-list-button > a {
    font-size: 1.5rem;
    padding: 1.5rem 2.5rem;
  }
  .navbar-logo-title-container {
    gap: 0.5rem;
  }
  .navbar-logo-title-container > h1 {
    font-size: 2.5rem;
  }
  .navbar-logo-title-container > img {
    width: 4rem;
  }
}
</style>
