import Vue from 'vue';
import Vuex from 'vuex';
import demoParser from './demo-parser';
import filter from './filter';

Vue.use(Vuex);

export type RootState = {
	version: string;
};

export const NS_DEMO_PARSER = 'NS_DEMO_PARSER';
export const NS_FILTER = 'NS_FILTER';

export const store = new Vuex.Store({
	strict: true,
	modules: {
		[NS_DEMO_PARSER]: demoParser,
		[NS_FILTER]: filter,
	},
});
