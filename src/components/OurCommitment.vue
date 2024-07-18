<template>
    <div class="flex flex-row mt-4 space-x-3">
        <img src="../assets/images/tick-good.png" class="w-8 h-8" alt="">
        <div class="flex flex-col">
          <h3 class="text-2xl font-bold">{{ title }}</h3>
          <p class="text-[#2F2F2F]">{{ content }}</p>
        </div>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  title: String,
  content: String,
});
</script>