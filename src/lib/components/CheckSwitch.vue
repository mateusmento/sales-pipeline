<script lang="ts" setup>
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
  ></div>
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

.purple {
  background: #e9d9ff;
}

.purple::after {
  background: #dabfff;
}

.orange {
  background: #ffe4cc;
}

.orange::after {
  background: #ffd6b3;
}

.blue {
  background: #bfe3ff;
}

.blue::after {
  background: #99d1ff;
}

.cyan {
  background: #aaecf2;
}

.cyan::after {
  background: #81dde5;
}

.red {
  background: #ffd9e4;
}

.red::after {
  background: #ffbfd2;
}

.gray {
  background: #e2e8f0;
}

.gray::after {
  background: #cbd5e0;
}
</style>
