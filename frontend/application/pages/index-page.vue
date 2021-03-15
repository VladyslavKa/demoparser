<template>
	<Container fluid>
		<Row>
			<Cell width="5">
				<Row>
					<Cell width="4">
						<DemoParser />
					</Cell>

					<Cell width="4">
						<Sides />
						<Roles />
						<Opponent />
					</Cell>

					<Cell width="4">
						<ServerInfo />

						<GlobalFilter />
					</Cell>
				</Row>

				<Row>
					<Cell width="6">
						<BombSide />
					</Cell>

					<Cell width="6">
						<Teams />
					</Cell>
				</Row>

				<Row>
					<Cell>
						<Rounds />
					</Cell>
				</Row>
			</Cell>

			<Cell width="7">
				<Heatmap />
			</Cell>
		</Row>
	</Container>
</template>

<script lang="ts">
	import Container from '@Components/Container.vue';
	import Row from '@Components/Row.vue';
	import Cell from '@Components/Cell.vue';
	import DemoParser from '../views/DemoParser.vue';
	import BombSide from '../views/BombSide.vue';
	import ServerInfo from '../views/ServerInfo.vue';
	import Teams from '../views/Teams.vue';
	import Rounds from '../views/Rounds.vue';
	import Heatmap from '../views/Heatmap.vue';
	import Sides from '../views/Sides.vue';
	import Roles from '../views/Roles.vue';
	import GlobalFilter from '../views/GlobalFilter.vue';
	import Opponent from '../views/Opponent.vue';

	export default {
		name: 'IndexPage',

		components: {
			Opponent,
			GlobalFilter,
			Roles,
			Sides,
			Heatmap,
			Rounds,
			Teams,
			ServerInfo,
			Cell,
			Row,
			BombSide,
			Container,
			DemoParser,
		},
	};
</script>
