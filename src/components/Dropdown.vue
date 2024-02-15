<template>
    <select v-model="selectedEntity">
      <option value="null">Не выбрано</option>
      <option value="deal">Сделка</option>
      <option value="contact">Контакт</option>
      <option value="company">Компания</option>
    </select>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  
  const selectedEntity = ref<string|null>(null);
  </script>