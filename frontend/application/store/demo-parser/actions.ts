import 'buffer';
import 'demofile/browser/bundle';
import { ActionTree } from 'vuex';
import { State } from './state';
import {
	SET_BOMB_PLANTED,
	SET_DEATH,
	SET_HEADER,
	SET_IS_READING,
	SET_ROUND,
	SET_TEAMS,
} from './mutations';
import { BombPlanted, Death, Round, Teams } from '../../_const/types/demo-parser';
import { GameRules, IDemoEndEvent, IEventPlayerDeath, Player, TeamNumber } from 'demofile';
import { ALLOWED_EVENTS } from '../../_const/demo-events';
import { RootState } from '../index';

declare global {
	export interface Window {
		Buffer: any;
		demofile: {
			DemoFile: any;
		};
	}
}

const {
	begin_new_match,
	bomb_planted,
	round_end,
	round_officially_ended,
	player_death,
} = ALLOWED_EVENTS;

const actions = <ActionTree<State, RootState>>{
	async parseFile({ commit }, buffer: ArrayBuffer) {
		commit(SET_IS_READING, true);

		return await new Promise<void>((resolve, reject) => {
			const demoFile = new window.demofile.DemoFile();

			demoFile.gameEvents.on('event', (e: any) => {
				const { name, event } = e;

				if (!Object.values(ALLOWED_EVENTS).includes(name)) {
					return;
				}

				const { entities, gameRules, teams } = demoFile;
				const { phase, roundNumber, isWarmup } = gameRules;

				if (isWarmup) {
					return;
				}

				const mapTeam = ({ name, steamId }: Player) => ({
					name,
					steamId,
				});

				switch (name) {
					case begin_new_match: {
						const { teams } = demoFile;
						const T = teams[TeamNumber.Terrorists];
						const CT = teams[TeamNumber.CounterTerrorists];

						const teamsSides: Teams = {
							T: {
								clanName: T.clanName,
								members: T.members.map(mapTeam),
							},
							CT: {
								clanName: CT.clanName,
								members: CT.members.map(mapTeam),
							},
						};

						commit(SET_HEADER, demoFile.header);
						commit(SET_TEAMS, teamsSides);
						break;
					}

					case round_end: {
						const { reason } = event;
						const { roundNumber }: GameRules = gameRules;

						commit(SET_ROUND, {
							[roundNumber]: {
								reason,
							},
						});

						break;
					}

					case round_officially_ended: {
						const T = teams[TeamNumber.Terrorists];
						const CT = teams[TeamNumber.CounterTerrorists];
						const round: Round = {
							roundNumber,
							phase,
							score: {
								CT: CT.score,
								T: T.score,
							},
							clanNames: {
								CT: CT.clanName,
								T: T.clanName,
							},
						};
						commit(SET_ROUND, {
							[roundNumber]: round,
						});
						break;
					}

					case bomb_planted: {
						const player = demoFile.entities.getByUserId(event.userid);
						const { placeName, name } = player;
						const value: BombPlanted = {
							[roundNumber]: {
								placeName,
								name,
							},
						};

						commit(SET_BOMB_PLANTED, value);
						break;
					}

					case player_death: {
						const { headshot, weapon } = <IEventPlayerDeath>event;
						const victim = entities.getByUserId(event.userid);
						const attacker = entities.getByUserId(event.attacker);
						const death: Death = {
							roundNumber,
							headshot,
							victim: {
								name: victim?.name || 'unknown',
								steamId: victim?.steamId,
								position: victim?.position,
								placeName: victim?.placeName,
								teamNumber: victim?.teamNumber,
							},
							attacker: {
								name: attacker?.name || 'unknown',
								steamId: attacker?.steamId,
								position: attacker?.position,
								placeName: attacker?.placeName,
								teamNumber: attacker?.teamNumber,
								weapon,
							},
						};

						commit(SET_DEATH, death);
						break;
					}

					default:
						break;
				}
			});

			demoFile.on('end', (e: IDemoEndEvent) => {
				if (e.error) {
					reject('Error during parsing:' + e.error);
				}

				resolve();
			});

			demoFile.parse(buffer);
		})
			.then(() => {
				commit(SET_IS_READING, false);
			})
			.catch(() => {
				console.error('error');
			})
			.finally(() => {
				commit(SET_IS_READING, false);
			});
	},
};

export default actions;
