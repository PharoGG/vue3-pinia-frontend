<template>
    <div>
      <div v-for="(result, index) in results" :key="index">
        {{ result }}
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  
  const results = ref<string[]>([]);
  </script>