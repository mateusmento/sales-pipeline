import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router';

export const salesPipelineRoute: RouteRecordRaw = {
  path: '/settings/sales-pipeline',
  component: () => import('@/views/SalesPipelineView.vue'),
  meta: {
    nextStep: '/settings/opportunity-details',
  },
};

export const opportunityDetailsRoute: RouteRecordRaw = {
  path: '/settings/opportunity-details',
  component: () => import('@/views/OpportunityDetailsView.vue'),
};

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: '/settings/sales-pipeline',
    },
    {
      path: '/settings',
      name: 'settings',
      component: () => import('@/views/SettingsView.vue'),
      redirect: '/settings/sales-pipeline',
      children: [salesPipelineRoute, opportunityDetailsRoute],
    },
  ],
});

export default router;
