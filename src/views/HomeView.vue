<template>
  <BaseLayout class="overflow-x-hidden">
    <div class="relative z-10 w-full md:mt-20">
      <div class="flex flex-row items-center w-full p-2 mt-32 ml-20 space-x-3 md:ml-12 md:w-1/3">
        <img src="../assets/images/tick-icon.png" alt="" class="w-4 h-4">
        <p class="text-lg text-secondary md:text-gray-300">ESTABLISHED SINCE 2020</p>
      </div>
      <div class="flex flex-col w-full md:ml-12 md:w-1/3">
        <h1 class="text-3xl font-bold text-center md:text-5xl md:text-start">A New Solution For Your Home Cleaning Needs</h1>
        <p class="mt-5 text-[#2F2F2F] ml-12 md:ml-0 md:w-full text-center md:text-start w-4/5">Discover the ultimate in home cleanliness and comfort with our professional cleaning services, tailored just for you.</p>

        <PrimaryButton text="Book Now" class="mx-auto md:mx-0" :url="'https://wa.me/677802114'" />
      </div>

      <div class="flex md:pl-0 pl-9 flex-col w-full md:space-x-6 mt-[600px] md:mt-72 md:flex-row bg-secondary">
        <img src="../assets/images/hand.png" class="md:w-[700px] md:block hidden w-full animate-scale" alt="">
        <div class="flex flex-col w-full mt-12 md:w-1/3 md:mt-24">
          <h2 class="w-full text-4xl font-bold">Decades of Cleaning Experience At Your Service</h2>
          <p class="mt-6 text-[#2F2F2F] w-5/6">
            With years of expertise, we bring unparalleled cleanliness to your living spaces, letting you relax and enjoy a pristine home.
          </p>
          <OurCommitment title="Eco-Friendly Cleaning" content="Our use of green cleaning products ensures your home is not just clean but environmentally safe." />
          <OurCommitment title="Attention to Detail" content="We pride ourselves on our meticulous attention to every nook and cranny, ensuring a spotless space." />
          <OurCommitment title="Customized Services" content="From deep cleaning to daily upkeep, our services are tailored to meet your specific needs." />
          <OurCommitment title="Satisfaction Guaranteed" content="Your happiness is our priority. We promise a clean you can feel and see, every time." />
        </div>
        <img src="../assets/images/hand.png" class="md:w-[700px] md:mt-0 mt-9 md:hidden w-full h-1/2 animate-scale" alt="">
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