<template>
	<div class="bg-with-image-cover">
		<main>
			<router-view />
		</main>
	</div>
</template>

<script lang="ts">
	export default {
		name: 'App',
	};
</script>

<style lang="less" src="./../../assets/styles/_core.less"></style>
<style lang="less" scoped>
	@import (reference) './../../assets/styles/_core';

	.bg-with-image-cover {
		position: relative;
		height: 100%;

		&:after {
			content: '';
			.cover-absolute();
			z-index: -1;
			opacity: 0.2;
			background-image: url('./../../assets/images/background.jpg');
			background-repeat: no-repeat;
			background-color: @main-background-color;
			background-position: 50%;
			background-size: cover;
		}
	}
</style>
