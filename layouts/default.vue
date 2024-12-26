<script setup lang="ts"></script>

<template>
  <div class="">
    <section class="flex">
      <div class="p-4 h-screen w-[20vw] border-r bg-gray-100">
        <Sidebar />
      </div>
      <div class="w-full p-4">
        <HeaderSection />
        <slot />
      </div>
    </section>
  </div>
</template>
