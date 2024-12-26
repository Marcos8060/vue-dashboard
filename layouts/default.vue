<script setup lang="ts"></script>

<template>
  <div class="">
    <section class="flex">
      <div class="p-4 bg-blue-500 h-screen w-2/12">
        <Sidebar />
      </div>
      <div class="w-full">
        <HeaderSection />
        <slot />
      </div>
    </section>
  </div>
</template>
