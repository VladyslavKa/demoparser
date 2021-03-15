<template>
	<div class="progress-linear">
		<div class="progress-linear__value" :style="{ right: styleRight }"></div>
		<div v-if="text" class="progress-linear__text">{{ text }}</div>
	</div>
</template>

<script lang="ts">
	export default {
		name: 'ProgressLinear',

		props: {
			value: {
				type: Number,
				default: 0,
			},

			text: {
				type: String,
				default: '',
			},
		},

		computed: {
			styleRight(): string {
				return `${100 - this.value}%`;
			},
		},
	};
</script>


<style lang="less" scoped>
	.progress-linear {
		overflow: hidden;
		position: relative;
		background-color: #7a6a6a;
		width: 100%;
		transition: 0.2s cubic-bezier(0.4, 0, 0.6, 1);

		&__value {
			position: absolute;
			top: 0;
			right: -100%;
			bottom: 0;
			left: 0;
			background-color: green;
		}
	}
</style>