<template>
	<Button class="team__player" :is-active="isActive(member.steamId)" @click="onClickPlayer">
		<div class="name">{{ member.name }}</div>
	</Button>
</template>

<script lang="ts">
	import { TeamMember } from '../_const/types/demo-parser';
	import Button from '@Components/Button.vue';
	import { mapGetters, mapMutations } from 'vuex';
	import { NS_FILTER } from '../store';
	import { UPDATE } from '../store/filter/mutations';
	import { FilterPayload, FilterTypes } from '../_const/types/filter';

	export default {
		name: 'TeamMember',

		components: { Button },

		props: {
			member: {
				type: Object,
				default: (): TeamMember => ({
					name: '',
					steamId: '',
				}),
			},
		},

		computed: {
			...mapGetters(NS_FILTER, {
				filter: 'items',
			}),
		},

		methods: {
			...mapMutations(NS_FILTER, {
				updateFilter: UPDATE,
			}),

			onClickPlayer(): void {
				const payload: FilterPayload<string> = {
					type: FilterTypes.PLAYER,
					value: this.member,
				};

				this.updateFilter(payload);
			},

			isActive(steamId: number): boolean {
				const { player } = this.filter;

				return player.steamId === steamId || !player.steamId;
			},
		},
	};
</script>

<style lang="less" scoped>
	.team {
		&__player {
			display: flex;

			.name {
				color: #fff;
			}
		}
	}
</style>