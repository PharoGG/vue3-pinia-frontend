<template>
  <div class="result-area">
    <div v-for="(result, index) in results" :key="index" class="result-item">
      {{ result }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useStore } from '../store/index'; 

const store = useStore();
const results = ref<string[]>(store.results);
</script>

<style scoped>
.result-area {
  margin-top: 20px;
}

.result-item {
  padding: 5px;
  border-bottom: 1px solid #ddd;
}
</style>
