<script lang="ts" setup>
import { computed } from 'vue';
import CheckSwitch from './CheckSwitch.vue';
import type { IPipelinePhase } from '@/types/pipeline-phase.type';

const DEFAULT_COLOR = 'gray';

const props = defineProps<{
  phase: IPipelinePhase;
}>();

const emit = defineEmits(['update:phase']);

const phaseActive = computed({
  get: () => props.phase.active,
  set: (value) => updatePhase({ active: value }),
});

function updatePhase(partial: Partial<IPipelinePhase>) {
  emit('update:phase', { ...props.phase, ...partial });
}
</script>

<template>
  <div class="phase" :class="`${phase.color || DEFAULT_COLOR}`">
    <div class="phase-header">
      <div class="phase-name">
        {{ phase.name }}
      </div>
      <CheckSwitch v-model="phaseActive" :color="phase.color" />
    </div>
    <div class="phase-content"></div>
  </div>
</template>

<style scoped>
.phase {
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 222px;
  padding: 5px;
  padding-bottom: 209px;
  background-color: #f7f1ff;
  border-radius: 15px;
  mask-image: linear-gradient(black calc(100% - 150px), transparent 100%);
}

.phase-header {
  margin: 10px;
  margin-bottom: 0;
}

.phase-name {
  line-height: normal;
  text-transform: uppercase;
  font-weight: 600;
  color: #46426d;
  margin-bottom: 13px;
}

.phase-content {
  width: 100%;
  min-height: 175px;
  border-radius: 10px;
  border: 1px solid #e9d9ff;
}

.phase.purple {
  background: #f7f1ff;
}

.phase.purple .phase-name {
  color: #46426d;
}

.phase.purple .phase-content {
  border-color: #e9d9ff;
}

.phase.orange {
  background: #fef6ef;
}

.phase.orange .phase-name {
  color: #66421f;
}

.phase.orange .phase-content {
  border-color: #ffe4cc;
}

.phase.blue {
  background: #e6f4ff;
}

.phase.blue .phase-name {
  color: #003a66;
}

.phase.blue .phase-content {
  border-color: #bfe3ff;
}

.phase.cyan {
  background: #def5f7;
}

.phase.cyan .phase-name {
  background: #def5f7;
}

.phase.cyan .phase-content {
  border-color: #aaecf2;
}

.phase.red {
  background: #fff2f6;
}

.phase.red .phase-name {
  color: #773a47;
}

.phase.red .phase-content {
  border-color: #ffd9e4;
}

.phase.gray {
  background: #f2f7fa;
}

.phase.gray .phase-name {
  color: #4a5568;
}

.phase.gray .phase-content {
  border-color: #e2e8f0;
}
</style>
