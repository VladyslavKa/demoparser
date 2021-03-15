<template>
	<Card>
		<div class="heatmap">Heatmap</div>

		<div class="heatmap__helper">
			<HeatmapLayer :points="playerCoords.victim" />
			<HeatmapLayer
				:points="playerCoords.attacker"
				:gradient="{ '.5': 'blueviolet', '.8': 'orangered', '.95': 'navajowhite' }"
			/>

			<div class="heatmap__background">
				<img
					v-if="header.mapName"
					:src="`assets/images/radar/${header.mapName}_radar_spectate.png`"
					alt="map"
				/>
			</div>
		</div>
	</Card>
</template>

<script lang="ts">
	import Card from '@Components/Card.vue';
	import { mapGetters } from 'vuex';
	import { NS_DEMO_PARSER, NS_FILTER } from '../store';
	import { Death, PlayerDeathPosition, PlayerPosition, Roles } from '../_const/types/demo-parser';
	import { fixPositionCoords } from '../../utils/coordinates-fix';
	import HeatmapLayer from './HeatmapLayer.vue';

	type Data = {
		playerCoords: {
			[Roles.ATTACKER]: [];
			[Roles.VICTIM]: [];
		};
	};

	export default {
		name: 'Heatmap',

		components: { HeatmapLayer, Card },

		data: (): Data => ({
			playerCoords: {
				[Roles.ATTACKER]: [],
				[Roles.VICTIM]: [],
			},
		}),

		computed: {
			...mapGetters(NS_DEMO_PARSER, ['deaths', 'header']),
			...mapGetters(NS_FILTER, {
				filter: 'items',
				showOpponent: 'showOpponent',
			}),
		},

		watch: {
			header(): void {
				this.resetPositions();
			},

			showOpponent(): void {
				this.parseDeaths();
			},
			filter(): void {
				this.parseDeaths();
			},

			deaths(): void {
				this.parseDeaths();
			},
		},

		methods: {
			parseDeaths(): void {
				const { VICTIM, ATTACKER } = Roles;
				const { roundNumber, role: roles, side, player } = this.filter;
				const deaths =
					roundNumber !== -1 ? this.deaths[roundNumber] : Object.values(this.deaths).flat();

				this.resetPositions();

				deaths.forEach((death: Death) => {
					roles.forEach((role: string) => {
						const targetRole = death[role];
						const opponentRole = role === VICTIM ? ATTACKER : VICTIM;

						if (targetRole.name === death[opponentRole].name) return;

						if (
							(targetRole.steamId === player.steamId || !player.steamId) &&
							(targetRole.teamNumber === side || side === -1)
						) {
							this.updatePositionByRole(this.playerCoords[role], targetRole.position);

							if (this.showOpponent && side !== -1) {
								this.updatePositionByRole(
									this.playerCoords[opponentRole],
									death[opponentRole].position
								);
							}
						}
					});
				});
			},

			resetPositions(): void {
				this.playerCoords = {
					attacker: [],
					victim: [],
				};
			},

			updatePositionByRole(targetArray: PlayerPosition[], position: PlayerDeathPosition): void {
				const { mapName } = this.header;
				const { x, y } = position;

				const coords = fixPositionCoords({
					x,
					y,
					mapName,
				});

				targetArray.push(coords);
			},
		},
	};
</script>

<style lang="less" scoped>
	@import (reference) './../../assets/styles/_core';

	.heatmap {
		&__layer {
			.cover-absolute();
			z-index: 2;

			canvas {
				height: 100%;
			}
		}

		&__helper {
			@size: 1024px;

			position: relative;
			width: @size;
			height: @size;
		}

		&__background {
			.cover-absolute();
			z-index: 0;
			opacity: 0.25;

			img {
				width: 100%;
				height: 100%;
			}
		}
	}
</style>