<template>
    <div class="flex flex-col items-center justify-center w-full bg-secondary py-9">
        <div class="flex flex-row items-center ml-24 gap-x-72">
            <div class="w-1/3">
                <h2 class="mt-12 text-5xl font-bold"><span class="font-bold text-7xl text-primary">{{ currentCount }} +</span> Satisfied Clients With Our Services</h2>
            </div>
            <div class="flex flex-col w-1/3">
                <h3 class="text-2xl font-bold text-tertiary">Testimonials</h3>
                <p class="mt-2 w-2/3 text-[#2F2F2F]">Have many related needs, we present a suitable package for you needs.</p>
            </div>
        </div>

        <div class="flex flex-row w-full px-24 space-x-5 mt-9">
            <TestimonialCard 
                userName="Celine Dion" 
                img="user1.png" 
                job="Cafe Owner" 
                text="Increase product sales and increase the amount of cash that comes in for further development." 
            />
            <TestimonialCard 
                userName="Elton John" 
                img="user2.png" 
                job="Music Producer" 
                text="Creating music that touches the soul and brings people together has been my lifelong passion." 
            />
            <TestimonialCard 
                userName="Adele Adkins" 
                img="user3.png" 
                job="Singer-Songwriter" 
                text="Music is all about connecting with people, and I'm fortunate to be able to do that every day." 
            />
            <TestimonialCard 
                userName="Chris Martin" 
                img="user2.png" 
                job="Band Lead" 
                text="Every concert is a new adventure, a chance to bring joy and music to our fans." 
            />
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import TestimonialCard from '../TestimonialCard.vue';

const currentCount = ref(1);

onMounted(() => {
    const maxCount = 250;
    const interval = setInterval(() => {
        if (currentCount.value < maxCount) {
            currentCount.value++;
        } else {
            clearInterval(interval);
        }
    }, 20);
});
</script>

<style>
</style>