<template>
    <div class="bg-[#F4F6FB] cursor-pointer flex flex-col space-y-4 w-1/3 rounded-lg px-12 py-7 transition duration-300 ease-in-out hover:bg-secondary hover:shadow-lg">

        <div class="flex flex-row items-center mt-4 space-x-4">
            <img :src="require('@/assets/images/' + img)" alt="" class="w-12 h-12">
            <div class="flex flex-col justify-center space-y-1">
                <p class="text-lg text-[#2F2F2F]">{{ userName }}</p>
                <p class="text-sm text-[#2F2F2F]">{{ job }}</p>
            </div>
        </div>
        <div class="flex flex-row mt-2">
            <template v-for="star in 6" :key="star">
                <svg class="w-6 h-6 fill-tertiary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545-4.754-4.635 6.562-.954L10 0l2.947 6.956 6.562.954-4.754 4.635 1.123 6.545z"/>
                </svg>
            </template>
        </div>
        <p class="text-[#2F2F2F]">{{ text }}</p>
        
    </div>
</template>
<script setup>
defineProps({
    userName: String,
    img: String,
    job: String,
    text: String,
});
</script>>
<style>
    
</style>