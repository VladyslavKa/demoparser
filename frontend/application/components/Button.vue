<template>
	<button class="button" :class="classNamesAsObject" v-on="$listeners" @click="onClick">
		<slot name="default"></slot>
	</button>
</template>

<script lang="ts">
	export default {
		name: 'Button',

		props: {
			to: {
				type: String,
				default: null,
			},

			block: {
				type: Boolean,
				default: false,
			},

			isActive: {
				type: Boolean,
				default: false,
			},
		},

		computed: {
			classNamesAsObject(): { [key: string]: boolean } {
				return {
					...this.$attrs.class,
					'button--block': this.block,
					'button--active': this.isActive,
				};
			},
		},

		methods: {
			onClick(): void {
				if (this.to) {
					this.$router.push(this.to);
				}
			},
		},
	};
</script>

<style lang="less" scoped>
	@button-main-color: #202127;
	@button-background-color: @button-main-color;
	@button-border-color: @button-main-color;
	@button-text-color: contrast(@button-main-color);
	@button-height: 30px;
	@button-padding-horz: 1rem;

	.button {
		cursor: pointer;
		position: relative;
		display: inline-flex;
		flex: 0 0 auto;
		align-items: center;
		height: @button-height;
		padding: 0 @button-padding-horz;
		background-color: @button-background-color;
		border: 1px solid @button-border-color;
		color: @button-text-color;

		&:focus,
		&:active,
		&:hover {
			outline: transparent;
		}

		&:hover {
			background-color: darken(@button-background-color, 2%);
		}

		&--block {
			width: 100%;
		}

		&--active {
			border-color: red;
		}
	}
</style>
