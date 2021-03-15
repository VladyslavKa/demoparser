<template>
	<Card>
		<CardTitle>Opponent:</CardTitle>

		<CardBody>
			<InputCheckbox
				id="opponent"
				:value="showOpponent"
				name="opponent"
				label="Opponent"
				@change="onChange"
			/>
		</CardBody>
	</Card>
</template>

<script lang="ts">
	import Card from '@Components/Card.vue';
	import CardTitle from '@Components/CardTitle.vue';
	import CardBody from '@Components/CardBody.vue';
	import InputCheckbox from '@Components/InputCheckbox.vue';
	import { mapGetters, mapMutations } from 'vuex';
	import { NS_FILTER } from '../store';
	import { SET_SHOW_OPPONENT } from '../store/filter/mutations';
	import { ShowOpponent } from '../_const/types/filter';

	export default {
		name: 'Opponent',

		components: { InputCheckbox, CardBody, CardTitle, Card },

		computed: {
			...mapGetters(NS_FILTER, {
				showOpponent: 'showOpponent',
			}),
		},

		methods: {
			...mapMutations(NS_FILTER, {
				setShowOpponent: SET_SHOW_OPPONENT,
			}),

			onChange(value: ShowOpponent): void {
				this.setShowOpponent(value);
			},
		},
	};
</script>
