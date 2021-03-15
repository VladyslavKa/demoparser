<template>
	<div class="round" :class="{ 'round--ct-win': ctWin, 'round--t-win': terroristWin }">
		<Button :is-active="isActive(round.roundNumber)" @click="onClickRound">
			{{ round.roundNumber }}
		</Button>
	</div>
</template>

<script lang="ts">
	import { Round } from '../_const/types/demo-parser';
	import { ROUND_END_REASONS } from '../_const/round';
	import Button from '@Components/Button.vue';
	import { mapGetters, mapMutations } from 'vuex';
	import { NS_FILTER } from '../store';
	import { UPDATE } from '../store/filter/mutations';
	import { FilterPayload, FilterTypes } from '../_const/types/filter';

	const {
		TerroristWin,
		TargetBombed,
		TerroristsEscaped,
		HostagesNotRescued,
		CTSurrender,
	} = ROUND_END_REASONS;

	const {
		CTWin,
		CTStoppedEscape,
		TerroristsStopped,
		BombDefused,
		HostagesRescued,
		TargetSaved,
		TerroristsNotEscaped,
		TerroristsSurrender,
		CTsReachedHostage,
	} = ROUND_END_REASONS;

	export default {
		name: 'RoundItem',
		components: { Button },
		props: {
			round: {
				type: Object,
				default: (): Round => ({
					roundNumber: null,
					phase: '',
					score: {
						CT: 0,
						T: 0,
					},
					clanNames: {
						CT: '',
						T: '',
					},
				}),
			},
		},

		computed: {
			...mapGetters(NS_FILTER, {
				filter: 'items',
			}),

			ctWin(): boolean {
				switch (this.round.reason) {
					case CTWin:
					case CTStoppedEscape:
					case TerroristsStopped:
					case BombDefused:
					case HostagesRescued:
					case TargetSaved:
					case TerroristsNotEscaped:
					case TerroristsSurrender:
					case CTsReachedHostage: {
						return true;
					}

					default:
						return false;
				}
			},
			terroristWin(): boolean {
				switch (this.round.reason) {
					case TerroristWin:
					case TargetBombed:
					case TerroristsEscaped:
					case HostagesNotRescued:
					case CTSurrender: {
						return true;
					}

					default:
						return false;
				}
			},
		},

		methods: {
			...mapMutations(NS_FILTER, {
				updateFilter: UPDATE,
			}),

			onClickRound(): void {
				const payload: FilterPayload<number> = {
					type: FilterTypes.ROUND_NUMBER,
					value: this.round.roundNumber,
				};

				this.updateFilter(payload);
			},

			isActive(roundNumber: number): boolean {
				const { roundNumber: filterRoundNumber } = this.filter;

				return filterRoundNumber === roundNumber || filterRoundNumber === -1;
			},
		},
	};
</script>

<style lang="less" scoped>
	.round {
		&--ct-win {
			.button {
				color: #597894;
			}
		}

		&--t-win {
			.button {
				color: #b39d3c;
			}
		}
	}
</style>