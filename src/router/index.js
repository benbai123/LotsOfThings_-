import { createWebHistory, createRouter } from "vue-router";

import index from '@src/index.vue';

const routes = [
    {
        name: 'index',
        path: '/index',
        component: index,
    }
];
const router = createRouter({
    history: createWebHistory(),
    routes,
  });

export default router