<template>
	<div ref="container" class="heatmap__layer"></div>
</template>

<script lang="ts">
	import h337 from 'heatmap.js/build/heatmap.js';
	import { HeatmapGradient } from '../_const/types/demo-parser';

	export default {
		name: 'HeatmapLayer',

		props: {
			points: {
				type: Array,
				default: (): [] => [],
			},

			gradient: {
				type: Object,
				default: (): HeatmapGradient => ({
					// enter n keys between 0 and 1 here
					// for gradient color customization
					'.5': 'blue',
					'.8': 'red',
					'.95': 'white',
				}),
			},
		},

		watch: {
			points(): void {
				this.heatmapInstance._store.setData({ data: [] });
				this.heatmapInstance.addData(this.points);
			},
		},

		mounted(): void {
			this.init();
		},

		methods: {
			init(): void {
				this.heatmapInstance = h337.create({
					container: this.$refs.container,
					radius: 10,
					maxOpacity: 0.5,
					minOpacity: 0,
					blur: 0.75,
					gradient: this.gradient,
				});
			},
		},
	};
</script>
