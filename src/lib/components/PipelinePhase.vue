<script lang="ts" setup>
interface PipelinePhase {
  name: string;
  active: boolean;
}

const props = defineProps<{
  phase: PipelinePhase;
}>();

const emit = defineEmits(['update:phase']);

function updatePhase(partial: Partial<PipelinePhase>) {
  emit('update:phase', { ...props.phase, ...partial });
}
</script>

<template>
  <div class="panel">
    <div class="panel-header">
      <div class="panel-name">{{ phase.name }}</div>
      <div
        class="check-switch"
        :class="{ active: phase.active }"
        @click="updatePhase({ active: !phase.active })"
      ></div>
    </div>
    <div class="panel-content"></div>
  </div>
</template>

<style scoped>
.panel {
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 222px;
  height: 450px;
  padding: 5px;
  background-color: #f7f1ff;
  border-radius: 15px;
  mask-image: linear-gradient(black calc(100% - 150px), transparent 100%);
}

.panel-header {
  margin: 10px;
  margin-bottom: 0;
}

.panel-name {
  line-height: normal;
  text-transform: uppercase;
  font-weight: 600;
  color: #46426d;
  margin-bottom: 13px;
}

.panel-content {
  width: 100%;
  min-height: 175px;
  border-radius: 10px;
  border: 1px solid #e9d9ff;
}

.check-switch {
  display: flex;
  width: 114px;
  height: 22px;
  border-radius: 200px;
  background: #e9d9ff;
  transition: 200ms;
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
