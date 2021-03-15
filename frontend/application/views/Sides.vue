<template>
	<Card>
		<CardTitle>Sides:</CardTitle>

		<CardBody>
			<Button
				v-for="button of buttons"
				:key="button.id"
				:is-active="isActive(button.type)"
				@click="onClickSide(button.type)"
			>
				{{ button.text }}
			</Button>
		</CardBody>
	</Card>
</template>

<script lang="ts">
	import Card from '@Components/Card.vue';
	import CardTitle from '@Components/CardTitle.vue';
	import CardBody from '@Components/CardBody.vue';
	import Button from '@Components/Button.vue';
	import { mapGetters, mapMutations } from 'vuex';
	import { NS_FILTER } from '../store';
	import { UPDATE } from '../store/filter/mutations';
	import { FilterPayload, FilterTypes } from '../_const/types/filter';
	import { TeamNumber } from 'demofile';

	type Data = {
		buttons: {
			id: number;
			type: number;
			text: string;
		}[];
	};

	export default {
		name: 'Sides',

		components: { Button, CardBody, CardTitle, Card },

		data: (): Data => ({
			buttons: [
				{
					id: 0,
					type: TeamNumber.CounterTerrorists,
					text: 'CT',
				},
				{
					id: 1,
					type: TeamNumber.Terrorists,
					text: 'T',
				},
			],
		}),

		computed: {
			...mapGetters(NS_FILTER, {
				filter: 'items',
			}),
		},

		methods: {
			...mapMutations(NS_FILTER, {
				updateFilter: UPDATE,
			}),

			onClickSide(side: string): void {
				const payload: FilterPayload<string> = {
					type: FilterTypes.SIDE,
					value: side,
				};

				this.updateFilter(payload);
			},

			isActive(side: number): boolean {
				const { filter } = this;

				return filter.side === -1 || filter.side === side;
			},
		},
	};
</script>
