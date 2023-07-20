<script lang="ts" setup>
defineProps<{
  active: boolean;
  order: number;
  label: string;
}>();
</script>

<template>
  <div class="step" :class="{ 'step--active': active }">
    <button class="step-button">{{ order }}</button>
    <div class="step-label">{{ label }}</div>
  </div>
</template>

<style scoped>
.step {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2px;
  color: #062952;
}

.step-label {
  font-family: Archivo Narrow;
  font-size: 11px;
  font-weight: 600;
}

.step-button {
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 18px;
  width: 50px;
  height: 50px;
  font-size: 17px;
}

.step.step--active .step-button {
  background: #2d3748;
  color: white;
}

.step:not(.step--active) .step-button {
  background: white;
  border: 1px solid #bfcfe0;
}
</style>
