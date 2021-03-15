import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		component: () => import('./pages/index-page.vue'),
	},

	{
		path: '*',
		component: () => import('./pages/page-not-found-404.vue'),
	},
];

const router = new VueRouter({
	routes,
	base: '/',
	mode: 'history',
	scrollBehavior() {
		return { x: 0, y: 0 };
	},
});

export default router;
