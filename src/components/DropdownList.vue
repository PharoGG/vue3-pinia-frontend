<template>
  <select v-model="selectedEntity" class="dropdown" @change="handleChange">
    <option v-for="entity in entities" :key="entity" :value="entity">{{ entity }}</option>
  </select>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useStore } from '../store/index';

const store = useStore();
const selectedEntity = ref<string | null>('Не выбрано');
const entities = store.entities;

function handleChange(event: Event) {
  const value = (event.target as HTMLSelectElement).value;
  store.setSelectedEntity(value !== 'Не выбрано' ? value : null);
}

onMounted(() => {
  store.setSelectedEntity(selectedEntity.value);
});
</script>

<style scoped>
.dropdown {
  margin-right: 15px;
  padding: 8px;
  font-size: 16px;
  border-radius: 4px;
}
</style>