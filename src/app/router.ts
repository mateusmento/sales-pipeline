import { createRouter, createWebHistory } from 'vue-router';

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
      children: [
        {
          path: '/settings/sales-pipeline',
          component: () => import('@/views/SalesPipelineView.vue'),
          meta: {
            nextStep: '/settings/opportunity-details',
          },
        },
        {
          path: '/settings/opportunity-details',
          component: () => import('@/views/OpportunityDetailsView.vue'),
        },
      ],
    },
  ],
});

export default router;
