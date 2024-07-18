<template>
    <div class="bg-[#DCFBD233] flex flex-row w-full pl-24">
        <div class="flex flex-col w-1/3 space-y-5">
            <h2 class="text-5xl font-bold mt-9">Are You Ready To Work With Us Now?</h2>
            <p class="text-[#2F2F2F] w-2/3">What do you think after seeing the good response from our previous customers.</p>
            <div class="flex flex-row items-center space-x-4">
                <PrimaryButton text="Contact Us" :url="'https://wa.me/677802114'" class="align-middle" />
                <RouterLink to="/" class="flex flex-row items-center pl-4 mt-4 space-x-4">
                    <img src="../../assets/images/watch.png" alt="" class="animate-scale">
                    <p class="text-[#2F2F2F]">Watch Demo</p>
                </RouterLink>
            </div>

        </div>
        <img src="../../assets/images/curl-bg.png" alt="">
        
    </div>
</template>
<script setup>
import PrimaryButton from '../PrimaryButton.vue';

</script>
<style lang="">
    
</style>