import state, { State } from './state';
import getters from './getters';
import actions from './actions';
import mutations from './mutations';
import { Module } from 'vuex';
import { RootState } from '../index';

const module: Module<State, RootState> = {
	state,
	getters,
	actions,
	mutations,
	namespaced: true,
};

export default module;
