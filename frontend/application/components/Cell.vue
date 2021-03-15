<template>
	<div :class="classNames">
		<slot name="default"></slot>
	</div>
</template>

<script lang="ts">
	export default {
		name: 'Cell',

		props: {
			width: {
				type: String,
				default: '12',
			},
		},

		computed: {
			classNames(): string {
				return ['cell', `cell--${this.width}`].join(' ');
			},
		},
	};
</script>

<style lang="less">
	.cell {
		display: flex;
		flex-direction: column;
		flex-basis: 0;
		flex-grow: 1;
		max-width: 100%;
		padding: 12px;
	}

	.calculateGrid(@columns: 12) {
		.loop(@counter) when (@counter > 0) {
			.loop((@counter - 1));

			.cell--@{counter} {
				@width: (100% / (@columns / @counter));

				flex-basis: ~'@{width}';
				max-width: ~'@{width}';
			}
		}

		.loop(@columns);
	}

	.calculateGrid();
</style>