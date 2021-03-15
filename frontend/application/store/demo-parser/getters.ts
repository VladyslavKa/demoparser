import { State } from './state';
import { BombPlanted, Deaths, Header, RoundsInObject, Teams } from '../../_const/types/demo-parser';

const getters = {
	isReading: (state: State): boolean => state.isReading,
	header: (state: State): Header => state.header,
	teams: (state: State): Teams => state.teams,
	bombPlanted: (state: State): BombPlanted => state.bomb_planted,
	rounds: (state: State): RoundsInObject => state.rounds,
	deaths: (state: State): Deaths => state.deaths,
};

export default getters;
