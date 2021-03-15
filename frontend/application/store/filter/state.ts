import { FilterTypes, ShowOpponent } from '../../_const/types/filter';
import { Roles, TeamMember } from '../../_const/types/demo-parser';

const { ROUND_NUMBER, ROLE, PLAYER, SIDE } = FilterTypes;

export type State = {
	items: {
		[ROUND_NUMBER]: number;
		[ROLE]: string[];
		[SIDE]: number;
		[PLAYER]: TeamMember;
	};

	showOpponent: ShowOpponent;
};

const getDefaultState = (): State => ({
	items: {
		[ROUND_NUMBER]: -1,
		[ROLE]: [Roles.ATTACKER, Roles.VICTIM],
		[SIDE]: -1,
		[PLAYER]: {
			name: '',
			steamId: '',
		},
	},
	showOpponent: true,
});

const state = getDefaultState();

export default state;
