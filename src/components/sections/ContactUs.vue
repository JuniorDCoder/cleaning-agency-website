<template>
    <div class="bg-[#DCFBD233] flex flex-col md:flex-row w-full pl-9 md:pl-24 justify-between pb-5 md:pb-0">
        <div class="flex flex-col w-4/5 md:w-1/3 space-y-7">
            <h2 class="text-5xl font-bold mt-9">Are You Ready To Work With Us Now?</h2>
            <p class="text-[#2F2F2F] md:w-2/3">What do you think after seeing the good response from our previous customers.</p>
            <div class="flex flex-col items-center md:space-x-4 md:flex-row">
                <PrimaryButton text="Book Now" :url="'https://wa.me/677802114'" class="p-4 align-middle" />
                <RouterLink to="/" class="flex flex-row items-center p-2 mt-4 space-x-2 border-2 rounded-lg md:space-x-4 p md:pl-4 border-primary">
                    <img src="../../assets/images/watch.png" alt="" class="animate-scale">
                    <p class="text-[#2F2F2F]">Watch Demo</p>
                </RouterLink>
            </div>
        </div>
        <!-- Ensure the image aligns to the far right -->
        <div class="flex-grow">
            <img src="../../assets/images/curl-bg.png" alt="" class="hidden object-cover w-full h-full md:block">
        </div>
    </div>
</template>
<script setup>
import PrimaryButton from '../PrimaryButton.vue';
</script>
<style lang="">
    
</style>