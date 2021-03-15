<template>
	<Card>
		<CardTitle>Rounds:</CardTitle>

		<CardBody class="d-flex">
			<RoundItem v-for="round of firstPhaseRounds" :key="round.roundNumber" :round="round" />
		</CardBody>

		<CardBody class="d-flex">
			<RoundItem v-for="round of secondPhaseRounds" :key="round.roundNumber" :round="round" />
		</CardBody>
	</Card>
</template>

<script lang="ts">
	import Card from '@Components/Card.vue';
	import CardTitle from '@Components/CardTitle.vue';
	import CardBody from '@Components/CardBody.vue';
	import { mapGetters } from 'vuex';
	import { NS_DEMO_PARSER } from '../store';
	import { Round } from '../_const/types/demo-parser';
	import RoundItem from './RoundItem.vue';
	import { PHASES } from '../_const/round';

	export default {
		name: 'Rounds',

		components: { RoundItem, CardBody, CardTitle, Card },

		computed: {
			...mapGetters(NS_DEMO_PARSER, ['rounds']),

			firstPhaseRounds(): Round[] {
				return this.filterByPhase(PHASES.first);
			},

			secondPhaseRounds(): Round[] {
				return this.filterByPhase(PHASES.second);
			},
		},

		methods: {
			filterByPhase(phase: string): Round[] {
				const allRounds: Round[] = Object.values(this.rounds);

				return allRounds.filter((round: Round) => round.phase === phase);
			},
		},
	};
</script>
