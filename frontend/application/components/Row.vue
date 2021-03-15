<template>
	<div class="row">
		<slot name="default"></slot>
	</div>
</template>

<script lang="ts">
	export default {
		name: 'Row',
	};
</script>

<style lang="less" scoped>
	@import (reference) '../../assets/styles/var';

	.row {
		display: flex;
		flex-wrap: wrap;
		flex: 1 1 auto;
		margin: -@container-base-padding-x;
	}
</style>