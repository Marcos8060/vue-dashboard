<script setup>
import { ref } from 'vue'

const menus = ref([
  {
    id: 2,
    title: "Users",
    path: "/dashboard/users",
  },
  {
    id: 3,
    title: "Clients",
    path: "/dashboard/clients",
  },
  {
    id: 4,
    title: "Patients",
    path: "/dashboard/patients",
  },
]);
</script>

<template>
  <ul>
    <li v-for="menu in menus" :key="menu.id">
      <p class="text-white">{{ menu.title }}</p>
    </li>
  </ul>
</template>
