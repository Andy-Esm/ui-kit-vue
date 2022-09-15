import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import Typography from '@/views/Typography.vue';
import Buttons from '@/views/Buttons.vue';

const router = createRouter({
	history: createWebHashHistory(),
	routes: [
		{
			path: '/',
			name: 'home',
			component: Home,
		},
		{
			path: '/typography',
			name: 'typography',
			component: Typography,
		},
		{
			path: '/buttons',
			name: 'buttons',
			component: Buttons,
		},
	],
});

export default router;
