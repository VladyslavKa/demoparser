<template>
	<div class="input-file">
		<div class="input-file__placeholder">
			<Button class="justify-content-center" block @click="onClickPlaceholder">
				<Icon name="fa-file" />
			</Button>
		</div>

		<input ref="input" v-bind="$attrs" type="file" hidden v-on="$listeners" />
	</div>
</template>

<script lang="ts">
	import Icon from './Icon.vue';
	import Button from './Button.vue';

	export default {
		name: 'InputFile',

		components: { Button, Icon },

		mixins: [],

		data: () => ({}),

		computed: {},

		watch: {},

		methods: {
			onClickPlaceholder(): void {
				this.$refs.input.click();
			},
		},
	};
</script>

<style lang="less" scoped>
	@import './../../assets/styles/var';

	.input-file {
		&__placeholder {
		}
	}
</style>