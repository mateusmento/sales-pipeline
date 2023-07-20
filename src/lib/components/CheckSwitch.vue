<script lang="ts" setup>
import IconChecked from '../icons/IconChecked.vue';

const props = defineProps<{
  modelValue: boolean;
  color: string;
}>();

const DEFAULT_COLOR = 'gray';

const emit = defineEmits(['update:modelValue']);

function toggle() {
  emit('update:modelValue', !props.modelValue);
}
</script>

<template>
  <div
    class="check-switch"
    :class="{ active: modelValue, [color || DEFAULT_COLOR]: true }"
    @click="toggle()"
  >
    <IconChecked class="icon-checked" />
  </div>
</template>

<style scoped>
.check-switch {
  display: flex;
  width: 114px;
  height: 22px;
  border-radius: 200px;
  background: #e9d9ff;
  transition: 200ms;
  cursor: pointer;
}

.check-switch.active .icon-checked {
  margin-left: calc(100% - 42px);
}

.check-switch:not(.active):deep() .icon-checked svg {
  display: none;
}

.check-switch .icon-checked {
  content: '';
  display: flex;
  justify-content: center;
  align-items: center;
  width: 42px;
  height: 22px;
  border-radius: 200px;
  background: #dabfff;
  transition: 200ms;
}

.purple {
  background: #e9d9ff;
}

.purple .icon-checked {
  background: #dabfff;
}

.orange {
  background: #ffe4cc;
}

.orange .icon-checked {
  background: #ffd6b3;
}

.blue {
  background: #bfe3ff;
}

.blue .icon-checked {
  background: #99d1ff;
}

.cyan {
  background: #aaecf2;
}

.cyan .icon-checked {
  background: #81dde5;
}

.red {
  background: #ffd9e4;
}

.red .icon-checked {
  background: #ffbfd2;
}

.gray {
  background: #e2e8f0;
}

.gray .icon-checked {
  background: #cbd5e0;
}
</style>
