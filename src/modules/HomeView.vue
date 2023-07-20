<script setup lang="ts">
import IconChecked from '@/lib/icons/IconChecked.vue';
import { ref } from 'vue';

const active = ref(false);

const pipelineTypes = ref([
  { name: 'Basic', active: true },
  { name: 'Advanced' },
  { name: 'Expert' },
  { name: 'Custom' },
]);

const panels = [
  {
    name: 'Lead',
  },
  {
    name: 'RFP In Progress',
  },
  {
    name: 'Submitted',
  },
  {
    name: 'Won',
  },
  {
    name: 'Lost',
  },
  {
    name: 'Closed',
  },
];
</script>

<template>
  <main>
    <div class="headline">
      Please select the type of sales pipeline that best fits to you company
    </div>
    <div class="pipeline-types">
      <div
        v-for="pipelineType of pipelineTypes"
        :key="pipelineType.name"
        class="toolbox"
        :class="{ active: !!pipelineType.active }"
      >
        <div class="checkbox" :class="{ active: !!pipelineType.active }">
          <IconChecked />
        </div>
        <div>{{ pipelineType.name }}</div>
        <div class="triangle"></div>
      </div>
    </div>
    <div class="panels">
      <div v-for="panel of panels" :key="panel.name" class="panel">
        <div class="panel-header">
          <div class="panel-name">{{ panel.name }}</div>
          <div class="check-switch" :class="{ active }" @click="active = !active"></div>
        </div>
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
  background-color: white;
  margin-left: 10px;
  margin-right: 10px;
  border-radius: 20px;
  height: 798px;
  padding: 28px;
}

.headline {
  font-size: 26px;
  font-weight: 700;
  color: #2d3748;
  margin-bottom: 38px;
}

.panels {
  display: flex;
  gap: 15px;
}

.panel {
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 222px;
  height: 450px;
  padding: 5px;
  background-color: #f7f1ff;
  border-radius: 15px;
  mask-image: linear-gradient(black calc(100% - 150px), transparent 100%);
}

.panel-header {
  margin: 10px;
  margin-bottom: 0;
}

.panel-name {
  line-height: normal;
  text-transform: uppercase;
  font-weight: 600;
  color: #46426d;
  margin-bottom: 13px;
}

.panel-content {
  width: 100%;
  min-height: 175px;
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
  margin-bottom: 58px;
}

.toolbox {
  position: relative;
  display: flex;
  gap: 15px;
  width: fit-content;
  min-width: 210px;
  padding: 10.3px 14px;
  margin-bottom: 12px;
  border: 2px solid #e2e8f0;
  border-radius: 10px;
  background-color: white;
  box-sizing: border-box;
}

.toolbox.active {
  border: 3px solid #2462d1;
}

.toolbox.active .triangle {
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 16px;
  height: 16px;
  background-color: inherit;
  border-left: inherit;
  border-bottom: inherit;
  border-bottom-left-radius: 4px;
  box-sizing: border-box;
  clip-path: polygon(0% 0%, 100% 100%, 0% 100%);
  transform: translate(-50%, 50%) rotate(-45deg);
}

.checkbox {
  display: flex;
  padding: 3px 2px;
  border-radius: 5px;
  align-self: center;
  border: 2px solid #cbd5e0;
  background: #fff;
}

.checkbox.active {
  background: #2462d1;
  border-color: #2462d1;
}
</style>
