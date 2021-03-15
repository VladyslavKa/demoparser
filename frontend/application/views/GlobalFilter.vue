<template>
	<Card>
		<CardTitle>Filter:</CardTitle>

		<CardBody>
			{{ items }}
		</CardBody>
	</Card>
</template>

<script lang="ts">
	import Card from '@Components/Card.vue';
	import CardTitle from '@Components/CardTitle.vue';
	import CardBody from '@Components/CardBody.vue';
	import { mapGetters } from 'vuex';
	import { NS_FILTER } from '../store';

	export default {
		name: 'GlobalFilter',

		components: { CardBody, CardTitle, Card },

		computed: {
			...mapGetters(NS_FILTER, ['items']),
		},
	};
</script>
