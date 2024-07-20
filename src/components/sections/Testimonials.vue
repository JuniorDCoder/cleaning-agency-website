<template>
    <div class="flex flex-col items-center justify-center w-full bg-secondary py-9">
        <div class="flex flex-col items-center space-y-5 md:space-y-0 md:flex-row md:ml-24 md:gap-x-72">
            <div class="w-4/5 md:w-1/3">
                <h2 class="mt-12 text-5xl font-bold"><span class="font-bold text-7xl text-primary">{{ currentCount }} +</span> Satisfied Clients With Our Services</h2>
            </div>
            <div class="flex flex-col w-4/5 md:w-1/3">
                <h3 class="text-2xl font-bold text-tertiary">Testimonials</h3>
                <p class="mt-2  text-[#2F2F2F]">Providing top-notch cleaning services tailored to your needs.</p>
            </div>
        </div>

        <div class="flex flex-col w-full space-y-4 md:space-y-0 px-9 md:space-x-5 md:px-24 md:flex-row mt-9">
            <TestimonialCard 
                userName="Alex Johnson" 
                img="user1.png" 
                job="Restaurant Owner" 
                text="The cleaning team did an outstanding job, leaving our space spotless and ready for business every day." 
            />
            <TestimonialCard 
                userName="Maria Garcia" 
                img="user2.png" 
                job="Office Manager" 
                text="Their attention to detail is unmatched. Our office space has never looked better!" 
            />
            <TestimonialCard 
                userName="James Smith" 
                img="user3.png" 
                job="Homeowner" 
                text="I'm amazed by the professionalism and the thorough cleaning services provided. Highly recommend!" 
            />
            <TestimonialCard 
                userName="Linda Brown" 
                img="user2.png" 
                job="Gym Owner" 
                text="They managed to clean areas I didn't even think were possible to get clean. Fantastic service!" 
            />
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import TestimonialCard from '../TestimonialCard.vue';

const currentCount = ref(1); // Adjusted to reflect the number of satisfied clients

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