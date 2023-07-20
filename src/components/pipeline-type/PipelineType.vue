<script lang="ts" setup>
import Checkbox from '@/lib/components/Checkbox.vue';
import type { IPipelineType } from './pipeline-type.type';
import { computed } from 'vue';

const props = defineProps<{
  type: IPipelineType;
  selected: boolean;
}>();

const emit = defineEmits(['update:type']);

const active = computed({
  get: () => props.type.active,
  set: (value) => updateType({ active: value }),
});

function updateType(partial: Partial<IPipelineType>) {
  emit('update:type', { ...props.type, ...partial });
}
</script>

<template>
  <div class="type" :class="{ active: selected }">
    <Checkbox @click.stop="" v-model="active" />
    <div>{{ type.name }}</div>
    <div class="triangle"></div>
  </div>
</template>

<style scoped>
.type {
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
  cursor: pointer;
}

.type:not(.active):hover {
  background-color: #edf2f7;
}

.type.active {
  border: 2px solid #2462d1;
}

.type.active .triangle {
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
</style>
