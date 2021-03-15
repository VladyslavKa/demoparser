export enum FilterTypes {
	ROUND_NUMBER = 'roundNumber',
	SIDE = 'side',
	ROLE = 'role',
	PLAYER = 'player',
}

export interface FilterPayload<T> {
	type: string;
	value: T;
}

export interface GlobalFilter<T> {
	[key: string]: T;
}

export type ShowOpponent = boolean;
