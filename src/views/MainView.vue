<template>
  <div class="container">
    <div class="centered-content">
      <div class="components-wrapper">
        <DropdownList />
        <ButtonCreate />
      </div>
      <ResultArea />
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import ButtonCreate from "@/components/ButtonCreate.vue";
import DropdownList from "@/components/DropdownList.vue";
import ResultArea from "@/components/ResultArea.vue";

@Options({
  components: {
    ButtonCreate,
    DropdownList,
    ResultArea,
  },
})
export default class MainView extends Vue {}
</script>

<style scoped>
.container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #bebebe; 
}

.centered-content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); 
  text-align: center;
  display: flex;
  flex-direction: column; 
}

.components-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px; 
  margin-bottom: 20px;
}
</style>
