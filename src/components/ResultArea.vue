<template>
  <div class="result-area">
    <div class="content">
      <div v-for="(result, index) in results" :key="index" class="result-item">
        {{ result }}
      </div>
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
  position: relative;
  border-radius: 7px;
  background-color: #ddd;
  height: 200px;
  overflow: auto; 
}

.content {
  max-height: 100%;
}

.content::after {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  border-radius: 4px;
}

.result-item {
  padding: 5px;
  border-bottom: 1px solid #ddd;
}
</style>
