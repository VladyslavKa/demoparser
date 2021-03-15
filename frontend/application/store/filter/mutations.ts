import { MutationTree } from 'vuex';
import { State } from './state';
import { FilterPayload, ShowOpponent } from '../../_const/types/filter';

export const UPDATE = 'update';
export const SET_SHOW_OPPONENT = 'set_show_opponent';

const mutations = <MutationTree<State>>{
	[UPDATE](state: State, { type, value }: FilterPayload<unknown>) {
		state.items = {
			...state.items,
			[type]: value,
		};
	},

	[SET_SHOW_OPPONENT](state: State, value: ShowOpponent) {
		state.showOpponent = value;
	},
};

export default mutations;
