<template>
  <button :class="{ 'active': isActive, 'white-background': isSelectedNone }" @click="handleClick" :disabled="!isActive" class="button">
    {{ buttonText }}
    <div v-if="isLoading" class="loader-container">
      <div class="loader"></div>
    </div>
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useStore } from '../store/index';
const isActive = computed(() => !!useStore().selectedEntity && useStore().selectedEntity !== 'Не выбрано');
const isLoading = computed(() => useStore().isLoading);
const buttonText = computed(() => isLoading.value ? 'Загрузка...' : 'Создать');
const isSelectedNone = computed(() => useStore().selectedEntity === 'Не выбрано');
function handleClick() {
  useStore().createEntity();
}
</script>

<style scoped>
.button {
  color: rgb(20, 20, 20);
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease; 
}
.button.active {
  background-color: #007bff;
  color: white;
}
.white-background {
  background-color: rgb(255, 255, 255);
}
.loader-container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
/* .loader {
  border: 4px solid #f3f3f3;
  border-top: 4px solid #3498db;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  animation: spin 2s linear infinite;
} */
@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>
