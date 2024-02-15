<template>
    <button :class="{ 'active': isActive }" @click="handleClick" :disabled="!isActive">
      {{ buttonText }}
      <div v-if="isLoading" class="loader"></div>
    </button>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  
  const isActive = ref<boolean>(false);
  const isLoading = ref<boolean>(false);
  
  const buttonText = ref<string>('Создать');
  
  function handleClick() {
    
  }
  </script>
  
  <style scoped>
  button {
    background-color: #ccc;
  }
  
  button.active {
    background-color: #007bff;
  }
  
  .loader {
    border: 4px solid #f3f3f3;
    border-top: 4px solid #3498db;
    border-radius: 50%;
    width: 20px;
    height: 20px;
    animation: spin 2s linear infinite;
  }
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
  </style>
  