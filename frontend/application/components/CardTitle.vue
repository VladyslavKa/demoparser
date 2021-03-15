<template>
	<div class="card__title">
		<slot name="default"></slot>
	</div>
</template>

<script lang="ts">
	export default {
		name: 'CardTitle',
	};
</script>

<style lang="less">
	@import './../../assets/styles/var';

	.card {
		&__title {
			display: flex;
			align-items: center;
			flex-wrap: wrap;
			padding: @card-base-padding;
			word-break: break-all;
			font-size: 1.25rem;
			font-weight: 500;
		}

		&__body {
			padding: @card-base-padding;
		}
	}
</style>