<script lang="ts" setup>
import { RouterLink, useRoute } from 'vue-router';
import Step from './Step.vue';
import { opportunityDetailsRoute, salesPipelineRoute } from '@/app/router';

const route = useRoute();

function url(path: string) {
  return new URL(path, import.meta.url).href;
}
</script>

<template>
  <header>
    <img :src="url('../assets/ProjectMark.svg')" />
    <div class="steps">
      <RouterLink :to="salesPipelineRoute.path">
        <Step
          :order="1"
          label="Sales Pipeline Settings"
          :active="route.path === salesPipelineRoute.path"
        />
      </RouterLink>
      <RouterLink :to="opportunityDetailsRoute.path">
        <Step
          :order="2"
          label="Opportunity Details Settings"
          :active="route.path === opportunityDetailsRoute.path"
        />
      </RouterLink>
    </div>
    <RouterLink v-if="typeof route.meta.nextStep === 'string'" :to="route.meta.nextStep">
      <button class="next-button">Next</button>
    </RouterLink>
    <button v-else class="next-button not-visible">Next</button>
  </header>
</template>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 21px;
  margin-bottom: 8px;
}

.steps {
  display: flex;
  gap: 42px;
}

.next-button {
  width: 74px;
  height: 41px;
  border-radius: 40px;
  background: #2462d1;
  font-size: 14px;
  font-weight: 600;
  color: white;
}

.not-visible {
  visibility: hidden;
}
</style>
