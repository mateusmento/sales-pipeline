import { createRouter, createWebHistory } from 'vue-router';
import { settingsRoutes } from '../modules/settings/routes.route';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: '/settings/sales-pipeline',
    },
    ...settingsRoutes,
  ],
});

export default router;
