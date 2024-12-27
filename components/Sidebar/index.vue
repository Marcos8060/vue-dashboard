<script setup>
import { ref } from "vue";
import logo from '../../assets/images/logo.svg'

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
  <section class="">
    <div class="h-[10vh] flex justify-center items-center">
      <img :src="logo" alt="LOGO">
    </div>
    <ul class="grid gap-8">
      <li v-for="menu in menus" :key="menu.id" class="flex items-center gap-4 hover:bg-white px-4 py-2 rounded">
        <i :class="menu.icon"></i>
        <NuxtLink :href="menu.path" class="">{{ menu.title }}</NuxtLink>
      </li>
    </ul>
  </section>
</template>
