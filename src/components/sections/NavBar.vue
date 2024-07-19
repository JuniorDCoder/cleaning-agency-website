<template>
    <div>
      <!-- Mobile Navigation -->
      <MobileNav />
  
      <!-- Desktop Navigation -->
      <div
        ref="navbar"
        :class="[
          'relative border-2 border-gray-50 rounded-full z-10 p-3 flex-row items-center w-1/2 ml-12 space-x-12 hidden md:flex', 
          { 'fixed-nav': isFixed, 'space-x-24' : isFixed }]"
        :style="{ marginTop: isFixed ? '10px' : '11rem', width: isFixed ? '700px' : '30%', transition: 'margin-top 0.5s' }"
      >
        <router-link to="/"><img src="../../assets/images/logo.png" alt=""></router-link>
        <div class="flex flex-row items-center pl-12 gap-x-9">
          <NavItem :to="{name: 'about'}" text="Home"/>
          <NavItem to="/" text="About"/>
          <NavItem to="/" text="Services"/>
          <NavItem to="/" text="Contact"/>
        </div>
      </div>
      <img src="../../assets/images/bg-back.png" alt="First Image" class="absolute inset-0 z-0 w-full h-[1100px]" />
      <img src="../../assets/images/woman.png" alt="Second Image" class="absolute md:right-10 top-0 md:w-[776px] w-full md:h-[831px] z-0 animate-scale" />
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted, onUnmounted } from 'vue';
  import MobileNav from '../MobileNav.vue';
  import NavItem from '../NavItem.vue';
  
  const isFixed = ref(false);
  
  const handleScroll = () => {
    if (window.scrollY > 100) {
      isFixed.value = true;
    } else {
      isFixed.value = false;
    }
  };
  
  onMounted(() => {
    window.addEventListener('scroll', handleScroll);
  });
  
  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
  });
  </script>
  
  <style scoped>
  .fixed-nav {
    @apply fixed top-5 left-[350px] transform -translate-x-1/2 backdrop-blur-lg bg-white bg-opacity-50 shadow-md p-4 z-50 rounded-full border border-white;
  }
  </style>