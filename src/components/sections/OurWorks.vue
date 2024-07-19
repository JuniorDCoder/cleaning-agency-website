<template>
    <div class="flex flex-col w-full bg-secondary py-9">
      <!-- Carousel Section -->
      <Carousel class="mt-4 ml-20 mr-20" :value="images" :numVisible="4" :numScroll="1" :responsiveOptions="responsiveOptions" circular :autoplayInterval="3000">
        <template #item="slotProps">
            <div class="flex flex-col px-4">
                <img :src="require('@/assets/images/works/' + slotProps.data.src)" :alt="slotProps.data.alt" class="w-full h-[500px] rounded-md" />
            </div>
        </template>
       </Carousel>

    </div>
  </template>
  
<script setup>
  import { ref } from 'vue';
  import Carousel from 'primevue/carousel';

  const images = ref([
    { src: 'work1.png', alt: 'Work 1' },
    { src: 'work2.png', alt: 'Work 2' },
    { src: 'work3.png', alt: 'Work 3' },
    { src: 'work4.png', alt: 'Work 4' },
  ]);

const responsiveOptions = ref([
    {
        breakpoint: '1400px',
        numVisible: 2,
        numScroll: 1
    },
    {
        breakpoint: '1199px',
        numVisible: 3,
        numScroll: 1
    },
    {
        breakpoint: '767px',
        numVisible: 2,
        numScroll: 1
    },
    {
        breakpoint: '575px',
        numVisible: 1,
        numScroll: 1
    }
]);

</script>
  
  <style>
  /* Add any custom styles here */
  </style>