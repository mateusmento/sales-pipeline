<script lang="ts" setup>
const props = defineProps<{
  modelValue: boolean;
}>();

const emit = defineEmits(['update:modelValue']);

function toggle() {
  emit('update:modelValue', !props.modelValue);
}
</script>

<template>
  <div class="check-switch" :class="{ active: modelValue }" @click="toggle()"></div>
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
</style>
