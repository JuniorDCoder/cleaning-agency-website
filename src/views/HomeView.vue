<template>
  <BaseLayout class="overflow-hidden">
    <div class="relative z-10 w-full mt-20">
      <div class="flex flex-row items-center w-1/3 p-2 ml-12 space-x-3">
        <img src="../assets/images/tick-icon.png" alt="" class="w-4 h-4">
        <p class="text-lg text-gray-300">ESTABLISHED SINCE 2020</p>
      </div>
      <div class="flex flex-col w-1/3 ml-12">
        <h1 class="text-5xl font-bold">A New Solution For Your Home Cleaning Needs</h1>
        <p class="mt-5 text-[#2F2F2F]">Discover the ultimate in home cleanliness and comfort with our professional cleaning services, tailored just for you.</p>

        <PrimaryButton text="Book Now" :url="'https://wa.me/677802114'" />
      </div>

      <div class="flex flex-row w-full mt-64 space-x-6 bg-secondary">
        <img src="../assets/images/hand.png" class="w-[700px] animate-scale" alt="">
        <div class="flex flex-col w-1/3 mt-24">
          <h2 class="w-full text-4xl font-bold">Decades of Cleaning Experience At Your Service</h2>
          <p class="mt-6 text-[#2F2F2F]">
            With years of expertise, we bring unparalleled cleanliness to your living spaces, letting you relax and enjoy a pristine home.
          </p>
          <OurCommitment title="Eco-Friendly Cleaning" content="Our use of green cleaning products ensures your home is not just clean but environmentally safe." />
          <OurCommitment title="Attention to Detail" content="We pride ourselves on our meticulous attention to every nook and cranny, ensuring a spotless space." />
          <OurCommitment title="Customized Services" content="From deep cleaning to daily upkeep, our services are tailored to meet your specific needs." />
          <OurCommitment title="Satisfaction Guaranteed" content="Your happiness is our priority. We promise a clean you can feel and see, every time." />
        </div>
      </div>

      
    </div> 
    <OurServices />  
    <OurWorks />
    <Testimonials />
    <ContactUs />
  </BaseLayout>

</template>

<script setup>
  import BaseLayout from '@/layout/BaseLayout.vue'
  import PrimaryButton from '@/components/PrimaryButton.vue';
  import OurCommitment from '@/components/OurCommitment.vue';
  import OurServices from '@/components/sections/OurServices.vue';
  import OurWorks from '@/components/sections/OurWorks.vue'
  import Testimonials from '@/components/sections/Testimonials.vue'
  import ContactUs from '@/components/sections/ContactUs.vue';

</script>

<style>
@keyframes scaleAnimation {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
}

.animate-scale {
  animation: scaleAnimation 2s infinite ease-in-out;
}
</style>