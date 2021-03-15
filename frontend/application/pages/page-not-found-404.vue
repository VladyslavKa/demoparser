<template>
	<Container>
		<Row>
			<Cell class="align-items-center flex-direction-column">
				<h1>Error 404</h1>
				<p>Page not found</p>

				<Button to="/"> Go home </Button>
			</Cell>
		</Row>
	</Container>
</template>

<script lang="ts">
	import Button from '../components/Button.vue';
	import Container from '@Components/Container.vue';
	import Row from '@Components/Row.vue';
	import Cell from '@Components/Cell.vue';

	export default {
		name: 'PageNotFound404',

		components: {
			Cell,
			Row,
			Container,
			Button,
		},
	};
</script>
