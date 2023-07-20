<script setup lang="ts">
import PipelinePhase from '@/lib/components/PipelinePhase.vue';
import PipelineType from '@/lib/components/PipelineType.vue';
import { ref } from 'vue';

const pipelineTypes = ref([
  { name: 'Basic', active: true },
  { name: 'Advanced' },
  { name: 'Expert' },
  { name: 'Custom' },
]);

const phases = ref([
  {
    name: 'Lead',
    active: false,
  },
  {
    name: 'RFP In Progress',
    active: false,
  },
  {
    name: 'Submitted',
    active: false,
  },
  {
    name: 'Won',
    active: false,
  },
  {
    name: 'Lost',
    active: false,
  },
  {
    name: 'Closed',
    active: false,
  },
]);
</script>

<template>
  <main>
    <div class="headline">
      Please select the type of sales pipeline that best fits to you company
    </div>
    <div class="pipeline-types">
      <PipelineType v-for="ptype of pipelineTypes" :key="ptype.name" :type="ptype" />
    </div>
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

.pipeline-types {
  display: flex;
  gap: 10px;
  margin-bottom: 58px;
}

.panels {
  display: flex;
  gap: 15px;
}
</style>
