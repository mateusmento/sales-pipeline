<script setup lang="ts">
import PipelineType from '@/lib/components/PipelineType.vue';
import { ref } from 'vue';

const active = ref(false);

const pipelineTypes = ref([
  { name: 'Basic', active: true },
  { name: 'Advanced' },
  { name: 'Expert' },
  { name: 'Custom' },
]);

const panels = [
  {
    name: 'Lead',
  },
  {
    name: 'RFP In Progress',
  },
  {
    name: 'Submitted',
  },
  {
    name: 'Won',
  },
  {
    name: 'Lost',
  },
  {
    name: 'Closed',
  },
];
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
      <div v-for="panel of panels" :key="panel.name" class="panel">
        <div class="panel-header">
          <div class="panel-name">{{ panel.name }}</div>
          <div class="check-switch" :class="{ active }" @click="active = !active"></div>
        </div>
        <div class="panel-content"></div>
      </div>
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
