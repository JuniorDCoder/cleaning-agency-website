<template>
    <div class="service-card md:mx-0 mx-auto w-4/5 md:w-1/4 h-[500px] p-5 bg-[#F8FEF6] flex flex-col space-y-9 items-center shadow-lg transition-all duration-300 ease-in-out cursor-pointer">
        <img src="../assets/images/icon-home.png" class="w-12 h-12 mt-12" alt="">
        <h3 class="text-2xl font-bold">{{ title }}</h3>
        <p class="text-[#2F2F2F] w-2/3 text-center">{{ description }}</p>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  title: String,
  description: String,
});
</script>

<style>
.service-card:hover {
  background-color: #FFFFFF; /* Pure white */
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2); /* Increased shadow */
  transform: scale(1.05); /* Scale out */
}
</style>