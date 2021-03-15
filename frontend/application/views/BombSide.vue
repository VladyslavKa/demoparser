<template>
	<Card>
		<CardTitle> Bombside plants: </CardTitle>

		<Apexchart
			type="donut"
			width="380"
			:options="chartOptions"
			:series="[bombSideA, bombSideB]"
		></Apexchart>
	</Card>
</template>

<script lang="ts">
	import { mapGetters } from 'vuex';
	import { NS_DEMO_PARSER } from '../store';
	import { BombPlantedEvent, Bombsites } from '../_const/types/demo-parser';
	import Card from '@Components/Card.vue';
	import CardTitle from '@Components/CardTitle.vue';

	export default {
		name: 'BombSide',

		components: { CardTitle, Card },

		data: () => ({
			series: [],
			chartOptions: {
				chart: {
					width: 380,
					type: 'donut',
				},
				labels: ['Bombsite A', 'Bombsite B'],

				dataLabels: {
					enabled: false,
				},

				plotOptions: {
					pie: {
						startAngle: -90,
						endAngle: 90,
						offsetY: 10,

						donut: {
							labels: {
								show: true,
								total: {
									showAlways: true,
									show: true,
									color: '#9f9f9f',
								},

								value: {
									color: '#fff',
								},
							},
						},
					},
				},

				responsive: [
					{
						breakpoint: 480,
						options: {
							chart: {
								width: 200,
							},
							legend: {
								show: false,
							},
						},
					},
				],
				legend: {
					position: 'right',
					offsetY: 0,
					height: 230,

					labels: {
						colors: ['#fff'],
					},
				},
			},
		}),

		computed: {
			...mapGetters(NS_DEMO_PARSER, ['bombPlanted']),

			total(): number {
				return Object.values(this.bombPlanted).length;
			},

			bombSideA(): number {
				return this.sumBombSidesByName(Bombsites.BombsiteA);
			},

			bombSideB(): number {
				return this.sumBombSidesByName(Bombsites.BombsiteB);
			},
		},

		methods: {
			sumBombSidesByName(name: string): number {
				const allBombPlants: BombPlantedEvent[] = Object.values(this.bombPlanted);

				return allBombPlants.filter(({ placeName }: BombPlantedEvent) => {
					return placeName === name;
				}).length;
			},
		},
	};
</script>
