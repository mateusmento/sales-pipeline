<script setup lang="ts">
import { ref } from 'vue';
import PipelinePhase from '@/lib/components/PipelinePhase.vue';
import PipelineTypes from '@/lib/components/pipeline-type/PipelineTypes.vue';

const pipelineTypes = ref([
  { name: 'Basic', active: true },
  { name: 'Advanced', active: false },
  { name: 'Expert', active: false },
  { name: 'Custom', active: false },
]);

const phases = ref([
  {
    name: 'Lead',
    active: false,
    color: 'purple',
  },
  {
    name: 'RFP In Progress',
    active: false,
    color: 'orange',
  },
  {
    name: 'Submitted',
    active: false,
    color: 'blue',
  },
  {
    name: 'Won',
    active: false,
    color: 'cyan',
  },
  {
    name: 'Lost',
    active: false,
    color: 'red',
  },
  {
    name: 'Closed',
    active: false,
    color: 'gray',
  },
]);
</script>

<template>
  <main>
    <div class="headline">
      Please select the type of sales pipeline that best fits to you company
    </div>
    <PipelineTypes :types="pipelineTypes" />
    <div class="panels">
      <PipelinePhase v-for="(phase, i) of phases" :key="phase.name" v-model:phase="phases[i]" />
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
</style>
