<template>
    <div class="overflow-x-hidden bg-[#DCFBD233]">
        <NavBar/>
        
        <slot/>
        
        <Footer/>
    </div>
</template>
<script setup>
import NavBar from '@/components/sections/NavBar.vue'
import Footer from '@/components/sections/Footer.vue'
</script>
<style lang="">

</style>