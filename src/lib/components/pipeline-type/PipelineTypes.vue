<script lang="ts" setup>
import { ref } from 'vue';
import type { IPipelineType } from './pipeline-type.type';
import PipelineType from './PipelineType.vue';

defineProps<{
  types: IPipelineType[];
}>();

const selected = ref<IPipelineType>();
</script>

<template>
  <div class="pipeline-types">
    <PipelineType
      v-for="ptype of types"
      :key="ptype.name"
      :type="ptype"
      :selected="selected?.name === ptype.name"
      @click="selected = ptype"
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
