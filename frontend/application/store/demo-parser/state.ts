import { BombPlanted, Deaths, Header, RoundsInObject, Teams } from '../../_const/types/demo-parser';

export type State = {
	[key: string]: unknown;
	isReading: boolean;
	bomb_planted: BombPlanted;
	header: Header;
	teams: Teams;
	rounds: RoundsInObject;
	deaths: Deaths;
};

export const getDefaultState = (): State => ({
	isReading: false,
	bomb_planted: {},
	header: {
		mapName: '',
	},

	teams: {},
	rounds: {},
	deaths: {},
});

const state = getDefaultState();

export default state;
