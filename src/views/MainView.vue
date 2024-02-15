<template>
  <div class="container">
    <div class="centered-content">
      <DropdownList />
      <ButtonCreate />
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
  transform: translate(-50%, -200%);
  text-align: center;
}
</style>