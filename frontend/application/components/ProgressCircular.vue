<template>
	<div class="progress-circular">
		<div class="progress-circular__element"></div>
	</div>
</template>

<script lang="ts">
	export default {
		name: 'ProgressCircular',
	};
</script>

<style lang="less" scoped>
	@import (reference) './../../assets/styles/_core';

	.progress-circular {
		@size: 32px;

		position: relative;
		height: @size;

		&__element {
			display: block;
			.cover-absolute();
			margin: auto;
			height: @size;
			width: @size;
			clip: rect(@size / 2, @size, @size, 0);
			-webkit-animation: loader-2-2 1.5s cubic-bezier(0.77, 0, 0.175, 1) infinite;
			animation: loader-2-2 1.5s cubic-bezier(0.77, 0, 0.175, 1) infinite;

			&:before {
				content: '';
				display: block;
				.cover-absolute();
				margin: auto;
				height: @size;
				width: @size;
				border: 3px solid transparent;
				border-top: 3px solid #fff;
				border-radius: 50%;
				-webkit-animation: loader-2-3 1.5s cubic-bezier(0.77, 0, 0.175, 1) infinite;
				animation: loader-2-3 1.5s cubic-bezier(0.77, 0, 0.175, 1) infinite;
			}

			&:after {
				content: '';
				display: block;
				.cover-absolute();
				margin: auto;
				height: @size;
				width: @size;
				border: 3px solid rgba(255, 255, 255, 0.5);
				border-radius: 50%;
			}
		}
	}

	@-webkit-keyframes loader-2-2 {
		0% {
			-webkit-transform: rotate(0deg);
		}
		100% {
			-webkit-transform: rotate(360deg);
		}
	}
	@keyframes loader-2-2 {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}

	@-webkit-keyframes loader-2-3 {
		0% {
			-webkit-transform: rotate(0deg);
		}
		100% {
			-webkit-transform: rotate(360deg);
		}
	}
	@keyframes loader-2-3 {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}
</style>