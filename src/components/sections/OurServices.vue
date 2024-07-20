<template>
  <div class="bg-[#DCFBD233] w-full flex justify-center py-9 flex-col">
      <div class="flex flex-col items-center md:ml-24 md:flex-row md:gap-x-72 md:space-y-0 space-y-9">
          <div class="w-4/5 md:w-1/3 ">
              <h2 class="mt-12 text-5xl font-bold">Always Provide The Best Service</h2>
          </div>
          <div class="flex flex-col w-4/5 md:w-1/3">
              <h3 class="text-2xl font-bold text-tertiary">Our Services</h3>
              <p class="mt-2 text-[#2F2F2F]">We are dedicated to offering top-notch services tailored to your needs, ensuring satisfaction and excellence.</p>
          </div>
      </div>
      <div class="flex flex-col w-full space-y-5 md:space-y-0 md:space-x-5 md:px-24 md:flex-row mt-9">
          <ServiceCard title="Home Cleaning" description="Expert home cleaning services that leave your living space spotless and refreshing." />
          <ServiceCard title="Office Cleaning" description="Professional office cleaning services to create a healthy and productive work environment." />
          <ServiceCard title="Window Cleaning" description="High-quality window cleaning services for crystal clear views and improved aesthetics." />
          <ServiceCard title="Carpet Cleaning" description="Deep carpet cleaning services using eco-friendly solutions to remove stains and odors." />
          
      </div>
      <div class="flex flex-col items-center mb-5 md:ml-20 md:flex-row md:gap-x-72">
          <div class="w-4/5 md:w-1/3">
            <h2 class="mt-12 text-5xl font-bold">Our Past Works</h2>
          </div>
          <div class="flex flex-col w-4/5 mt-16 md:w-1/3">
            <h3 class="font-bold text-[#2F2F2F]">
              Explore our portfolio to see the quality and range of services we have provided to our satisfied clients.
            </h3>
            <p class="mt-2 text-primary">
              Peek at our professional Work-folio
            </p>
          </div>
        </div>
  </div>
</template>
<script setup>
import ServiceCard from '../ServiceCard.vue';
</script>
<style>

</style>