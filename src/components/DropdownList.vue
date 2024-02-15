<template>
  <div class="dropdown-container">
    <div class="dropdown-header" @click="toggleDropdown">
      <span class="selected-text">{{ selectedEntity }}</span>
      <span class="arrow-down"></span> <!-- Стрелочка вниз -->
    </div>
    <ul v-if="isOpen" class="dropdown-list">
      <li v-for="entity in entities" :key="entity" @click="handleSelect(entity)">
        {{ entity }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useStore } from '../store/index';
const store = useStore();
const selectedEntity = ref<string | null>('Не выбрано');
const entities = store.entities;
const isOpen = ref(false);
function toggleDropdown() {
  isOpen.value = !isOpen.value;
}
function handleSelect(entity: string) {
  if (entity !== 'Не выбрано' || store.selectedEntity !== 'Не выбрано') {
    selectedEntity.value = entity;
    isOpen.value = false;
    store.setSelectedEntity(entity !== 'Не выбрано' ? entity : null);
  }
}

onMounted(() => {
  store.setSelectedEntity(selectedEntity.value);
});
</script>

<style scoped>
.dropdown-container {
  border-radius: 4px;
  background-color: #fff;
  position: relative;
  width: 200px; 
}
.dropdown-header {
  padding: 8px;
  font-size: 16px;
  border-radius: 4px;
  cursor: pointer;
  position: relative; 
}
.selected-text {
  margin-right: 20px; 
}
.dropdown-header .arrow-down {
  position: absolute;
  top: 50%;
  right: 8px; 
  transform: translateY(-50%);
  width: 0;
  height: 0;
  border-left: 6px solid transparent; 
  border-right: 6px solid transparent;
  border-top: 6px solid #333; 
}
.dropdown-list {
  z-index: 1;
  width: 200px;
  position: absolute;
  top: 100%;
  left: 0;
  margin-top: 4px;
  padding: 0;
  list-style: none;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  max-height: 200px;
  overflow-y: auto;
  animation: dropdownAnimation 0.5s ease;
}
.dropdown-list li {
  padding: 8px;
  cursor: pointer;
}
@keyframes dropdownAnimation {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
