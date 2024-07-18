<template>
    <RouterLink :to="to" class="text-lg">
        {{ text }}
    </RouterLink>
</template>
<script setup>
import { defineProps } from 'vue'
const props = defineProps({
    to: {
        type: [String, Object],
        required: true
    },
    text: {
        type: String,
        required: true
    }

})
</script>
<style lang="">
    
</style>