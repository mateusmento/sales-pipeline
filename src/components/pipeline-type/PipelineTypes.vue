<script lang="ts" setup>
import PipelineType from './PipelineType.vue';
import { usePipelineTypes } from '@/stores/pipeline-types.store';

const pipelineTypes = usePipelineTypes();
</script>

<template>
  <div class="pipeline-types">
    <PipelineType
      v-for="(pipelineType, i) of pipelineTypes.pipelineTypes"
      :key="pipelineType.name"
      :type="pipelineType"
      @update:type="pipelineTypes.pipelineTypes[i] = $event"
      :selected="pipelineTypes.selected?.name === pipelineType.name"
      @click="pipelineTypes.selected = pipelineType"
    />
  </div>
</template>

<style>
.pipeline-types {
  display: flex;
  gap: 10px;
  margin-bottom: 58px;
}
</style>
