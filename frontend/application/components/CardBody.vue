<template>
	<div class="card__body" v-bind="$attrs">
		<slot name="default"></slot>
	</div>
</template>

<script lang="ts">
	export default {
		name: 'CardBody',
	};
</script>

<style lang="less">
	.card {
		&__body {
			width: 100%;
		}
	}
</style>