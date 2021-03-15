<template>
	<i :class="classNames"></i>
</template>

<script lang="ts">
	export default {
		name: 'Icon',

		props: {
			name: {
				type: String,
				default: '',
			},
		},

		computed: {
			classNames(): string {
				return ['fas', this.name].join(' ');
			},
		},
	};
</script>
