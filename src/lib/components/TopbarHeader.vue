<script lang="ts" setup>
function url(path: string) {
  return new URL(path, import.meta.url).href;
}
</script>

<template>
  <header>
    <img :src="url('../../assets/ProjectMark.svg')" />
    <div class="steps">
      <div class="step step--active">
        <button class="step-button">1</button>
        <div class="step-label">Sales Pipeline Settings</div>
      </div>
      <div class="step">
        <button class="step-button">2</button>
        <div class="step-label">Opportunity Details Settings</div>
      </div>
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
}

.steps {
  display: flex;
  gap: 42px;
}

.step {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
  color: #062952;
}

.step-label {
  font-family: Archivo Narrow;
  font-size: 12px;
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
  border: 2px solid #bfcfe0;
}

.next-button {
  padding: 13px 21px;
  border-radius: 40px;
  background: #2462d1;
  font-size: 14px;
  font-weight: 600;
  color: white;
}
</style>
