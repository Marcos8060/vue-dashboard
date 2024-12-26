<script setup>
import { ref } from "vue";

const menus = ref([
  {
    id: 2,
    title: "Users",
    path: "/dashboard/users",
    icon: "pi pi-home"
  },
  {
    id: 3,
    title: "Clients",
    path: "/dashboard/clients",
    icon: "pi pi-users"
  },
  {
    id: 4,
    title: "Patients",
    path: "/dashboard/patients",
    icon: "pi pi-users"
  },
]);
</script>

<template>
  <section>
    <div class="h-[10vh]">
      <h1 class="font-bold text-3xl">Logo</h1>
    </div>
    <ul class="grid gap-4">
      <li v-for="menu in menus" :key="menu.id" class="flex items-center gap-4">
        <i :class="menu.icon"></i>
        <NuxtLink :href="menu.path" class="">{{ menu.title }}</NuxtLink>
      </li>
    </ul>
  </section>
</template>
