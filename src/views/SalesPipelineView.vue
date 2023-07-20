<script setup lang="ts">
import PipelinePhase from '@/components/PipelinePhase.vue';
import PipelineType from '@/components/PipelineType.vue';
import { usePipelineTypes } from '@/stores/pipeline-types.store';

const pipelineTypes = usePipelineTypes();
</script>

<template>
  <main>
    <div class="headline">
      Please select the type of sales pipeline that best fits to you company
    </div>
    <div class="pipeline-types">
      <PipelineType
        v-for="(pipelineType, i) of pipelineTypes.pipelineTypes"
        :key="pipelineType.name"
        v-model:type="pipelineTypes.pipelineTypes[i]"
        :selected="pipelineTypes.selected?.name === pipelineType.name"
        @click="pipelineTypes.selected = pipelineType"
      />
    </div>
    <div class="panels">
      <PipelinePhase
        v-for="(phase, i) of pipelineTypes.selected?.phases"
        :key="phase.name"
        v-model:phase="(pipelineTypes.selected?.phases ?? [])[i]"
      />
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
  min-height: 798px;
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
