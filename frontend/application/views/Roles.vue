<template>
	<Card>
		<CardTitle>Roles:</CardTitle>

		<CardBody>
			<Button
				v-for="role of roles"
				:key="role.id"
				:is-active="isActive(role.type)"
				@click="onClickRole(role.type)"
			>
				{{ role.text }}
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
	import { Role, Roles } from '../_const/types/demo-parser';

	export default {
		name: 'Roles',

		components: { Button, CardBody, CardTitle, Card },

		data: () => ({
			roles: [
				{
					id: 0,
					type: Roles.VICTIM,
					text: Roles.VICTIM,
				},

				{
					id: 1,
					type: Roles.ATTACKER,
					text: Roles.ATTACKER,
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

			onClickRole(role: Role): void {
				const payload: FilterPayload<Role[]> = {
					type: FilterTypes.ROLE,
					value: [role],
				};

				this.updateFilter(payload);
			},

			isActive(role: Role): boolean {
				return this.filter.role.includes(role);
			},
		},
	};
</script>
