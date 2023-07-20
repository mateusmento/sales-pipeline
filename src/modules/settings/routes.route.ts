import type { RouteRecordRaw } from 'vue-router';

export const settingsRoutes: RouteRecordRaw[] = [
  {
    path: '/settings',
    name: 'settings',
    component: () => import('./Settings.vue'),
    redirect: '/settings/sales-pipeline',
    children: [
      {
        path: '/settings/sales-pipeline',
        component: () => import('./SalesPipelineView.vue'),
        meta: {
          nextStep: '/settings/opportunity-details',
        },
      },
      {
        path: '/settings/opportunity-details',
        component: () => import('./OpportunityDetailsView.vue'),
      },
    ],
  },
];
