<script setup lang="ts">
import IconChecked from '@/lib/icons/IconChecked.vue';
import { ref } from 'vue';
const active = ref(false);
const pipelineTypes = ref(['Basic', 'Advanced', 'Expert', 'Custom']);
</script>

<template>
  <main>
    <div class="headline">
      Please select the type of sales pipeline that best fits to you company
    </div>
    <div class="pipeline-types">
      <div v-for="pipelineType of pipelineTypes" :key="pipelineType" class="toolbox">
        <div class="checkbox">
          <IconChecked />
        </div>
        <div>{{ pipelineType }}</div>
        <div class="triangle"></div>
      </div>
    </div>
    <div class="panels">
      <div v-for="panel of [1, 2, 3, 4]" :key="panel" class="panel">
        <div class="check-switch" :class="{ active }" @click="active = !active"></div>
        <div class="panel-content"></div>
      </div>
    </div>
  </main>
</template>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 42px;
  background-color: white;
  margin-left: 10px;
  margin-right: 10px;
  border-radius: 20px;
  height: 798px;
  padding: 42px;
}

.headline {
  font-size: 26px;
  font-weight: 600;
}

.panels {
  display: flex;
  gap: 20px;
}
.panel {
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 222px;
  height: 300px;
  padding: 5px;
  background-color: #f7f1ff;
  border-radius: 15px;
  mask-image: linear-gradient(black calc(100% - 60px), transparent 100%);
}

.panel-content {
  width: 100%;
  height: 175px;
  border-radius: 10px;
  border: 1px solid #e9d9ff;
}

.check-switch {
  display: flex;
  width: 114px;
  height: 22px;
  border-radius: 200px;
  background: #e9d9ff;
  transition: 200ms;
}

.check-switch.active::after {
  margin-left: calc(100% - 42px);
}

.check-switch::after {
  content: '';
  display: block;
  width: 42px;
  height: 22px;
  border-radius: 200px;
  background: #dabfff;
  transition: 200ms;
}

.pipeline-types {
  display: flex;
  gap: 10px;
}

.toolbox {
  position: relative;
  display: flex;
  gap: 15px;
  width: fit-content;
  min-width: 210px;
  padding: 9px 14px;
  margin-bottom: 12px;
  border: 3px solid #2462d1;
  border-radius: 10px;
  background-color: white;
  box-sizing: border-box;
}

.triangle {
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 20px;
  height: 20px;
  background-color: inherit;
  border-left: inherit;
  border-bottom: inherit;
  border-bottom-left-radius: 5px;
  box-sizing: border-box;
  clip-path: polygon(0% 0%, 100% 100%, 0% 100%);
  transform: translate(-50%, 50%) rotate(-45deg);
}

.checkbox {
  display: flex;
  background: #2462d1;
  padding: 5px 4px;
  border-radius: 5px;
  align-self: center;
}
</style>
