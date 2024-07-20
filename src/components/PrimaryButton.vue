<template>
    <a :href="url" class="block w-1/2 p-3 mt-4 text-center rounded-lg md:w-1/4 bg-primary text-secondary" target="_blank" rel="noopener noreferrer">
      {{ text }}
    </a>
  </template>
  
  <script setup>
  import { defineProps } from 'vue';
  
  const props = defineProps({
    text: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  });
  </script>