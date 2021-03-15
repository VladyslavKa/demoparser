import { State } from './state';
import { GlobalFilter, ShowOpponent } from '../../_const/types/filter';

const getters = {
	items: (state: State): GlobalFilter<unknown> => state.items,
	showOpponent: (state: State): ShowOpponent => state.showOpponent,
};

export default getters;
