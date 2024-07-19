<template>
    <div class="fixed z-50 flex flex-col items-center right-3 top-3 left-3 md:hidden">
      <div class="flex items-center justify-between w-full px-4 py-3 bg-white bg-opacity-50 border rounded-full border-secondary backdrop-blur-md">
        <router-link to="/"><img src="../assets/images/logo.png" alt="Logo" class="h-10" /></router-link>
        <button @click="toggleNav" class="text-4xl text-primary">
          <span v-if="!isNavOpen">☰</span>
          <span v-else>✕</span>
        </button>
      </div>
      <div v-if="isNavOpen" class="flex flex-col items-center w-full px-4 py-2 mt-3 space-y-4 bg-white bg-opacity-50 border-t rounded-md backdrop-blur-lg border-secondary">
        <NavItem :to="{name: 'about'}" text="Home"/>
        <NavItem to="/" text="About"/>
        <NavItem to="/" text="Services"/>
        <NavItem to="/" text="Contact"/>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import NavItem from './NavItem.vue';
  
  const isNavOpen = ref(false);
  
  const toggleNav = () => {
    isNavOpen.value = !isNavOpen.value;
  };
  </script>
  
  <style scoped>
  /* No additional styles needed as we are using Tailwind CSS */
  </style>