export enum Bombsites {
	BombsiteA = 'BombsiteA',
	BombsiteB = 'BombsiteB',
}

export enum Roles {
	ATTACKER = 'attacker',
	VICTIM = 'victim',
}

export type Role = string;

export type BombPlantedEvent = {
	name: string;
	placeName: string;
};

export type BombPlanted = {
	[key: number]: BombPlantedEvent;
};

export type Header = {
	mapName: string;
};

export type TeamMember = {
	name: string;
	steamId: string;
};

export type Team = {
	clanName: string;
	members: TeamMember[];
};

export type Teams = {
	[key: string]: Team;
};

export type Round = {
	roundNumber?: number | null;
	phase?: string;
	reason?: number;
	score?: {
		CT: number;
		T: number;
	};
	clanNames?: {
		CT: string;
		T: string;
	};
};

export type RoundsInObject = {
	[key: string]: Round;
};

export type Deaths = {
	[key: number]: Death[];
};

export type PlayerPosition = {
	x: number;
	y: number;
};

export type PlayerDeathPosition = {
	x: number;
	y: number;
	z: number;
};

export interface PlayerDeathModel {
	name: string;
	steamId: string;
	placeName: string;
	position: PlayerDeathPosition;
	teamNumber: number;
}

export interface AttackerDeathModel extends PlayerDeathModel {
	weapon: string;
}

export type Death = {
	[key: string]: any; // TODO
	roundNumber: number;
	headshot: boolean;
	victim: PlayerDeathModel;
	attacker: AttackerDeathModel;
};

export type HeatmapGradient = {
	[key: string]: string;
};
