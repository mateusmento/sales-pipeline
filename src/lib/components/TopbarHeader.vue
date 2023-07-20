<script lang="ts" setup>
import Step from './Step.vue';

function url(path: string) {
  return new URL(path, import.meta.url).href;
}
</script>

<template>
  <header>
    <img :src="url('../../assets/ProjectMark.svg')" />
    <div class="steps">
      <Step :order="1" label="Sales Pipeline Settings" :active="true" />
      <Step :order="2" label="Opportunity Details Settings" :active="false" />
    </div>
    <button class="next-button">Next</button>
  </header>
</template>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 21px;
  margin-bottom: 8px;
}

.steps {
  display: flex;
  gap: 42px;
}

.next-button {
  width: 74px;
  height: 41px;
  border-radius: 40px;
  background: #2462d1;
  font-size: 14px;
  font-weight: 600;
  color: white;
}
</style>
