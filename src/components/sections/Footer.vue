<template>
    <div class="w-full bg-secondary">
        <div class="flex flex-row justify-between w-full p-24 space-x-56">
            <RouterLink to="/">
                <img src="../../assets/images/footer-logo.png" class="w-full" alt="">
            </RouterLink>
            <div class="flex flex-col w-1/3 space-y-4">
                <h2 class="text-4xl font-bold text-tertiary">Contact Us</h2>
                <p class="mt-6 text-[#2F2F2F]">Sapele Delta State, Nigeria.</p>
                <a :href="`tel:${phone1}`" class="text-[#2F2F2F]">{{ phone1Display }}</a>
                <a :href="`tel:${phone2}`" class="text-[#2F2F2F]">{{ phone2Display }}</a>
                <a :href="`mailto:${email}`" class="text-[#2F2F2F]">{{ email }}</a>
            </div>
        </div>
        <div class="w-full p-3 text-center mb-9 bg-primary">
            <p class="text-xl text-secondary">© {{ currentYear }} <a href="https://traitz.tech" target="_blank" rel="noopener noreferrer" class="text-secondary">Traitz Tech</a>.</p>
        </div>
    </div>
</template>
<script setup>
import { ref } from 'vue';

const currentYear = ref(new Date().getFullYear());
const email = ref('hello@perfectcleaning.online');

const phone1Display = ref('+234 805 849 0217');
const phone2Display = ref('+234 816 910 4498');
</script>
<style lang="">
    
</style>