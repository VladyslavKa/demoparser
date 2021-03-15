import Vue from 'vue';
import App from '@Components/App.vue';
import './plugins/apexcharts';
import router from './application/router';
import { store } from './application/store';

new Vue({
	store,
	router,
	render: (h) => h(App),
}).$mount('#root');
