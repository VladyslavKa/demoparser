<template>
	<Card class-name="server-info">
		<CardTitle>Server:</CardTitle>

		<img
			v-if="header.mapName"
			:src="`/assets/images/maps-icons/svg/map_icon_${header.mapName}.svg`"
			alt="map preview"
			class="full-w"
		/>
	</Card>
</template>

<script lang="ts">
	import Card from '@Components/Card.vue';
	import CardTitle from '@Components/CardTitle.vue';
	import { mapGetters } from 'vuex';
	import { NS_DEMO_PARSER } from '../store';

	export default {
		name: 'ServerInfo',

		components: { CardTitle, Card },

		computed: {
			...mapGetters(NS_DEMO_PARSER, ['header']),
		},
	};
</script>
