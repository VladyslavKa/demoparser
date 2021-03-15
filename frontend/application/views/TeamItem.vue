<template>
	<div class="team">
		<h2>{{ team.clanName }}</h2>

		<div class="team__members">
			<TeamMember v-for="member of team.members" :key="member.steam64Id" :member="member" />
		</div>
	</div>
</template>

<script lang="ts">
	import { Team } from '../_const/types/demo-parser';
	import TeamMember from './TeamMember.vue';

	export default {
		name: 'TeamItem',

		components: { TeamMember },

		props: {
			team: {
				type: Object,
				default: (): Team => ({
					clanName: '',
					members: [],
				}),
			},
		},
	};
</script>
