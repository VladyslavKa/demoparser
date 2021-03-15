<template>
	<div class="card">
		<slot name="default"></slot>
	</div>
</template>

<script lang="ts">
	export default {
		name: 'Card',
	};
</script>

<style lang="less" scoped>
	@import (reference) './../../assets/styles/_core';

	@card-bg: #2a2939;

	.card {
		background-color: @card-bg;
	}
</style>