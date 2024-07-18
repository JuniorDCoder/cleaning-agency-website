<template>
    <div class="relative z-10 flex flex-row items-center w-1/2 ml-12 space-x-12 mt-44">
        <router-link to="/"><img src="../../assets/images/logo.png" alt=""></router-link>
        <NavItem :to="{name: 'about'}" text="Home"/>
        <NavItem to="/" text="About"/>
        <NavItem to="/" text="Services"/>
        <NavItem to="/" text="Contact"/>
    </div>
    <img src="../../assets/images/bg-back.png" alt="First Image" class="absolute inset-0 z-0 w-full h-[1100px]" />
    <img src="../../assets/images/woman.png" alt="Second Image" class="absolute right-10 top-0 w-[776px] h-[831px] z-0 animate-scale" />
</template>

<script setup>
import NavItem from '../NavItem.vue';
</script>

<style lang="">
</style>