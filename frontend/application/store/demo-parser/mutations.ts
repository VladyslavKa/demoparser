import { MutationTree } from 'vuex';
import { getDefaultState, State } from './state';
import { BombPlanted, Death, Header, RoundsInObject, Teams } from '../../_const/types/demo-parser';
import fakeData from './../../../assets/fake-data.json';

export const SET_IS_READING = 'set_is_reading';
export const SET_HEADER = 'set_header';
export const SET_TEAMS = 'set_teams';
export const SET_ROUND = 'set_round';
export const SET_BOMB_PLANTED = 'set_bomb_planted';
export const SET_DEATH = 'set_death';
export const SET_FAKE_DATA = 'set_fake_data';
export const RESET_STATE = 'reset_state';

const mutations = <MutationTree<State>>{
	[SET_FAKE_DATA](state: State): void {
		for (const [key, value] of Object.entries(fakeData)) {
			state[key] = value;
		}
	},

	[SET_IS_READING](state: State, value: boolean): void {
		state.isReading = value;
	},

	[SET_HEADER](state: State, value: Header): void {
		state.header = value;
	},

	[SET_BOMB_PLANTED](state: State, value: BombPlanted): void {
		state.bomb_planted = {
			...state.bomb_planted,
			...value,
		};
	},

	[SET_ROUND](state: State, value: RoundsInObject): void {
		const [roundNumber] = Object.keys(value);
		const prevRoundState = state.rounds[roundNumber] || {};

		state.rounds = {
			...state.rounds,
			[roundNumber]: {
				...prevRoundState,
				...value[roundNumber],
			},
		};
	},

	[SET_TEAMS](state: State, value: Teams): void {
		state.teams = value;
	},

	[SET_DEATH](state: State, value: Death): void {
		const { roundNumber } = value;
		const prevRoundState: Death[] = state.deaths[roundNumber] || [];

		state.deaths = {
			...state.deaths,
			[roundNumber]: [...prevRoundState, value],
		};
	},

	[RESET_STATE](state: State): void {
		for (const [key, value] of Object.entries(getDefaultState())) {
			state[key] = value;
		}
	},
};

export default mutations;
