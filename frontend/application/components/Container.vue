<template>
	<div class="container" :class="{ 'container--fluid': fluid }">
		<slot name="default"></slot>
	</div>
</template>

<script lang="ts">
	export default {
		name: 'Container',

		props: {
			fluid: {
				type: Boolean,
				default: false,
			},
		},
	};
</script>

<style lang="less" scoped>
	.container {
		width: 100%;
		max-width: 80%;
		margin: 0 auto;
		padding: 12px;

		&--fluid {
			max-width: 100%;
		}
	}
</style>