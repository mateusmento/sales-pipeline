import type { IPipelineType } from '@/types/pipeline-type.type';
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const usePipelineTypes = defineStore('pipeline-types', () => {
  const pipelineTypes = ref<IPipelineType[]>([
    {
      name: 'Basic',
      active: false,
      phases: [lead(), submitted(), closed()],
    },
    {
      name: 'Advanced',
      active: false,
      phases: [lead(), rpfInProgress(), submitted(), closed()],
    },
    {
      name: 'Expert',
      active: true,
      phases: [lead(), rpfInProgress(), submitted(), won(), lost(), closed()],
    },
    {
      name: 'Custom',
      active: false,
      phases: [lead(), rpfInProgress(), submitted(), won(), lost(), closed()],
    },
  ]);

  const selected = ref<IPipelineType>();

  return { pipelineTypes, selected };
});

const lead = () => ({
  name: 'Lead',
  active: false,
  color: 'purple',
});

const rpfInProgress = () => ({
  name: 'RFP In Progress',
  active: false,
  color: 'orange',
});

const submitted = () => ({
  name: 'Submitted',
  active: false,
  color: 'blue',
});

const won = () => ({
  name: 'Won',
  active: false,
  color: 'cyan',
});

const lost = () => ({
  name: 'Lost',
  active: false,
  color: 'red',
});

const closed = () => ({
  name: 'Closed',
  active: false,
  color: 'gray',
});
