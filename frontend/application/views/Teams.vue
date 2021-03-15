<template>
	<Card>
		<CardBody class="teams">
			<TeamItem v-for="team of teamsToArray" :key="team.clanName" :team="team" />
		</CardBody>
	</Card>
</template>

<script lang="ts">
	import { mapGetters } from 'vuex';
	import { NS_DEMO_PARSER } from '../store';
	import { Team } from '../_const/types/demo-parser';
	import Card from '@Components/Card.vue';
	import CardBody from '@Components/CardBody.vue';
	import TeamItem from './TeamItem.vue';

	export default {
		name: 'Teams',

		components: { TeamItem, CardBody, Card },

		computed: {
			...mapGetters(NS_DEMO_PARSER, ['teams']),

			teamsToArray(): Team[] {
				return Object.values(this.teams);
			},
		},
	};
</script>
